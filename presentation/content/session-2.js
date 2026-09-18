window.DECKS = window.DECKS || {};

window.DECKS["session-2"] = [
  {
    kind: "cover",
    eyebrow: "Session 2",
    title: "From summaries to a problem definition and personas",
    lead: "Turn synthesized research into a design brief packet the downstream tools can read.",
    meta: ["Microsoft Copilot 365 chat", "session-2-problem-definition-and-personas/"]
  },

  {
    kind: "statement",
    eyebrow: "What this session is about",
    text: "Three artifacts: the key insights, *one* committed problem definition, and a small set of evidence-grounded personas. Saved as clean files, because everything later reads them."
  },

  {
    kind: "list",
    eyebrow: "What you start from",
    title: "Your worked evidence",
    lead: "If you were here for Session 1, continue from your own work. If you missed it, the premade versions in `premade/` are ready to use as they are.",
    items: [
      { label: "Your triangulation note", text: "the main input, since it already did the cross-source combining" },
      { label: "Your chosen summaries", text: "the one version you carried forward per source, so you can pull specific quotes" }
    ],
    callout: {
      tone: "go",
      title: "Combining sources in one chat is fine now",
      text: "“One source, one chat” was about keeping *raw* sources apart. Everything here is already worked and vetted, so you are past that stage."
    }
  },

  {
    kind: "table",
    eyebrow: "How you'll work",
    title: "Two ways to structure the chats",
    lead: "Both are valid. Choose deliberately.",
    cols: ["", "One chat for all three", "Fresh chat per activity"],
    rows: [
      ["For", "The thread carries: insights feed the problem, the problem feeds the personas", "Clean context each time, so each task reads the evidence fresh"],
      ["For", "Fewer restarts and less re-pasting", "Forces you to re-state what you carry forward, which sharpens it"],
      ["Against", "Context piles up, and the red-team argument can anchor your personas to it", "You have to re-attach the evidence and paste in what you are building on"]
    ]
  },

  {
    kind: "statement",
    eyebrow: "Whichever you pick",
    text: "The more steps you work yourself (ask, read, propose a change, ask again), the better you understand the material, and the better the AI can help you. The chat structure is plumbing around that loop."
  },

  {
    kind: "step",
    n: 1,
    title: "Key insights",
    lead: "Distil the triangulation note and your chosen summaries into the handful of insights the rest of the course builds on.",
    doItems: [
      "Attach the triangulation note and your chosen summaries.",
      "Ask for **3–5 key insights**, each with its evidence cited.",
      "Label each one **observed** (said or measured) or **inferred**.",
      "Save to `key-insights.md`."
    ],
    doneItems: [
      "Three to five insights, no more",
      "Every one cites specific evidence",
      "Observation and inference are labelled apart"
    ],
    why: "These are the portable takeaways everything downstream references. They scope the problem definition here, and in Sessions 3–4 they feed the prototypes and the knowledge base."
  },

  {
    kind: "prompt",
    eyebrow: "Step 1",
    title: "Key insights",
    text:
      "From the triangulation note and summaries, give me the 3–5 key insights that\nshould drive the design. For each, cite the specific evidence and label it as\nobserved (said or measured) or inferred.",
    note: "The insights are a separate step from the triangulation. The triangulation maps where sources agree and conflict, and the insights are the committed takeaways you pull out of it."
  },

  {
    kind: "step",
    n: 2,
    title: "Problem definition",
    lead: "Generate framings, rank them by evidence, commit to one, then red-team it.",
    doItems: [
      "Generate **5 candidate framings**, each with a How-Might-We and its evidence.",
      "Rank them by how much of *your* evidence supports each.",
      "**Commit to one.** Write it as a single clear statement plus its How-Might-We.",
      "Ask the model to argue your pick is the wrong problem to solve first.",
      "Write your own reply to that argument."
    ],
    doneItems: [
      "One problem, picked from the ranked list",
      "The framings you rejected, and why",
      "The red-team argument and *your* response to it"
    ],
    why: "You cannot design for everything. Ranking by evidence makes the choice defensible rather than a hunch, and the single committed problem is what scopes Session 3."
  },

  {
    kind: "prompt",
    eyebrow: "Step 2: three prompts in sequence",
    title: "Generate, rank, red-team",
    text:
      "Generate 5 candidate problem framings for what to solve first, each with a\nHow-Might-We statement and the evidence that supports it.\n\nRank these by how much of my evidence actually supports each one. Cite the\nspecific source for each.\n\nArgue why the problem I picked is the wrong one to solve first."
  },

  {
    kind: "list",
    eyebrow: "Step 2, your reply to the critique",
    title: "Write your own response to the red-team",
    lead: "*Red-teaming* borrows a term from security: a red team attacks a plan to expose its weaknesses. Here the AI is your red team.",
    items: [
      "Do you concede and re-scope the problem?",
      "Or do you hold your ground, and on what evidence?",
      "**That reply is the judgement this step trains.** Pasting the critique and moving on defeats the purpose."
    ],
    callout: {
      title: "Narrowing is the point",
      text: "“Commit to a single problem” means picking one framing from the ranked list, rather than blending three of them or keeping all of the above."
    }
  },

  {
    kind: "step",
    n: 3,
    title: "Personas",
    lead: "Create **2–3 personas**, each grounded in specific evidence, each labelled as a hypothesis.",
    doItems: [
      "Ask for 2–3 personas from your evidence and the committed problem.",
      "Ground each in specific interview or questionnaire signals.",
      "Label each as a hypothesis and note what you still do not know.",
      "Save to `personas.md`."
    ],
    doneItems: [
      "Each persona draws on more than one source",
      "Each is labelled a hypothesis, with its open questions",
      "None of them is one interviewee with a new name"
    ],
    why: "Session 3 runs a UX review *in character as these personas*. You will be making design calls in their voice, so each one has to be tied to evidence."
  },

  {
    kind: "prompt",
    eyebrow: "Step 3",
    title: "Personas",
    text:
      "From this evidence and the committed problem, propose 2–3 personas. Ground\neach in specific interview or questionnaire signals, label each as a\nhypothesis, and note what we still don't know about them.",
    note: "Use the split the triangulation named: the power user who wants a proactive assistant, and the simplicity-first rider who wants reliable basics."
  },

  {
    kind: "table",
    eyebrow: "What you'll produce",
    title: "A design brief packet",
    lead: "Three files the rest of the course consumes, in the order you produce them.",
    cols: ["File", "Holds"],
    rows: [
      ["`key-insights.md`", "3–5 insights, each anchored in evidence and labelled observed or inferred"],
      ["`problem-definition.md`", "The single committed problem, the rejected candidates, the red-team argument, and your response"],
      ["`personas.md`", "2–3 evidence-grounded personas, each labelled as a hypothesis"]
    ],
    note: "Plain markdown with clean headings and short bullets, so they attach cleanly to Figma Make and Copilot in Session 3."
  },

  {
    kind: "statement",
    eyebrow: "What you'll take away",
    text: "AI produces framings and personas quickly, and each one needs an evidence anchor and a hypothesis label before you rely on it. You pick the problem and the personas to commit to."
  },

  {
    kind: "cover",
    eyebrow: "Next",
    title: "Session 3",
    lead: "Prototyping with Figma Make, then a UX review in character as the personas you just wrote.",
    meta: ["Bring all three files", "Premade versions exist if you miss a session"]
  }
];
