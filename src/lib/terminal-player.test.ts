import { describe, it, expect } from 'vitest';
import { TerminalPlayer } from './terminal-player';
const frames = [
  { kind: 'prompt', text: 'add a dark mode toggle' },
  { kind: 'tool', text: 'Edit src/theme.ts' },
  { kind: 'output', text: 'done' },
] as const;

describe('TerminalPlayer', () => {
  it('starts empty', () => { const p = new TerminalPlayer([...frames]); expect(p.visible()).toEqual([]); expect(p.atEnd()).toBe(false); });
  it('steps one frame at a time', () => {
    const p = new TerminalPlayer([...frames]);
    expect(p.step()?.text).toBe('add a dark mode toggle');
    expect(p.visible().length).toBe(1);
  });
  it('reaches the end and stops', () => {
    const p = new TerminalPlayer([...frames]);
    p.step(); p.step(); p.step();
    expect(p.atEnd()).toBe(true);
    expect(p.step()).toBeNull();
  });
  it('resets', () => { const p = new TerminalPlayer([...frames]); p.step(); p.reset(); expect(p.visible()).toEqual([]); });
});
