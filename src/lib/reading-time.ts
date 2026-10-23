// Script-computed reading time from a lesson's raw MDX body. Astro 7's default
// Markdown processor (Sätteri) doesn't run unified remark plugins for MDX, so
// instead of a remark plugin we count words on the raw source here, stripping
// the structural noise that shouldn't count as prose: import lines, code
// fences, JSX/HTML tags, and Markdown punctuation. Inline code is KEPT (only the
// backticks are dropped) because in syntax-heavy lessons like Markdown the inline
// examples (`**bold**`, `# heading`) are the content, not noise, and stripping
// them undercounted those lessons. Words / 200 wpm, rounded up, floor 1.
//
// ponytail: regex scrub, not an AST parse — over/undercounts a few words around
// JSX attributes, which is well within the ±1min tolerance of a reading pill.
const WPM = 200;

export function readingTimeMinutes(body: string): number {
  const prose = body
    .replace(/^import\s.+$/gm, '') // MDX import lines
    .replace(/```[\s\S]*?```/g, '') // fenced code blocks
    .replace(/`/g, " ") // inline code
    .replace(/<[^>]+>/g, '') // JSX/HTML tags
    .replace(/[#*_>\-|=\[\]()]/g, ' '); // Markdown punctuation
  const words = prose.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WPM));
}
