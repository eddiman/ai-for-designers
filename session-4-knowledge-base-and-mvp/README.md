# Session 4 — A project knowledge base and an MVP build

## What you'll learn

How to stand up a project knowledge base from everything you've produced across the course, choose one prototype direction to commit to, then build a working MVP in Copilot using a disciplined loop — spec → plan → build → verify — without one-shotting whole features.

## What you start from

Everything from Sessions 1–3. The knowledge base is built from the whole trail: your research synthesis, problem definition, personas, insights, prototype directions, flows, and UX review. For any session you didn't finish, use the known-good premade artifacts (see step 1) so you can still build a complete KB.

## What you'll do

Work in order. Each step feeds the next, so check the output before moving on.

### 1. Build the project knowledge base

**What a knowledge base is, here:** a `kb/` folder inside this Session 4 directory — `session-4-knowledge-base-and-mvp/kb/` when named from the repository root. It holds your project's durable knowledge: the committed problem, the personas, the research insights, and the design decisions. It uses versioned files instead of scattered chat history, docs, and memory. It's not a wiki for humans or a database; it's structured context written for an AI agent to read before it acts. The point is that the research and design work from Sessions 1–3 becomes something the build tool can read and use. Raw material (imported artifacts and notes) sits in one place; curated knowledge (the summary, decisions, and learnings) sits in another, so the agent can find relevant context quickly.

Use the KB scaffolding skill to create `session-4-knowledge-base-and-mvp/kb/`, then populate it from everything you've made so far. The KB becomes the durable context the build tool reads, so the research and design work from Sessions 1–3 is finally reusable by code.

Gather your own artifacts from each session. **For any session you didn't finish, use the known-good premade version** so the KB is still complete:

| From | Artifacts | Premade fallback |
|---|---|---|
| Session 1 | `interview-summaries.md`, `questionnaire-summary.md`, `triangulation.md` | `../session-2-problem-definition-and-personas/premade/` |
| Session 2 | `problem-definition.md`, `personas.md`, `key-insights.md` | `../session-3-prototyping-and-ux-review/premade/` |
| Session 3 | `prototype-directions.md`, `app-flow.md`, `ux-review.md` | `premade/` (this folder) |

Once the `session-4-knowledge-base-and-mvp/kb/` scaffold exists, populate it from these artifacts. Start from this prompt and adapt it:

> Attached are the artifacts from a research-and-design project on helping people catch the bus: `interview-summaries.md`, `questionnaire-summary.md`, `triangulation.md`, `problem-definition.md`, `personas.md`, `key-insights.md`, `prototype-directions.md`, `app-flow.md`, and `ux-review.md`.
>
> Populate `session-4-knowledge-base-and-mvp/kb/` from them. Drop the raw artifacts into `session-4-knowledge-base-and-mvp/kb/sessions/`, then distil them into the curated folders: the committed problem into `session-4-knowledge-base-and-mvp/kb/decisions/`; personas and the prototype directions and flows into `session-4-knowledge-base-and-mvp/kb/design/` (with personas also as `session-4-knowledge-base-and-mvp/kb/stories/` if they fit better there); the research insights and the UX-review findings into `session-4-knowledge-base-and-mvp/kb/learnings/`; and a short project summary into `session-4-knowledge-base-and-mvp/kb/overview.md` that names the committed problem and points to the rest. Keep it factual, don't invent anything that isn't in the artifacts, and update `session-4-knowledge-base-and-mvp/kb/overview.md` so it's a real entry point.

Don't accept the first result blindly — check that the committed problem, the personas, and the prototype decisions all made it in and are easy to find. The KB is the thing every later step reads; if it's thin here, everything downstream inherits the gap.

### 2. Choose your prototype direction

Session 3 gave you three directions and a UX review — it didn't make you pick. That's this step. Commit to **one** direction to take into the build.

Decide it your way: go with your own intuition, or ask Copilot to help you reason it through against the KB. To get help deciding, start from this prompt and adapt it:

> Read the knowledge base in `session-4-knowledge-base-and-mvp/kb/` — especially the three prototype directions, the app flows, and the UX review with its triage. Help me choose **one** direction to build as an MVP. Weigh each against the committed problem and how each persona reviewed it, and be explicit about the trade-offs. Recommend one, but give me the reasoning for all three so the call is mine.

The choice is yours, not the model's — it can lay out the trade-offs, but you decide. **Write the decision and the reasoning into `chosen-direction.md`**, including which UX-review findings you're committing to carry into the build and what you're deliberately leaving behind. This is a required output: the spec in step 3 is written against it.

### 3. Write the spec

From the KB and your chosen direction, write the spec for the MVP — what it does, for whom, and where it stops. Keep it grounded: every part of the spec should trace back to something in the KB (an insight, a persona need, a prototype decision), not to a generic app feature.

**Write it into `spec.md`.** Fill in what you're building, what's in scope, what's explicitly out of scope for now, and what KB content each part rests on. Being clear about *out of scope* is what keeps the build from sprawling.

Ask the agent to draft it with you. Start from this prompt and adapt it:

