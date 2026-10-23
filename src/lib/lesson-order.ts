import type { CollectionEntry } from 'astro:content';

/**
 * Natural sort key for a lesson's `lesson` field (a string like "2", "12",
 * "12b", "e1"). Returns [numericPrefix, suffix] so "2" < "12" < "12b" < "13"
 * and a plain-string lexical sort never puts "10" before "2".
 *
 * Electives (lesson id starting non-digit, e.g. "e1") have no numeric prefix;
 * they sort after numbered lessons within their level. Levels still sort first,
 * so if electives carry a level above the numbered levels they land last.
 */
function lessonKey(lesson: string): [number, string] {
  const m = lesson.match(/^(\d+)(.*)$/);
  return m ? [Number(m[1]), m[2]] : [Infinity, lesson];
}

/** Compare two lessons: level ascending, then natural lesson order. */
export function byLessonOrder(
  a: CollectionEntry<'lessons'>,
  b: CollectionEntry<'lessons'>
): number {
  if (a.data.level !== b.data.level) return a.data.level - b.data.level;
  const [an, as] = lessonKey(a.data.lesson);
  const [bn, bs] = lessonKey(b.data.lesson);
  return an - bn || as.localeCompare(bs);
}
