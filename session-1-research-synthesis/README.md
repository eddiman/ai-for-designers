# Session 1 — Research synthesis: how prompt framing changes what you learn

## What you'll learn

How the framing of a summarization prompt changes the research you get back, how to keep observation separate from interpretation, and how to triangulate across sources before you trust a pattern.

## What you start from

Everyone works from the same research pack in `premade/`: three interview transcripts and a questionnaire dataset, all about how people plan and catch buses today. This is the start of the course, so there's nothing to carry forward yet — you build from this shared pack.

A tension has been deliberately planted somewhere between the interviews and the questionnaire. You aren't told where. Finding it is part of the work.

## The two prompt styles

You'll run the same data through two styles of prompt and compare:

- **Generic:** "Summarize this interview."
- **Directed:** "Summarize this interview, focusing on how they catch the bus today, what frustrates them, and what they wish existed."

What to watch for:

- The generic prompt keeps your assumptions out of it and gives a low-bias first pass. It can also come back bland and skip the things that matter for your specific problem.
- The directed prompt gives sharper, more relevant output. It can also quietly fold your interpretation into something that still looks like a neutral summary, so a reader can't tell what the user actually said apart from what you were hoping to hear.

Neither style is the right one. The skill is knowing which mode you're in and choosing it on purpose.

## What you'll do

### The interviews

For each of the three interviews, work in a **single chat session** and go in this order:

1. Run the **generic** prompt and save the summary.
2. In the same chat, run the **directed** prompt and save that summary.
3. Then ask the model: **"Analyze the summaries and highlight the differences between them."** 

Keeping all three steps in one chat is what lets the model compare the two summaries directly in step 3.

### The questionnaire

Run the same three-step flow on the questionnaire dataset, in its own single chat session:

1. **Generic** — "Summarize this questionnaire." Save the summary.
2. **Directed** — in the same chat: "Summarize this questionnaire, focusing on what frustrates people about catching the bus today and what they most want improved." Save that summary.
3. Then ask the model: **"Analyze the summaries and highlight the differences between them."** Save what it says.

The questionnaire is the broad signal that the interviews get measured against, so summarize it as carefully as the interviews — don't treat it as a footnote.

### Then, across everything

- Ask the harder question of each summary: is this actually usable, and what did each style miss or add?
- **Choose your inputs.** For each source — each of the three interviews and the questionnaire — pick the *one* summary, generic or directed, that you'll carry into triangulation. Let the differences analysis guide the choice. You don't have to pick the same style for every source. You're committing to a framing here, and its bias travels forward, so choose on purpose and note why.
- **Triangulate.** Put your four chosen summaries into one chat and ask: **"Compare these summaries. Where do the sources agree, where do they conflict or point in different directions, and where are the gaps only one source raises? Cite the specific source for each point."**
- Then don't take that answer at face value. Check it against what you noticed yourself: did it surface a real conflict, or did it flatten everything into agreement? Did it lean on the most vivid interview? **You** name the central tension — the model's pass is a draft you interrogate. This is where the planted tension should surface.

## What you'll produce

- `interview-summaries.md` — for each interview, the generic summary, the directed summary, and the model's analysis of the differences between them, with quotes attributed to the source.
- `questionnaire-summary.md` — the generic summary of the questionnaire results, the directed summary, and the model's analysis of the differences between them.
- `triangulation.md` — where the interviews and the questionnaire agree, conflict, and leave gaps, with the central tension named.

Empty stub files for each of these are in this folder — fill them in as you go. As you write, keep what was said or measured separate from what you infer from it.

## What you'll take away

Prompt framing is a research-design decision you make before you read a word of the output. A generic prompt gives you a low-bias first pass that can read as bland. A directed prompt gives you relevance and can smuggle your assumptions into a summary that looks neutral. Decide which you want each time, keep observation and interpretation in separate columns, and confirm any pattern across more than one source before you trust it.

## Tool

Microsoft Copilot 365 chat (org-provided, no setup).
