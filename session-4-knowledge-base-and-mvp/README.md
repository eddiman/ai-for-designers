# Session 4 — A project knowledge base and an MVP build

## What you'll learn

How to stand up a project knowledge base from everything produced so far, then build a working MVP in Copilot using a disciplined loop — without one-shotting whole features.

## What you start from

Continue from your own prototype direction and UX review from Session 3. If you missed it, take the premade chosen direction and review in `premade/`. The session opens with a recap of why the reference direction won.

## What you'll do

- **Knowledge base:** use a scaffolding skill to create the KB structure, then populate it from your insights, personas, problem definition, prototype decisions, and project settings. The KB becomes the durable context the build tool reads, so the research and design work from Sessions 1–3 is finally reusable by code.
- **MVP build in Copilot:** from the KB, write a spec, make a build plan, and define how you'll verify each piece works. Build in small increments, verify each one, and iterate. The anti-pattern to avoid is one-shotting — asking the tool to produce a whole feature in a single prompt and hoping it holds together.

## What you'll produce

- a project knowledge base
- a running MVP of the bus app, built incrementally, with a verification plan attached

Work the build loop in the stub files in this folder — `spec.md`, `build-plan.md`, and `verification-plan.md`. (The knowledge base is set up from a separate scaffolding step, so there's no stub for it here.)

## What you'll take away

A generative build tool becomes reliable when it has a structured knowledge base to read and a loop that goes spec → plan → small build → verify → iterate. Verifying each small step is what gets you a working MVP instead of a confident-looking mess. The knowledge base is what lets the build tool actually use the research and design decisions from the earlier sessions.

## Tools

GitHub Copilot / Copilot agent in VS Code (BSD); the KB scaffolding skill.
