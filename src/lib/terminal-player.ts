/**
 * Pure state machine for the simulated terminal — no DOM, no timers.
 * A cursor over an ordered list of frames; the client script drives the
 * timing and rendering, this only tracks "how many frames are revealed".
 */
export type FrameKind = 'prompt' | 'tool' | 'output';
export interface Frame {
  kind: FrameKind;
  text: string;
}

export class TerminalPlayer {
  index = 0;

  constructor(private readonly frames: Frame[]) {}

  /** Advance one frame; returns the newly-revealed frame, or null at the end. */
  step(): Frame | null {
    if (this.index >= this.frames.length) return null;
    return this.frames[this.index++];
  }

  reset(): void {
    this.index = 0;
  }

  /** Frames revealed so far. */
  visible(): Frame[] {
    return this.frames.slice(0, this.index);
  }

  atEnd(): boolean {
    return this.index >= this.frames.length;
  }
}
