window.DECKS = window.DECKS || {};

window.DECKS["session-0"] = [
  {
    kind: "cover",
    eyebrow: "Session 0",
    title: "Before we start",
    lead: "What each session needs from you, and what to sort out now rather than in the room.",
    meta: ["Tools and access", "A 15-minute tooling walkthrough", "Where the files live"]
  },

  {
    kind: "table",
    eyebrow: "The short version",
    title: "What each session needs",
    cols: ["Session", "Tool", "Setup"],
    rows: [
      ["1. Research synthesis", "Microsoft Copilot 365 chat", "None. Org-provided, works in the browser."],
      ["2. Problem and personas", "Microsoft Copilot 365 chat", "None."],
      ["3. Prototyping and review", "Figma Make · Figma desktop · VS Code with Copilot", "The Figma MCP local server, which we set up together in the session."],
      ["4. Knowledge base and MVP", "VS Code with GitHub Copilot", "Nothing to install. The app is plain HTML, CSS, and JavaScript."]
    ]
  },

  {
    kind: "list",
    eyebrow: "Sort this before Session 1",
    title: "Four things, all of them quick",
    ordered: true,
    items: [
      { label: "A laptop you can install on.", text: "You work on your own machine throughout." },
      { label: "Microsoft Copilot 365 access.", text: "Org-provided. Open it once and confirm you can start a chat." },
      { label: "VS Code installed.", text: "Free download. You do not need to know how to use it; the walkthrough covers that." },
      { label: "The course repository on your machine.", text: "Ask if you have not done this before; it takes two minutes with help." }
    ],
    callout: {
      tone: "stop",
      title: "The one with a lead time",
      text: "GitHub Copilot needs a **BSD application approved**. Start it the day the course is announced, because approval does not clear overnight and Sessions 3 and 4 both need it."
    }
  },

  {
    kind: "list",
    eyebrow: "Session 3 needs a little more",
    title: "Figma, and the connection to Copilot",
    items: [
      { label: "Figma desktop app, updated.", text: "The MCP server lives in the desktop app, so the browser version will not do." },
      { label: "A Figma file you have edit access to.", text: "You will paste your generated designs into it." },
      { label: "Figma Make access.", text: "This is where the three prototype directions come from." },
      { label: "The local MCP server.", text: "Runs on **your** machine, so you set it up. We do it together, step by step, and nobody moves on until everyone's server answers." }
    ],
    note: "Two things that bite: the server only runs while the Figma desktop app is open, and the tools do not appear in Copilot until you restart the figma entry in mcp.json."
  },

  {
    kind: "list",
    eyebrow: "Session 4 needs the least",
    title: "Nothing to install",
    lead: "The MVP is plain HTML, CSS, and JavaScript: no framework, no build step, and no package manager.",
    items: [
      "You open a file in your browser and the app runs.",
      "The stack is pinned, so the build tool never asks you to choose one.",
      "All you need is VS Code with Copilot in **Agent** mode."
    ],
    callout: {
      tone: "go",
      title: "Why it is deliberately plain",
      text: "Nothing to install means nothing to fail on your machine, and no version drift between people in the room. That keeps the session time on the method rather than on setup."
    }
  },

  {
    kind: "list",
    eyebrow: "Readiness check",
    title: "Hands up for each of these",
    lead: "This is how I plan support and pairing. There is no wrong answer, and nobody is excluded by it.",
    items: [
      "**VS Code**: comfortable, seen it once, or never?",
      "**Markdown files**: do you know what one is?",
      "**Finding files in a folder tree**: including on someone else's project?",
      "**Git or GitHub**: any exposure at all?",
      "**Working with AI beyond single prompts**: attaching files, iterating, agents?"
    ],
    note: "Comfort with VS Code matters more here than experience with AI, and it is better to know now than mid-session."
  },

  {
    kind: "statement",
    eyebrow: "The reframing that helped most",
    text: "VS Code is a file manager with an AI in it.",
    callout: {
      title: "You are not being asked to code",
      text: "You are being asked to keep files organized and to talk to an agent that can read and write them. Nothing more than that."
    }
  },

  {
    kind: "list",
    eyebrow: "Tooling walkthrough",
    title: "Fifteen minutes, before any real work",
    ordered: true,
    items: [
      { label: "What a Markdown file is.", text: "A plain text file with simple formatting. Every artifact you make is one." },
      { label: "Where each session's files live.", text: "One folder per session, and the files you fill in sit at the top of it." },
      { label: "Opening, editing, saving.", text: "In VS Code, and how to tell whether your change was saved." },
      { label: "The Explorer and Copilot Chat.", text: "The two panels you actually use." },
      { label: "Course artifacts against application code.", text: "Two different kinds of file in the same folder. Knowing which is which saves confusion in Session 4." }
    ]
  },

  {
    kind: "map",
    eyebrow: "The whole journey",
    title: "Where every file comes from",
    lead: "Each one is the input to the next. This is the map to come back to whenever you lose your place.",
    steps: [
      "research",
      "insights",
      "problem and personas",
      "prototypes",
      "review",
      "knowledge base",
      "spec",
      "build",
      "verify"
    ]
  },

  {
    kind: "table",
    eyebrow: "The files",
    title: "What you produce, session by session",
    cols: ["Session", "Files you fill in"],
    rows: [
      ["1", "`interview-summaries.md`, `questionnaire-summary.md`, `triangulation.md`"],
      ["2", "`key-insights.md`, `problem-definition.md`, `personas.md`"],
      ["3", "`prototype-directions.md`, `app-flow.md`, `ux-review.md`"],
      ["4", "`chosen-direction.md`, `spec.md`, `build-plan.md`, `verification-plan.md`, plus `kb/` and `app/`"]
    ],
    note: "Empty stubs are already in each session folder. You never start from a blank page."
  },

  {
    kind: "list",
    eyebrow: "If you miss a session",
    title: "You can still do the next one",
    lead: "Every session has a `premade/` folder holding a known-good version of what the previous session produced.",
    items: [
      "Take the premade artifacts and use them as they are. There is nothing to redo or choose.",
      "The work is no longer *yours* in the same way, and you still do the full method.",
      "Say so at the start and we will point you at the right folder."
    ]
  },

  {
    kind: "list",
    eyebrow: "How the sessions run",
    title: "What to expect in the room",
    items: [
      { label: "You work hands-on, individually.", text: "Everyone on their own machine, in the same room." },
      { label: "We move in step.", text: "I work the same steps on screen and pause after each phase, so nobody is quietly stuck." },
      { label: "Ask whenever.", text: "Interrupt. Tool friction is normal and almost always a one-minute fix." },
      { label: "One required outcome per session.", text: "Finish that and you have met the goal. Anything beyond it is optional." }
    ],
    callout: {
      tone: "go",
      title: "You are not behind if you stop at the core",
      text: "Session 4 asks for one increment built and verified, out of the nine you will have planned. Completing the loop once is the learning goal."
    }
  },

  {
    kind: "cover",
    eyebrow: "Ready",
    title: "Session 1: Research synthesis",
    lead: "How the framing of a summarization prompt changes the research you get back.",
    meta: ["Microsoft Copilot 365 chat", "No setup needed"]
  }
];
