/* Landing-page metadata for each session. Decks live in session-N.js. */

window.SESSIONS = [
  {
    id: "intro",
    group: "Start here",
    short: "Introduction",
    title: "What this course is",
    lead: "One project from raw research to a built MVP, and the three moves that carry through every session.",
    tool: "Open with this",
    folder: null
  },
  {
    id: "session-0",
    group: "Start here",
    short: "Session 0",
    title: "Before we start",
    lead: "What each session needs from you: tools, access, setup, and a tooling walkthrough.",
    tool: "Requirements",
    folder: null
  },
  {
    id: "session-1",
    group: "The four sessions",
    short: "Session 1",
    title: "Research synthesis",
    lead: "How prompt framing changes what you learn, and how to triangulate before you trust a pattern.",
    tool: "Copilot 365 chat",
    folder: "session-1-research-synthesis"
  },
  {
    id: "session-2",
    group: "The four sessions",
    short: "Session 2",
    title: "Problem definition and personas",
    lead: "Turn synthesized research into insights, one committed problem, and evidence-grounded personas.",
    tool: "Copilot 365 chat",
    folder: "session-2-problem-definition-and-personas"
  },
  {
    id: "session-3",
    group: "The four sessions",
    short: "Session 3",
    title: "Prototyping and a persona UX review",
    lead: "Generate three directions in Figma Make, then pressure-test them in character as your personas.",
    tool: "Figma Make · Figma MCP · Copilot",
    folder: "session-3-prototyping-and-ux-review"
  },
  {
    id: "session-4",
    group: "The four sessions",
    short: "Session 4",
    title: "Knowledge base and an MVP build",
    lead: "Stand up a project knowledge base, then build and verify one increment of a working MVP.",
    tool: "GitHub Copilot in VS Code",
    folder: "session-4-knowledge-base-and-mvp"
  }
];

window.DECKS = window.DECKS || {};
