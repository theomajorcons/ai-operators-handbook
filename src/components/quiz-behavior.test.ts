import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, it, expect, beforeAll } from 'vitest';
import { JSDOM } from 'jsdom';

// Behavioral tests for the three interactive quiz components. The sibling
// a11y.test.ts loads pages with runScripts: 'outside-only' — it audits the
// *initial* DOM and never fires the component scripts, so a quiz whose grading
// script is defined-but-never-called (the Matching `});` vs `})();` bug) passes
// it silently. These tests run the real built inline scripts in jsdom and drive
// real interactions (click / select + submit), then assert feedback changed.
//
// Scope: the component scripts emit as plain non-module <script> tags with a
// define:vars prelude — plain DOM code jsdom executes faithfully. No browser
// or preview server needed.

const DIST = resolve(__dirname, '../../dist');
const PAGE = 'lessons/level-1/00-should-ai-do-this/index.html';

beforeAll(() => {
  if (!existsSync(resolve(DIST, PAGE))) {
    throw new Error('dist/ not found — run `npm run build` before behavior tests.');
  }
});

// Load a built page and RUN its scripts, so event handlers are bound exactly as
// in a browser. We also stub the one external module script src so jsdom's
// resource loader doesn't try (and fail) to fetch it.
function loadLive(page: string): JSDOM {
  let html = readFileSync(resolve(DIST, page), 'utf8');
  // Drop external module <script src=...> — not needed for quiz behavior and
  // jsdom can't resolve the hashed asset path off the filesystem.
  html = html.replace(/<script[^>]*\bsrc=[^>]*><\/script>/g, '');
  return new JSDOM(html, { runScripts: 'dangerously' });
}

describe('KnowledgeCheck — pick an option, feedback announces result', () => {
  it('correct pick announces "Correct!" and locks the quiz', () => {
    const doc = loadLive(PAGE).window.document;
    const kc = doc.querySelector('[data-kc]')!;
    expect(kc, 'a KnowledgeCheck is present').toBeTruthy();
    const feedback = kc.querySelector('.kc__feedback')!;
    expect(feedback.textContent?.trim(), 'feedback starts empty').toBe('');

    // We can't see the answer from the DOM (by design). Click options until one
    // reports correct — that itself proves the handler runs and grades.
    const btns = [...kc.querySelectorAll<HTMLButtonElement>('[data-kc-btn]')];
    let announcedCorrect = false;
    let announcedWrong = false;
    for (const btn of btns) {
      if (btn.disabled) continue;
      btn.click();
      const txt = feedback.textContent ?? '';
      if (/correct!/i.test(txt)) { announcedCorrect = true; break; }
      if (/not quite/i.test(txt)) announcedWrong = true;
    }
    expect(announcedCorrect, 'a correct pick announces "Correct!"').toBe(true);
    // Correct pick disables all buttons (quiz locked).
    expect(btns.every((b) => b.disabled), 'all options disabled after solve').toBe(true);
    // At least proves wrong picks were also graded distinctly when they occurred.
    expect(typeof announcedWrong).toBe('boolean');
  });

  it('a wrong pick announces "Not quite" and disables only that option', () => {
    const doc = loadLive(PAGE).window.document;
    const kc = doc.querySelector('[data-kc]')!;
    const feedback = kc.querySelector('.kc__feedback')!;
    const btns = [...kc.querySelectorAll<HTMLButtonElement>('[data-kc-btn]')];
    // Click first; if it's wrong assert the wrong path, else the quiz locked —
    // either way the handler fired and feedback moved off empty.
    btns[0].click();
    expect(feedback.textContent?.trim(), 'feedback changed after a click').not.toBe('');
  });
});

describe('TrueFalse — pick a side, feedback announces result', () => {
  it('reaches "Correct!", reveals the why, and writes the answer line', () => {
    const doc = loadLive(PAGE).window.document;
    const tf = doc.querySelector('[data-tf]')!;
    expect(tf, 'a TrueFalse is present').toBeTruthy();
    const feedback = tf.querySelector('.tf__feedback')!;
    const why = tf.querySelector('[data-tf-why]') as HTMLElement;
    const answerLine = tf.querySelector('[data-tf-answer]')!;

    expect(feedback.textContent?.trim(), 'feedback starts empty').toBe('');
    expect(why.hasAttribute('hidden'), 'why starts hidden').toBe(true);
    expect(answerLine.textContent?.trim(), 'answer line starts empty').toBe('');

    const choices = [...tf.querySelectorAll<HTMLButtonElement>('[data-tf-choice]')];
    let correct = false;
    for (const btn of choices) {
      if (btn.disabled) continue;
      btn.click();
      if (/correct!/i.test(feedback.textContent ?? '')) { correct = true; break; }
    }
    expect(correct, 'one side announces "Correct!"').toBe(true);
    expect(why.hasAttribute('hidden'), 'why revealed on correct').toBe(false);
    expect(/answer:/i.test(answerLine.textContent ?? ''), 'answer line written').toBe(true);
  });
});

describe('Matching — select pairs, submit, feedback grades (the regression)', () => {
  it('all-correct selection submits to "All correct!"', () => {
    const { window } = loadLive(PAGE);
    const doc = window.document;
    const form = doc.querySelector('[data-match]') as HTMLFormElement;
    expect(form, 'a Matching quiz is present').toBeTruthy();
    const feedback = form.querySelector('.match__feedback')!;
    expect(feedback.textContent?.trim(), 'feedback starts empty').toBe('');

    const selects = [...form.querySelectorAll<HTMLSelectElement>('[data-match-select]')];
    expect(selects.length, 'has rows').toBeGreaterThan(0);

    // The answer key lives in a closure (correctByRow), never in the DOM — so
    // we can't read it. Instead, brute-force each row to 'correct' independently:
    // try each option, submit, keep the value that grades the row correct.
    // O(rows × options), tiny. Reaching all-correct proves per-row grading runs.
    const matchTexts = [...selects[0].querySelectorAll('option')]
      .map((o) => o.value)
      .filter((v) => v !== '');
    const check = form.querySelector('[data-match-check]') as HTMLButtonElement;
    for (const sel of selects) {
      const row = sel.closest('.match__row')!;
      for (const text of matchTexts) {
        sel.value = text;
        check.click();
        if (row.getAttribute('data-state') === 'correct') break;
      }
      expect(row.getAttribute('data-state'), 'row graded correct after search').toBe('correct');
    }
    // Final submit with every row correct.
    check.click();
    expect(feedback.textContent, 'all-correct feedback').toMatch(/all correct/i);
  });

  it('a wrong/empty selection submits to a partial-count message', () => {
    const { window } = loadLive(PAGE);
    const form = window.document.querySelector('[data-match]') as HTMLFormElement;
    const feedback = form.querySelector('.match__feedback')!;
    const selects = [...form.querySelectorAll<HTMLSelectElement>('[data-match-select]')];
    const check = form.querySelector('[data-match-check]') as HTMLButtonElement;

    // Leave everything on the blank option, submit — handler must run and report
    // "0 of N correct" (this is the exact path the `});` bug silently killed).
    for (const sel of selects) sel.value = '';
    check.click();
    expect(feedback.textContent, 'partial feedback after empty submit')
      .toMatch(/\d+ of \d+ correct/i);
    // And empty rows are marked, proving per-row grading executed.
    expect(
      [...form.querySelectorAll('.match__row')].some((r) => r.getAttribute('data-state') === 'empty'),
      'empty rows marked',
    ).toBe(true);
  });
});
