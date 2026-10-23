# The AI Operator's Handbook

A static learning site that teaches people to run Claude as a working system —
from picking the right model in regular chat up to orchestrating subagents in
Claude Code. Built with [Astro](https://astro.build); lessons are MDX, each
one teach-first with a short knowledge check at the end. Deployed to GitHub
Pages.

## Prerequisites

- **Node** >= 22.12.0 (see `engines` in `package.json`)

## Setup

```sh
npm install
```

## Commands

| Command            | Action                                             |
| :----------------- | :------------------------------------------------- |
| `npm run dev`      | Start the dev server at `localhost:4321`           |
| `npm run build`    | Build the production site to `./dist/`             |
| `npm run preview`  | Preview the built site locally                     |
| `npx vitest run`   | Run the test suite once                            |

## Project structure

```text
src/
  content/lessons/   MDX lessons, grouped by level-1…level-4 and electives/
  content.config.ts  Lesson frontmatter schema (Astro content collection)
  components/         Astro components (Callout, KnowledgeCheck, Pill, …)
  layouts/           Page shells (BaseLayout, LessonLayout)
  lib/               Helpers — e.g. reading-time.ts computes minutesRead
  pages/             Routes; lessons render via pages/lessons/[...slug].astro
  data/              Static data (model-lineup.yaml)
  styles/            Global CSS (tokens + theme variables; no hard-coded colors)
public/
  artifacts/         Downloadable lesson files (checklists, templates, …)
```

## Adding a lesson

1. Create an `.mdx` file under the right folder in `src/content/lessons/`
   (`level-1/`…`level-4/` or `electives/`). Name it with its number and slug,
   e.g. `level-2/09-outputs-documents-tables-and-pages.mdx`.
2. Add frontmatter matching the schema in `src/content.config.ts`:

   | Field           | Required | Notes                                                        |
   | :-------------- | :------- | :----------------------------------------------------------- |
   | `title`         | yes      | Lesson title                                                 |
   | `level`         | yes      | Number (1–4)                                                 |
   | `lesson`        | yes      | String, e.g. `"9"` or `"12b"`                                |
   | `track`         | yes      | Track name; `"Electives"` skips the Level segment            |
   | `last_verified` | yes      | Date, e.g. `2026-10-12`                                       |
   | `download`      | no       | Filename in `public/artifacts/`, e.g. `eval-sheet.md`        |
   | `practice_time` | no       | Minutes for the practice pill — number or `"15 min"`         |
   | `time_label`    | no       | Capstone-only verbatim pill, e.g. `"Project · several hours"` |
   | `practice_note` | no       | HTML shown in the "In practice" callout                      |

   There is **no `time` field** — read time is computed from the lesson body
   by `src/lib/reading-time.ts` and shown automatically.

3. Write the lesson **teach-first**: explain the concept, then assess. Each
   lesson ends with a knowledge check of **2 multiple-choice, 1 true/false,
   and 1 matching** question (`KnowledgeCheck`, `TrueFalse`, `Matching`
   components).
4. If the lesson has a downloadable, drop the file in `public/artifacts/` and
   point `download:` at its filename.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
`withastro/action` and publishes to GitHub Pages. The site is served under the
base path `/ai-operators-handbook` (`base` in `astro.config.mjs`) — always use
the `withBase()` helper for internal links so they resolve on Pages.

## Contributing

- Keep lessons teach-first and verify technical claims before changing
  `last_verified`.
- Don't hard-code colors — use the CSS variables in `src/styles/`.
- Run `npm run build` and `npx vitest run` before opening a PR; both must pass.
