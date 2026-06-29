# Initialize Project Knowledge Base

Use this command as an init-style prompt for setting up a markdown-first knowledge base for one project.

This command supports one workflow: `In-project KB prompt`. It gives the user a prompt to copy and paste inside the target project repo. That prompt installs a local `kb/` folder in that repo.

## Global Rules

- Keep the KB markdown-first.
- Do not add scripts, hooks, GitHub Actions, MCP config, or automation unless the user explicitly asks.
- Do not commit or push unless the user explicitly asks.
- Preserve existing project instructions in `AGENTS.md` and `CLAUDE.md`.
- If both `AGENTS.md` and `CLAUDE.md` exist in a target repo, ask which file to update: `AGENTS.md`, `CLAUDE.md`, or both.
- If `CLAUDE.md` appears to point to `AGENTS.md`, prefer updating `AGENTS.md`, but still ask the user before editing.
- If only one of `AGENTS.md` or `CLAUDE.md` exists, update that file.
- If neither exists, ask whether to create `AGENTS.md`, `CLAUDE.md`, or both.
- Use placeholders instead of inventing project details when context is unclear.

## In-Project KB Prompt

This command does not directly install the KB from the current repo.

Instead:

1. Explain that this mode is for users who want the KB to live inside their project repo under `kb/`.
2. Tell the user to copy the prompt below.
3. Tell the user to paste it into an agent session running from the root of the target project repo.
4. Do not create files in the current repo unless the user explicitly says the current repo is the target project repo and asks you to execute the prompt here.

Give the user this prompt:

````md
# Install In-Project Knowledge Base

Install a markdown-first knowledge base inside this project repository.

## Goal

- Create a `kb/` folder inside this repo.
- Seed it with practical starter markdown files.
- Create `kb/AGENTS.md` as the operating manual for the knowledge base.
- Update this repo's `AGENTS.md` and/or `CLAUDE.md` so future agents know how to interact with the KB.
- Keep everything markdown-only and easy to maintain.

## Constraints

- Do not create a separate repository.
- Do not add scripts, GitHub Actions, hooks, automation, MCP config, or tooling.
- Make the smallest correct change.
- Preserve existing instructions in `AGENTS.md` and `CLAUDE.md`.
- If both `AGENTS.md` and `CLAUDE.md` exist, ask which file to update: `AGENTS.md`, `CLAUDE.md`, or both.
- If `CLAUDE.md` points to `AGENTS.md`, prefer updating `AGENTS.md`, but ask first.
- If only one of `AGENTS.md` or `CLAUDE.md` exists, update that file.
- If neither exists, ask whether to create `AGENTS.md`, `CLAUDE.md`, or both.
- If there is not enough context to infer project details safely, create explicit placeholders instead of guessing.
- Do not commit or push unless explicitly asked.

## Tasks

1. Inspect the current repository to understand the project:
   - read the root `README.md` if it exists
   - read `AGENTS.md` if it exists
   - read `CLAUDE.md` if it exists
   - read other obvious high-signal project docs only if needed to infer the project purpose

2. Create this structure inside the current repository:

   ```text
   kb/
   ├── AGENTS.md
   ├── README.md
   ├── overview.md
   ├── decisions/README.md
   ├── design/README.md
   ├── stories/README.md
   ├── learnings/README.md
   ├── sessions/README.md
   ├── views/README.md
   └── templates/
       ├── decision.md
       ├── design-note.md
       ├── learning.md
       ├── session-note.md
       └── story.md
   ```

