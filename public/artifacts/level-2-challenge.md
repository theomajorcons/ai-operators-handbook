# Level 2 challenge: build a Project for one real workflow

This is the cumulative challenge for Level 2. It pulls together everything you
learned: giving Claude the material, setting up a Project with instructions and
a source document, writing in markdown, using memory, asking for the right
output shape, doing research with a real source, wiring a connector, and
troubleshooting a bad answer. You build one small Project, run it, and save the
setup plus the output as a portfolio artifact.

## The task

Pick one workflow you repeat often enough that a reusable setup would pay off: a
weekly report from raw notes, a draft reply from a template, a cleaned-up
summary of a recurring document. It must be a real workflow, not a one-off.

## What to produce

1. **Build the Project.** Create a Project with:
   - **Instructions** that say the job, the audience, the format, and the Check
     (the five-part spec, now living in the Project instead of retyped each
     time).
   - **One source document** attached: the template, the reference, or the
     example of a good output the workflow depends on.

   **No Projects access? Use the normal-chat fallback.** If your plan or account
   doesn't have Projects, run the whole challenge in a single normal
   conversation: paste the same instructions (the job, audience, format, and the
   Check) at the top of the chat, then paste the source document right below
   them, and do the workflow from there. It works for one sitting, but know the
   difference: a normal chat doesn't persist the setup the way a Project does, so
   next time you repeat the workflow you paste the instructions and source again
   instead of reusing a saved Project.
2. **Ask for the right output shape.** Run the workflow and request the shape it
   actually needs: a table, a list, a short note, strict markdown. Do not accept
   a wall of prose if the real use needs a table.
3. **Add one researched point with a source.** Include one fact that Claude
   could not know from memory, pulled from a real source (a search, a connected
   tool, a document you supplied) and show where it came from. A claim with no
   source does not count.
4. **Troubleshoot one miss.** The first run will usually have something off. Run
   the troubleshooting ladder: name the cause, change one thing, rerun. Write
   the one line of what the cause was and what you changed.
5. **Save the output.** Keep the output the Project produced, in the right
   shape, with the sourced point visible.

## What "done well" looks like

- The Project instructions are a real spec: a stranger reusing the Project would
  get a comparable result without you explaining it.
- The source document is attached and actually used, not decorative.
- The output is in the shape the task needs, not whatever shape came back first.
- The research point has a traceable source. You can point to where it came from.
- The troubleshooting note names a specific cause and a single change, not "I
  tried again and it worked."

## Save it as a portfolio artifact

Keep two things together, dated:

- the **Project configuration**: the instructions text and the name of the
  source document (and the connector, if you wired one). If you used the
  normal-chat fallback, save the instructions you pasted and the name of the
  source document instead,
- the **output** the Project produced, with the sourced point marked.

This is your Level 2 portfolio piece. It proves you can stand up a reusable
workflow, not just send a one-off prompt. Add it to the trail from Level 1.

## Templates to pull from

- `project-setup-template.md`: the Project instructions and source
- `output-shape-guide.md`: asking for the right shape
- `research-checklist.md`: the sourced point
- `connector-decision-sheet.md`: if you wire a connector
- `troubleshooting-ladder.md`: the one-miss fix
