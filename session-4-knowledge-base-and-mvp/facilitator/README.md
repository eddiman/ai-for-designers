# Session 4: facilitator notes

Front-facing material for participants is in the session root `README.md`. This folder holds the facilitator-only guidance.

> **The worked example lives in [`reference-build/`](reference-build/).** It is a full run of this session: the knowledge base, the chosen direction, the spec, both plans, and the app. Demonstrate from it and compare participants' output against it. The session root holds empty stubs, which is what participants fill in. Keep the two apart, and don't hand out the finished version before they've done the work.

## Core, stretch, and the three checkpoints

The required outcome is **one** increment built and verified. Everything past that is stretch. Say this out loud at the start, because a nine-increment plan otherwise reads like nine required deliverables. A participant who finishes step 7 and stops has met the goal.

The participant `README.md` places three checkpoints. Run them, since they are the human quality check that stops someone carrying a thin artifact forward.

| After | What you are checking |
|---|---|
| Step 1, the KB | Can you tell what problem they committed to from `kb/overview.md` alone? |
| Step 3, the spec | Does the out-of-scope list name specific things? An empty one means the build will sprawl. |
| Step 6, the first verified increment | Did they look at the app themselves, rather than trusting the agent's summary? |

## Where the app's `AGENTS.md` goes

It goes at `session-4-knowledge-base-and-mvp/app/AGENTS.md`, next to the app's own files. An agent reads the nearest `AGENTS.md` to what it is working on, and the one at the repository root describes this course repository, so a participant who writes the app's notes there replaces the course instructions. Step 7 of the participant `README.md` says this explicitly, and [`reference-build/app/AGENTS.md`](reference-build/app/AGENTS.md) is the worked example.

## Recap (open the session with this)

Walk through the reference build's chosen direction, Decide (`reference-build/chosen-direction.md`): why it won over the other two, and which UX-review findings it carries into the build. Returning participants use this as a model for their own choice in step 2. Drop-ins need it to work from the premade directions, flows, and review, which leave the choice to them.

## Pre-setup

- **The KB setup prompt is in step 1 of the participant `README.md`.** It creates the empty `kb/` inside `session-4-knowledge-base-and-mvp/`, with its folder READMEs, `kb/AGENTS.md`, and templates, and it must leave every file outside `kb/` alone. Run it yourself before the session and check both: that `kb/` lands inside the Session 4 folder, and that the root `AGENTS.md` is unchanged. It was adapted from `../../kb-prompt.md`, which is a general-purpose version for installing a knowledge base in any repository. Do not hand that file to participants: it creates `kb/` at the repository root and adds a section to the root `AGENTS.md`, which in this repository is the course's own instructions.
- A working Copilot build environment in VS Code for every participant, through their customer project where possible, or with the BSD application approved as plan B.
- **The app's stack is pinned:** plain HTML, CSS, and JavaScript, with no build step, no package manager, and nothing to install. Participants paste a ready-made scaffold prompt rather than being asked to choose a framework, because a build tool that stops to ask an unanswerable technical question stalls the work. The prompts also tell the agent to pick the simplest working option and report it instead of asking.
- Nothing to install means nothing to fail on a participant's machine, and no version drift between people in the room. If a participant's agent proposes a framework, a bundler, or a package install, that is off-spec, so point them back at the scaffold prompt.
- The app opens straight from `index.html` in a browser, so verifying an increment means looking at the page rather than reading a terminal.

## How the build runs

Each participant builds the MVP themselves, using AI, on their own machine. They work individually rather than in pairs, in the same room, and ask for help whenever they need it.

Pace the room rather than letting people run ahead alone. Work the same steps on your own screen and pause after each phase, meaning the KB, the chosen direction, the spec, the plan, and the first increment, so nobody is silently stuck. Running it alongside them is worth more here than in any earlier session.

Expect help requests to cluster in three places: file navigation, technical vocabulary in the instructions, and the agent's own clarifying questions, which can be too technical to answer.
