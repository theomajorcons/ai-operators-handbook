import type { CollectionEntry } from 'astro:content';
import { byLessonOrder } from './lesson-order';

/**
 * Computed display numbers for the main course.
 *
 * Display numbers are NOT read from frontmatter. We sort every non-elective
 * lesson by `byLessonOrder` (level, then natural lesson order) and assign a
 * 1-based global integer by position: the course reads 1..N in one continuous
 * run regardless of the `lesson` string on disk (e.g. "0", "4b", "12.5 Bridge").
 * Electives (track "Electives") are excluded from the count and keep their own
 * "Elective n" label.
 *
 * Returns a Map keyed by lesson id → its display number (electives absent).
 */
export function lessonNumbers(
  lessons: CollectionEntry<'lessons'>[],
): Map<string, number> {
  const main = lessons
    .filter((l) => l.data.track !== 'Electives')
    .sort(byLessonOrder);
  return new Map(main.map((l, i) => [l.id, i + 1]));
}

/** 1-based display number of a single elective within the elective track. */
export function electiveNumber(
  lesson: CollectionEntry<'lessons'>,
  lessons: CollectionEntry<'lessons'>[],
): number {
  const electives = lessons
    .filter((l) => l.data.track === 'Electives')
    .sort(byLessonOrder);
  return electives.findIndex((l) => l.id === lesson.id) + 1;
}

/**
 * Bridge/Lab badge for the lettered interstitial lessons. 12b is a Bridge,
 * 21b/21c are Labs. The badge replaces the old letter suffix (which no longer
 * shows, since the display number is now a plain integer); it is never the only
 * cue — the number and title sit right beside it. Driven by the raw `lesson`
 * string so it stays data-correct if letters move.
 */
export function lessonBadge(
  lesson: CollectionEntry<'lessons'>,
): 'Bridge' | 'Lab' | null {
  // Keyed off slug/lesson text, not the letter alone — "4b" is a normal lesson,
  // only the bridge and the guided-build labs carry a badge.
  if (/bridge/i.test(lesson.data.lesson) || /bridge/i.test(lesson.id)) return 'Bridge';
  if (/-lab\b|guided-build-lab/i.test(lesson.id)) return 'Lab';
  return null;
}

/**
 * Display label for any lesson: the global number for main-course lessons,
 * or "Elective n" for electives. Used by every face that prints a lesson's
 * number instead of its raw `lesson` string.
 */
export function displayNumber(
  lesson: CollectionEntry<'lessons'>,
  nums: Map<string, number>,
  lessons: CollectionEntry<'lessons'>[],
): string {
  if (lesson.data.track === 'Electives') {
    return `Elective ${electiveNumber(lesson, lessons)}`;
  }
  return String(nums.get(lesson.id) ?? lesson.data.lesson);
}
