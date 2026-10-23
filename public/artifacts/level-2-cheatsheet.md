# Level 2 cheat sheet: Working with context, files, and the web

The naming rule from each Level 2 lesson, in one page. One rule per lesson, plus the gist. Use it as a quick memory jog before you start a task.

## Give Claude things to read
**Ask Narrow, Check the Page, Share Less.** Point at the part you need, not "summarize this." Ask Claude to quote or cite where the answer came from, then open the source and confirm. Before attaching, remove anything private the question does not need, on a copy, including hidden text and metadata.

## Projects, files, and instructions
**Write It Once, Keep It Short.** Put stable rules in the instructions: who you work for, tone, format, what to avoid. Attach only reference material you will reuse, and trim the rest. When you correct Claude twice about the same thing, add that correction to the instructions.

## Markdown and the .md file family
**Plain Text, Light Structure.** Use `#` and `##` for headings, `*` or `1.` for lists, `| a | b |` for tables, and `**word**` for emphasis. Name files by topic and keep one topic per file. Markdown shows up in notes, prompts, instructions, README files, and skills.

## Memory and standing instructions
**Write Rules, Review Memory, Gate Sensitive Data.** Put rules you want every time into standing instructions, and read what memory has stored. Credentials go in neither and are never pasted into chat. Other sensitive data only when gated: authorized, approved environment, minimum necessary. Delete anything you would not want kept, and confirm the setting applied.

## Outputs: documents, tables, and pages
**Name the Shape.** Read once, a reply in the chat. Compare or calculate, a table or spreadsheet. Keep, edit, or share, a document. Others will use it, a page or small tool. Check the contents before you send or save.

## Research and web search
**Search, Cite, Open, Judge.** Ask for current information when the answer changes over time, ask for sources with links, open one and confirm it says what Claude claims, judge who wrote it and when, and ask what Claude could not find. If search is unavailable, treat time-sensitive facts as unverified.

## Connectors in regular chat
**One Job, Least Access.** Name the job before you connect anything, connect the minimum that does it, and choose read-only when offered. Review actions before Claude sends or changes things, and disconnect what you no longer use.

## When things go wrong
**Diagnose Before You Retry.** Start with a hypothesis, then confirm with evidence: ask what Claude assumed, compare the prompt to what you meant, check inputs and sources, check that the tool actually ran, spot-check a number by hand, then change one thing and rerun. Also rule out a chat grown too long or too little effort.
