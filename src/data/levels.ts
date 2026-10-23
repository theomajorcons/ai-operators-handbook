/**
 * Per-level copy for the home page and level-overview pages: a one-line
 * description plus a short "what you can do after this level" list.
 *
 * This module is intentionally thin. Lesson counts, lesson lists, and ordering
 * are NOT hard-coded here — consuming pages compute those from `getCollection`
 * (see src/lib/lesson-order.ts). This file holds only prose that rarely drifts:
 * description + outcomes, keyed by level.
 *
 * `track` mirrors each level's lesson `track` frontmatter, so a consuming page
 * can match a collection entry to its level copy. Electives share level 5.
 */

export interface LevelInfo {
  /** Numeric level, matching lesson frontmatter `level`. Electives = 5. */
  level: number;
  /** Mirrors the lesson `track` frontmatter for this level. */
  track: string;
  /** Short human label for the level (e.g. "Level 1"). */
  label: string;
  /** One sentence: what this level covers, for the learner. */
  description: string;
  /** 3–5 concrete "after this level you can…" outcomes. */
  outcomes: string[];
}

/** Levels in learning order. Electives (level 5) come last. */
export const levels: readonly LevelInfo[] = [
  {
    level: 1,
    track: 'Knowing your Claude',
    label: 'Level 1',
    description:
      'The groundwork for using Claude well in a plain chat window: when AI is the right call, which model to reach for, and how to ask so you get a usable answer the first time.',
    outcomes: [
      'Decide in under a minute whether a task should go to Claude at all, and name the check that would stop you.',
      'Pick a model tier and effort level for a task in seconds, and spot the signal that means you should step up.',
      'Explain why a long chat spends your allowance faster, and restart one with a focused handoff that keeps your progress.',
      'Tell what Claude can and cannot see in a chat, and give it exactly the context a task needs.',
      'Turn a vague request into a spec that describes the finished result, so the first answer is the usable one.',
    ],
  },
  {
    level: 2,
    track: 'Working with Claude',
    label: 'Level 2',
    description:
      'Everyday working habits in the chat app: feeding Claude documents, standing up Projects and memory, shaping outputs, researching with current sources, wiring in connectors, and fixing bad answers.',
    outcomes: [
      'Share a document or image safely and ask questions that are answered from it, not from a vague skim.',
      'Set up a Project (with files and instructions) so Claude starts every chat already knowing your background and rules.',
      'Tell memory apart from standing instructions, and decide which a fact belongs in, or whether Claude should hold it at all.',
      'Ask for the right shape of output (reply, table, document, or page) and reshape one result for a new audience.',
      'Research a question with current sources you can judge, and connect an app with only the access it needs.',
      'Diagnose why an answer went wrong and fix the cause instead of retrying the same prompt.',
    ],
  },
  {
    level: 3,
    track: 'Building with Claude',
    label: 'Level 3',
    description:
      'Stepping out of the chat box into Claude Code: the terminal and Git, safe first sessions, the filesystem as context, tools and untrusted input, reusable skills, and testing a workflow before you trust it.',
    outcomes: [
      'Open a terminal, move around safely, and use Git to undo a mistake.',
      'Launch Claude Code in a practice project, read its proposed changes, and undo them.',
      'Organize files so Claude can find what it needs without you pasting anything.',
      'Use tools for exact work, keep tool access small, and treat anything Claude reads from the outside as untrusted.',
      'Write and place a reusable skill file, and build a small eval that catches failures before real work does.',
    ],
  },
  {
    level: 4,
    track: 'Running Claude as a system',
    label: 'Level 4',
    description:
      'Running Claude as a dependable system: planning and human gates, delegating to subagents, a second-brain vault, safe automation, and a guided build-and-defend lab that puts your hands on every control.',
    outcomes: [
      'Break a big job into steps and decide where a person must approve before Claude continues.',
      'Split work across helper agents, and judge when splitting is worth the cost.',
      'Keep linked notes in a vault so Claude, or anyone, can find what they need.',
      'Design an automation with a threat model, least privilege, logs, a working stop, and a recovery plan, and say why each exists.',
      'Build a small workflow end to end and prove with saved evidence that it works and fails safely under a hostile input or broken step.',
    ],
  },
  {
    level: 5,
    track: 'Electives',
    label: 'Electives',
    description:
      'Optional deep dives for specific jobs: sourced research-and-publishing workflows, honestly measuring whether AI pays off, and rolling AI out to a team.',
    outcomes: [
      'Run a research-and-publishing workflow where every material claim traces to a source you vetted, with a human review before it goes live.',
      'Show honestly whether an AI workflow saves time or money (counting review and cleanup) and compute its payback period.',
      'Introduce AI to a team with a small pilot, weekly feedback, data rules, and a pre-set date to expand, adjust, or stop.',
      'Put Claude to work on a spreadsheet by giving it column meanings and sample rows, checking every formula and number, and keeping sensitive data out.',
      'Let Claude act in a browser or desktop app safely by gating risky actions for a human, granting least access, and keeping a log you can check.',
    ],
  },
];

/** Look up level copy by numeric level (electives = 5). */
export function getLevelInfo(level: number): LevelInfo | undefined {
  return levels.find((l) => l.level === level);
}
