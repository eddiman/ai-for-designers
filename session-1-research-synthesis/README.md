# Session 1: Research synthesis, and how prompt framing changes what you learn

## What you'll learn

How the framing of a summarization prompt changes the research you get back, and how to work raw research into something you can trust. You'll see three things first-hand: why each source belongs in its own chat, why working the data in small controlled steps beats one-shotting it, and how to triangulate across sources before you trust a pattern.

## What you start from

Everyone works from the same research pack in `research/`: three interview transcripts and a questionnaire dataset, all about how people plan and catch buses today. This is the start of the course, so there's nothing to carry forward yet. You build from this shared pack.

A tension has been deliberately planted somewhere between the interviews and the questionnaire. You aren't told where. Finding it is part of the work.

Before the session starts, download and extract the course ZIP, then open the whole `ai-for-designers-main` folder in VS Code. Keep VS Code open beside Microsoft 365 Copilot in your browser. You read and copy source material from `research/`, then paste and save your results in the empty Markdown files at the top of this session folder.

To preview a Markdown file, make the file's tab active and press **Cmd+Shift+V** on Mac or **Ctrl+Shift+V** on Windows. The preview is for reading. Return to the original `.md` tab to edit. If the shortcut does nothing, open the Command Palette with **Cmd+Shift+P** on Mac or **Ctrl+Shift+P** on Windows, type `Markdown: Open Preview`, and press Enter.

## What counts as done

**Core, for everyone:** both summaries and the differences analysis for all four sources, your chosen inputs recorded in `triangulation.md`, and the triangulation with the central tension named in your words. That is what Session 2 starts from.

**Stretch, if you get there:** run a third framing on one interview and note what it surfaced that the other two missed. The steps are under **Stretch: try a third framing** after step 4.

You are not behind if you finish the core and stop. The core is what this session asks for.

## The two prompt styles

You'll run the same data through two styles of prompt and compare:

- **Generic:** "Summarize this interview."
- **Directed:** "Summarize this interview, focusing on how they catch the bus today, what frustrates them, and what they wish existed."

What to watch for:

- The generic prompt keeps your assumptions out of it and gives a low-bias first pass. It can also come back bland and skip the things that matter for your specific problem.
- The directed prompt gives sharper, more relevant output. It can also quietly fold your interpretation into something that still looks like a neutral summary, so a reader can't tell what the user said apart from what you were hoping to hear.

Both styles are legitimate. The skill is knowing which mode you're in and choosing it on purpose.

## What you'll do

Follow two rules for the whole session:

1. **One source, one chat.** Summarize each interview, and the questionnaire, in its *own* fresh chat. Pouring several transcripts into one chat muddles the model's context, and you get answers you can't trust.
2. **Work the data in steps.** Each step where you shape the raw data yourself is a step where you keep control and can check the result.

> **The shortcut to avoid.** Pasting all three transcripts and the questionnaire into one chat and asking for everything in one go gives you something polished that you cannot check, because you never worked the data yourself. The steps below are slower on purpose, so you can judge each result before you build on it.

The work comes in four steps, and each one feeds the next. Finish a step before you start the next one.

---

## 1. Summarize the interviews

Do this step once for each of the three interviews in `research/`: Maja, Geir, and Sofie.

**Do this now**

1. Open a **fresh chat** and paste in (or attach) one transcript.
2. Run the **generic** prompt, and save the answer under that interview's **Generic summary** heading in `interview-summaries.md`:

> Summarize this interview.

3. In the *same* chat, run the **directed** prompt, and save the answer under **Directed summary**:

> Summarize this interview, focusing on how they catch the bus today, what frustrates them, and what they wish existed.

4. Still in the same chat, run the comparison prompt, and save the answer under **Differences analysis**:

> Analyze the summaries and highlight the differences between them.

5. Start a new chat before the next interview.

Do not choose between the two summaries yet. That choice comes in step 3, once all four sources are summarized.

**You are done when**

- Each interview was summarized in its own chat.
- `interview-summaries.md` has a generic summary, a directed summary, and a differences analysis under all three interviews.
- Quotes are attributed to the person who said them.

**Why this matters**

The comparison prompt works because both summaries are already in the chat, so the model can set them side by side. A new chat for each interview keeps the sources apart, which is the first rule above.

---

## 2. Summarize the questionnaire

**Do this now**

1. Open a **fresh chat** and paste in (or attach) `research/questionnaire-results.md`.
2. Run the **generic** prompt, and save the answer under **Generic summary** in `questionnaire-summary.md`:

> Summarize this questionnaire.

3. In the *same* chat, run the **directed** prompt, and save the answer under **Directed summary**:

> Summarize this questionnaire, focusing on what frustrates people about catching the bus today and what they most want improved.

4. Still in the same chat, run the comparison prompt, and save the answer under **Differences analysis**:

> Analyze the summaries and highlight the differences between them.

As with the interviews, do not choose between the summaries yet.

**You are done when**

- The questionnaire was summarized in its own chat, with no interview in it.
- `questionnaire-summary.md` has the generic summary, the directed summary, and the differences analysis.

**Why this matters**

