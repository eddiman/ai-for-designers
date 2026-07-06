# Session 2 — From summaries to a problem definition and personas

## What you'll learn

How to turn synthesized research into a design brief packet — key insights, one committed problem definition, and a small set of evidence-grounded personas — and how to save them as clean files the downstream tools can read.

## What you start from

If you were here for Session 1, continue from your own interview summaries and triangulation note. If you missed it, use the premade reference versions in `premade/` as your starting evidence — the summaries plus the triangulation note, which already has its inputs chosen and the central tension named. There's nothing to select or redo; you build on it as-is. Either way the session opens with a recap of what the reference summaries contain and why.

## How you'll work

Two things carry over from Session 1:

- **Attach your worked evidence up front — not the raw sources.** Your main input is the triangulation note; it already did the cross-source combining. Attach it at the start, along with the *chosen* summary for each source (the one version you carried forward, not both) so you can pull specific quotes. Combining these in one chat is fine — it's the same move you made when you triangulated in Session 1, because everything here is already worked and vetted, not raw transcript. That "one source, one chat" rule was about keeping raw sources apart; you're now past that stage.
- **Keep observation separate from inference** throughout — what was said or measured on one side, what you conclude from it on the other.

**One chat for the whole packet, or a fresh chat per activity?** Both are valid — choose deliberately.

*One chat for all three activities:*

- **Pro** — the thread carries: your insights feed the problem definition, the committed problem feeds the personas, and the model remembers all of it without you re-stating it.
- **Pro** — fewer restarts and less re-pasting.
- **Con** — context piles up. By the personas step the chat is full of the ranking debate and the red-team argument, which can anchor the personas to that argument rather than to the raw evidence.

*A fresh chat per activity (insights, then problem, then personas):*

- **Pro** — clean context each time, so each task reads the evidence fresh — the spirit of Session 1's "one source, one chat."
- **Pro** — it forces you to re-state what you're carrying forward (your insights, your committed problem), which sharpens it.
- **Con** — you have to re-attach the evidence and paste in the outputs you're building on, or the model loses the thread.

Whichever you pick, the thing that actually matters is the lesson from Session 1: **the more steps you work — ask, read, propose a change, ask again — the better you understand the material, and the better the AI can help you.** The chat structure is just plumbing around that loop.

## What you'll do

Work in this order. The prompts below are starting points — adapt them, but keep each step separate so you can check the output before moving on.

Each step builds on the one before it. If you kept everything in one chat, that earlier output is already in context. If you're using a fresh chat per step, re-attach the evidence first and paste in what you're carrying forward — your insights into step 2, your committed problem into step 3 — before you run the prompts.

### 1. Key insights

Distill the triangulation into the handful of insights the rest of the course builds on.

**Why:** these are the portable, evidence-anchored takeaways everything downstream references — they scope the problem definition here, and in Sessions 3–4 they feed the prototype generation and the knowledge base. Get them right once and you stop re-deriving the signal from raw evidence every time.

> From the triangulation note and summaries, give me the 3–5 key insights that should drive the design. For each, cite the specific evidence and label it as observed (said or measured) or inferred.

This is not the same as the triangulation: the triangulation maps where sources agree, conflict, and leave gaps; the insights are the committed takeaways you carry forward. Save them to `key-insights.md`.

### 2. Problem definition

Working from the evidence and the insights you just wrote, generate framings, rank them by evidence, commit to one, then attack it.

**Why:** you can't design for everything, so this forces one focus. Ranking by evidence makes that choice defensible rather than a hunch, and the red-team stress-tests it before you sink a whole prototype into the wrong problem. The single committed problem is what scopes Session 3.

> Generate 5 candidate problem framings for what to solve first, each with a How-Might-We statement and the evidence that supports it.
>
> Rank these by how much of my evidence actually supports each one. Cite the specific source for each.
>
> Argue why the problem I picked is the wrong one to solve first.

Commit to a single problem. Then write your **own** response to the red-team argument — don't let the model have the last word. Save it all to `problem-definition.md`.

### 3. Personas

Create **2–3 personas**, each grounded in specific evidence, each labelled as a hypothesis, each noting what you still don't know.

**Why:** Session 3 runs a UX review *in character as these personas*, so they're a working input the next session depends on — not decoration. That's exactly why each one has to be tied to evidence and treated as a hypothesis: you'll be making design calls in their voice.

> From this evidence and the committed problem, propose 2–3 personas. Ground each in specific interview or questionnaire signals, label each as a hypothesis, and note what we still don't know about them.

Don't just turn each interviewee into a persona. Use the split the triangulation already named — the power user (wants a smart, proactive assistant) versus the simplicity-first rider (wants only reliable basics) — to build personas that mean something.

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
