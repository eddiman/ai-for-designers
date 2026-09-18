# Session 4: A project knowledge base and an MVP build

## Why this session exists

You are testing whether your research and design decisions can constrain a working output. Handed your evidence and your decisions, a build tool should produce something that answers the problem you committed to. Today you find out whether it does.

Building production-quality software is outside this session's scope. The MVP is one output of the knowledge base, and you can keep asking questions against that knowledge base long after today.

## Where you are going

```text
build the KB → choose a direction → write the spec → plan the build → build one increment → verify
```

Six moves. You will have finished each one before the next begins, and the facilitator pauses the room at each arrow.

## What counts as done

**Core, for everyone:** a knowledge base, a committed direction, a spec, a build plan, a verification plan, and **one increment that you built and verified**. One verified increment demonstrates the whole loop. That is the learning goal met.

**Stretch, if you get there:** keep going through the increments in your plan, one at a time, with the same verify-before-continuing discipline.

You are not behind if you finish the core and stop. Completing the loop once is what this session asks for, at whatever size.

## Words you will meet

Every one of these is ordinary once named. Ask if any of them stays fuzzy.

| Word | What it means here |
|---|---|
| **repository** (repo) | The folder holding this whole course, tracked so changes are recoverable. Its top level is the "repository root". |
| **agent** | Copilot when it can read and write files by itself, rather than only answering in chat. |
| **scaffold** | Create the empty starting files for an app, before any of its behaviour exists. |
| **stack** | Which technologies an app is built from. Yours is decided already: HTML, CSS, and JavaScript. |
| **increment** | One small piece of the app, small enough to build and check in a single pass. |
| **verify** | Open the thing and confirm it does what the plan said, before moving on. |
| **architecture** | How the files are arranged and which one is responsible for what. |

## What you start from

Everything from Sessions 1–3: your research synthesis, problem definition, personas, insights, prototype directions, flows, and UX review. For any session you did not finish, take the premade version so your knowledge base is still complete.

| From | Artifacts | Premade fallback |
|---|---|---|
| Session 1 | `interview-summaries.md`, `questionnaire-summary.md`, `triangulation.md` | `../session-2-problem-definition-and-personas/premade/` |
| Session 2 | `problem-definition.md`, `personas.md`, `key-insights.md` | `../session-3-prototyping-and-ux-review/premade/` |
| Session 3 | `prototype-directions.md`, `app-flow.md`, `ux-review.md` | `premade/` (this folder) |

---

## 1. Build the project knowledge base

**Do this now**

1. Use the KB scaffolding skill to create `session-4-knowledge-base-and-mvp/kb/`.
2. Gather your nine artifacts from the table above, taking premade versions where you need them.
3. Paste this prompt and attach them:

> Attached are the artifacts from a research-and-design project on helping people catch the bus: `interview-summaries.md`, `questionnaire-summary.md`, `triangulation.md`, `problem-definition.md`, `personas.md`, `key-insights.md`, `prototype-directions.md`, `app-flow.md`, and `ux-review.md`.
>
> Populate `session-4-knowledge-base-and-mvp/kb/` from them. Put the raw artifacts in `kb/sessions/`, then distil them into the curated folders: the committed problem into `kb/decisions/`; personas and the prototype directions and flows into `kb/design/` (personas can also go in `kb/stories/` if they fit better there); the research insights and UX-review findings into `kb/learnings/`; and a short project summary into `kb/overview.md` that names the committed problem and points to the rest.
>
> Keep it factual and invent nothing that is not in the artifacts.

4. Open `kb/overview.md` and read it.

**You are done when**

- `kb/` exists and holds your artifacts, sorted into folders.
- You can find the committed problem, the personas, and the prototype decisions without searching.
- `kb/overview.md` works as an entry point to the project rather than reading as a list of file names.

**Why this matters**

A knowledge base is your project's durable memory, written as files for an agent to read before it acts, so the context no longer lives in scattered chat history. Everything after this step reads from it. A thin knowledge base here means every later step inherits the gap.

> **Checkpoint.** Before step 2, show your `kb/overview.md` to the facilitator or the person next to you. Can they tell what problem you committed to from that file alone?

---

## 2. Choose your prototype direction

Session 3 gave you three directions and a UX review without making you pick. That is this step.

**Do this now**

1. Decide which one direction you are taking into the build. Use your own judgement, or ask for the trade-offs first with this prompt:

> Read the knowledge base in `session-4-knowledge-base-and-mvp/kb/`, especially the three prototype directions, the app flows, and the UX review with its triage. Help me choose **one** direction to build as an MVP. Weigh each against the committed problem and how each persona reviewed it, and be explicit about the trade-offs. Recommend one, but give me the reasoning for all three so the call is mine.

