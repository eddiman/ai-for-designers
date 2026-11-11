# AI for Designers

A course that teaches UI, UX and Service designers to use AI across one project, from raw research to a built MVP. All four sessions work the same scenario, helping people catch the bus. Session 1 starts from interviews and a questionnaire about how people plan and catch buses today, and in Session 4 each participant builds and verifies the first part of a bus-app MVP from the decisions they made along the way.

The three roles take the course together in the same room, with no separate tracks, so each role sees the whole flow from research to build. The sessions run about 60 to 90 minutes each, two weeks apart, and Sessions 3 and 4 may need more time.

## The four sessions

| Session | What you do | What you leave with |
|---|---|---|
| **1. Research synthesis** | Summarize three interviews and a questionnaire with two prompt framings, compare the results, then triangulate across the sources | Interview and questionnaire summaries, and a triangulation note with the central tension named |
| **2. Problem definition and personas** | Distil key insights, commit to one problem, and create personas grounded in the evidence | A design brief packet: key insights, a problem definition and personas |
| **3. Prototyping and a persona UX review** | Generate three prototype directions in Figma Make, then review them in character as your personas | Three directions in Figma, a written app flow, and a prioritized UX review |
| **4. Knowledge base and an MVP build** | Build a project knowledge base, write a spec and a build plan, then build and verify one increment of the app | A knowledge base and one verified increment of the bus-app MVP |

Each session starts from the files the previous one produced. Session 2 works from your Session 1 summaries, Session 3 attaches your Session 2 brief packet to Figma Make, and Session 4 builds its knowledge base from everything before it. For that reason all work is saved as Markdown files, since a later tool can read a file but cannot see what was said in an earlier chat.

## Taking the course

The on-screen deck is published at **https://ai-for-designers.netlify.app**. Start with the Introduction and Session 0 on its home page. Session 0 is a guided setup run at the start of Session 1, and it takes you through these checks one exercise at a time:

1. Select **Download course files (.zip)** on the deck's home page and extract the ZIP.
2. In VS Code, choose **File → Open Folder...** and open the whole `ai-for-designers-main` folder. Later sessions read the files you made in earlier ones, so open the course folder rather than a single session folder.
3. Check that you can edit, save and preview a Markdown file, and that Microsoft 365 Copilot answers in your browser.

For each session, open the `README.md` in that session's folder. It splits the session into numbered exercises, and each exercise into steps, with the prompts to paste and what counts as done. You save your work in the files at the top of the session folder, which start out as templates with headings and nothing else. Those files stay on your machine.

### If you miss a session

Sessions 2, 3 and 4 each have a `premade/` folder with finished versions of the previous session's files. If you missed the session before, start from those and continue with the rest of the room. Session 1 has no `premade/` folder, since everyone starts from the same research pack in `research/`.

### Tools for each session

| Session | You need |
|---|---|
| 1 and 2 | VS Code, and Microsoft 365 Copilot chat in the browser |
| 3 | The Figma desktop app, Figma Make, a Figma file you can edit, and GitHub Copilot in VS Code. Figma's local MCP server is set up together at the start of the session. |
| 4 | VS Code with GitHub Copilot in Agent mode. The app is plain HTML, CSS and JavaScript, so there is nothing else to install. |

Sessions 3 and 4 depend on GitHub Copilot. If you work on a customer project, first find out whether you can get AI access through the customer. If you cannot, apply for GitHub Copilot through a BSD application as soon as the course is announced, so the access is in place before Session 3.

## What is in the repository

### Inside each session folder

| Item | What it contains |
|---|---|
| `README.md` | The instructions for participants: the exercises and their steps, the prompts and what counts as done |
| Files at the top of the folder | Templates where you save your work, such as `interview-summaries.md` in Session 1 |
| `research/` | Session 1 only. The three interview transcripts and the questionnaire results that everyone works from. Read and copy from them, and leave them unchanged. |
| `premade/` | Sessions 2 to 4. Finished versions of the previous session's files, for anyone who missed it |
| `facilitator/` | Notes for whoever runs the session: the run of show, the recap, and what each exercise is designed to surface. Session 4's `facilitator/reference-build/` is a complete worked run of that session, app included. |

If you are taking the course, leave the `facilitator/` folders until after the session. They describe what the exercises are designed to surface, including where the tension in the Session 1 research sits, and finding that yourself is part of the work.

### The rest of the repository

| Path | What it contains |
|---|---|
| `ai-for-designers-v1.4.md` | The course plan: what each session does, why, and what changed between versions. It is the source of truth for the course design. |
| `archive/` | The earlier versions of the plan, v1.2 and v1.3 |
| `presentation/` | The on-screen deck: a home page, the Introduction, Session 0 and one deck per session |
| `kb-prompt.md` | A general prompt for installing a knowledge base in any repository. Participants do not use it, since it creates `kb/` at the repository root and edits the root `AGENTS.md`. Session 4 has its own setup prompt in the session `README.md`. |
| `AGENTS.md` | Instructions for anyone editing the course material, coding agents included, with the writing rules every file follows |
| `netlify.toml` | Tells Netlify to publish `presentation/` and nothing else |

## The presentation

The decks are plain HTML, CSS and JavaScript with no build step, so opening `presentation/index.html` in a browser runs them locally. Netlify republishes https://ai-for-designers.netlify.app from `presentation/` on every push to `main`. `presentation/README.md` covers the keyboard controls, links to a single slide, and how the slide content is edited.

## Changing the course material

The download button on the deck's home page fetches GitHub's ZIP of the `main` branch, so a push to `main` changes both the published deck and the files participants download.

- Each session `README.md` and its deck in `presentation/content/` follow the same exercises and steps, so a change to a step in one needs the same change in the other. The deck gives every step its own slide.
- When the course design changes, save the plan under a new version number, move the previous version to `archive/`, and update the file name where `AGENTS.md` and this README refer to it.
- Keep participant work out of commits. The template files must stay empty in the repository, and the `kb/` and `app/` folders that Session 4 creates must not be added. If you work through a session yourself, leave those changes unstaged.
- Follow the writing rules in `AGENTS.md`. They apply to the READMEs, the facilitator notes and the slides, with two exceptions: prompt bodies are worded for the tool they are pasted into, and the interview transcripts and questionnaire results stay exactly as they are.
