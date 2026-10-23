/**
 * Pull the `terms={[ ... ]}` array literal out of a lesson's raw MDX and
 * evaluate it. The MDX is our own trusted build-time content, so a scoped
 * `new Function` is the laziest way to turn the JSX prop (a plain array of
 * `{ term, definition }` object literals) into real data — no MDX AST walk.
 * Returns [] for lessons with no <Glossary>.
 *
 * Kept free of any `astro:content` import so both the data aggregator and the
 * coverage test can import it in a plain Node/vitest context.
 * ponytail: regex-finds `terms={`, then balances brackets — one <Glossary> per
 * lesson (the actual pattern). Add a loop if a lesson ever carries two.
 */
export function extractTerms(raw: string): { term: string; definition: string }[] {
  const start = raw.indexOf('terms={');
  if (start === -1) return [];
  const open = raw.indexOf('[', start);
  if (open === -1) return [];
  let depth = 0;
  let end = -1;
  for (let i = open; i < raw.length; i++) {
    const c = raw[i];
    if (c === '[') depth++;
    else if (c === ']' && --depth === 0) {
      end = i;
      break;
    }
  }
  if (end === -1) return [];
  const literal = raw.slice(open, end + 1);
  // eslint-disable-next-line no-new-func
  const arr = new Function(`return (${literal});`)() as { term: string; definition: string }[];
  return arr.filter((t) => t && t.term && t.definition);
}
