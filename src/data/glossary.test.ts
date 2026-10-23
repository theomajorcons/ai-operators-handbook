import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { extractTerms } from './glossary-parse';

// Coverage oracle: grep the lesson tree for <Glossary>, then assert the shared
// extractor (the same function the data aggregator uses) pulls terms out of
// EVERY such lesson. Catches drift — a new lesson's glossary the parser can't
// read (e.g. a formatting change that breaks the bracket balance) would show up
// here as a lesson with <Glossary> but zero extracted terms.
const LESSONS = join(__dirname, '../content/lessons');

function mdxFiles(dir: string): string[] {
  const out: string[] = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...mdxFiles(p));
    else if (e.name.endsWith('.mdx')) out.push(p);
  }
  return out;
}

const lessonsWithGlossaryTag = mdxFiles(LESSONS)
  .map((p) => ({ p, raw: readFileSync(p, 'utf8') }))
  .filter(({ raw }) => raw.includes('<Glossary'));

describe('glossary aggregation coverage', () => {
  it('finds at least one <Glossary> lesson (sanity)', () => {
    expect(lessonsWithGlossaryTag.length).toBeGreaterThan(0);
  });

  it('extracts terms from every lesson that has a <Glossary>', () => {
    const empty = lessonsWithGlossaryTag
      .filter(({ raw }) => extractTerms(raw).length === 0)
      .map(({ p }) => p.slice(LESSONS.length + 1).replace(/\\/g, '/'));
    expect(empty, `lessons with <Glossary> but no extracted terms: ${empty.join(', ')}`).toEqual([]);
  });

  it('every extracted term has a non-empty term and definition', () => {
    for (const { raw } of lessonsWithGlossaryTag) {
      for (const t of extractTerms(raw)) {
        expect(t.term.trim()).not.toBe('');
        expect(t.definition.trim()).not.toBe('');
      }
    }
  });
});