3. Write `kb/AGENTS.md` with this starter body, adapting project-specific wording only where needed:

   ```md
   # KB AGENTS

   ## Purpose

   This `kb/` directory stores durable project knowledge for this repository.

   Use it to keep important context out of chat history and inside versioned markdown files that future humans and agents can reuse.

   ## Read Order

   Before making substantial changes, read:

   1. `kb/AGENTS.md`
   2. `kb/README.md`
   3. `kb/overview.md`
   4. any relevant files in `kb/decisions/`, `kb/design/`, `kb/stories/`, and `kb/learnings/`

   ## Knowledge Model

   Raw notes belong in `kb/sessions/`.

   Curated knowledge belongs in `kb/overview.md`, `kb/decisions/`, `kb/design/`, `kb/stories/`, and `kb/learnings/`.

   Raw notes are cheap to write. Curated knowledge should be updated deliberately.

   ## Folder Semantics

   - `kb/overview.md`: current project summary and entry point
   - `kb/decisions/`: decision records and rationale
   - `kb/design/`: design principles, patterns, constraints, and rationale
   - `kb/stories/`: user stories and intended outcomes
   - `kb/learnings/`: distilled learnings from research, testing, and iteration
   - `kb/sessions/`: dated raw notes and imported outputs
   - `kb/views/`: optional audience-specific summaries derived from canonical files
   - `kb/templates/`: templates for consistent note creation

   ## Source Of Truth

   Canonical project knowledge belongs in `kb/overview.md`, `kb/decisions/`, `kb/design/`, `kb/stories/`, and `kb/learnings/`.

   Files in `kb/views/` are not the source of truth. If a derived summary is updated, make sure the underlying canonical files reflect the same information.

   ## Agent Rules

   1. Make the smallest correct KB update.
   2. Update existing KB files before creating duplicate summaries.
   3. When a change introduces meaningful architecture, behavior, design rationale, product decisions, or learnings, record it in the KB as part of the same task when appropriate.
   4. Put raw findings, notes, and imported outputs in `kb/sessions/`.
   5. Keep writing direct, factual, and easy to scan.
   6. Do not treat chat history as durable project memory when the KB should be updated instead.
   ```

4. Write starter content for the other KB files:
   - `kb/README.md`: explain what the KB is for, raw notes vs curated knowledge, folder semantics, and that `views/` is derived.
   - `kb/overview.md`: include project name if safely inferred, current goal, problem statement, scope, non-goals, current state, entry points, and open questions.
   - folder `README.md` files: briefly describe what belongs in each folder.
   - templates: create lightweight templates with the fields listed below.

5. Template fields:
   - `decision.md`: title, status, date, context, decision, rationale, consequences, related
   - `design-note.md`: title, date, principle or topic, rationale, guidance, constraints, related decisions
   - `learning.md`: title, date, observation, evidence, implication, follow-up, related
   - `session-note.md`: title, date, goal, actions, findings, open questions, next steps
   - `story.md`: title, user, need, outcome, context, acceptance notes, related

6. Update the selected agent instruction file or files in this repo with a concise section like this:

   ```md
   ## Knowledge Base

   This repository has a project knowledge base in `kb/`.

   Before making substantial changes, read:

   1. `kb/AGENTS.md`
   2. `kb/README.md`
   3. `kb/overview.md`
   4. relevant files in `kb/decisions/`, `kb/design/`, `kb/stories/`, and `kb/learnings/`

   Store durable project knowledge in `kb/`.

   Use `kb/sessions/` for raw notes, findings, and imported outputs.
   Use `kb/overview.md`, `kb/decisions/`, `kb/design/`, `kb/stories/`, and `kb/learnings/` for curated knowledge.
   Use `kb/views/` only for derived summaries, not source-of-truth content.

   When a change introduces meaningful architecture, behavior, design rationale, product decisions, or learnings, update the KB as part of the same task when appropriate.

   Do not leave durable project context only in chat history.
   ```

7. Optionally update the project `README.md` if it exists and there is a natural place for a brief KB note.

## Output

- Summarize the files created under `kb/`.
- Summarize what was added to `AGENTS.md` and/or `CLAUDE.md`.
- Summarize any README note that was added.
- Mention any placeholders used because project context was missing.
````

## Final Output

Be explicit about what happened and what the user should do next.

The main output is the copy/paste prompt above. Tell the user to paste it into an agent session running from the root of the target project repo.
