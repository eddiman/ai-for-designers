# AI for Designers: Course Planning

This repository is the working space for planning **AI for Designers**, a course that teaches designers (UI, UX, and Service) to use AI across one project, from research through to a built MVP.

## Source of truth

`ai-for-designers-v1.4.md` in the root is the current course plan. It supersedes v1.3 and v1.2 (both kept in `archive/` for history) and the earlier v1.0/v1.1 drafts, which stay in the original Fagkomite knowledge-base repo and are not carried over here. When the plan changes, bump the version and update the source-of-truth file.

## The course in brief

- **One running scenario.** Every session works the same project, helping people catch the bus, building a single thread from raw research to a working bus-app MVP.
- **Your own work carries forward; premade data is the on-ramp.** Attendees build on their own artifacts from session to session, so the project they end up with is built from their own decisions. Anyone who missed a session uses a known-good premade version of the previous artifact to drop in for a single topic. Everyone ends a session with the same kind of artifact in the same format; the content varies per person.
- **All three roles in the same room.** No separate role tracks. Each role sees the full end-to-end flow.
- **Files are how work moves between tools.** Output is saved as portable files so later sessions can attach them to Figma Make and Copilot.
- **Four sessions:** (1) research synthesis, (2) problem definition and personas, (3) prototyping with Figma Make plus a persona UX review, (4) knowledge base and an MVP build.

## Repository layout

- `ai-for-designers-v1.4.md` is the course plan (source of truth)
- `archive/` holds the previous plans, v1.3 and v1.2, kept for history
- `AGENTS.md` is this file
- `kb-prompt.md` is a general-purpose prompt for installing a knowledge base in any repository. Session 4 uses its own setup prompt instead. Do not hand this file to participants: it creates `kb/` at the repository root and edits the root `AGENTS.md`.
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

- **The course has been run once, end to end, and revised after it.** Review notes from that run are kept outside this repository. The revisions they pointed to have landed and are recorded in the plan's *What changed from v1.3*: the guided Session 0 setup and readiness gate, the same action structure for every activity, a shared core with optional stretch work in every session, and the per-session changes.
- **All four sessions are fleshed out into runnable detail**, each with its participant `README.md`, the exact prompts to adapt, `facilitator/` notes, and fill-in stubs at the session root. Session 1 has the shared source pack in `research/`; Sessions 2–4 have `premade/` on-ramp artifacts.
- **The shared research pack exists for Session 1, and the premade artifacts exist for Sessions 2–4.** The research pack contains the planted tension; each later session's on-ramp carries forward the outputs from the session before it.
- **Session 4's build loop has been dry-run end to end.** The output is the worked example in `session-4-knowledge-base-and-mvp/facilitator/reference-build/`: a populated knowledge base, the committed Decide direction, a spec, a nine-increment build plan, a verification plan, and the app through increment 2.
- **The plan is v1.4 and has no open decisions.**
- **Prerequisites are settled apart from AI access for Sessions 3–4.** Participants set up the Figma MCP local server themselves in facilitator lockstep. Session 4 needs nothing installed, since the app is plain HTML, CSS, and JavaScript, and a setup prompt in its `README.md` creates the knowledge base. For the coding agent in Sessions 3–4, participants on customer projects should first find out whether they can get AI access through the customer. GitHub Copilot through a BSD application is plan B, and anyone who needs it should apply as soon as the course is announced.

## What's next

The revised course is now running with participants.

Two suggestions from the review notes were left out on purpose. Session 1 shortens its one-shot warnings instead of having participants try the shortcut before the controlled workflow. Session 2 puts its quality checks in each step's "done" list as self-checks, without pair checkpoints or extra reflection time, so its timeboxes stay as they are.

Deferred on purpose: removing Session 4, requiring physical or full attendance, making the course beginner-only, moving all Session 1 work into VS Code, and adding more required artifacts.

## Writing style

Plain, direct, explanatory language. State the point, then say how or why it follows, and keep enough detail for the reader to judge it. Write connected paragraphs with natural variation in sentence length. Use headings and lists where the material benefits from them, without imposing the same template on every file.

Specific rules that apply to every file here:

- **No em dashes.** Use a comma, parentheses, a colon, or a separate sentence.
- **No manufactured contrasts.** Avoid "it's not X, it's Y", "not just X, but Y", "X, not Y", and balanced flourishes such as "A is cheap; B is the skill". State the positive claim directly. Keep a contrast only where two genuine alternatives have to be told apart, for example that the Figma MCP server needs the desktop app, or that the persona review is not user evidence.
- **No rhetorical questions** that the writer answers in the next sentence. Genuine questions put to participants or left open for a decision are fine.
- **No slogans or hype.** Explain the mechanism or the effect instead of calling something impactful or transformative, and drop closing summaries that only repeat what was said.
- **No filler emphasis.** Do not use "real", "really", or "honest" to add weight, as in "one real project", "any real work", or "one honest warning". Name what is meant instead: whose project it is, which work, what the warning is about. "real-time" and "real-world" stay, since they are the established terms for the thing they describe.
- **No "holds" for whether something is true or applies.** Do not write that a claim "holds", "holds true", or "holds up", or that it "holds for" another case, and do not reword it as "applies equally to". Say the concrete thing: "if the test passes" rather than "if this holds", and "the summaries match the sources" rather than "the summaries hold up". Other senses of the word stay, as in "hold your ground" or "hold each direction to what it is trying to do".
- **A ban covers what is close to it.** Synonyms, hyphenated rewordings, and the same figure of speech with one word swapped fall under the same rule, so "genuine", "truly", "actual", and "actually" are out wherever the sentence reads the same without them. Keep such a word only where it marks a contrast the text depends on, as in what the build tool did against what it said it did.
- **No retrospective asides in participant-facing text.** A slide or session README is read by someone seeing the course for the first time, so it cannot lean on how an earlier run went. "The reframing that helped most" and "the part people skip" mean nothing to them. Put that reasoning in `facilitator/` instead.
- **Markdown paragraphs are single long lines**, never hard-wrapped at a column.

Two deliberate exceptions. Prompt bodies, meaning the text a participant pastes into Copilot or Figma Make, are written for the tool, so their wording and line breaks serve the tool rather than the reader. Interview transcripts and questionnaire results are research data, so the quoted speech and the numbers stay exactly as they are.