2. Write your decision into `chosen-direction.md`: the direction, why it won, which UX-review findings you are committing to fix in the build, and what you are leaving behind.

**You are done when**

- `chosen-direction.md` names one direction and gives your reasons.
- It lists the UX-review findings you will carry into the build.
- It says what the other two directions had that you are deliberately not building.

**Why this matters**

The spec in step 3 is written against this file. Deciding here, in writing, is what stops the build from drifting between directions later. The choice is yours: the model can lay out trade-offs, and you make the call.

---

## 3. Write the spec

**Do this now**

1. Draft it with this prompt:

> Read the knowledge base in `session-4-knowledge-base-and-mvp/kb/`, especially the committed problem, the personas, and my chosen direction in `chosen-direction.md`, and help me write the MVP spec into `spec.md`: what it does, for whom, what is in scope, what is explicitly out of scope for now, and which knowledge-base content each part rests on. Every part of the spec must trace back to something in the knowledge base rather than to a generic bus-app feature.
>
> **Do not write, scaffold, or run any application code; only produce the spec.** If something in the knowledge base is missing or contradictory, flag it and ask me rather than filling the gap yourself.

2. Read the draft and push back where it reached for a generic feature. Ask where a line comes from in the knowledge base. If it has no answer, cut the line.

**You are done when**

- `spec.md` says what you are building, for whom, what is in scope, and what is out of scope.
- Every scope item traces to something in your knowledge base.
- The out-of-scope list is not empty.

**Why this matters**

The out-of-scope list is what keeps the build from sprawling, and tracing every scope item to your evidence is what keeps the app anchored to your project rather than to generic bus-app conventions.

> **Checkpoint.** Before step 4, have someone read your out-of-scope list. If it is empty or vague, the build will sprawl and you will run out of time.

---

## 4. Plan the build

**Do this now**

1. Draft both plans with this prompt:

> Read `spec.md` and the knowledge base in `session-4-knowledge-base-and-mvp/kb/`. Break the MVP into small increments and write `build-plan.md`, with each increment small enough to build **and verify in one pass**, ordered so that what has to exist first comes first. No increment is a whole feature at once. Then, in the same pass, write `verification-plan.md`, going increment by increment through the build plan you just wrote, with exactly how I will confirm each one works before moving on.
>
> **Do not write, scaffold, or run any application code; this is a planning step only.** If an increment cannot be verified in a single pass, split it. If something in the spec is missing or contradictory, flag it and ask me rather than filling the gap yourself.

2. Read the increments. Split anything you could not check in one sitting.
3. Read the verification plan. For each row, ask yourself what you would click or look at.

**You are done when**

- `build-plan.md` lists increments in an order where nothing depends on something later.
- Increment 1 is small, a starting point with no feature in it yet.
- `verification-plan.md` has a row per increment describing something you can check.

**Why this matters**

This is the plan the build tool follows. Increments that are too big cannot be verified, and an increment you cannot verify is one you have to trust blindly.

---

## 5. Scaffold the app

**The stack is already decided for you.** The app is plain **HTML**, **CSS**, and **JavaScript**. No framework, no build step, no packages, nothing to install: you open the file in your browser and it runs.

That is pinned on purpose. The build tool will not stop to ask you which framework to use, and everyone in the room is running the same thing. It is also enough for what the MVP does, since a saved stop, a status, and a recommendation need nothing more.

**Do this now**

1. Paste this prompt as-is:

> Scaffold the app for this MVP at `session-4-knowledge-base-and-mvp/app/` as plain HTML, CSS, and JavaScript (an `index.html`, a `styles.css`, and a `script.js`). No framework, no build step, no package manager, no dependencies: I must be able to open `index.html` directly in a browser and have it work.
>
> Leave it as a single near-empty starting page for now, and do not build any part of the MVP yet. When you are done, tell me how to open it and confirm that it works.
>
> If a technical choice is not covered above, pick the simplest option that keeps the app opening directly in a browser and tell me what you picked. Do not ask me to choose.

2. Open `index.html` in your browser and confirm you see the starting page.

**You are done when**

- `app/` holds `index.html`, `styles.css`, and `script.js`.
- Opening `index.html` shows a page.
- Nothing was installed and no package manager ran.

**If the tool asks you a technical question**

Reply: *pick the simplest option that keeps the app opening directly in a browser, and tell me what you picked.* You do not need an opinion about it. The prompt above already says so, and this reply works any time it asks again.

---

## 6. Build one increment, then verify it

