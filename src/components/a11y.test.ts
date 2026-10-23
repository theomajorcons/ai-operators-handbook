import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, it, expect, beforeAll } from 'vitest';
import { JSDOM } from 'jsdom';
import axe from 'axe-core';

// Representative built pages: home + a lesson + a quiz-heavy elective + the
// guided build lab (carries the RunPython widget alongside the quizzes).
const DIST = resolve(__dirname, '../../dist');
const PAGES = [
  'index.html',
  'course-map/index.html',
  'skill-map/index.html',
  'levels/1/index.html',
  'glossary/index.html',
  'where-to-start/index.html',
  'models/index.html',
  'faq/index.html',
  'resources/index.html',
  'lessons/level-1/00-should-ai-do-this/index.html',
  'lessons/level-3/13-claude-code-your-first-safe-session/index.html',
  'lessons/electives/e2-measuring-ais-impact/index.html',
  'lessons/level-4/21b-guided-build-lab/index.html',
  'lessons/level-4/21c-guided-build-lab-part-2/index.html',
];

beforeAll(() => {
  if (!existsSync(resolve(DIST, 'index.html'))) {
    throw new Error('dist/ not found — run `npm run build` before the a11y test.');
  }
});

// Load a page into jsdom WITHOUT running its scripts, so we audit the initial
// server-rendered DOM exactly as a screen reader sees it before interaction.
function loadDom(page: string) {
  const html = readFileSync(resolve(DIST, page), 'utf8');
  return new JSDOM(html, { runScripts: 'outside-only' });
}

// Run axe *inside* the jsdom realm — inject its source, then invoke it against
// that window's document. This gives each page its own axe instance bound to
// its own realm (axe-core is a singleton keyed to one global otherwise).
async function runAxe(dom: JSDOM): Promise<{ violations: { id: string; help: string; nodes: unknown[] }[] }> {
  const { window } = dom;
  window.eval(axe.source);
  // jsdom has no layout engine, so color-contrast (needs computed geometry)
  // is unreliable here — disable it and keep the structural WCAG rules that
  // jsdom evaluates faithfully (names, roles, labels, landmarks, aria).
  return (window as unknown as { axe: typeof axe }).axe.run(window.document, {
    resultTypes: ['violations'],
    rules: { 'color-contrast': { enabled: false } },
  });
}

// Both themes audited structurally. color-contrast stays disabled (jsdom has
// no layout engine); the light/dark palettes were verified AA by hand against
// the ratios annotated in global.css (body/small ≥4.5:1, accent ≥4.5:1).
const THEMES = ['dark', 'light'] as const;

describe('accessibility — WCAG via axe-core (jsdom)', () => {
  for (const page of PAGES) {
    for (const theme of THEMES) {
      it(`${page} [${theme}] has no axe violations`, async () => {
        const dom = loadDom(page);
        dom.window.document.documentElement.dataset.theme = theme;
        const { violations } = await runAxe(dom);
        const summary = violations.map((v) => `${v.id}: ${v.help} (${v.nodes.length})`);
        expect(summary, summary.join('\n')).toEqual([]);
      });
    }
  }
});

describe('answer-leak regression — correct answer absent from initial DOM', () => {
  // Quiz pages only — the home + course-map overviews carry no quizzes.
  for (const page of PAGES.filter((p) => p.startsWith('lessons/'))) {
    it(`${page} does not encode the correct answer in the accessibility tree`, () => {
      const { window } = loadDom(page);
      const doc = window.document;

      // 1. No element advertises correctness via a data attribute.
      expect(doc.querySelectorAll('[data-correct]').length, 'data-correct attr').toBe(0);
      expect(doc.querySelectorAll('[data-answer]').length, 'data-answer attr').toBe(0);

      // 2. No accessible name (aria-label / text) marks an option "correct".
      for (const el of doc.querySelectorAll('[aria-label]')) {
        expect(
          /correct/i.test(el.getAttribute('aria-label') || ''),
          `aria-label leaks answer: ${el.getAttribute('aria-label')}`,
        ).toBe(false);
      }

      // 3. TrueFalse "Answer: …" line is not server-rendered (JS writes it on
      //    a correct pick). The placeholder exists but must be empty.
      for (const ans of doc.querySelectorAll('[data-tf-answer]')) {
        expect(ans.textContent?.trim(), 'tf answer line rendered').toBe('');
      }

      // 4. TrueFalse explanation ships hidden (not announced pre-interaction).
      for (const why of doc.querySelectorAll('[data-tf-why]')) {
        expect(why.hasAttribute('hidden'), 'tf why not hidden').toBe(true);
      }

      // Sanity: the quizzes are actually present on this page.
      expect(doc.querySelectorAll('[data-kc],[data-tf],[data-match]').length)
        .toBeGreaterThan(0);
    });
  }
});