The questionnaire is the broad signal that the interviews get measured against, so summarize it as carefully as the interviews. Treating it as a footnote is how a planted tension stays hidden.

---

## 3. Choose your inputs

**Do this now**

1. For each of the four sources, read the two summaries and the differences analysis. Ask whether each summary is usable, and what each style missed or added.
2. Open `triangulation.md` and find **Inputs I chose**.
3. For Maja, Geir, Sofie, and the questionnaire, pick the *one* summary, generic or directed, that you will carry into triangulation. Write the style next to **Chosen summary**. You don't have to pick the same style for every source.

**You are done when**

- All four entries under **Inputs I chose** name generic or directed.
- You have the four chosen summaries ready to paste into one chat.

**Why this matters**

You are committing to a framing here, and its bias travels forward into the triangulation and every later session. The record in `triangulation.md` shows which framing entered the triangulation.

---

## 4. Triangulate

This is the one place you deliberately combine sources in a single chat. It works because you're feeding in your *worked, vetted* summaries rather than four piles of raw transcript.

**Do this now**

1. Open a **fresh chat** and paste in your four chosen summaries.
2. Label each summary with its source, such as `Maja` or `Questionnaire`, so the model can cite the evidence. You don't need to say whether a summary is generic or directed, since `triangulation.md` already records that.
3. Run this prompt. Its four headings match `triangulation.md`, so you can check the answer and move it across section by section.

```text
Compare the four labelled summaries. Use exactly these headings:

## Agree
List patterns supported by at least two sources. Cite the sources for each point.

## Conflict
Find contradictions or different directions among interviews and between interviews and the questionnaire. Cite the sources. If none are supported, say so; do not invent one.

## Gaps
List issues raised by only one source or not measured elsewhere. Cite the source.

## The central tension
In one or two sentences, name the two competing directions in the evidence and cite the sources supporting each. Treat this as a draft I will check and revise.
```

4. Check the answer against what you noticed yourself. Did it surface a conflict, or did it flatten everything into agreement? Did it lean on the most vivid interview?
5. Fill in **Agree**, **Conflict**, and **Gaps** in `triangulation.md`, keeping the source citations. Then write **The central tension** in your own words.

**You are done when**

- **Agree**, **Conflict**, and **Gaps** in `triangulation.md` each cite their sources.
- **The central tension** is written in your words, and names the sources behind each side.

**Why this matters**

This is where the planted tension should surface. The model's pass is a draft, so you check it, and you name the central tension yourself.

---

## Stretch: try a third framing

The generic and directed prompts are two framings out of many. This task tries one more on a transcript you already know.

**Do this now**

1. Pick one interview and open a **fresh chat**.
2. Paste in that transcript, then the generic and directed summaries you saved for it, each labelled.
3. Run a third framing, or write your own:

> Summarize this interview, focusing on what already works for them when they catch the bus today, and what they would not want to lose.

4. In the same chat, compare it with the earlier two:

> Compare this summary with the generic and directed summaries I pasted. What does it surface that they missed, and what does it leave out?

5. Save the summary and the comparison under **Stretch: a third framing** at the bottom of `interview-summaries.md`, with the interview and the prompt you used.
6. Add a sentence or two in your own words: what did this framing surface, and would it have changed which summary you carried forward?

Leave your chosen inputs and your triangulation as they are, since Session 2 reads those files as they stand.

**You are done when**

- `interview-summaries.md` has a stretch section with the third summary, the comparison, and your note.
- Your note names something the third framing surfaced that the other two missed, or says that it surfaced nothing new.

**Why this matters**

A third framing on the same transcript shows how much of a summary comes from the wording of the prompt. That is the session's main lesson, tested on a framing you chose yourself.

---

## What you'll produce

- `interview-summaries.md` holds, for each interview, the generic summary, the directed summary, and the model's analysis of the differences between them, with quotes attributed to the source.
- `questionnaire-summary.md` holds the generic summary of the questionnaire results, the directed summary, and the model's analysis of the differences between them.
- `triangulation.md` holds where the interviews and the questionnaire agree, conflict, and leave gaps, with the central tension named.

Empty stub files for each of these are in this folder, so fill them in as you go. As you write, keep what was said or measured separate from what you infer from it.

## What you'll take away

Three things to leave with:

1. **One problem, one chat.** Keep separate problems in separate chat sessions. Mixing several sources or questions into one context confuses the model and produces confident answers that are quietly wrong. A fresh chat per source is how you keep the model's context clean.

2. **The more you work the raw data, the more you control it, and the more trustworthy the result.** You can only trust a summary you can trace back: to the source quotes, to the framing you chose, and to the other sources that agree or conflict with it. The more steps you work, asking, reading, proposing a change, asking again, the better you understand the material, and the better the AI can help you.

3. **Prompt framing is a research-design decision** you make before you read a word of the output. A generic prompt gives a low-bias first pass that can read as bland. A directed prompt gives relevance, and it can smuggle your assumptions into a summary that looks neutral. Decide which you want each time, keep observation and interpretation apart, and confirm any pattern across more than one source before you trust it.

## Tool

Microsoft 365 Copilot chat in the browser, plus VS Code for reading the research files and saving your work. Complete the guided setup in Session 0 before this session starts.
