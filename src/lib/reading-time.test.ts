import { describe, it, expect } from 'vitest';
import { readingTimeMinutes } from './reading-time';

describe('readingTimeMinutes', () => {
  it('floors at 1 minute for short/empty bodies', () => {
    expect(readingTimeMinutes('')).toBe(1);
    expect(readingTimeMinutes('a few words here')).toBe(1);
  });

  it('rounds up by ~200 wpm', () => {
    const words = Array(401).fill('word').join(' '); // 401/200 -> ceil = 3
    expect(readingTimeMinutes(words)).toBe(3);
  });

  it('ignores imports, code fences, and JSX tags, but counts inline code', () => {
    const body = [
      "import Foo from '../Foo.astro';",
      '```bash',
      Array(500).fill('ignored').join(' '),
      '```',
      '<Callout label="x">',
      Array(200).fill('real').join(' '),
      '</Callout>',
      '`' + Array(100).fill('inline').join(' ') + '`',
    ].join('\n');
    // 200 "real" prose words + 100 inline-code words = 300 -> ceil(300/200) = 2.
    // Inline code counts because in syntax lessons the examples are the content.
    expect(readingTimeMinutes(body)).toBe(2);
  });
});
