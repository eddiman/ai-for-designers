# Session 2: From summaries to a problem definition and personas

## What you'll learn

How to turn synthesized research into a design brief packet, meaning key insights, one committed problem definition, and a small set of evidence-grounded personas, and how to save them as clean files the downstream tools can read.

## What you start from

If you were here for Session 1, continue from your own interview summaries and triangulation note. If you missed it, use the premade reference versions in `premade/` as your starting evidence: the summaries plus the triangulation note. The triangulation note records under **Inputs I chose** which summary was carried forward for each source, and names the central tension, so there's nothing to select or redo, and you build on it as it is. Either way the session opens with a recap of what the reference summaries contain and why.

## What counts as done

**Core, for everyone:** `key-insights.md` with three to five evidence-anchored insights, `problem-definition.md` with one committed problem and your reply to the red-team, and `personas.md` with two or three personas labelled as hypotheses. That is the brief packet Session 3 attaches to Figma Make.

**Stretch, if you get there:** test the packet once more, either by finding the insight with the weakest evidence or by arguing for the runner-up problem. The steps are under **Stretch: test the packet** after step 3.

You are not behind if you finish the core and stop. The core is what this session asks for.

## How you'll work

Two things carry over from Session 1:

- **Paste your worked evidence in up front.** Your main input is the triangulation note, since it already did the cross-source combining, so paste in the content of `triangulation.md` first. Then paste in the summary you chose for each source, the one named under **Inputs I chose**, labelled with its source, so you can pull specific quotes. Leave out the other summary and the differences analysis, so the model draws only on the version you carried forward. Combining these in one chat is fine, and it's the same move you made when you triangulated in Session 1, because everything here has been worked and vetted. The "one source, one chat" rule was about keeping raw sources apart, and you're now past that stage.
- **Keep observation separate from inference** throughout: what was said or measured on one side, what you conclude from it on the other.

**One chat for the whole packet, or a fresh chat per activity.** Both are valid, so choose deliberately.

*One chat for all three activities:*

- **Pro:** the thread carries. Your insights feed the problem definition, the committed problem feeds the personas, and the model remembers all of it without you re-stating it.
- **Pro:** fewer restarts and less re-pasting.
- **Con:** context piles up. By the personas step the chat is full of the ranking debate and the red-team argument against your committed problem (from the problem-definition step), which can anchor the personas to that argument rather than to the raw evidence.

*A fresh chat per activity (insights, then problem, then personas):*

- **Pro:** clean context each time, so each task reads the evidence fresh, in the spirit of Session 1's "one source, one chat."
- **Pro:** it forces you to re-state what you're carrying forward (your insights, your committed problem), which sharpens it.
- **Con:** you have to paste the evidence in again, along with the outputs you're building on, or the model loses the thread.

Whichever you pick, the thing that matters is the lesson from Session 1: **the more steps you work, asking, reading, proposing a change, asking again, the better you understand the material, and the better the AI can help you.** The chat structure decides what the model has in context, and the loop is what builds your understanding.

## What you'll do

Work in this order. The prompts below are starting points, so adapt them, and keep each step separate so you can check the output before moving on.

Each step builds on the one before it. If you kept everything in one chat, that earlier output is already in context. If you're using a fresh chat per step, paste the evidence in again first, then what you're carrying forward, your insights into step 2 and your committed problem into step 3, before you run the prompts.

---

## 1. Key insights

Distill the triangulation note and your chosen summaries into the handful of insights the rest of the course builds on. This is a separate step from the triangulation: the triangulation maps where sources agree, conflict, and leave gaps, and the insights are the committed takeaways you pull out of it.

**Do this now**

1. Paste in the content of `triangulation.md`, then the chosen summary for each source, labelled with its source (`Maja`, `Geir`, `Sofie`, `Questionnaire`), as you did in Session 1 step 4. **Inputs I chose** in `triangulation.md` names which one.
2. Run this prompt:

> From the triangulation note and summaries, give me the 3–5 key insights that should drive the design. For each, cite the specific evidence and label it as observed (said or measured) or inferred.

3. Save each insight in `key-insights.md`, filling in **Insight**, **Evidence**, and **Observed / inferred**.

**You are done when**

- `key-insights.md` has three to five insights, no more.
- Every insight cites specific evidence.
- You have checked the evidence behind each insight, and it says what the insight claims.
- Every insight is labelled observed or inferred.

**Why this matters**

These are the portable, evidence-anchored takeaways everything downstream references. They scope the problem definition here, and in Sessions 3–4 they feed the prototype generation and the knowledge base. Get them right once and you stop re-deriving the signal from raw evidence every time.

---

## 2. Problem definition

Working from the evidence and the insights you just wrote, generate framings, rank them by evidence, commit to one, then red-team it.

**Do this now**

1. Generate the candidates:

> Generate 5 candidate problem framings for what to solve first, each with a How-Might-We statement and the evidence that supports it.

2. Rank them:

