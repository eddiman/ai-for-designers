# Session 2 — From summaries to a problem definition and personas

## What you'll learn

How to turn synthesized research into a design brief packet — key insights, one committed problem definition, and a small set of evidence-grounded personas — and how to save them as clean files the downstream tools can read.

## What you start from

If you were here for Session 1, continue from your own interview summaries and triangulation note. If you missed it, use the premade reference versions in `premade/` as your starting evidence — the summaries plus the triangulation note, which already has its inputs chosen and the central tension named. There's nothing to select or redo; you build on it as-is. Either way the session opens with a recap of what the reference summaries contain and why.

## How you'll work

Two rules carry over from Session 1:

- **Attach your evidence up front.** At the start of the chat, attach (or paste) the summaries and the triangulation note. Every prompt below builds on that shared context.
- **One chat for the whole packet.** Do all three activities in the same chat, in order. Insights feed the problem definition, and the committed problem feeds the personas — keeping them in one chat is what lets the model carry that thread. Throughout, keep what was said or measured separate from what you infer.

## What you'll do

Work in this order. The prompts below are starting points — adapt them, but keep each step separate so you can check the output before moving on.

### 1. Key insights

Distill the triangulation into the handful of insights the rest of the course builds on.

> "From the triangulation note and summaries, give me the 3–5 key insights that should drive the design. For each, cite the specific evidence and label it as observed (said or measured) or inferred."

This is not the same as the triangulation: the triangulation maps where sources agree, conflict, and leave gaps; the insights are the committed takeaways you carry forward. Save them to `key-insights.md`.

### 2. Problem definition

Generate framings, rank them by evidence, commit to one, then attack it.

> "Generate 5 candidate problem framings for what to solve first, each with a How-Might-We statement and the evidence that supports it."
>
> "Rank these by how much of my evidence actually supports each one. Cite the specific source for each."
>
> "Argue why the problem I picked is the wrong one to solve first."

Commit to a single problem. Then write your **own** response to the red-team argument — don't let the model have the last word. Save it all to `problem-definition.md`.

### 3. Personas

Create **2–3 personas**, each grounded in specific evidence, each labelled as a hypothesis, each noting what you still don't know.

> "From this evidence and the committed problem, propose 2–3 personas. Ground each in specific interview or questionnaire signals, label each as a hypothesis, and note what we still don't know about them."

Don't just turn each interviewee into a persona. Use the split the triangulation already named — the power user (wants a smart, proactive assistant) versus the simplicity-first rider (wants only reliable basics) — to build personas that mean something.

You create personas because Session 3 runs a UX review *in character as these personas*. That makes them a working input you'll need, which is also why each one has to be tied to evidence and treated as a hypothesis.

Save all three files as plain markdown — clean headings and short bullets, nothing fancy. You'll attach them directly in Figma Make and Copilot in Session 3, so keep them readable.

## What you'll produce

A "design brief packet" — three files that the rest of the course consumes, in the order you produce them:

- `key-insights.md` — the key insights from the research, each anchored in evidence and labelled observed or inferred
- `problem-definition.md` — the single committed problem, with the red-team argument and your response
- `personas.md` — 2–3 evidence-grounded personas, each labelled as a hypothesis

Empty stub files for each are in this folder — fill them in as you go.

## What you'll take away

AI produces problem framings and personas quickly, and each one needs an evidence anchor and a hypothesis label before you rely on it. You pick the single problem and the personas to commit to. Save the results as clean files, because every later session reads them as input.

## Tool

Microsoft Copilot 365 chat.