> Read the knowledge base in `session-4-knowledge-base-and-mvp/kb/` — especially the committed problem, the personas, and my chosen direction in `chosen-direction.md` — and help me write the MVP spec into `spec.md`: what it does, for whom, what's in scope, what's explicitly out of scope for now, and which KB content each part rests on. Every part of the spec must trace back to something in the KB, not to a generic bus-app feature.
>
> **Do not write, scaffold, or run any application code — only produce the spec.** This is a planning step; building comes later. If something in the KB is missing or contradictory, flag it and ask rather than filling the gap yourself.

Steer the draft — where the agent reaches for a generic feature, push it back to the evidence in the KB.

### 4. Plan the build

Break the spec into small increments, and decide up front how you'll verify each one. This is the plan the build tool will follow.

- **`build-plan.md`** — the MVP broken into increments, each small enough to build and verify in one pass, ordered so that what has to exist first comes first. No increment should be a whole feature at once.
- **`verification-plan.md`** — for each increment, how you'll confirm it actually works before moving on.

Ask Copilot to draft the plan from the spec, then tighten it yourself — split anything that's too big to verify in one pass. Start from this prompt and adapt it:

> Read `spec.md` and the knowledge base in `session-4-knowledge-base-and-mvp/kb/`. Break the MVP into small increments and write `build-plan.md` — the increments, each small enough to build **and verify in one pass**, ordered so what has to exist first comes first (no increment is a whole feature at once). Then, in the same pass, write `verification-plan.md` — going increment by increment through the build plan you just wrote, exactly how I'll confirm each one works before moving on.
>
> **Do not write, scaffold, or run any application code — this is a planning step only.** If an increment can't be verified in a single pass, split it. If something in the spec is missing or contradictory, flag it and ask rather than filling the gap yourself.

### 5. Build the MVP, following the plan

Now build, in the loop the plan sets up. Scaffold the project first, then work one increment at a time. The anti-pattern to avoid is one-shotting — asking the tool to produce a whole feature in a single prompt and hoping it holds together.

Tell the build tool to work the plan explicitly. Start from this prompt and adapt it:

> Read `build-plan.md`, `verification-plan.md`, and the knowledge base in `session-4-knowledge-base-and-mvp/kb/`. Scaffold the project, then build **only the first increment** from the build plan — nothing beyond it. When it's done, write back into `build-plan.md` exactly what you did for that increment — which files you added or changed and what now works — then stop so I can verify it against the verification plan before we continue.

#### 5.1 Capture the project setup in `AGENTS.md`

That first run made a decisions — a framework, a language, a folder layout, how the app runs. Right now those choices live only in the code the agent happened to write. **`AGENTS.md` is a plain-markdown instructions file at the repo root that Copilot (and other agents) read automatically before they act** — think of it as the project's operating manual: the tech stack, the architecture, the conventions to follow, and the commands to run and test the app. Without it, each new session re-guesses these and the code drifts; with it, every later increment stays consistent with the first.

Now — after the first run, not before — create it. Copilot can draft it by inspecting what it just built, but **the technology and architecture calls are yours to confirm**, not the model's to invent. Start from this prompt and adapt it:

> Inspect the project you just scaffolded and the first increment you built, then draft an `AGENTS.md` at the repo root. Document what's actually here: the tech stack and language, the project structure and where things live, the key architectural choices, the coding conventions to follow, and the exact commands to install, run, and test the app. Also add a short rule to read the knowledge base in `session-4-knowledge-base-and-mvp/kb/` before making substantial changes. Only describe what's real in the code — where a choice is ambiguous or missing, list it as an open question for me to decide rather than guessing.

Read the draft and correct it where the choices should be yours — pin the framework, the architecture, and the conventions you actually want, since everything built after this will follow them. This is where a bit of technical judgment pays off; if you're unsure about a choice, ask Copilot to lay out the trade-offs before you commit.

After each increment: verify it against `verification-plan.md`, mark it verified (or note what failed and had to be reworked), then release the next increment the same way. The written-back record in `build-plan.md` is what keeps you and the tool honest about what's actually been built versus what's still just planned.

## What you'll produce

- a project knowledge base
- a committed prototype direction with the reasoning written down
- a spec, a build plan, and a verification plan
- a running MVP of the bus app, built incrementally and verified as it goes
- an `AGENTS.md` that captures the project's tech stack, architecture, and conventions

Work the build loop in the stub files in this folder — `chosen-direction.md`, `spec.md`, `build-plan.md`, and `verification-plan.md`. The knowledge base is in this folder's `kb/` directory, so there is no separate stub for it.

## What you'll take away

A generative build tool becomes reliable when it has a structured knowledge base to read and a loop that goes spec → plan → small build → verify → iterate. Verifying each small step, and making the tool write back what it actually did, is what gets you a working MVP instead of a confident-looking mess. The knowledge base is what lets the build tool actually use the research and design decisions from the earlier sessions.

## Tools

GitHub Copilot / Copilot agent in VS Code (BSD); the KB scaffolding skill.