> Rank these by how much of my evidence actually supports each one. Cite the specific source for each.

3. **Commit to one.** Pick *one* framing from the ranked list and write it as a single clear problem statement under **The committed problem** in `problem-definition.md`, with its How-Might-We under **How-Might-We** and the evidence behind it under **Evidence that supports it**. Do not blend several framings or keep all of them. Narrowing is the point.
4. Under **Candidates considered and rejected**, list the framings you did not pick and why, so the choice is traceable.
5. Turn the model into your *red team*. The term comes from security, where a red team attacks a plan to expose its weaknesses. Paste your committed problem into this prompt and run it:

> The problem I picked is: [paste your committed problem]. Argue why it is the wrong one to solve first.

6. Write your own reply to that argument. Do you concede and re-scope the problem, or do you hold your ground, and on what evidence? Save the argument and your reply under **Red-team** in `problem-definition.md`.

**You are done when**

- `problem-definition.md` names one problem, picked from the ranked list, with its How-Might-We and the evidence behind it.
- The framings you rejected are listed, each with a reason.
- The red-team argument is saved, followed by your own reply to it.
- You can say in a sentence or two why this problem won over the others.

**Why this matters**

You can't design for everything, so this forces one focus. Ranking by evidence makes that choice defensible rather than a hunch, and the red-team stress-tests the choice before you sink a whole prototype into it. The single committed problem is what scopes Session 3.

Your reply to the red-team is the judgement this step is training. Pasting the critique and moving on lets the model have the last word, which defeats the purpose.

---

## 3. Personas

Create **2–3 personas**, each grounded in specific evidence, each labelled as a hypothesis, each noting what you still don't know.

**Do this now**

1. With your evidence and committed problem in the chat, run this prompt:

> From this evidence and the committed problem, propose 2–3 personas. Ground each in specific interview or questionnaire signals, label each as a hypothesis, and note what we still don't know about them.

2. Check that the personas follow the split the triangulation already named: the power user who wants a smart, proactive assistant, and the simplicity-first rider who wants only reliable basics. If the model turned each interviewee into a persona, ask it to rebuild them around that split.
3. Save them in `personas.md`, filling in **Hypothesis**, **Grounded in**, and **What we still don't know** for each.

**You are done when**

- `personas.md` has two or three personas.
- Each persona draws on more than one source.
- Each is labelled a hypothesis and lists what you still don't know.
- None of them is one interviewee with a new name.
- Every trait in each persona traces to the evidence under **Grounded in**, or is listed under **What we still don't know**.

**Why this matters**

Session 3 runs a UX review *in character as these personas*, so they're a working input the next session depends on. That is why each one has to be tied to evidence and treated as a hypothesis: you'll be making design calls in their voice.

---

## Stretch: test the packet

**Do this now**

Choose one of these two tests, and run it in a chat that has your evidence and your packet in context.

*The weakest insight*

1. Run this prompt:

> Look at my key insights and the evidence each one cites. Which insight rests on the weakest evidence, and why? What would I need to see in the research to trust it more?

2. Decide what you would do with that insight: keep it, relabel it as inferred, or cut it. Write the model's answer and your decision under **Stretch: the weakest insight** at the bottom of `key-insights.md`.

*The runner-up problem*

1. Run this prompt:

> Compare my committed problem with the second-ranked framing from the ranking. For each, say which of my personas it serves best and what we would give up by choosing it. Then argue for the runner-up as strongly as you can.

2. Decide whether the comparison changes your mind, and why. Write the model's answer and your decision under **Stretch: the runner-up problem** at the bottom of `problem-definition.md`.

For either test, write what you would change in the stretch section and leave the rest of the file as it is. Your problem and personas were built on the insights and the problem as they stand, and Session 3 needs the three files to match.

**You are done when**

- The stretch section of `key-insights.md` or `problem-definition.md` has the model's answer and your decision, in your own words.
- The rest of your packet is unchanged.

**Why this matters**

The insight with the weakest evidence is where the packet is most likely to be wrong, and naming it now tells you what to watch for in the Session 3 review. Arguing hard for the runner-up checks whether your commitment rests on the evidence or on the order the ranking happened to produce.

---

## What you'll produce

A "design brief packet" of three files that the rest of the course consumes, in the order you produce them:

- `key-insights.md` holds the key insights from the research, each anchored in evidence and labelled observed or inferred
- `problem-definition.md` holds the single committed problem, with the red-team argument and your response
- `personas.md` holds 2–3 evidence-grounded personas, each labelled as a hypothesis

Empty stub files for each are in this folder, so fill them in as you go. Keep all three as plain markdown, with clean headings and short bullets, so they attach cleanly to Figma Make and Copilot in Session 3.

## What you'll take away

AI produces problem framings and personas quickly, and each one needs an evidence anchor and a hypothesis label before you rely on it. You pick the single problem and the personas to commit to. Save the results as clean files, because every later session reads them as input.

## Tool

Microsoft Copilot 365 chat.
