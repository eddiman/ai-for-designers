window.DECKS = window.DECKS || {};

window.DECKS["session-1"] = [
  {
    kind: "cover",
    eyebrow: "Session 1",
    title: "Research synthesis",
    lead: "How the framing of a summarization prompt changes the research you get back.",
    meta: ["Microsoft Copilot 365 chat", "No setup needed", "session-1-research-synthesis/"]
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
    lead: "Everyone works from the same material in `premade/`. There is nothing to carry forward yet, since this is where the project begins.",
    items: [
      { label: "Three interviews", text: "transcripts about how people plan and catch buses today" },
      { label: "One questionnaire", text: "the broad signal the interviews get measured against" }
    ],
    callout: {
      tone: "stop",
      title: "A tension has been planted",
      text: "Somewhere between the interviews and the questionnaire, the evidence disagrees with itself. You are not told where. Finding it is part of the work."
    }
  },

  {
    kind: "table",
    eyebrow: "The method",
    title: "Two prompt styles, same data",
    cols: ["Style", "The prompt", "What it gives you"],
    rows: [
      ["Generic", "“Summarize this interview.”", "A low-bias first pass that keeps your assumptions out. Can come back bland and skip what matters to your problem."],
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
    title: "These hold for the whole session",
    ordered: true,
    items: [
      { label: "One source, one chat.", text: "Summarize each interview, and the questionnaire, in its own fresh chat. Mixing sources muddles the context and you get answers you cannot trust." },
      { label: "Work the data in steps.", text: "Every step where you shape the raw data yourself is a step where you keep control and can check the result." }
    ]
  },

  {
    kind: "statement",
    eyebrow: "The shortcut to avoid",
    text: "Pasting everything into one chat and asking it to summarize, prioritize and lay it all out gives you something polished that you have no way to trust.",
    callout: {
      tone: "stop",
      title: "Why the steps below are slower on purpose",
      text: "You never worked the data, so you cannot tell whether it is the right cut of it, and you have no way to check."
    }
  },

  {
    kind: "step",
    n: 1,
    title: "The interviews",
    lead: "For each of the three interviews, open a **fresh chat**, paste in that one transcript, and go in this order.",
    doItems: [
      "Run the **generic** prompt. Save the summary.",
      "In the *same* chat, run the **directed** prompt. Save that summary.",
      "Ask: “Analyze the summaries and highlight the differences between them.” Save what it says.",
      "Start a new chat before the next interview."
    ],
    doneItems: [
      "Three interviews, three separate chats",
      "Both summaries plus the differences analysis saved for each",
      "Quotes attributed to their source"
    ],
    why: "Keeping all three steps in one chat is what lets the model compare the two summaries directly in step 3."
  },

  {
    kind: "prompt",
    eyebrow: "Step 3 of each chat",
    title: "The comparison prompt",
    text: "Analyze the summaries and highlight the differences between them.",
    note: "Read this one out loud. This is the step that shows what the framing did to the summary."
  },

  {
    kind: "step",
    n: 2,
    title: "The questionnaire",
    lead: "The same three-step flow, in its own single chat.",
    doItems: [
      "**Generic**: “Summarize this questionnaire.”",
      "**Directed**: “…focusing on what frustrates people about catching the bus today and what they most want improved.”",
      "Then the same differences analysis."
    ],
    doneItems: [
      "`questionnaire-summary.md` holds both summaries and the analysis",
      "You treated it as carefully as an interview"
    ],
    why: "The questionnaire is the broad signal the interviews get measured against. Treating it as a footnote is how a planted tension stays hidden."
  },

  {
    kind: "step",
    n: 3,
    title: "Choose your inputs",
    lead: "For each of the four sources, pick the *one* summary you carry forward.",
    doItems: [
      "Ask of each summary: is this usable, and what did each style miss or add?",
      "Pick generic or directed for each source; they do not all have to match.",
      "Note why you picked it."
    ],
    doneItems: [
      "Four chosen summaries, one per source",
      "A written reason for each choice"
    ],
    why: "You are committing to a framing here, and its bias travels forward into every later session."
  },

  {
    kind: "step",
    n: 4,
    title: "Triangulate",
    lead: "The one place you deliberately combine sources in a single chat, because what you feed in has been worked and vetted rather than pasted in raw.",
    doItems: [
      "Put your four chosen summaries into one fresh chat.",
      "Run the triangulation prompt.",
      "Check the answer against what *you* noticed."
    ],
    doneItems: [
      "Agreements, conflicts and gaps written down with sources cited",
      "The central tension named, in your words",
      "`triangulation.md` filled in"
    ],
    why: "This is where the planted tension should surface. The model's pass is a draft you interrogate."
  },

  {
    kind: "prompt",
    eyebrow: "Step 4",
    title: "The triangulation prompt",
    text:
      "Compare these summaries. Where do the sources agree, where do they conflict\nor point in different directions, and where are the gaps only one source\nraises? Cite the specific source for each point."
  },

  {
    kind: "list",
    eyebrow: "Then push back",
    title: "Do not take that answer at face value",
    items: [
      "Did it surface an actual conflict, or flatten everything into agreement?",
      "Did it lean on the most vivid interview?",
      "**You** name the central tension. Letting the model have the last word defeats the step."
    ]
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
    eyebrow: "Next",
    title: "Session 2",
    lead: "From summaries to a problem definition and personas. You will bring your triangulation note and your four chosen summaries.",
    meta: ["Your files carry forward", "Premade versions exist if you miss a session"]
  }
];
