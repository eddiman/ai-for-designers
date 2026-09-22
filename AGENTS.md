# AI for Designers: Course Planning

This repository is the working space for planning **AI for Designers**, a course that teaches designers (UI, UX, and Service) to use AI across one project, from research through to a built MVP.

## Source of truth

`ai-for-designers-v1.3.md` in the root is the current course plan. It supersedes v1.2 (kept in `archive/` for history) and the earlier v1.0/v1.1 drafts, which stay in the original Fagkomite knowledge-base repo and are not carried over here. When the plan changes, bump the version and update the source-of-truth file.

## The course in brief

- **One running scenario.** Every session works the same project, helping people catch the bus, building a single thread from raw research to a working bus-app MVP.
- **Your own work carries forward; premade data is the on-ramp.** Attendees build on their own artifacts from session to session, so the project they end up with is built from their own decisions. Anyone who missed a session uses a known-good premade version of the previous artifact to drop in for a single topic. Everyone ends a session with the same kind of artifact in the same format; the content varies per person.
- **All three roles in the same room.** No separate role tracks. Each role sees the full end-to-end flow.
- **Files are how work moves between tools.** Output is saved as portable files so later sessions can attach them to Figma Make and Copilot.
- **Four sessions:** (1) research synthesis, (2) problem definition and personas, (3) prototyping with Figma Make plus a persona UX review, (4) knowledge base and an MVP build.

## Repository layout

- `ai-for-designers-v1.3.md` is the course plan (source of truth)
- `archive/ai-for-designers-v1.2.md` is the previous plan, kept for history
- `AGENTS.md` is this file
- `session-1-research-synthesis/` holds Session 1; `research/` holds the shared source pack, and `facilitator/` holds run-of-show and design notes
- `session-2-problem-definition-and-personas/` holds Session 2, with the same `facilitator/` and `premade/` split
- `session-3-prototyping-and-ux-review/` holds Session 3, likewise
- `session-4-knowledge-base-and-mvp/` holds Session 4, likewise
- `presentation/` holds the on-screen deck: a landing page and one deck per session, plain HTML/CSS/JS, opened straight from `index.html`. The session `README.md` files remain the detailed instructions; this is what the room looks at.

