import { getCollection } from 'astro:content';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { byLessonOrder } from '../lib/lesson-order';
import { extractTerms } from './glossary-parse';

/** One glossary term, tagged with the lesson it was defined in. */
export interface GlossaryEntry {
  term: string;
  definition: string;
  lessonId: string;
  lessonTitle: string;
  level: number;
  track: string;
  levelKey: string; // "level-1" | "electives" — the filter/group key
}

/** A term that appears in several lessons, merged with all its sources. */
export interface MergedTerm {
  term: string;
  definition: string; // first-seen definition (lesson order)
  sources: Pick<GlossaryEntry, 'lessonId' | 'lessonTitle' | 'levelKey'>[];
}

// Resolved from the project root (cwd during build) — src/ isn't adjacent to
// this module once Astro bundles it.
const lessonsDir = join(process.cwd(), 'src', 'content', 'lessons');

/** Flat list of every term across every lesson, in lesson order. */
export async function allGlossaryEntries(): Promise<GlossaryEntry[]> {
  const lessons = (await getCollection('lessons')).sort(byLessonOrder);
  const out: GlossaryEntry[] = [];
  for (const l of lessons) {
    const path = join(lessonsDir, `${l.id}.mdx`);
    let raw: string;
    try {
      raw = readFileSync(path, 'utf8');
    } catch {
      continue; // .md (non-mdx) lessons, if any, carry no <Glossary>
    }
    const levelKey = l.data.track === 'Electives' ? 'electives' : `level-${l.data.level}`;
    for (const t of extractTerms(raw)) {
      out.push({
        term: t.term,
        definition: t.definition,
        lessonId: l.id,
        lessonTitle: l.data.title,
        level: l.data.level,
        track: l.data.track,
        levelKey,
      });
    }
  }
  return out;
}

/** Lesson ids that actually carry a <Glossary> block — the coverage oracle. */
export async function lessonsWithGlossary(): Promise<string[]> {
  const entries = await allGlossaryEntries();
  return [...new Set(entries.map((e) => e.lessonId))];
}

/**
 * Merge duplicate terms (same term string, case-insensitive) into one row that
 * lists every lesson it came from. Keeps the first definition seen.
 */
export function mergeTerms(entries: GlossaryEntry[]): MergedTerm[] {
  const byKey = new Map<string, MergedTerm>();
  for (const e of entries) {
    const key = e.term.toLowerCase();
    const existing = byKey.get(key);
    const source = { lessonId: e.lessonId, lessonTitle: e.lessonTitle, levelKey: e.levelKey };
    if (existing) {
      if (!existing.sources.some((s) => s.lessonId === e.lessonId)) existing.sources.push(source);
    } else {
      byKey.set(key, { term: e.term, definition: e.definition, sources: [source] });
    }
  }
  return [...byKey.values()];
}
