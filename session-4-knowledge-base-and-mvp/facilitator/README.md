# Session 4 — facilitator notes

Front-facing material for participants is in the session root `README.md`. This folder holds the facilitator-only guidance.

> **Knowledge base — in place.** The reference knowledge base is committed at `../kb/`, populated from the Session 1–3 artifacts. It is the worked example: participants build their own `kb/` during the session, and this one is what you demonstrate from and compare against. `../kb/AGENTS.md` documents its read order and folder semantics.

## Where the app's `AGENTS.md` goes

`session-4-knowledge-base-and-mvp/app/AGENTS.md`, next to the app's own files. An agent reads the nearest `AGENTS.md` to what it is working on, and the one at the repository root describes this course repository — a participant who writes the app's notes there replaces the course instructions. Step 5.1 of the participant `README.md` now says this explicitly, and `../app/AGENTS.md` is the worked example.

## Recap (open the session with this)

Walk through the reference prototype direction: which one was chosen and why it won. Returning participants use this as a model; drop-ins need it to use the premade direction and review.

## Pre-setup

- The KB scaffolding skill must exist and be ready before Session 4 (see the open decisions in `../../ai-for-designers-v1.3.md`). **It does not exist yet.** `../../kb-prompt.md` is the current stand-in — a prompt participants copy and paste rather than a skill they invoke. The participant `README.md` says "use the KB scaffolding skill", so either the skill gets built or that step needs rewording before the session runs.
- A working Copilot build environment in VS Code, with the BSD application approved.
- **Node.js on every participant's machine.** The app is a Vite project, and Vite runs on Node — designers often have never installed it. Ask participants to run `node -v` and install the LTS build from nodejs.org ahead of the session if it comes back empty, and put it on the readiness check. Have the installer page open and expect to walk at least one person through it in the room.
  - The failure mode: without Node, the scaffold prompt dies on `npm` not being found, which reads to a designer as the AI being broken. Name it before it happens.
  - It only blocks the build step. Anyone installing mid-session can keep working on the KB, the chosen direction, the spec, and the plans while it downloads.
- **The app's stack is pinned:** Vite with the vanilla template, plain CSS, no other dependencies. Participants paste a ready-made scaffold prompt rather than being asked to choose a framework. The pilot showed why — the build tool stopped to ask a participant a technical question she could not understand well enough to answer. The prompts also tell the agent to pick the simplest working option and report it instead of asking.

## How the build runs

Each participant builds the MVP themselves, using AI, on their own machine. They work individually rather than in pairs, in the same room, and ask for help whenever they need it.

Pace the room rather than letting people run ahead alone: work the same steps on your own screen and pause after each phase — KB, chosen direction, spec, plan, first increment — so nobody is silently stuck. In the pilot, Session 4 was not run alongside participants, and the facilitator judged afterwards that it should have been.

Expect help requests to cluster where the pilot struggled: file navigation, technical vocabulary in the instructions, and the agent's own clarifying questions — one participant could not understand those well enough to answer them.
