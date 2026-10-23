# Level 3 challenge: build a skill, test it, commit it

This is the cumulative challenge for Level 3. It pulls together everything you
learned: running Claude Code, working on the file system, using tools and git
safely, writing a reusable skill, and verifying with an eval. You build one
small skill, test it with a ten case eval, and run a safe Claude Code session
that ends in a git commit. You save the skill, the eval, and the commit as a
portfolio artifact.

## The task

Pick one small, repeatable job worth packaging as a skill: formatting a weekly
status from notes, renaming files to a convention, turning raw notes into a
checklist. Keep it small. A skill you can describe in one sentence is a skill
you can test.

Work inside a **safe folder**: a throwaway or test directory with only
synthetic or copies-of files, under git, where nothing real breaks if a step
goes wrong. Never run your first skill session against files you cannot afford
to lose. The folder is not a hard sandbox on its own: it narrows the work and
reduces blast radius. Isolation is actually enforced by the permissions you
launch with and the scope of files the tools are allowed to touch; your review
of each write reduces risk but does not enforce isolation (a write you wave
through still happens). The folder, the launch permissions, and your review
together are what keep the session safe.

## What to produce

1. **Write the SKILL.md.** Start from the starter and fill it in:
   - a `name` (lowercase, hyphenated) and a one-line `description` with the
     trigger phrase,
   - the inputs, the steps, the checks before finishing, and an example of a
     good output.
   Save it at `.claude/skills/<your-skill-name>/SKILL.md`.
2. **Write a ten case eval.** Use the eval sheet mix: five safe (including an odd
   format and a missing field), three adversarial, two prohibited. Write what a
   good result looks like for each *before* you run it.
3. **Run a safe Claude Code session.** In the safe folder, use the skill on a
   real input. Let Claude use the file system and tools, but keep it inside the
   safe folder and approve anything that writes.
4. **Score the eval.** Run all ten cases, mark pass or fail against your written
   expectations. Any adversarial or prohibited failure means the skill is not
   ready; fix and rerun all ten.
5. **Commit with git.** Make one clean commit in the safe folder with the
   SKILL.md and the eval sheet in it. A scoped commit, not `git add -A` on your
   whole machine.

## What "done well" looks like

- The SKILL.md is reusable: the description makes it fire on the right ask, and
  the steps and checks are specific enough that the output is consistent.
- The eval has the full mix, with expected results written *before* running, and
  a prohibited case where the correct result is a refusal or a stop.
- The session stayed contained: nothing outside the safe folder was touched,
  and that held because the launch permissions and the tools' allowed scope
  enforced the boundary (your approving each write reduced risk but did not
  enforce it), not because the folder by itself locked the door.
- The commit is scoped (you can name every file in it) and has a message that
  says what it adds.
- You can show the eval score and the commit hash.

## Save it as a portfolio artifact

Keep three things together, dated:

- the **SKILL.md** you wrote,
- the **eval sheet** with ten scored cases,
- the **commit** (hash and message) from the safe session.

This is your Level 3 portfolio piece. It proves you can package a job as a
tested, version-controlled skill, not just prompt your way through it once. Add
it to the trail from Levels 1 and 2; it is the direct run-up to the capstone.

## Templates to pull from

- `starter-SKILL.md`: the skill you fill in
- `eval-sheet.md`: the ten case test
- `terminal-survival-card.md`: safe Claude Code and git moves