Each session folder separates front-facing from facilitator material:
- root `README.md` is the participant-facing course material for that session (what you'll learn, what you do, what you produce).
- `facilitator/` holds facilitator-only notes: run of show, recap scripts, pre-setup, dry-run checks, and design notes (including the planted-tension secrets) that participants must not see verbatim.
- Session 1's `research/` holds the shared source pack used by everyone.
- Sessions 2–4 use `premade/` for the on-ramp artifacts handed to drop-ins, with a front-facing manifest.

Session 4 adds one more: `facilitator/reference-build/` holds a full worked run of the session, meaning the knowledge base, chosen direction, spec, both plans, and the app. The session root keeps empty stubs for participants to fill in, so the finished version and the blank version never share a path.

## Participant work

When working through the course as a participant, keep the content produced during the sessions local. Do not commit changes to participant output files such as `interview-summaries.md`, `questionnaire-summary.md`, or `triangulation.md`. Before committing course-material changes, confirm that participant output files still contain their repository stubs and leave any filled-in participant files unstaged.

## Current state

- **The course has been run once, end to end.** Review notes from that run are kept outside this repository. The revision work they point to is listed under *What's next* below, which supersedes the plan's open-decisions list where the two disagree.
- **All four sessions are fleshed out into runnable detail**, each with its participant `README.md`, the exact prompts to adapt, `facilitator/` notes, and fill-in stubs at the session root. Session 1 has the shared source pack in `research/`; Sessions 2–4 have `premade/` on-ramp artifacts.
- **The shared research pack exists for Session 1, and the premade artifacts exist for Sessions 2–4.** The research pack contains the planted tension; each later session's on-ramp carries forward the outputs from the session before it.
- **Session 4's build loop has been dry-run end to end.** The output is the worked example in `session-4-knowledge-base-and-mvp/facilitator/reference-build/`: a populated knowledge base, the committed Decide direction, a spec, a nine-increment build plan, a verification plan, and the app through increment 2.
- The plan (v1.3) is current but has been edited in place since it was drafted. The Session 3 MCP correction, the pinned Session 4 stack, and the settled build mode all landed after v1.3 was written. A version bump is pending.
- Prerequisites are partly settled. The Figma MCP question is resolved: participants set up the local server themselves in facilitator lockstep. Session 4 needs nothing installed, since the app is plain HTML, CSS, and JavaScript. Still open: BSD approval for Copilot, and whether the KB scaffolding skill gets built. Five open decisions remain at the end of the plan.

## What's next

The four sessions and the end-to-end workflow stay as they are. The revision work is in the tool orientation, the instructions, and the facilitation.

1. **Add a tooling orientation** of 10–15 minutes, guided: what Markdown is, where each session's files live, the VS Code Explorer and Copilot Chat, course artifacts against application code, and the artifact journey from research to a verified build. Plus a readiness check used to plan support and pairing.
2. **Give every activity a visible action structure:** "Do this now", "You are done when", "Why this matters", and where relevant "If the tool asks a technical question". Keep the immediate action separate from its explanation.
3. **Add a shared core with optional stretch work** to each session, so different speeds are handled without splitting the course. Session 4's core is the KB, the decisions and plans, and one verified increment.
4. **Work the per-session changes:** a Markdown demo and shorter one-shot warnings in Session 1; evidence and persona quality gates plus reflection time in Session 2; stating what the persona review is and is not before running it in Session 3; and the Session 4 reframe, meaning purpose before steps, a visible progress map, defined vocabulary, and quality checkpoints after the KB, the spec, and the first increment.
5. **Decide the KB scaffolding skill.** `kb-prompt.md` is a copy-paste prompt, and Session 4's `README.md` tells participants to use a skill. Build it or reword the step.
6. **Bump the plan to v1.4** once the changes above land, and archive v1.3.
7. **Run a timed dry run** with at least one designer who rarely opens VS Code and one who lives in it. Check that both finish the shared core, see where facilitator help is needed, and ask each to explain the purpose and evidence behind every artifact they produced. Use the result to decide whether Session 4 needs splitting.

Deferred on purpose: removing Session 4, requiring physical or full attendance, making the course beginner-only, moving all Session 1 work into VS Code, and adding more required artifacts.

## Writing style

Plain, direct, explanatory language. State the point, then say how or why it follows, and keep enough detail for the reader to judge it. Write connected paragraphs with natural variation in sentence length. Use headings and lists where the material benefits from them, without imposing the same template on every file.

Specific rules that apply to every file here:

- **No em dashes.** Use a comma, parentheses, a colon, or a separate sentence.
- **No manufactured contrasts.** Avoid "it's not X, it's Y", "not just X, but Y", "X, not Y", and balanced flourishes such as "A is cheap; B is the skill". State the positive claim directly. Keep a contrast only where two genuine alternatives have to be told apart, for example that the Figma MCP server needs the desktop app, or that the persona review is not user evidence.
- **No rhetorical questions** that the writer answers in the next sentence. Genuine questions put to participants or left open for a decision are fine.
- **No slogans or hype.** Explain the mechanism or the effect instead of calling something impactful or transformative, and drop closing summaries that only repeat what was said.
- **No filler emphasis.** Do not use "real", "really", or "honest" to add weight, as in "one real project", "any real work", or "one honest warning". Name what is meant instead: whose project it is, which work, what the warning is about. "real-time" and "real-world" stay, since they are the established terms for the thing they describe.
- **A ban covers what is close to it.** Synonyms, hyphenated rewordings, and the same figure of speech with one word swapped fall under the same rule, so "genuine", "truly", "actual", and "actually" are out wherever the sentence reads the same without them. Keep such a word only where it marks a contrast the text depends on, as in what the build tool did against what it said it did.
- **No retrospective asides in participant-facing text.** A slide or session README is read by someone seeing the course for the first time, so it cannot lean on how an earlier run went. "The reframing that helped most" and "the part people skip" mean nothing to them. Put that reasoning in `facilitator/` instead.
- **Markdown paragraphs are single long lines**, never hard-wrapped at a column.

Two deliberate exceptions. Prompt bodies, meaning the text a participant pastes into Copilot or Figma Make, are written for the tool, so their wording and line breaks serve the tool rather than the reader. Interview transcripts and questionnaire results are research data, so the quoted speech and the numbers stay exactly as they are.
