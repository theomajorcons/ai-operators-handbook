/**
 * Sätteri hast plugin: prefix root-relative internal links/assets with Astro's
 * `base` so MDX inline markdown links (`[x](/lessons/...)`, `[x](/artifacts/...)`)
 * don't 404 when deployed under a subpath.
 *
 * Component links already go through withBase (src/lib/base.ts); this handles
 * the inline markdown links the MD/MDX pipeline emits as raw <a href="/...">.
 *
 * Only rewrites root-relative URLs that don't already start with base. Leaves
 * external (http(s):, mailto:, //), pure-anchor (#...), and already-based URLs.
 */
const SKIP = /^(https?:|mailto:|tel:|\/\/|#|data:)/;

const ATTR = { a: 'href', area: 'href', img: 'src', source: 'src' };

export default function baseLinksPlugin({ base = '/' } = {}) {
  const b = base.replace(/\/$/, ''); // '/ai-operators-handbook' or ''
  const prefix = (url) => {
    if (typeof url !== 'string' || !url.startsWith('/') || SKIP.test(url)) return url;
    if (b && (url === b || url.startsWith(b + '/'))) return url; // already based
    return `${b}${url}`;
  };

  return {
    name: 'base-links',
    element: {
      filter: Object.keys(ATTR),
      visit(node, ctx) {
        const attr = ATTR[node.tagName];
        const val = node.properties?.[attr];
        const next = prefix(val);
        if (next !== val) ctx.setProperty(node, attr, next);
      },
    },
  };
}
