import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Guards internal cross-lesson links: every `](/lessons/<id>/)` in a lesson
// must point at a real lesson file, so a rename or typo fails the build.
const LESSONS_DIR = 'src/content/lessons';

const mdxFiles = readdirSync(LESSONS_DIR, { recursive: true })
  .map(String)
  .filter((f) => f.endsWith('.mdx'));

// A lesson's URL is /lessons/<id>/ where id is its path under the lessons dir
// without the .mdx extension (see src/pages/lessons/[...slug].astro).
const validIds = new Set(
  mdxFiles.map((f) => f.replace(/\\/g, '/').replace(/\.mdx$/, '')),
);

const linkRe = /\]\(\/lessons\/([^)]+?)\/?\)/g;

describe('internal lesson links resolve', () => {
  for (const file of mdxFiles) {
    const text = readFileSync(join(LESSONS_DIR, file), 'utf8');
    const targets = [...text.matchAll(linkRe)].map((m) => m[1]);
    if (targets.length === 0) continue;
    it(`${file.replace(/\\/g, '/')} cross-links point to real lessons`, () => {
      for (const target of targets) {
        expect(
          validIds.has(target),
          `${file} links to /lessons/${target}/ but no lesson has that id`,
        ).toBe(true);
      }
    });
  }
});
