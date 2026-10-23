import { describe, it, expect, beforeAll } from 'vitest';
import { execSync } from 'node:child_process';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import baseLinksPlugin from './rehype-base-links.mjs';

const BASE = '/ai-operators-handbook';

// --- Unit: the prefix logic the plugin applies. Fast, no build. ---
// Drive the plugin's visitor like Sätteri does to isolate the rewrite rule.
function rewrite(tag: string, attr: string, url: string): string {
  const plugin = baseLinksPlugin({ base: BASE }) as any;
  const node = { tagName: tag, properties: { [attr]: url } };
  const ctx = { setProperty: (n: any, k: string, v: unknown) => (n.properties[k] = v) };
  plugin.element.visit(node, ctx);
  return node.properties[attr];
}

describe('base-links rewrite rule', () => {
  it('prefixes root-relative internal links', () => {
    expect(rewrite('a', 'href', '/lessons/level-4/21-automation-and-safety/')).toBe(
      `${BASE}/lessons/level-4/21-automation-and-safety/`,
    );
    expect(rewrite('a', 'href', '/artifacts/eval-sheet.md')).toBe(`${BASE}/artifacts/eval-sheet.md`);
    expect(rewrite('img', 'src', '/img/x.png')).toBe(`${BASE}/img/x.png`);
  });

  it('leaves external, anchor, and already-based links alone', () => {
    for (const url of [
      'https://example.com/x',
      'mailto:a@b.com',
      '//cdn.example.com/x',
      '#section',
      `${BASE}/lessons/x/`,
    ]) {
      expect(rewrite('a', 'href', url)).toBe(url);
    }
  });
});

// --- Regression: no bare internal link survives in the built site. ---
// This is the hole we're plugging: inline MDX links rendered without base.
const DIST = 'dist';

describe('built HTML has no base-less internal links', () => {
  beforeAll(() => {
    if (!existsSync(DIST)) {
      execSync('npm run build', { stdio: 'inherit' });
    }
  }, 180_000);

  it('no href/src points at bare /lessons or /artifacts', () => {
    const html = readdirSync(DIST, { recursive: true })
      .map(String)
      .filter((f) => f.endsWith('.html'));

    // Matches href="/lessons..." but NOT href="/ai-operators-handbook/lessons...".
    const bareRe = /(?:href|src)="\/(?:lessons|artifacts)\//g;
    const offenders: string[] = [];
    for (const f of html) {
      const text = readFileSync(join(DIST, f), 'utf8');
      if (bareRe.test(text)) offenders.push(f);
      bareRe.lastIndex = 0;
    }
    expect(offenders, `base-less internal links in: ${offenders.join(', ')}`).toEqual([]);
  });
});
