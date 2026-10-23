import { describe, it, expect } from 'vitest';
import { byLessonOrder } from './lesson-order';

// Minimal fake entries — byLessonOrder only reads data.level + data.lesson.
const L = (level: number, lesson: string) =>
  ({ data: { level, lesson } } as any);

describe('byLessonOrder', () => {
  it('sorts lessons naturally, not lexically (2 < 12 < 12b < 13)', () => {
    const input = [L(1, '13'), L(1, '2'), L(1, '12b'), L(1, '12')];
    const out = [...input].sort(byLessonOrder).map((e) => e.data.lesson);
    expect(out).toEqual(['2', '12', '12b', '13']);
  });

  it('orders by level first', () => {
    const input = [L(2, '1'), L(1, '9')];
    const out = [...input].sort(byLessonOrder).map((e) => e.data.level);
    expect(out).toEqual([1, 2]);
  });

  it('puts electives after numbered lessons in the same level', () => {
    const input = [L(4, 'e1'), L(4, '2'), L(4, '1')];
    const out = [...input].sort(byLessonOrder).map((e) => e.data.lesson);
    expect(out).toEqual(['1', '2', 'e1']);
  });
});
