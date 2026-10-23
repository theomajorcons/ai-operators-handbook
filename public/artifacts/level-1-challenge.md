# Level 1 challenge: run one real task the right way

This is the cumulative challenge for Level 1. It pulls together everything you
learned: deciding whether AI should do the task at all, picking a model tier
and effort, respecting the limits, giving Claude the context it needs, and
writing the prompt as a spec. You do it once, on a real task, and you save the
result as a portfolio artifact.

## The task

Pick one repetitive task you actually do: a weekly status note, a recurring
email, a summary you keep rewriting. It must be real, not invented. If it is a
one-off you will never do again, pick something else; the point is a task worth
getting right.

## What to produce

Work through the Level 1 moves in order and write down each decision as you go.

1. **Should AI do this?** Run the should-ai-do-this check. Write one line: do it
   with AI, do it yourself, or do it with AI and check the result by hand. If
   the honest answer is "do it yourself," say so and pick a different task.
2. **Pick the tier and effort.** Name the model tier and the effort level, and
   one sentence on why (quick and cheap for an easy task, more effort for a
   tangled one).
3. **Mind the limits.** Note anything that could hit a limit: a long input, a
   chat that will grow, a fact Claude cannot know. Say how you will handle it
   (trim the input, start fresh, supply a source).
4. **Give it the context.** List what you attached or pasted so Claude was not
   guessing: the source, the constraint, the example of a good one.
5. **Write the prompt as a spec.** Cover Task, Audience, Details, Format, and
   Check. The Check must be something you can actually verify.
6. **Run it and keep the output.** Save the exact prompt and the result Claude
   returned.
7. **Write the one-page "my choices and why."** Half a page is fine. It is the
   trail that shows your reasoning, not just the answer.

## What "done well" looks like

- The should-AI call is honest, not a rubber stamp. If you chose "check by
  hand," you say what you checked.
- The tier and effort fit the task. An easy task on a heavy setting, or a hard
  task on a quick one, is the wrong call even if the output looks fine.
- The prompt is a spec a stranger could run: all five parts, and a Check that is
  verifiable (a word count, a required fact, a read-through against the source).
- The output passes your own Check before you would use it for real.
- The one-pager explains *why* each choice was made, so someone else could
  repeat the task and get a comparable result.

## Save it as a portfolio artifact

Keep three things together in one file or folder, dated:

- the spec (your five-part prompt),
- the output Claude produced,
- the one-page "my choices and why."

This is your first portfolio piece. It proves you can take a real task from
"should I even use AI for this" to a verified result with your reasoning shown.
Each level adds another piece; by the capstone you have a trail.

## Templates to pull from

- `should-ai-do-this-checklist.md`: the step-1 decision
- `model-picker-cheatsheet.md`: the tier and effort call
- `context-checklist.md`: what to give Claude so it is not guessing
- `prompt-spec-template.md`: the five-part spec
