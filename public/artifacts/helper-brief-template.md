# Helper brief (hand this to the person who runs your workflow cold)

This is the written instructions your teammate runs the capstone from, with you not in the room (scorecard row 9 and the teammate cold-run gate). Write it for a real human who has never seen your workflow. If they cannot cold-start and finish from this page alone, you fail the gate, so test it by handing it to them and staying silent.

Rule of thumb: assume they know nothing about your setup and will not ask you a single question. Every file path, every click, every "obvious" step goes on the page.

## What this workflow does (one sentence)
Job, with its inputs and outputs. Example: "Takes a folder of raw survey CSVs and produces one summary table of complaint counts per region."

## Setup (do this once, before running)
- **Install / open:** what to install and what app or tool to open. Name exact versions if they matter. Example: "Install Claude Code using the official native installer for your platform, then open it in a terminal (the native install needs no Node; Node is only for the optional npm route)."
- **Where the files live:** the exact folder, repo, or path. Example: `~/capstone/` with `input/`, `output/`, and `backup/` subfolders.
- **Access they need:** keys, logins, permissions, and who grants them. If a step needs an approval from an authorized person, name that person and how to reach them.
- **Starting state:** what the input folder should contain before they start, and what the output folder should look like (usually empty).

## How to run (numbered, do them in order)
1. First command or action, verbatim. Example: "Run `python run.py` from the `~/capstone/` folder."
2. Next step. Note any prompt they will see and exactly what to type or click.
3. The approval gate: when the workflow pauses for a human to approve the risky action, say what they are approving and how to approve or deny it.
4. Where the output lands and how to confirm the run finished.

Keep each step to one action. If a step has an "if X, do Y" branch, write both branches out.

## Expected result (what success looks like)
- **Output:** what file(s) appear, where, and roughly what they contain. Give one concrete example line if you can.
- **Log:** where the run log is written and what a clean run's last line looks like.
- **Timing:** roughly how long a normal run takes, so they know when to worry.

## Troubleshooting (the problems they will actually hit)
Fill this with the failures you already saw while building, not hypotheticals.

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| Command "not found" | Tool not installed or wrong folder | Re-check Setup; confirm they are in `~/capstone/` |
| Run stops with an error partway | A step failed (tool timeout, missing file) | This is expected to stop safely. Read the log, then recover from `backup/` per the step below |
| Workflow seems to hang | Waiting on the approval gate | Go approve or deny the pending action (How to run, step 3) |
| Output looks wrong or empty | Bad or missing input | Re-check Setup "starting state"; re-run from step 1 |

- **Kill switch:** how to stop the workflow safely mid-run (the exact command or keystroke).
- **Recover from backup:** the exact steps to restore state after a failed or killed run, so they end where they started.
- **If truly stuck:** what to write down (the last log line, the step number they reached) so the result is still reviewable even if the run did not finish.
