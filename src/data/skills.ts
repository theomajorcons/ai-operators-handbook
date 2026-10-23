/**
 * Skills, distilled per level from each lesson's objective/rule, in the
 * handbook's own words. Each skill maps to the lesson id(s) that teach it, so
 * the Skill Map (src/pages/skill-map.astro) can draw level → skill → lesson
 * edges and link each lesson node to its page.
 *
 * Lesson ids are the content-collection ids (folder/slug), e.g.
 * "level-1/00-should-ai-do-this" — the same value Astro uses for the
 * `/lessons/<id>` route. Keep these in sync with src/content/lessons; a bad id
 * is caught by the build-time guard in skill-map.astro.
 */

export interface Skill {
  /** Short skill name — a capability, in the handbook's phrasing. */
  name: string;
  /** Lesson ids that teach this skill (collection ids). */
  lessons: string[];
}

export interface LevelSkills {
  /** Numeric level, matching lesson frontmatter `level`. Electives = 5. */
  level: number;
  skills: Skill[];
}

/** Skills by level, in learning order. Electives (level 5) last. */
export const skillsByLevel: readonly LevelSkills[] = [
  {
    level: 1,
    skills: [
      { name: 'Judge whether AI should do a task', lessons: ['level-1/00-should-ai-do-this'] },
      { name: 'Pick a model tier and effort level', lessons: ['level-1/01-pick-the-right-model'] },
      { name: 'Keep a chat from burning your limit', lessons: ['level-1/02-why-you-hit-your-limit'] },
      { name: 'Give Claude the context a task needs', lessons: ['level-1/03-give-claude-the-right-context'] },
      { name: 'Write a prompt like a spec', lessons: ['level-1/04-write-a-prompt-like-a-spec'] },
      { name: "Check Claude's answer before you act on it", lessons: ['level-1/04b-check-the-answer'] },
    ],
  },
  {
    level: 2,
    skills: [
      { name: 'Share documents and images safely', lessons: ['level-2/05-give-claude-things-to-read'] },
      { name: 'Stand up Projects, files, and memory', lessons: ['level-2/06-projects-files-and-instructions', 'level-2/08-memory-and-standing-instructions'] },
      { name: 'Shape the output you ask for', lessons: ['level-2/07-markdown-and-the-md-file-family', 'level-2/09-outputs-documents-tables-and-pages'] },
      { name: 'Research with sources and connectors', lessons: ['level-2/10-research-and-web-search', 'level-2/11-connectors-in-regular-chat'] },
      { name: 'Fix the cause of a bad answer', lessons: ['level-2/12-when-things-go-wrong'] },
    ],
  },
  {
    level: 3,
    skills: [
      { name: 'Move around the terminal and undo with Git', lessons: ['level-3/12b-bridge-terminal-paths-and-git'] },
      { name: 'Run a safe first Claude Code session', lessons: ['level-3/13-claude-code-your-first-safe-session'] },
      { name: 'Use the filesystem as context', lessons: ['level-3/14-filesystem-as-context'] },
      { name: 'Keep tool access small, treat input as untrusted', lessons: ['level-3/15-tools-scripts-mcp-and-untrusted-input'] },
      { name: 'Write a reusable skill and an eval', lessons: ['level-3/16-reusable-skills', 'level-3/17-verification-and-evals'] },
    ],
  },
  {
    level: 4,
    skills: [
      { name: 'Plan steps and set human gates', lessons: ['level-4/18-planning-delegation-and-human-gates'] },
      { name: 'Delegate to subagents when it pays off', lessons: ['level-4/19-subagents-and-orchestration'] },
      { name: 'Keep a vault Claude can use', lessons: ['level-4/20-second-brain-notes-claude-can-use'] },
      { name: 'Design automation with a threat model and a stop', lessons: ['level-4/21-automation-and-safety'] },
      { name: 'Build and defend a system end to end', lessons: ['level-4/21b-guided-build-lab', 'level-4/21c-guided-build-lab-part-2', 'level-4/22-capstone-build-and-defend-a-system'] },
    ],
  },
  {
    level: 5,
    skills: [
      { name: 'Run a sourced research-and-publishing workflow', lessons: ['electives/e1-public-workflows-research-and-publishing'] },
      { name: "Measure AI's real payoff", lessons: ['electives/e2-measuring-ais-impact'] },
      { name: 'Roll AI out to a team with a pilot', lessons: ['electives/e3-rolling-ai-out-to-a-team'] },
      { name: 'Work a spreadsheet with context in and numbers checked', lessons: ['electives/e4-claude-with-spreadsheets-and-data'] },
      { name: 'Let an agent act safely with gates and least access', lessons: ['electives/e5-claude-in-the-browser-and-desktop-app'] },
    ],
  },
];
