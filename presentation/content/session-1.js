window.DECKS = window.DECKS || {};

window.DECKS["session-1"] = [
  {
    kind: "cover",
    eyebrow: "Session 1",
    title: "Research synthesis",
    lead: "How the framing of a summarization prompt changes the research you get back.",
    meta: ["Microsoft 365 Copilot chat", "VS Code workspace", "session-1-research-synthesis/"]
  },

  {
    kind: "statement",
    eyebrow: "What this session is about",
    text: "Three things, first-hand: why each source belongs in its own chat, why small controlled steps beat one-shotting, and how to triangulate before you trust a pattern."
  },

  {
    kind: "list",
    eyebrow: "What you start from",
    title: "One shared research pack",
    lead: "Everyone works from the same material in `research/`. There is nothing to carry forward yet, since this is where the project begins.",
    items: [
      { label: "Three interviews", text: "transcripts about how people plan and catch buses today" },
      { label: "One questionnaire", text: "the broad signal the interviews get measured against" }
    ],
  },

  {
    kind: "list",
    eyebrow: "What counts as done",
    title: "Core, and stretch",
    items: [
      { label: "Core, for everyone:", text: "both summaries and the differences analysis for all four sources, your chosen inputs, and the triangulation with the central tension named." },
      { label: "Stretch, if you get there:", text: "run a third framing on one interview and note what it surfaced that the other two missed. The steps are in the session README." }
    ],
    callout: {
      tone: "go",
      title: "The core is what Session 2 starts from",
      text: "You are not behind if you finish the core and stop."
    }
  },

  {
    kind: "table",
    eyebrow: "The method",
    title: "Two prompt styles, same data",
    cols: ["Style", "The prompt", "What it gives you"],
    rows: [
      ["Generic", "“Summarize this interview.”", "A low-bias first pass that keeps your assumptions out. Can come back bland and leave out details specific to your problem."],
      ["Directed", "“…focusing on how they catch the bus today, what frustrates them, and what they wish existed.”", "Sharper and more relevant. Can fold your interpretation into something that still looks neutral."]
    ]
  },

  {
    kind: "statement",
    eyebrow: "The point",
    text: "Both styles are legitimate. The skill is knowing which mode you are in, and choosing it *on purpose*."
  },

  {
    kind: "list",
    eyebrow: "Two rules",
    title: "Follow these for the whole session",
    ordered: true,
    items: [
      { label: "One source, one chat.", text: "Summarize each interview, and the questionnaire, in its own fresh chat. Mixing sources muddles the context and you get answers you cannot trust." },
      { label: "Work the data in steps.", text: "Every step where you shape the raw data yourself is a step where you keep control and can check the result." }
    ],
    note: "The shortcut to avoid: pasting everything into one chat and asking for it all at once gives you something polished that you cannot check."
  },

  {
    kind: "exercise",
    n: 1,
    title: "Summarize the interviews",
    lead: "Do this exercise once for each of the three interviews in `research/`: Maja, Geir, and Sofie.",
    steps: [
      {
        title: "Open a fresh chat",
        text: "Open a **fresh chat** and paste in one transcript."
      },
      {
        title: "Run the generic prompt",
        text: "Save the answer under that interview's **Generic summary** heading in `interview-summaries.md`.",
        prompt: "Summarize this interview."
      },
      {
        title: "Run the directed prompt",
        text: "Run it in the *same* chat, and save the answer under **Directed summary**.",
        prompt: "Summarize this interview, focusing on how they catch the bus today, what frustrates them, and what they wish existed."
      },
      {
        title: "Compare the two summaries",
        text: "Run it in the same chat as the two summaries, and save the answer under **Differences analysis**.",
        prompt: "Analyze the summaries and highlight the differences between them."
      },
      {
        title: "Start a new chat for the next interview",
        text: "Start a new chat before the next interview, and go back to step 1.",
        note: "Do not choose between the two summaries yet. That choice comes in exercise 3, once all four sources are summarized."
      }
    ],
    doneItems: [
      "Three interviews, three separate chats",
      "Both summaries plus the differences analysis saved for each",
      "Quotes attributed to their source"
    ],
    why: "The comparison prompt works because both summaries are already in the chat. A new chat for each interview keeps the sources apart."
  },

  {
    kind: "exercise",
    n: 2,
    title: "Summarize the questionnaire",
    lead: "The same three prompts, in a chat of its own.",
    steps: [
      {
        title: "Open a fresh chat",
        text: "Open a **fresh chat** and paste in `research/questionnaire-results.md`."
      },
      {
        title: "Run the generic prompt",
        text: "Save the answer under **Generic summary** in `questionnaire-summary.md`.",
        prompt: "Summarize this questionnaire."
      },
      {
        title: "Run the directed prompt",
        text: "Run it in the *same* chat, and save the answer under **Directed summary**.",
        prompt: "Summarize this questionnaire, focusing on what frustrates people about catching the bus today and what they most want improved."
      },
      {
        title: "Compare the two summaries",
        text: "Run it in the same chat as the two summaries, and save the answer under **Differences analysis**.",
        prompt: "Analyze the summaries and highlight the differences between them.",
        note: "As with the interviews, do not choose between the summaries yet."
      }
    ],
    doneItems: [
      "`questionnaire-summary.md` holds both summaries and the analysis",
      "The questionnaire had its own chat, with no interview in it"
    ],
    why: "The questionnaire is the broad signal the interviews get measured against. Treating it as a footnote is how a planted tension stays hidden."
  },

  {
    kind: "exercise",
    n: 3,
    title: "Choose your inputs",
    lead: "For each of the four sources, pick the *one* summary you carry forward.",
    steps: [
      {
        title: "Read both summaries for each source",
        text: "For each of the four sources, read the two summaries and the differences analysis. Ask whether each summary is usable, and what each style missed or added."
      },
      {
        title: "Open Inputs I chose",
        text: "Open `triangulation.md` and find **Inputs I chose**."
      },
      {
        title: "Pick one summary per source",
        text: "For Maja, Geir, Sofie, and the questionnaire, pick the *one* summary, generic or directed, that you will carry into triangulation. Write the style next to **Chosen summary**. The four do not have to match."
      }
    ],
    doneItems: [
      "All four entries under **Inputs I chose** name generic or directed",
      "You have the four chosen summaries ready to paste into one chat"
    ],
    why: "You are committing to a framing here, and its bias travels forward into every later session."
  },

  {
    kind: "exercise",
    n: 4,
    title: "Triangulate",
    lead: "The one place you deliberately combine sources in a single chat, because what you feed in has been worked and vetted rather than pasted in raw.",
    steps: [
      {
        title: "Paste in your four chosen summaries",
        text: "Open a **fresh chat** and paste in your four chosen summaries."
      },
      {
        title: "Label each summary",
        text: "Label each summary with its source, such as `Maja` or `Questionnaire`, so the model can cite the evidence. You don't need to say whether a summary is generic or directed."
      },
      {
        title: "Run the triangulation prompt",
        text: "Its four headings match `triangulation.md`, so you can check the answer and move it across section by section.",
        prompt: "Compare the four labelled summaries. Use exactly these headings:\n\n## Agree\nList patterns supported by at least two sources. Cite the sources for each point.\n\n## Conflict\nFind contradictions or different directions among interviews and between interviews and the questionnaire. Cite the sources. If none are supported, say so; do not invent one.\n\n## Gaps\nList issues raised by only one source or not measured elsewhere. Cite the source.\n\n## The central tension\nIn one or two sentences, name the two competing directions in the evidence and cite the sources supporting each. Treat this as a draft I will check and revise."
      },
      {
        title: "Check the answer",
        text: "Check the answer against what *you* noticed.",
        items: [
          "Did it surface a conflict, or flatten everything into agreement?",
          "Did it lean on the most vivid interview?"
        ]
      },
      {
        title: "Fill in triangulation.md",
        text: "Fill in **Agree**, **Conflict**, and **Gaps** in `triangulation.md`, keeping the source citations. Then write **The central tension** in your own words.",
        callout: {
          title: "You name the central tension",
          text: "Letting the model have the last word defeats the exercise."
        }
      }
    ],
    doneItems: [
      "Agreements, conflicts and gaps written down with sources cited",
      "The central tension named, in your words",
      "`triangulation.md` filled in"
    ],
    why: "This is where the planted tension should surface. The model's pass is a draft you interrogate."
  },

  {
    kind: "table",
    eyebrow: "What you'll produce",
    title: "Three files, filled in as you go",
    cols: ["File", "Holds"],
    rows: [
      ["`interview-summaries.md`", "Per interview: the generic summary, the directed summary, and the differences analysis, with quotes attributed"],
      ["`questionnaire-summary.md`", "The same three things for the questionnaire results"],
      ["`triangulation.md`", "Where sources agree, conflict and leave gaps, with the central tension named"]
    ],
    note: "Empty stubs are already in the session folder. Keep what was said or measured separate from what you infer from it."
  },

  {
    kind: "list",
    eyebrow: "What you'll take away",
    title: "Three things to leave with",
    ordered: true,
    items: [
      { label: "One problem, one chat.", text: "Mixing sources or questions into one context produces confident answers that are quietly wrong." },
      { label: "The more you work the raw data, the more you control it.", text: "You can only trust a summary you can trace back: to the source quotes, to the framing you chose, and to the sources that agree or conflict." },
      { label: "Prompt framing is a research-design decision.", text: "You make it before you read a word of the output. Decide which mode you want each time." }
    ]
  },

  {
    kind: "cover",
    session: "session-2",
    eyebrow: "Next",
    title: "Session 2",
    lead: "From summaries to a problem definition and personas. Session 2 starts from your triangulation note and the summaries you chose.",
    meta: ["Your files carry forward", "Premade versions exist if you miss a session"]
  }
];
