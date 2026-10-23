# Capstone scorecard

**Before you start:** there are two paths through this capstone, and only one is a real pass.

- **Full pass (needs two other people):** an **independent reviewer** who is not you scores it, and a **teammate** runs it cold from your written instructions alone. Both are mandatory gates. This is the only path that earns a real pass. Line them up before you build, not after.
- **Pure self-study solo:** if you have nobody to ask, see "Solo learner substitute" at the bottom. It is a deliberately weaker fallback that satisfies **neither human gate** (not the cold teammate run and not the independent review), so a solo result is self-assessment / practice-level only, **not a real pass**. Use it only if you truly cannot get another person, and never treat it as equal to a real independent review.

Scored by an independent reviewer. Self score for reference only.

Scale: 0 = missing, 1 = partial, 2 = complete with dated evidence.

## Plan (fill before you build)

- **Job (one sentence):** what the workflow does, with its inputs and outputs.
- **Teammate (name):** the person who will run it cold from your instructions.
- **Reviewer (name):** the independent person who will score it.
- **Planned test cases:** your ten cases, marking which three are adversarial and which two are prohibited.
- **Evidence (link / where it lives):** where your saved runs, logs, and eval sheet live so the reviewer can check them.

## Scored rows (9)

| # | Item | Self | Reviewer | Evidence link and date |
| --- | --- | --- | --- | --- |
| 1 | Clear job, inputs, outputs | | | |
| 2 | Working runs with saved evidence | | | |
| 3 | Ten case eval (5 safe, 3 adversarial, 2 prohibited) | | | |
| 4 | SAFETY: injected failure resisted | | | |
| 5 | SAFETY: operational failure stopped safely and recovered | | | |
| 6 | SAFETY: enforced approval gate demonstrated (real or safe simulated action) | | | |
| 7 | SAFETY: least privilege and reconstructable log | | | |
| 8 | SAFETY: kill switch and rollback demonstrated | | | |
| 9 | Written handoff instructions complete enough for a stranger to cold-start it | | | |

## Mandatory pass/fail gates (2)

These are not scored rows. Each is pass or fail. Failing either one fails the whole capstone, no matter how high the nine rows score.

| Gate | Pass? | Evidence |
| --- | --- | --- |
| Teammate cold run: a teammate ran it from your written instructions alone, with you not in the room | | |
| Independent review: a reviewer who is not you scored the nine rows | | |

Pass requires ALL of:
* Both mandatory gates = pass
* Every SAFETY row (4-8) = 2 from the reviewer
* The four non safety scored rows (1, 2, 3, 9: job, working runs, ten case eval, written handoff instructions) total at least 6 out of a possible 8
* Every adversarial and prohibited eval case passed

Automatic fail: unauthorized data use, any uncontrolled external action, or failing any adversarial or prohibited case.

## Bring these templates

The capstone pulls together the whole course, so bring the artifacts you already used:

- `plan-and-gates-template.md`: plan the job and where the human gates sit (rows 1, 6)
- `eval-sheet.md`: your ten case eval (row 3)
- `tool-intake-checklist.md`: vet any tool or connector before you wire it in
- `automation-safety-checklist.md`: the safety defenses (rows 4-8)
- `helper-brief-template.md`: the written handoff instructions a stranger cold-starts from (row 9, and the teammate gate)

## Solo learner substitute

The teammate cold run and independent review exist because a system has to survive someone who is not you. If you genuinely cannot get another person:

1. Write the instructions, then hand your workflow to the eval sheet and this scorecard as if you were a stranger: run it only from the written steps, touch nothing you did not write down.
2. Wait one full day, then review your own evidence with fresh eyes, scoring each row cold against what is actually saved, not what you remember building.

This is a fallback, not an equal, and it satisfies **neither human gate**: a solo run is not a cold teammate start and not an independent review. A solo run is self-assessment / practice-level only, **not a real pass**: running your own workflow is not a teammate cold-starting from your instructions, a one-day-later self-review is not an independent reviewer, and a real reviewer catches assumptions you cannot see in your own work. Use the substitute only when a second person is truly unavailable, and note on the scorecard that it was self-reviewed and therefore not a real pass.
