# Level 4 cheat sheet: Delegation, automation, and the capstone

The naming rule from each Level 4 lesson, in one page. One rule per lesson, plus the gist. Use it as a quick memory jog before you start a task.

## Planning, delegation, and human gates
**Plan, Rate the Risk, Then Gate.** Rate each step on five questions: authority, data sensitivity, scope, blast radius, and people. Gate anything that sends, spends, deletes, publishes, changes permissions, runs unreviewed code, touches sensitive data, or affects people. Plan first, act second, log decisions.

## Subagents and orchestration
**Split Only When Independent.** Split work into independent pieces that do not need each other, give each helper a clear brief, ask for a short return format so results combine easily, and verify the combined result yourself. Do not split small jobs.

## Second brain: notes Claude can use
**Small Notes, Links, an Index.** Keep one idea per note with a clear title, link related notes with `[[note name]]`, use backlinks to see what points here, keep an index note listing the main hubs, and test retrieval by asking Claude a question and fixing titles and links if it misses.

## Automation and safety
**Threat Model, Limit, Log, Stop, Recover.** Before an automation runs unattended, put all nine in place: threat model, untrusted-input handling, data classification and limits, secrets in a manager, caps on actions and spend, human gates on risky actions, a privacy-aware log, a tested kill switch, and a dated recovery drill.

## Guided build lab: a system, end to end
**Plan, Restrict, Gate, Log, Stop, Restore.** Build a small workflow in order, running the control at each step: plan and threat-model, restrict access to least privilege, gate every risky action in the code's shape, log privacy-aware, add a kill switch you pull deterministically, and run a dated restore drill. Do each by running the script so your hands know the move.

## Capstone: build and defend a system
**Show It Works, Show It Fails Safe.** The capstone has nine scored rows (job, working runs, ten-case eval, injected failure, operational failure, enforced approval gate, least privilege and log, kill switch and rollback, written handoff) and two mandatory gates (a teammate cold run and an independent review). Unauthorized data use, any uncontrolled external action, or failing any adversarial or prohibited case is an automatic fail.
