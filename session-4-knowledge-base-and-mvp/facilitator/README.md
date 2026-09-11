# Session 4 — facilitator notes

Front-facing material for participants is in the session root `README.md`. This folder holds the facilitator-only guidance.

> **The worked example lives in [`reference-build/`](reference-build/).** A full run of this session: the knowledge base, the chosen direction, the spec, both plans, and the app. Demonstrate from it and compare participants' output against it. The session root holds empty stubs, which is what participants fill in — keep the two apart, and don't hand out the finished version before they've done the work.

## Core, stretch, and the three checkpoints

The required outcome is **one** increment built and verified. Everything past that is stretch. Say this out loud at the start, because a nine-increment plan otherwise reads like nine required deliverables. A participant who finishes step 7 and stops has met the goal.

The participant `README.md` places three checkpoints. Run them — they are the human quality check that stops someone carrying a thin artifact forward.

| After | What you are checking |
|---|---|
| Step 1, the KB | Can you tell what problem they committed to from `kb/overview.md` alone? |
| Step 3, the spec | Is the out-of-scope list real? An empty one means the build will sprawl. |
| Step 6, the first verified increment | Did they look at the app themselves, rather than trusting the agent's summary? |

## Where the app's `AGENTS.md` goes

`session-4-knowledge-base-and-mvp/app/AGENTS.md`, next to the app's own files. An agent reads the nearest `AGENTS.md` to what it is working on, and the one at the repository root describes this course repository — a participant who writes the app's notes there replaces the course instructions. Step 7 of the participant `README.md` says this explicitly, and [`reference-build/app/AGENTS.md`](reference-build/app/AGENTS.md) is the worked example.

## Recap (open the session with this)

Walk through the reference prototype direction: which one was chosen and why it won. Returning participants use this as a model; drop-ins need it to use the premade direction and review.

## Pre-setup

- The KB scaffolding skill must exist and be ready before Session 4 (see the open decisions in `../../ai-for-designers-v1.3.md`). **It does not exist yet.** `../../kb-prompt.md` is the current stand-in — a prompt participants copy and paste rather than a skill they invoke. The participant `README.md` says "use the KB scaffolding skill", so either the skill gets built or that step needs rewording before the session runs.
- A working Copilot build environment in VS Code, with the BSD application approved.
- **The app's stack is pinned:** plain HTML, CSS, and JavaScript, with no build step, no package manager, and nothing to install. Participants paste a ready-made scaffold prompt rather than being asked to choose a framework, because a build tool that stops to ask an unanswerable technical question stalls the work. The prompts also tell the agent to pick the simplest working option and report it instead of asking.
- Nothing to install means nothing to fail on a participant's machine, and no version drift between people in the room. If a participant's agent proposes a framework, a bundler, or a package install, that is off-spec — point them back at the scaffold prompt.
- The app opens straight from `index.html` in a browser, so verifying an increment is looking at the page rather than reading a terminal.

## How the build runs

Each participant builds the MVP themselves, using AI, on their own machine. They work individually rather than in pairs, in the same room, and ask for help whenever they need it.

Pace the room rather than letting people run ahead alone: work the same steps on your own screen and pause after each phase — KB, chosen direction, spec, plan, first increment — so nobody is silently stuck. Running it alongside them is worth more here than in any earlier session.

Expect help requests to cluster in three places: file navigation, technical vocabulary in the instructions, and the agent's own clarifying questions, which can be too technical to answer.