This is the core of the session. The anti-pattern to avoid is one-shotting: asking for a whole feature in a single prompt and hoping it holds together.

**Do this now**

1. Release exactly one increment:

> Read `build-plan.md`, `verification-plan.md`, and the knowledge base in `session-4-knowledge-base-and-mvp/kb/`. Build **only the first increment** from the build plan, nothing beyond it. When it is done, write back into `build-plan.md` exactly what you did: which files you added or changed, and what now works. Then stop, so I can verify it before we continue.
>
> If a technical choice is not covered by the build plan or the app's `AGENTS.md`, pick the simplest option that keeps the app opening directly in a browser and tell me what you picked. Do not ask me to choose.

2. Open the app and run the check from your verification plan for that increment. Look at the page rather than reading the agent's summary of it.
3. Mark the row verified in `verification-plan.md`. If it failed, write down what failed and what you went back and changed.

**You are done when**

- The increment works when you look at it yourself.
- `build-plan.md` records which files the tool changed.
- `verification-plan.md` shows that increment as verified, or records why it is not.

**Why this matters**

Verifying each small step, and making the tool write back which files it changed, is what keeps the MVP working as it grows, and it tells you where the build went wrong when it stops working. The written record is what keeps both of you honest about what has been built against what is still only planned.

**If the tool asks you a technical question**

Same reply as step 5. A *product* question works differently (what a screen should say, which option a rider sees first) and that one is yours. Answer it from your spec.

> **Checkpoint.** You have met the session's core goal. Show your verified increment and your `verification-plan.md` row to the facilitator before going further.

---

## 7. Capture the setup in `AGENTS.md`

The scaffold settled things nobody wrote down: the folder layout, where styles live, what the files are called.

**`AGENTS.md` is a plain-markdown instructions file that Copilot reads automatically before it acts**, so it works as the project's operating manual. Without it, each new session re-guesses these things and the code drifts.

It belongs beside the app it describes, at **`session-4-knowledge-base-and-mvp/app/AGENTS.md`**. An agent reads the nearest `AGENTS.md` to whatever it is working on. Leave the one at the repository root alone, since that describes this course repository, and overwriting it would replace the course instructions with notes about a bus app.

**Do this now**

1. Now that the first increment exists, draft it:

> Inspect the project you scaffolded and the first increment you built, then draft an `AGENTS.md` at `session-4-knowledge-base-and-mvp/app/AGENTS.md`. Do not modify the `AGENTS.md` at the repository root; that one describes the course repository.
>
> Document what is actually here: the stack (plain HTML, CSS, and JavaScript, with no build step and no dependencies), the project structure and where things live, the conventions to follow, and exactly how to open and check the app. State the stack as fixed, so that later increments must not introduce a framework, a build step, a CSS library, or a dependency. Add a short rule to read the knowledge base in `session-4-knowledge-base-and-mvp/kb/` before making substantial changes, and a rule to pick the simplest working option and report it rather than asking me technical questions.
>
> Only describe what exists in the code. Where something is genuinely undecided, list it as an open question for me at the end.

2. Read it and check it against reality: does it say plain HTML, CSS, and JavaScript with no build step, and does it tell you how to open the app?
3. Answer or delete any open questions it left at the end.

**You are done when**

- `app/AGENTS.md` exists and matches the files in `app/`.
- It states the stack as fixed.
- No open questions are left dangling for a later increment to guess at.

**Why this matters**

Everything built after this follows this file, so a wrong line here propagates into every later increment.

---

## Stretch: keep going

If you have time after step 7, release the next increment the same way: one at a time, verify, mark it, then the next. Stop whenever you like. Each verified increment is a finished piece of work.

## What you'll produce

- a project knowledge base
- a committed prototype direction with the reasoning written down
- a spec, a build plan, and a verification plan
- at least one increment of a working MVP, built and verified
- an `AGENTS.md` that captures the project's stack, structure, and conventions

Work in the stub files in this folder: `chosen-direction.md`, `spec.md`, `build-plan.md`, and `verification-plan.md`. The knowledge base and the app have no stubs, since you create `kb/` in step 1 and `app/` in step 5, both in this folder.

## What you'll take away

A generative build tool becomes reliable when it has a structured knowledge base to read and a loop that goes spec → plan → small build → verify → iterate. Verifying each small step, and making the tool write back which files it changed, is what keeps the MVP working as it grows. The knowledge base is what lets the build tool use the research and design decisions from the earlier sessions.

## Tools

GitHub Copilot / Copilot agent in VS Code (BSD); the KB scaffolding skill. The app is plain HTML, CSS, and JavaScript, so there is nothing to install for the build.
