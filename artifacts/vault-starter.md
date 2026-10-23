# Vault starter

Create three notes in a new folder (an Obsidian vault is just a folder of markdown files). Copy each fenced block into its own file with the file name shown.

## File: index.md

```markdown
# Index
* [[projects]]
* [[people]]
Rule: every new note gets linked from here or from a hub note.
```

## File: projects.md

```markdown
# Projects
Summary: hub for everything I am working on.
Related: [[index]], [[people]]
* Example project: [[people]] lists who is involved.
```

## File: people.md

```markdown
# People
Summary: who I work with and what they care about.
Related: [[index]], [[projects]]
```

## Note template (copy for new notes)

```markdown
# Title (specific, searchable)
Date:
Related: [[ ]]
Summary (one line):
```

## Retrieval test

Use a way for Claude to read your files: Claude Code started inside the vault folder (in Manual mode), the Claude desktop app with a trusted folder connected if your plan offers it, or, in plain chat, upload the notes or add them to a Project. Then ask: "What do my notes say about projects, and which notes did you read? Quote the line from each note you used."

Retrieval only counts when Claude shows observable proof it read the files: a file name, a path, or a quoted excerpt with its source. Claude saying "I read your notes" is not proof. If it cannot name the files or quote from them, it did not retrieve them, no matter what it claims.

* Did it name the right files and quote from them? Y/N
* If not, work the checklist below.

## Retrieval troubleshooting

Walk these in order. Each line is a thing that silently blocks retrieval.

* **Access** - does this way of using Claude actually read local files? Plain chat does not read your disk; you must upload the notes or add them to a Project.
* **Folder** - is Claude pointed at the right folder? Claude Code must be started inside the vault folder; the desktop app must have that exact folder trusted.
* **Permission** - did you grant the folder or file access when prompted? A denied or skipped permission looks like "found nothing."
* **Indexing** - for tools that index first, did the index finish and include new notes? A note added after the last index will not be found until it reindexes.
* **Search** - are your titles and summaries specific and searchable? Vague titles ("Note 1") give Claude nothing to match on. Rename to the real subject.
* **Wikilink support** - is the tool reading `[[wikilinks]]`, or treating them as plain text? If links are not followed, add the note directly to the index and attach it rather than relying on the link.
