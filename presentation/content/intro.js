window.DECKS = window.DECKS || {};

window.DECKS["intro"] = [
  {
    kind: "cover",
    eyebrow: "Welcome",
    title: "AI for Designers",
    lead: "Using AI across one project, from raw research through to a built MVP.",
    meta: ["Four sessions", "UI · UX · Service, same room", "Bring a laptop"]
  },

  {
    kind: "statement",
    eyebrow: "The premise",
    text: "This course runs *one project* end to end, so what you leave with is a workflow you have used yourself, on research material that disagrees with itself the way research usually does."
  },

  {
    kind: "list",
    eyebrow: "The project",
    title: "Helping people catch the bus",
    lead: "Every session works the same problem, so each step continues the one before it.",
    items: [
      { label: "Session 1", text: "you get three interviews and a questionnaire about how people catch buses today" },
      { label: "By Session 4", text: "you have a working app built from what that research told you" },
      { label: "In between", text: "every artifact you make becomes the input to the next step" }
    ],
    callout: {
      tone: "go",
      title: "Why a shared scenario",
      text: "Nobody spends the session explaining their own project. The problem is the same for everyone, so the conversation stays on the method."
    }
  },

  {
    kind: "map",
    eyebrow: "The four sessions",
    title: "One thread",
    steps: ["research synthesis", "problem and personas", "prototypes and review", "knowledge base and build"]
  },

  {
    kind: "table",
    eyebrow: "The four sessions",
    title: "What each one leaves you with",
    cols: ["Session", "You do", "You leave with"],
    rows: [
      ["1", "Work raw research with AI, two prompt framings, then triangulate", "Summaries and a triangulation note with the central tension named"],
      ["2", "Distil insights, commit to one problem, build personas", "A design brief packet: insights, problem definition, personas"],
      ["3", "Generate three prototype directions, then review them as your personas", "Three directions, written flows, a prioritized UX review"],
      ["4", "Stand up a knowledge base, write a spec and plan, build and verify", "A project knowledge base and a verified increment of a working MVP"]
    ]
  },

  {
    kind: "list",
    eyebrow: "How it works",
    title: "Five things to know up front",
    ordered: true,
    items: [
      { label: "Your own work carries forward.", text: "The project you end up with is genuinely yours. Everyone produces the same kind of artifact, with their own content in it." },
      { label: "Missing a session does not break you.", text: "Every session has a known-good premade version of the previous artifact. Drop it in and keep going." },
      { label: "All three roles, same room.", text: "No separate tracks. Everyone sees the full end-to-end flow." },
      { label: "Everything is saved as files.", text: "Output is plain markdown, so the next tool can read what the last one produced." },
      { label: "You stay the decision-maker.", text: "You choose the problem, the personas, and the direction. The model proposes options for you to judge." }
    ]
  },

  {
    kind: "statement",
    eyebrow: "The through-line",
    text: "Give the AI your worked evidence as context, work in small steps you can check, and never let it one-shot the thing you care about."
  },

  {
    kind: "list",
    eyebrow: "The through-line",
    title: "The same three moves, every session",
    items: [
      { label: "Context", text: "attach your worked evidence and decisions, so the model starts from material you have already vetted" },
      { label: "Small steps", text: "ask, read, propose a change, ask again, so every step is one you can check" },
      { label: "Your judgement", text: "the output is a draft you interrogate, and the call is yours" }
    ],
    note: "These three moves are the content of the course. Everything else is the mechanics of doing them in a particular tool."
  },

  {
    kind: "list",
    eyebrow: "Setting expectations",
    title: "What this course is not",
    items: [
      "**Not a coding course.** Session 4 builds an app, and the stack is decided for you with nothing to install.",
      "**Not about shipping production software.** The MVP tests whether your research can constrain a working output.",
      "**Not a tool demo.** The tools will change. The workflow is the thing worth keeping.",
      "**Not a substitute for talking to users.** The persona review in Session 3 generates hypotheses, and does not replace usability testing."
    ]
  },

  {
    kind: "list",
    eyebrow: "What we ask of you",
    title: "To get the most out of it",
    items: [
      { label: "Come to all four if you can.", text: "Each session builds on the one before, so the work accumulates." },
      { label: "Say when you are stuck.", text: "Tool friction is expected and almost always a one-minute fix, so say something early." },
      { label: "Bring a laptop.", text: "You work hands-on, on your own machine." },
      { label: "Sort the setup beforehand.", text: "Session 0 covers what each session needs. A few minutes now saves the whole room time later." }
    ]
  },

  {
    kind: "statement",
    eyebrow: "The difficulty curve",
    text: "Sessions 3 and 4 are harder than 1 and 2: new tools, new vocabulary, and more moving parts."
  },

  {
    kind: "cover",
    eyebrow: "Let's start",
    title: "Session 0: what you need",
    lead: "The tools, the access, and the setup for each of the four sessions."
  }
];
