# AI for Designers — Course Planning

This repository is the working space for planning **AI for Designers**, a course that teaches designers (UI, UX, and Service) to use AI across one real project, from research through to a built MVP.

## Source of truth

`ai-for-designers-v1.3.md` in the root is the current course plan. It supersedes v1.2 (kept in `archive/` for history) and the earlier v1.0/v1.1 drafts, which stay in the original Fagkomite knowledge-base repo and are not carried over here. When the plan changes, bump the version and update the source-of-truth file.

## The course in brief

- **One running scenario.** Every session works the same project — helping people catch the bus — building a single thread from raw research to a working bus-app MVP.
- **Your own work carries forward; premade data is the on-ramp.** Attendees build on their own artifacts from session to session, so the project they end up with is genuinely theirs. Anyone who missed a session uses a known-good premade version of the previous artifact to drop in for a single topic. Everyone ends a session with the same kind of artifact in the same format; the content varies per person.
- **All three roles in the same room.** No separate role tracks. Each role sees the full end-to-end flow.
- **Files are the currency.** Output is saved as portable files so later sessions can attach them to Figma Make and Copilot.
- **Four sessions:** (1) research synthesis, (2) problem definition and personas, (3) prototyping with Figma Make plus a persona UX review, (4) knowledge base and an MVP build.

## Repository layout

- `ai-for-designers-v1.3.md` — the course plan (source of truth)
- `archive/ai-for-designers-v1.2.md` — previous plan, kept for history
- `AGENTS.md` — this file
- `session-1-research-synthesis/` — Session 1; `facilitator/` holds run-of-show and design notes, `premade/` holds its on-ramp artifacts
- `session-2-problem-definition-and-personas/` — Session 2; `facilitator/`, `premade/`
- `session-3-prototyping-and-ux-review/` — Session 3; `facilitator/`, `premade/`
- `session-4-knowledge-base-and-mvp/` — Session 4; `facilitator/`, `premade/`

Each session folder separates front-facing from facilitator material:
- root `README.md` — the participant-facing course material for that session (what you'll learn, what you do, what you produce).
- `facilitator/` — facilitator-only notes: run of show, recap scripts, pre-setup, dry-run checks, and design notes (including the planted-tension secrets) that participants must not see verbatim.
- `premade/` — the on-ramp artifacts handed to drop-ins, with a front-facing manifest; not yet produced.

## Current state

- The plan (v1.3) is drafted and current.
- **Session 1 is fleshed out into runnable detail.** Its front-facing `README.md` carries the three-step per-source flow (generic → directed → analyze differences), the exact prompts for interviews and questionnaire, and the choose-then-triangulate step; `facilitator/` holds the run of show, the triangulation steering notes, and the planted-tension design notes; the produced artifacts (`interview-summaries.md`, `questionnaire-summary.md`, `triangulation.md`) exist as fill-in stubs.
- Sessions 2–4 `README.md` files are split into front-facing / `facilitator/` / `premade/` and stubbed, but still need the same fleshing-out into runnable detail.
- No premade artifacts have been produced yet. The `premade/` folders hold front-facing manifests only.
- Prerequisites are not worked out yet (tool access, dry-runs). See the plan's "Tools and prerequisites" and "Open decisions" sections.

## What's next

1. Flesh out Sessions 2–4 `README.md` into runnable plans, the way Session 1 now is.
2. Produce the premade artifacts into each session's `premade/` folder, starting with Session 1's research pack (3 interviews + questionnaire) with the deliberate planted tension.
3. Work the prerequisites: confirm tool access (Copilot 365, GitHub Copilot via BSD, Figma Make, Figma MCP) and dry-run the Session 3 Figma Make to Copilot/Figma round-trip and the Session 4 build loop.
4. Resolve the open decisions listed at the end of the plan.

## Writing style

Plain, direct language. Do not use "it's X, not Y" antithesis or balanced-contrast flourishes such as "A is cheap; B is the skill". State the point directly.
