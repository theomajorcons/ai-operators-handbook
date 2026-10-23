import { describe, it, expect } from 'vitest';
import { withBase } from './base';

const BASE = '/ai-operators-handbook/';

describe('withBase', () => {
  it('prefixes the base path', () =>
    expect(withBase('/lessons/a', BASE)).toBe('/ai-operators-handbook/lessons/a'));
  it('handles missing leading slash', () =>
    expect(withBase('lessons/a', BASE)).toBe('/ai-operators-handbook/lessons/a'));
  it('collapses double slashes', () =>
    expect(withBase('//x', BASE)).toBe('/ai-operators-handbook/x'));
});
