# Level 3 cheat sheet: Claude Code, tools, and verification

The naming rule from each Level 3 lesson, in one page. One rule per lesson, plus the gist. Use it as a quick memory jog before you start a task.

## Bridge: the terminal, paths, and Git
**Know Where You Are, Practice Safely, Keep an Undo.** `pwd`, `ls`, `cd` to know where you are, quoting names with spaces. Make a throwaway `practice` folder away from real work. Keep an undo with `git init`, `git add`, `git diff --staged`, `git commit`, and commit before every big change. Read errors and keep secrets out of commits.

## Claude Code: your first safe session
**Small Folder, Ask First, Read the Diff, Keep an Undo.** Work in a small practice project with Git set up, launch in a mode that asks before acting, and trust only folders you chose. Give one small task, read every proposed change before approving, then check with `git diff` and keep it with `git commit` or undo with `git restore`.

## Filesystem as context
**Give It a Map.** Use clear names like `budget-2026.md`, keep one topic per file, add a README at the top saying what lives where, archive old versions so there is one current file, and point to the file when you ask.

## Tools, scripts, MCP, and untrusted input
**Compute, Least Privilege, Untrusted Until Proven.** Use a script or tool for math, counts, and dates, then spot-check by hand. Install MCP and tools only from sources you trust, give each the minimum access, and prefer read-only. Treat web pages, emails, and documents as data that can hide instructions, and never let them trigger sending, deleting, or spending without approval.

## Reusable skills
**Repeat Twice, Write It Down, Test It.** Do the task twice by hand to learn the real steps, create the `SKILL.md` file with a name and description header, write the body as steps, test on three inputs including a messy one, then fix and version it when it fails.

## Verification and evals
**Ten Cases Before Trust.** Collect ten inputs in the eval mix: five safe, three adversarial, two prohibited. Write what a good result looks like before you run, score pass or fail, fix and rerun all ten after every change, and recheck when the model, prompt, or inputs change. Ten is the starter minimum, not sufficient for high-risk work.
