/**
 * Prefix a path with the Astro BASE_URL, collapsing duplicate slashes.
 * The `base` parameter defaults to import.meta.env.BASE_URL so callers
 * don't need to pass it; tests pass it explicitly for pure-function testing.
 */
export function withBase(path: string, base: string = import.meta.env.BASE_URL): string {
  const b = base.replace(/\/$/, '');
  return `${b}/${path.replace(/^\//, '')}`.replace(/\/{2,}/g, '/').replace(':/', '://');
}
