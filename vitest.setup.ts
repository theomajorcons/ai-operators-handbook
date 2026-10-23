// In-memory localStorage stub so progress.test.ts runs under the node env
// without a DOM. Deliberately a plain global (not a jsdom realm) so the
// "storage unavailable" test can `delete globalThis.localStorage` and have the
// module's globalThis read see it gone. base.test.ts ignores this.
class MemStorage implements Storage {
  private m = new Map<string, string>();
  get length() { return this.m.size; }
  clear() { this.m.clear(); }
  getItem(k: string) { return this.m.has(k) ? this.m.get(k)! : null; }
  key(i: number) { return [...this.m.keys()][i] ?? null; }
  removeItem(k: string) { this.m.delete(k); }
  setItem(k: string, v: string) { this.m.set(k, String(v)); }
}

globalThis.localStorage = new MemStorage();
