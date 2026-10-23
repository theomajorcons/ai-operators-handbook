---
name: my-skill-name
description: Does [one specific job]. Use when I ask for [trigger phrase].
---

# My skill name

## Inputs
What I will give you:

## Steps
1.
2.
3.

## Checks before finishing
*

## Example of a good output

## Test log (update after each test)
| Test input | Passed? | Fix |
| --- | --- | --- |
| normal | | |
| messy | | |
| should be refused | | |

## How to use this starter

INSTALL (do these steps):
1. Make the folder .claude/skills/my-skill-name/ in your project.
2. Save this file inside it with the exact name SKILL.md (not starter-SKILL.md).
3. The first line of the file must be the --- line.
4. Use lowercase words separated by hyphens for the name. Do not use the reserved names anthropic-skills or synced.
5. Test it by typing /my-skill-name, or by asking for the task described in your description.
Personal skills go in ~/.claude/skills/my-skill-name/SKILL.md instead.


---
# COMPLETED EXAMPLE (save as .claude/skills/weekly-status/SKILL.md, without these comment lines)
#
# ---
# name: weekly-status
# description: Writes my weekly status report from raw notes. Use when I ask for a status report.
# ---
#
# # Weekly status
# ## Inputs
# This week's raw notes.
# ## Steps
# 1. Group the notes into Done, Next, and Blockers.
# 2. Write each section as three short bullets.
# 3. Keep the whole report under 150 words, plain tone.
# ## Checks before finishing
# * Every number in the report appears in the notes.
# * Blockers each name an owner.
