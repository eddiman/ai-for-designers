window.DECKS = window.DECKS || {};

var S4_MAP = [
  "build the KB",
  "choose a direction",
  "write the spec",
  "plan the build",
  "build one increment",
  "verify"
];

window.DECKS["session-4"] = [
  {
    kind: "cover",
    eyebrow: "Session 4",
    title: "A knowledge base and an MVP build",
    lead: "Stand up your project's durable memory, then build and verify one increment of a working app.",
    meta: ["GitHub Copilot in VS Code", "Nothing to install", "session-4-knowledge-base-and-mvp/"]
  },

  {
    kind: "statement",
    eyebrow: "Why this session exists",
    text: "You are testing whether your research and design decisions can constrain a working output. Handed your evidence and your decisions, a build tool should produce something that answers the problem you committed to. Today you find out whether it does."
  },

  {
    kind: "list",
    eyebrow: "Scope",
    title: "What this session is not",
    items: [
      "Building production-quality software is **outside the scope**.",
      "The MVP is **one output** of the knowledge base, and you can keep asking questions of that knowledge base long after today.",
      "You do not need to be a developer. The stack is decided for you and nothing gets installed."
    ]
  },

  {
    kind: "map",
    eyebrow: "Where you are going",
    title: "Six moves",
    lead: "You will have finished each one before the next begins. We pause the room at each arrow.",
    steps: S4_MAP
  },

  {
    kind: "list",
    eyebrow: "What counts as done",
    title: "Core, and stretch",
    items: [
      { label: "Core, for everyone:", text: "a knowledge base, a committed direction, a spec, both plans, and **one increment you built and verified**." },
      { label: "Stretch, if you get there:", text: "keep going through your increments, one at a time, verifying each before the next." }
    ],
    callout: {
      tone: "go",
      title: "One verified increment demonstrates the whole loop",
      text: "You are not behind if you finish the core and stop. Completing the loop once is what this session asks for, at whatever size."
    }
  },

  {
    kind: "table",
    eyebrow: "Words you will meet",
    title: "All ordinary once named",
    lead: "Ask if any of these stays fuzzy.",
    cols: ["Word", "What it means here"],
    rows: [
      ["repository", "The folder holding this whole course, tracked so changes are recoverable. Its top level is the “repository root”."],
      ["agent", "Copilot when it can read and write files by itself, rather than only answering in chat."],
      ["scaffold", "Create the empty starting files for an app, before any of its behaviour exists."],
      ["stack", "Which technologies an app is built from. Yours is decided: HTML, CSS, and JavaScript."],
      ["increment", "One small piece of the app, small enough to build and check in a single pass."],
      ["verify", "Open the thing and confirm it does what the plan said, before moving on."]
    ]
  },

  {
    kind: "table",
    eyebrow: "What you start from",
    title: "Everything from Sessions 1–3",
    lead: "For any session you did not finish, take the premade version so your knowledge base is still complete.",
    cols: ["From", "Artifacts", "Premade fallback"],
    rows: [
      ["Session 1", "`interview-summaries.md`, `questionnaire-summary.md`, `triangulation.md`", "`session-2…/premade/`"],
      ["Session 2", "`problem-definition.md`, `personas.md`, `key-insights.md`", "`session-3…/premade/`"],
      ["Session 3", "`prototype-directions.md`, `app-flow.md`, `ux-review.md`", "`premade/` (session 4)"]
    ]
  },

  {
    kind: "map",
    eyebrow: "Step 1",
    title: "Build the knowledge base",
    steps: S4_MAP,
    active: 0
  },

  {
    kind: "step",
    n: 1,
    title: "Build the project knowledge base",
    doItems: [
      "Use the KB scaffolding skill to create `kb/`.",
      "Gather your nine artifacts, premade where you need them.",
      "Paste the population prompt and attach them.",
      "Open `kb/overview.md` and read it."
    ],
    doneItems: [
      "`kb/` exists, artifacts sorted into folders",
      "You can find the problem, personas and prototype decisions without searching",
      "`overview.md` works as an entry point"
    ],
    why: "A knowledge base is your project's durable memory, written as files for an agent to read before it acts. Everything after this step reads from it."
  },

  {
    kind: "prompt",
    eyebrow: "Step 1",
    title: "Populate the knowledge base",
    text:
      "Attached are the artifacts from a research-and-design project on helping\npeople catch the bus: [the nine files].\n\nPopulate session-4-knowledge-base-and-mvp/kb/ from them. Put the raw\nartifacts in kb/sessions/, then distil them into the curated folders: the\ncommitted problem into kb/decisions/; personas and the prototype directions\nand flows into kb/design/; the research insights and UX-review findings into\nkb/learnings/; and a short project summary into kb/overview.md that names the\ncommitted problem and points to the rest.\n\nKeep it factual and invent nothing that is not in the artifacts."
  },

  {
    kind: "statement",
    eyebrow: "Checkpoint",
    text: "Show your `kb/overview.md` to me or the person next to you. Can they tell what problem you committed to from that file alone?",
    callout: {
      title: "Why we stop here",
      text: "A thin knowledge base means every later step inherits the gap. This is the cheapest place to catch it."
    }
  },

  {
    kind: "map",
    eyebrow: "Step 2",
    title: "Choose a direction",
    steps: S4_MAP,
    active: 1
  },

  {
    kind: "step",
    n: 2,
    title: "Choose your prototype direction",
    lead: "Session 3 gave you three directions and a UX review without making you pick. That is this step.",
    doItems: [
      "Decide which one direction you are taking into the build.",
      "Ask for the trade-offs first if you want them; the call is still yours.",
      "Write it into `chosen-direction.md`: the direction, why it won, which review findings you will fix, what you are leaving behind."
    ],
    doneItems: [
      "One direction named, with your reasons",
      "The UX-review findings you will carry in are listed",
      "What the other two had that you are not building is written down"
    ],
    why: "The spec in step 3 is written against this file. Deciding here, in writing, is what stops the build drifting between directions later."
  },

  {
    kind: "map",
    eyebrow: "Step 3",
    title: "Write the spec",
    steps: S4_MAP,
    active: 2
  },

  {
    kind: "step",
    n: 3,
    title: "Write the spec",
    doItems: [
      "Draft `spec.md` with the agent, reading the KB and your chosen direction.",
      "Tell it: **do not write, scaffold or run any code**, since this is a planning step.",
      "Push back where it reached for a generic feature. Ask where the line comes from in the KB.",
      "If it has no answer, cut the line."
    ],
    doneItems: [
      "What you are building, for whom, in scope, out of scope",
      "Every scope item traces to something in your KB",
      "The out-of-scope list is not empty"
    ],
    why: "The out-of-scope list is what keeps the build from sprawling, and tracing every scope item to your evidence is what keeps the app anchored to your project rather than to generic bus-app conventions."
  },

  {
    kind: "statement",
    eyebrow: "Checkpoint",
    text: "Have someone read your out-of-scope list. If it is empty or vague, the build will sprawl and you will run out of time."
  },

  {
    kind: "map",
    eyebrow: "Step 4",
    title: "Plan the build",
    steps: S4_MAP,
    active: 3
  },

  {
    kind: "step",
    n: 4,
    title: "Plan the build",
    lead: "Two files, written in the same pass.",
    doItems: [
      "`build-plan.md`: the increments, each small enough to build **and verify in one pass**.",
      "`verification-plan.md`: a row per increment, how you will confirm it works.",
      "Split anything you could not check in one sitting.",
      "For each verification row, ask yourself what you would click or look at."
    ],
    doneItems: [
      "Nothing in the order depends on something later",
      "Increment 1 is small: a starting point with no feature in it yet",
      "Every verification row describes something you can check"
    ],
    why: "This is the plan the build tool follows. An increment you cannot verify is one you have to trust blindly."
  },

  {
    kind: "map",
    eyebrow: "Step 5",
    title: "Scaffold the app",
    steps: S4_MAP,
    active: 4
  },

  {
    kind: "list",
    eyebrow: "Step 5",
    title: "The stack is already decided",
    lead: "Plain **HTML**, **CSS** and **JavaScript**. No framework, no build step, no packages, nothing to install. You open the file in your browser and it runs.",
    items: [
      "The build tool will not stop to ask which framework to use.",
      "Everyone in the room is running the same thing, so a question from the person next to you is a question you recognize.",
      "It is enough for what the MVP does: a saved stop, a status and a recommendation need nothing more."
    ]
  },

  {
    kind: "prompt",
    eyebrow: "Step 5: paste as-is",
    title: "Scaffold the app",
    text:
      "Scaffold the app for this MVP at session-4-knowledge-base-and-mvp/app/ as\nplain HTML, CSS, and JavaScript (an index.html, a styles.css, and a\nscript.js). No framework, no build step, no package manager, no dependencies:\nI must be able to open index.html directly in a browser and have it work.\n\nLeave it as a single near-empty starting page for now, and do not build any\npart of the MVP yet. When you are done, tell me how to open it and confirm\nthat it works.\n\nIf a technical choice is not covered above, pick the simplest option that\nkeeps the app opening directly in a browser and tell me what you picked. Do\nnot ask me to choose."
  },

  {
    kind: "statement",
    eyebrow: "If the tool asks you a technical question",
    text: "“Pick the simplest option that keeps the app opening directly in a browser, and tell me what you picked.”",
    callout: {
      tone: "stop",
      title: "You do not need an opinion about it",
      text: "A build tool that stops to ask a technical question you cannot answer stalls the work entirely. This reply gets you moving again, every time."
    }
  },

  {
    kind: "map",
    eyebrow: "Step 6",
    title: "Build one increment, then verify",
    steps: S4_MAP,
    active: 5
  },

  {
    kind: "step",
    n: 6,
    title: "Build one increment, then verify it",
    lead: "This is the core of the session. The anti-pattern is one-shotting: asking for a whole feature in one prompt and hoping it holds together.",
    doItems: [
      "Release **only the first increment**, nothing beyond it.",
      "Have it write back into `build-plan.md` which files it changed and what now works, then stop.",
      "Open the app and run your verification check yourself.",
      "Mark the row verified, or write down what failed and what you changed."
    ],
    doneItems: [
      "The increment works when **you** look at it",
      "`build-plan.md` records which files the tool changed",
      "`verification-plan.md` shows it verified, or says why not"
    ],
    why: "Verifying each small step, and making the tool write back which files it changed, is what keeps the app working as it grows and tells you where it went wrong when it stops working."
  },

  {
    kind: "list",
    eyebrow: "Step 6",
    title: "Look at the page, not the summary",
    items: [
      "The agent will tell you it works. Treat that as a claim you still have to check.",
      "Open `index.html` and do the thing your verification plan says.",
      "A *product* question (what a screen says, what a rider sees first) is yours to answer, from your spec."
    ],
    callout: {
      tone: "go",
      title: "Checkpoint: you have met the session's core goal",
      text: "Show your verified increment and your verification-plan row before going further."
    }
  },

  {
    kind: "step",
    n: 7,
    title: "Capture the setup in `AGENTS.md`",
    lead: "The scaffold settled things nobody wrote down: the folder layout, where styles live, what the files are called.",
    doItems: [
      "Now that the first increment exists, have the agent draft `app/AGENTS.md`.",
      "Have it state the stack as **fixed**: no framework, build step or dependency later.",
      "Check it against reality: does it match what is in `app/`?",
      "Answer or delete any open questions it left."
    ],
    doneItems: [
      "`app/AGENTS.md` matches the files in `app/`",
      "It states the stack as fixed",
      "No open questions dangling for a later increment to guess at"
    ],
    why: "Copilot reads this file automatically before it acts. Everything built after this follows it, so a wrong line propagates."
  },

  {
    kind: "list",
    eyebrow: "Step 7",
    title: "One file to leave alone",
    lead: "`AGENTS.md` belongs beside the app it describes, at `app/AGENTS.md`. An agent reads the nearest one to whatever it is working on.",
    items: [
      "**Do not** write it at the repository root.",
      "The root `AGENTS.md` describes this course repository.",
      "Overwriting it replaces the course instructions with notes about a bus app."
    ]
  },

  {
    kind: "list",
    eyebrow: "What you'll produce",
    title: "Five things",
    items: [
      "a project knowledge base",
      "a committed prototype direction with the reasoning written down",
      "a spec, a build plan, and a verification plan",
      "at least one increment of a working MVP, built and verified",
      "an `AGENTS.md` capturing the stack, structure and conventions"
    ]
  },

  {
    kind: "statement",
    eyebrow: "What you'll take away",
    text: "A generative build tool becomes reliable when it has a structured knowledge base to read and a loop that goes spec → plan → small build → verify → iterate."
  },

  {
    kind: "cover",
    eyebrow: "End of the course",
    title: "You took one project the whole way",
    lead: "Raw research → insights → a committed problem and personas → prototypes → a persona review → a knowledge base → a spec → a verified build. Every step traceable to the one before it.",
    meta: ["The knowledge base is yours to keep using", "Expect it to feel natural after a few projects of your own"]
  }
];
