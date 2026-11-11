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
    kind: "exercise",
    n: 1,
    title: "Build the project knowledge base",
    lead: "Two prompts: the first creates an empty knowledge base, so you can see its structure, and the second fills it from your nine artifacts.",
    map: { steps: S4_MAP, active: 0 },
    steps: [
      {
        title: "Open Copilot in Agent mode",
        text: "Open Copilot Chat in VS Code and switch to **Agent** mode."
      },
      {
        title: "Create the empty knowledge base",
        text: "Paste this prompt as-is.",
        prompt: "Create an empty knowledge base at session-4-knowledge-base-and-mvp/kb/, as plain markdown files. Do not add any project\ncontent yet; the next prompt fills it.\n\nInside session-4-knowledge-base-and-mvp/kb/, create:\n\n- AGENTS.md: instructions for agents: what the knowledge base is for, the read order (AGENTS.md, README.md, overview.md,\n  then the relevant folders), that raw notes go in sessions/ and curated knowledge in the other folders, that views/\n  holds derived summaries only, and to make the smallest correct update.\n- README.md: the same explanation, for a person reading the folder.\n- overview.md: empty headings for Goal, Committed problem, Current design context, Current state, and Source material.\n- decisions/, design/, stories/, learnings/, sessions/, and views/, each with a README.md saying in a sentence or two\n  what belongs there.\n- templates/ with decision.md, design-note.md, learning.md, session-note.md, and story.md, each with the headings that\n  kind of note needs.\n\nDo not create or edit anything outside session-4-knowledge-base-and-mvp/kb/, including the AGENTS.md at the repository\nroot. If something is unclear, leave a placeholder and tell me. When you are done, list the files you created."
      },
      {
        title: "Check what it created",
        text: "Read the list of files Copilot says it created. Every one should be inside `session-4-knowledge-base-and-mvp/kb/`. If it changed anything else, such as the `AGENTS.md` at the repository root, tell the facilitator before you continue."
      },
      {
        title: "Gather your nine artifacts",
        text: "Take the premade version for any session you did not finish.",
        items: [
          { label: "Session 1", text: "`interview-summaries.md`, `questionnaire-summary.md`, `triangulation.md`" },
          { label: "Session 2", text: "`problem-definition.md`, `personas.md`, `key-insights.md`" },
          { label: "Session 3", text: "`prototype-directions.md`, `app-flow.md`, `ux-review.md`" }
        ]
      },
      {
        title: "Populate the knowledge base",
        text: "Paste this prompt and attach the nine files.",
        prompt: "Attached are the artifacts from a research-and-design project on helping people catch the bus: interview-summaries.md, questionnaire-summary.md, triangulation.md, problem-definition.md, personas.md, key-insights.md, prototype-directions.md, app-flow.md, and ux-review.md.\n\nPopulate session-4-knowledge-base-and-mvp/kb/ from them. Put the raw artifacts in kb/sessions/, then distil them into the curated folders: the committed problem into kb/decisions/; personas and the prototype directions and flows into kb/design/ (personas can also go in kb/stories/ if they fit better there); the research insights and UX-review findings into kb/learnings/; and a short project summary into kb/overview.md that names the committed problem and points to the rest.\n\nKeep it factual and invent nothing that is not in the artifacts."
      },
      {
        title: "Read kb/overview.md",
        text: "Open `kb/overview.md` and read it. It should work as an entry point to the project, rather than reading as a list of file names."
      }
    ],
    doneItems: [
      "`kb/` exists, artifacts sorted into folders",
      "Nothing outside `kb/` changed, including the root `AGENTS.md`",
      "You can find the problem, personas and prototype decisions without searching",
      "`overview.md` works as an entry point"
    ],
    why: "A knowledge base is your project's durable memory, written as files for an agent to read before it acts. Everything after this exercise reads from it.",
    checkpoint: {
      title: "Checkpoint: show your `kb/overview.md`",
      text: "Show it to me or the person next to you. Can they tell what problem you committed to from that file alone? A thin knowledge base means every later exercise inherits the gap, and this is the cheapest place to catch it."
    }
  },

  {
    kind: "exercise",
    n: 2,
    title: "Choose your prototype direction",
    lead: "Session 3 gave you three directions and a UX review without making you pick. That is this exercise.",
    map: { steps: S4_MAP, active: 1 },
    steps: [
      {
        title: "Decide which direction to build",
        text: "Use your own judgement, or ask for the trade-offs first with this prompt. The call is still yours.",
        prompt: "Read the knowledge base in session-4-knowledge-base-and-mvp/kb/, especially the three prototype directions, the app flows, and the UX review with its triage. Help me choose one direction to build as an MVP. Weigh each against the committed problem and how each persona reviewed it, and be explicit about the trade-offs. Recommend one, but give me the reasoning for all three so the call is mine."
      },
      {
        title: "Write it into chosen-direction.md",
        text: "Write down the direction, why it won, which UX-review findings you are committing to fix in the build, and what you are leaving behind."
      }
    ],
    doneItems: [
      "One direction named, with your reasons",
      "The UX-review findings you will carry in are listed",
      "What the other two had that you are not building is written down"
    ],
    why: "The spec in exercise 3 is written against this file. Deciding here, in writing, is what stops the build drifting between directions later."
  },

  {
    kind: "exercise",
    n: 3,
    title: "Write the spec",
    lead: "The agent drafts `spec.md` from your knowledge base and your chosen direction, and writes no code.",
    map: { steps: S4_MAP, active: 2 },
    steps: [
      {
        title: "Draft the spec",
        text: "Run this prompt. It tells the agent not to write, scaffold or run any code, since this is a planning exercise.",
        prompt: "Read the knowledge base in session-4-knowledge-base-and-mvp/kb/, especially the committed problem, the personas, and my chosen direction in chosen-direction.md, and help me write the MVP spec into spec.md: what it does, for whom, what is in scope, what is explicitly out of scope for now, and which knowledge-base content each part rests on. Every part of the spec must trace back to something in the knowledge base rather than to a generic bus-app feature.\n\nDo not write, scaffold, or run any application code; only produce the spec. If something in the knowledge base is missing or contradictory, flag it and ask me rather than filling the gap yourself."
      },
      {
        title: "Push back on generic features",
        text: "Read the draft and push back where it reached for a generic feature. Ask where a line comes from in the knowledge base. If it has no answer, cut the line."
      }
    ],
    doneItems: [
      "What you are building, for whom, in scope, out of scope",
      "Every scope item traces to something in your KB",
      "The out-of-scope list is not empty"
    ],
    why: "The out-of-scope list is what keeps the build from sprawling, and tracing every scope item to your evidence is what keeps the app anchored to your project rather than to generic bus-app conventions.",
    checkpoint: {
      title: "Checkpoint: your out-of-scope list",
      text: "Have someone read it. If it is empty or vague, the build will sprawl and you will run out of time."
    }
  },

  {
    kind: "exercise",
    n: 4,
    title: "Plan the build",
    lead: "Two files, written in the same pass: `build-plan.md` and `verification-plan.md`.",
    map: { steps: S4_MAP, active: 3 },
    steps: [
      {
        title: "Draft both plans",
        text: "Run this prompt. Each increment has to be small enough to build **and verify in one pass**.",
        prompt: "Read spec.md and the knowledge base in session-4-knowledge-base-and-mvp/kb/. Break the MVP into small increments and write build-plan.md, with each increment small enough to build and verify in one pass, ordered so that what has to exist first comes first. No increment is a whole feature at once. Then, in the same pass, write verification-plan.md, going increment by increment through the build plan you just wrote, with exactly how I will confirm each one works before moving on.\n\nDo not write, scaffold, or run any application code; this is a planning step only. If an increment cannot be verified in a single pass, split it. If something in the spec is missing or contradictory, flag it and ask me rather than filling the gap yourself."
      },
      {
        title: "Check the increments",
        text: "Read the increments in `build-plan.md`. Split anything you could not check in one sitting."
      },
      {
        title: "Check the verification plan",
        text: "Read `verification-plan.md`. For each row, ask yourself what you would click or look at."
      }
    ],
    doneItems: [
      "Nothing in the order depends on something later",
      "Increment 1 is small: a starting point with no feature in it yet",
      "Every verification row describes something you can check"
    ],
    why: "This is the plan the build tool follows. An increment you cannot verify is one you have to trust blindly."
  },

  {
    kind: "exercise",
    n: 5,
    title: "Scaffold the app",
    lead: "The stack is already decided: plain **HTML**, **CSS** and **JavaScript**. No framework, no build step, no packages, nothing to install. You open the file in your browser and it runs.",
    map: { steps: S4_MAP, active: 4 },
    steps: [
      {
        title: "Scaffold the app",
        text: "Paste this prompt as-is.",
        prompt: "Scaffold the app for this MVP at session-4-knowledge-base-and-mvp/app/ as\nplain HTML, CSS, and JavaScript (an index.html, a styles.css, and a\nscript.js). No framework, no build step, no package manager, no dependencies:\nI must be able to open index.html directly in a browser and have it work.\n\nLeave it as a single near-empty starting page for now, and do not build any\npart of the MVP yet. When you are done, tell me how to open it and confirm\nthat it works.\n\nIf a technical choice is not covered above, pick the simplest option that\nkeeps the app opening directly in a browser and tell me what you picked. Do\nnot ask me to choose.",
        callout: {
          tone: "stop",
          title: "If the tool asks you a technical question",
          text: "Reply: “Pick the simplest option that keeps the app opening directly in a browser, and tell me what you picked.” You do not need an opinion about it, and this reply works any time it asks again."
        }
      },
      {
        title: "Open the starting page",
        text: "Open `index.html` in your browser and confirm you see the starting page."
      }
    ],
    doneItems: [
      "`app/` holds `index.html`, `styles.css`, and `script.js`",
      "Opening `index.html` shows a page",
      "Nothing was installed and no package manager ran"
    ],
    why: "The stack is pinned so the build tool does not stop to ask which framework to use, and everyone in the room runs the same thing. It is enough for the MVP: a saved stop, a status and a recommendation need nothing more."
  },

  {
    kind: "exercise",
    n: 6,
    title: "Build one increment, then verify it",
    lead: "This is the core of the session. The anti-pattern is one-shotting: asking for a whole feature in one prompt and hoping the result works.",
    map: { steps: S4_MAP, active: 5 },
    steps: [
      {
        title: "Release one increment",
        text: "Run this prompt. It builds **only the first increment**, writes back into `build-plan.md` what it changed, and stops.",
        prompt: "Read build-plan.md, verification-plan.md, and the knowledge base in session-4-knowledge-base-and-mvp/kb/. Build only the first increment from the build plan, nothing beyond it. When it is done, write back into build-plan.md exactly what you did: which files you added or changed, and what now works. Then stop, so I can verify it before we continue.\n\nIf a technical choice is not covered by the build plan or the app's AGENTS.md, pick the simplest option that keeps the app opening directly in a browser and tell me what you picked. Do not ask me to choose.",
        callout: {
          title: "If the tool asks you a question",
          text: "A technical question gets the same reply as in exercise 5. A *product* question, such as what a screen says or what a rider sees first, is yours to answer, from your spec."
        }
      },
      {
        title: "Look at the page, not the summary",
        text: "Open the app and run the check from your verification plan for that increment.",
        items: [
          "The agent will tell you it works. Treat that as a claim you still have to check.",
          "Open `index.html` and do the thing your verification plan says."
        ]
      },
      {
        title: "Mark the result",
        text: "Mark the row verified in `verification-plan.md`. If it failed, write down what failed and what you went back and changed."
      }
    ],
    doneItems: [
      "The increment works when **you** look at it",
      "`build-plan.md` records which files the tool changed",
      "`verification-plan.md` shows it verified, or says why not"
    ],
    why: "Verifying each small step, and making the tool write back which files it changed, is what keeps the app working as it grows and tells you where it went wrong when it stops working.",
    checkpoint: {
      tone: "go",
      title: "Checkpoint: you have met the session's core goal",
      text: "Show your verified increment and your verification-plan row before going further."
    }
  },

  {
    kind: "exercise",
    n: 7,
    title: "Capture the setup in `AGENTS.md`",
    lead: "The scaffold settled things nobody wrote down: the folder layout, where styles live, what the files are called. `AGENTS.md` is the instructions file Copilot reads before it acts.",
    steps: [
      {
        title: "Draft app/AGENTS.md",
        text: "Now that the first increment exists, run this prompt.",
        prompt: "Inspect the project you scaffolded and the first increment you built, then draft an AGENTS.md at session-4-knowledge-base-and-mvp/app/AGENTS.md. Do not modify the AGENTS.md at the repository root; that one describes the course repository.\n\nDocument what is actually here: the stack (plain HTML, CSS, and JavaScript, with no build step and no dependencies), the project structure and where things live, the conventions to follow, and exactly how to open and check the app. State the stack as fixed, so that later increments must not introduce a framework, a build step, a CSS library, or a dependency. Add a short rule to read the knowledge base in session-4-knowledge-base-and-mvp/kb/ before making substantial changes, and a rule to pick the simplest working option and report it rather than asking me technical questions.\n\nOnly describe what exists in the code. Where something is genuinely undecided, list it as an open question for me at the end.",
        callout: {
          tone: "stop",
          title: "Leave the root `AGENTS.md` alone",
          text: "It describes this course repository. Overwriting it replaces the course instructions with notes about a bus app, so the new file goes at `app/AGENTS.md`."
        }
      },
      {
        title: "Check it against the files",
        text: "Read it and check it against what is in `app/`: does it say plain HTML, CSS, and JavaScript with no build step, and does it tell you how to open the app?"
      },
      {
        title: "Close the open questions",
        text: "Answer or delete any open questions it left at the end."
      }
    ],
    doneItems: [
      "`app/AGENTS.md` matches the files in `app/`",
      "It states the stack as fixed",
      "No open questions dangling for a later increment to guess at"
    ],
    why: "Copilot reads this file automatically before it acts. Everything built after this follows it, so a wrong line propagates."
  },

  {
    kind: "exercise",
    label: "Stretch",
    title: "Build the next increment",
    lead: "If you have time after exercise 7, build the rest of your plan one increment at a time, with the same loop as exercise 6. Stop whenever you like. Each verified increment is a finished piece of work.",
    steps: [
      {
        title: "Release the next increment",
        text: "Replace `[number]` with the number of the next increment in `build-plan.md`, then run this prompt.",
        prompt: "Read build-plan.md, verification-plan.md, app/AGENTS.md, and the knowledge base in session-4-knowledge-base-and-mvp/kb/. Build only increment [number] from the build plan, nothing beyond it. The increments before it are built and verified, so change their code only where this increment needs it, and tell me what you changed. When it is done, write back into build-plan.md exactly what you did: which files you added or changed, and what now works. Then stop, so I can verify it before we continue.\n\nIf a technical choice is not covered by the build plan or app/AGENTS.md, pick the simplest option that keeps the app opening directly in a browser and tell me what you picked. Do not ask me to choose."
      },
      {
        title: "Check it in the browser",
        text: "Open `index.html` and run the check from your verification plan for that increment, the same way as in exercise 6."
      },
      {
        title: "Mark the result, then repeat",
        text: "Mark the row verified in `verification-plan.md`, or write down what failed and what you changed. Then go back to step 1 with the next increment."
      }
    ],
    doneItems: [
      "Every increment you built is marked verified in `verification-plan.md`, or says why not",
      "`build-plan.md` records which files each increment changed"
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
