# Session 1 — Research synthesis: how prompt framing changes what you learn

## What you'll learn

How the framing of a summarization prompt changes the research you get back, and how to work raw research into something you can actually trust. You'll see three things first-hand: why each source belongs in its own chat, why working the data in small controlled steps beats one-shotting it, and how to triangulate across sources before you trust a pattern.

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

Two rules hold for the whole session:

1. **One source, one chat.** Summarize each interview, and the questionnaire, in its *own* fresh chat. Don't pour several transcripts into one chat — mixing sources muddles the model's context and you get answers you can't trust.
2. **Work the data in steps.** Each step where you shape the raw data yourself is a step where you keep control and can check the result. The shortcuts feel faster but hand the judgement to the model (see the warning below).

> **The shortcut to avoid.** It's tempting to paste all three transcripts and the questionnaire into one chat and ask it to summarize, prioritize, and lay everything out in one go. You'll get something that looks polished — but you won't know if it's the right cut, or whether the summaries hold up, because you never worked the data yourself. That's relevance with no way to trust it. The steps below are slower on purpose: they're what let you judge whether the output has any merit.

### The interviews

For each of the three interviews, open a **fresh chat**, paste in (or attach) that one transcript, and go in this order:

1. Run the **generic** prompt and save the summary.
2. In the *same* chat, run the **directed** prompt and save that summary.
3. Then ask the model: **"Analyze the summaries and highlight the differences between them."** Save what it says.

Keeping all three steps in one chat is what lets the model compare the two summaries directly in step 3. Start a new chat before you move to the next interview.

### The questionnaire

Run the same three-step flow on the questionnaire dataset, in its own single chat session:

1. **Generic** — "Summarize this questionnaire." Save the summary.
2. **Directed** — in the same chat: "Summarize this questionnaire, focusing on what frustrates people about catching the bus today and what they most want improved." Save that summary.
3. Then ask the model: **"Analyze the summaries and highlight the differences between them."** Save what it says.

The questionnaire is the broad signal that the interviews get measured against, so summarize it as carefully as the interviews — don't treat it as a footnote.

### Then, across everything

- Ask the harder question of each summary: is this actually usable, and what did each style miss or add?
- **Choose your inputs.** For each source — each of the three interviews and the questionnaire — pick the *one* summary, generic or directed, that you'll carry into triangulation. Let the differences analysis guide the choice. You don't have to pick the same style for every source. You're committing to a framing here, and its bias travels forward, so choose on purpose and note why.
- **Triangulate.** This is the one place you deliberately combine sources in a single chat — and it works precisely because you're feeding in your *worked, vetted* summaries, not four piles of raw transcript. Put your four chosen summaries into one fresh chat and ask: **"Compare these summaries. Where do the sources agree, where do they conflict or point in different directions, and where are the gaps only one source raises? Cite the specific source for each point."**
- Then don't take that answer at face value. Check it against what you noticed yourself: did it surface a real conflict, or did it flatten everything into agreement? Did it lean on the most vivid interview? **You** name the central tension — the model's pass is a draft you interrogate. This is where the planted tension should surface.

## What you'll produce

- `interview-summaries.md` — for each interview, the generic summary, the directed summary, and the model's analysis of the differences between them, with quotes attributed to the source.
- `questionnaire-summary.md` — the generic summary of the questionnaire results, the directed summary, and the model's analysis of the differences between them.
- `triangulation.md` — where the interviews and the questionnaire agree, conflict, and leave gaps, with the central tension named.

Empty stub files for each of these are in this folder — fill them in as you go. As you write, keep what was said or measured separate from what you infer from it.

## What you'll take away

Three things to leave with:

1. **One problem, one chat.** Keep separate problems in separate chat sessions. Mixing several sources or questions into one context confuses the model and produces confident answers that are quietly wrong. A fresh chat per source is how you keep the model's context clean.

2. **The more you work the raw data, the more you control it — and the better and more trustworthy the result.** Every step you take yourself (generic pass, directed pass, comparing them, choosing one, cross-referencing) is a step where *you* stay in charge and can check the output. Asking the model to summarize, prioritize, and lay everything out in one shot feels efficient, but it hands all of that judgement over — and leaves you with no way to tell whether the answer has any merit. You can only trust a summary you can trace back: to the source quotes, to the framing you chose, to the other sources that agree or conflict with it. Worked-in-steps is checkable; one-shot is not.

3. **Prompt framing is a research-design decision** you make before you read a word of the output. A generic prompt gives a low-bias first pass that can read as bland. A directed prompt gives relevance and can smuggle your assumptions into a summary that looks neutral. Decide which you want each time, keep observation and interpretation apart, and confirm any pattern across more than one source before you trust it.

## Tool

Microsoft Copilot 365 chat (org-provided, no setup).
