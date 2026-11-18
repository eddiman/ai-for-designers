window.DECKS = window.DECKS || {};

window.DECKS["session-3"] = [
  {
    kind: "cover",
    eyebrow: "Session 3",
    title: "Prototyping and a persona UX review",
    lead: "Generate three directions from your brief packet, then pressure-test them in character as your personas.",
    meta: ["Figma Make", "Figma MCP (local server)", "GitHub Copilot agent"]
  },

  {
    kind: "statement",
    eyebrow: "What this session is about",
    text: "Attaching your own research is what makes the prototypes yours rather than generic. Then the same personas that shaped them become the reviewers that test them."
  },

  {
    id: "start-from",
    kind: "list",
    eyebrow: "What you start from",
    title: "Your brief packet",
    items: [
      { label: "`problem-definition.md`", text: "the one committed problem" },
      { label: "`key-insights.md`", text: "the evidence-anchored takeaways" },
      { label: "`personas.md`", text: "the 2–3 hypotheses you will review in character as" }
    ],
    note: "If you missed Session 2, the premade versions in `premade/` are ready to attach as they are."
  },

  {
    kind: "list",
    eyebrow: "What counts as done",
    title: "Core, and stretch",
    items: [
      { label: "Core, for everyone:", text: "three directions grouped in a Figma file, `prototype-directions.md`, `app-flow.md`, and the persona review with your triage. No need to polish all three directions." },
      { label: "Stretch, if you get there:", text: "refine one direction to address its “act on now” findings, then review the revised version. The steps are in the session README." }
    ],
    callout: {
      tone: "go",
      title: "The core is what Session 4 builds from",
      text: "You are not behind if you finish the core and stop."
    }
  },

  {
    id: "figma-mcp",
    kind: "exercise",
    label: "Before you start",
    title: "Connect the Figma MCP",
    lead: "The persona review in exercise 4 needs Copilot to read your Figma file. Figma's read-only server runs locally, in the Figma desktop app, and we set it up together.",
    steps: [
      {
        title: "Turn on the local server in Figma",
        text: "Open a file you can edit in the Figma **desktop** app, updated to the latest version.",
        items: [
          "Click **Actions** in the bottom toolbar: the button with four small shapes, to the right of the comment tool.",
          "Type `enable mcp` in the search field.",
          "Select **Enable desktop MCP server**, so its box is ticked."
        ],
        callout: {
          tone: "stop",
          title: "Leave the desktop app open",
          text: "The server only runs while the Figma desktop app is running."
        }
      },
      {
        title: "Add it to VS Code",
        text: "Open Copilot Chat in **Agent** mode and run this prompt. Copilot adds the Figma server to your global `mcp.json`, so the server is available in every folder you open in VS Code.",
        prompt: "Add this to the global mcp.json for VS Code. Keep any servers that are already in the file.\n\n{\n  \"servers\": {\n    \"figma\": {\n      \"type\": \"http\",\n      \"url\": \"http://127.0.0.1:3845/mcp\"\n    }\n  }\n}",
        note: "If Copilot asks for permission to edit `mcp.json`, or VS Code asks whether to trust or start the `figma` server, allow it. For any other technical question, ask the facilitator before you answer."
      },
      {
        title: "Check that the server is running",
        items: [
          "Open the Command Palette with **Cmd+Shift+P** on Mac or **Ctrl+Shift+P** on Windows. You can also click the project name in the bar at the top of VS Code and type `>`.",
          "Start typing `MCP: List Servers` and select it.",
          "Find `figma` in the list. If it says **Running**, go on to the next step.",
          "If it says **Stopped**, select it and choose **Start Server**."
        ],
        callout: {
          tone: "stop",
          title: "If the server will not start",
          text: "Check that the Figma desktop app is still open and that **Enable desktop MCP server** is still ticked under **Actions**, then start the server again."
        }
      },
      {
        title: "Check the connection",
        text: "Keep your file open in the Figma desktop app, and run this prompt in Copilot Chat in **Agent** mode.",
        prompt: "See if you can read my open file in figma now",
        note: "If Copilot asks for permission to run a Figma tool, allow it. If it says nothing is selected, select a frame in Figma and run the prompt again."
      }
    ],
    doneItems: [
      "**Enable desktop MCP server** is ticked under **Actions** in the Figma desktop app",
      "Your global `mcp.json` has the `figma` entry",
      "**MCP: List Servers** shows `figma` as running",
      "Copilot can read your open file in Figma"
    ],
    why: "Without this connection, Copilot cannot see your screens in exercise 4, and the review has nothing to walk through. The server runs on your own machine, so everyone sets up their own."
  },

  {
    kind: "exercise",
    n: 1,
    title: "Generate 3 directions in Figma Make",
    lead: "Attach the files as files. That is what brings the prototypes back grounded in your research.",
    steps: [
      {
        title: "Attach your brief packet",
        text: "In Figma Make, attach `problem-definition.md`, `key-insights.md`, and `personas.md`."
      },
      {
        title: "Ask for three directions",
        text: "Start from this prompt and adapt it.",
        prompt: "I've attached my problem definition, key insights, and personas from a\nresearch project on helping people catch the bus. Using these as the brief,\ndesign 3 distinct prototype directions for a mobile bus app that each solve\nthe committed problem in a different way.\n\nFor each direction: give it a short name, generate the key screens as a\nclickable flow, and stay grounded in the attached research, meaning the\ninsights and personas rather than generic bus-app conventions. Make the three\ngenuinely different from each other so I have alternatives worth comparing.",
        note: "Bonus: pick a `design.md` from designmd.app and attach it too, or describe the look you want in the prompt. PS: you can ask Figma Make questions here too, for example what it built in each direction and why."
      },
      {
        title: "Steer the result",
        text: "Treat the first result as a starting point. Ask it to push one direction further, pull two apart if they have converged, or fix a screen that does not match a persona's needs."
      },
      {
        title: "Describe each direction",
        text: "Once you are happy with the three, fill in `prototype-directions.md`: one entry per direction, with its name, **What it is**, and **How it answers the problem**."
      }
    ],
    doneItems: [
      "Three directions that solve the problem in different ways",
      "Each has key screens as a clickable flow",
      "`prototype-directions.md` has all three entries filled in"
    ],
    why: "Exercise 4 attaches `prototype-directions.md` to the UX review, where it gives the reviewer the *intent* behind each direction alongside the screen-by-screen path."
  },

  {
    kind: "exercise",
    n: 2,
    title: "Bring the designs into a Figma file",
    lead: "Figma Make often adds scaffolding: landing pages, wrappers, and duplicated states.",
    steps: [
      {
        title: "Copy the designs into a Figma file",
        text: "Copy the designs out of Figma Make and into a Figma design file."
      },
      {
        title: "Keep only the app screens",
        text: "Delete the landing pages, wrappers, and duplicated states, so every frame left is one of the app's screens."
      }
    ],
    doneItems: [
      "Every frame in the file is one of the app's screens",
      "No wrappers or landing pages left behind"
    ],
    why: "The reviewer in exercise 4 reads this file. Scaffolding in it becomes noise in the review."
  },

  {
    kind: "exercise",
    n: 3,
    title: "Number the screens and group by direction",
    lead: "Three labelled groups, each holding its screens in flow order.",
    steps: [
      {
        title: "Number the screens",
        text: "Number each screen in the order a user moves through it."
      },
      {
        title: "Group them by direction",
        text: "Put each direction's screens in their own frame or section, named to match the direction name in `prototype-directions.md`."
      },
      {
        title: "Ask Figma Make for the flows",
        text: "In Figma Make, run this prompt. It asks for the flows in the same layout as `app-flow.md`, and for nothing else.",
        prompt: "Write out the flow of each of the three directions in the chat here. Describe only what is on each\nscreen and how the user moves between screens. Do not review the design, give opinions, or suggest\nimprovements, since the UX review is a separate step.\n\nUse the direction names from the prototype, and number the screens in the order a user moves\nthrough them, one line per screen. Use exactly this layout, and write nothing outside it:\n\n## Direction 1: [direction name]\n1. [Screen name]: [what the screen shows, what the user does there, and which screen it leads to]\n2. [Screen name]: [...]\n\n## Direction 2: [direction name]\n1. [Screen name]: [...]\n\n## Direction 3: [direction name]\n1. [Screen name]: [...]\n\n## Notes\n- [Only what a reader needs to follow the flows, such as a branch or one screen shown in several states]"
      },
      {
        title: "Paste the flows into app-flow.md",
        text: "Paste the result into `app-flow.md` in place of the empty template. Check that the direction names and screen numbers match the Figma file, and delete anything that comments on the design rather than describing the flow."
      }
    ],
    doneItems: [
      "Three named groups matching the names in `prototype-directions.md`",
      "Screens numbered in flow order",
      "`app-flow.md` uses the same names and numbers as the Figma file"
    ],
    why: "This is what makes the file readable to the review: the reviewer can take one direction at a time and refer to screens by number."
  },

  {
    kind: "statement",
    eyebrow: "A word before you run the review",
    text: "This is early design critique and hypothesis generation. Its findings are *not* user evidence and do not replace usability testing with users.",
    callout: {
      tone: "go",
      title: "What it is good for",
      text: "It surfaces problems you would not have spotted on your own, and pulls the prototype closer to the committed problem."
    }
  },

  {
    kind: "exercise",
    n: 4,
    title: "Run the persona UX review",
    lead: "Copilot Agent mode, with the Figma MCP connected and your files attached.",
    steps: [
      {
        title: "Attach your files",
        text: "In Copilot Chat, attach `personas.md`, `problem-definition.md`, `app-flow.md`, and `prototype-directions.md`."
      },
      {
        title: "Run the review",
        text: "Put the link to your Figma section at the top of this prompt, and adapt it.",
        prompt: "[Link to the Figma section containing the directions]\n\nAttached is a Figma file with 3 prototype directions for a bus app, each in its own named section\nwith screens numbered in flow order. Also attached are my personas.md, problem-definition.md,\napp-flow.md, and prototype-directions.md.\n\nUse app-flow.md for the mechanical path through each direction's screens, and\nprototype-directions.md for the intent behind each. Hold each direction to what it is trying to do,\nand not only to what is on screen.\n\nReview all three directions in character as each of my personas, so that every persona reviews every\ndirection. For each persona × direction, walk the numbered screens in order and note what that\npersona notices, struggles with, and wants, referring to screens by number. Stay true to each\npersona's evidence-grounded goals, and don't give generic feedback.\n\nThen pull it together into one prioritized findings table, highest-impact first, with columns:\nfinding, which persona(s), which direction, and severity. Write the full review and the table\ninto ux-review.md, and leave the Triage section empty.",
        note: "If Copilot asks for permission to run a Figma tool or edit `ux-review.md`, allow it. If it cannot reach Figma, check that the desktop app is open, then start the `figma` server again from **MCP: List Servers**."
      },
      {
        title: "Push back on generic feedback",
        text: "Read the review. If a persona's feedback reads generically, ask Copilot to ground the critique in that persona's specific goals and the evidence behind them."
      }
    ],
    doneItems: [
      "Every persona reviewed every direction",
      "Findings refer to screens by number",
      "A prioritized table: finding, persona(s), direction, severity"
    ],
    why: "The personas shaped the prototypes, so holding the prototypes to those same personas is what closes the loop."
  },

  {
    kind: "exercise",
    n: 5,
    title: "Triage",
    lead: "Same chat, so the review is still in context. The model proposes a grouping, and you decide.",
    steps: [
      {
        title: "Ask for a grouping",
        text: "Continue in the same chat and run this prompt. It writes the grouping into the **Triage** section of `ux-review.md`.",
        prompt: "From the prioritized findings table, help me triage. Group the findings into act on now, later,\nand won't do. For each, give a one-line reason tied to impact: how many personas it hurts, how\nsevere it is, and whether it undermines the committed problem. Flag any finding that only one\npersona cares about but that would hurt another if we \"fixed\" it, since that's the\nreliability-against-personalization tension resurfacing. Write the result into the Triage section\nof ux-review.md, and leave My decisions empty."
      },
      {
        title: "Move what you disagree with",
        text: "Read the grouping. Move any finding you disagree with to the group you think it belongs in."
      },
      {
        title: "Write your decisions",
        text: "Under **My decisions**, write one line in your own words for each act-on-now finding: why it goes ahead of the ones you parked. Add a line for every finding you moved, saying why."
      }
    ],
    doneItems: [
      "Every finding is in act on now, later, or won't do",
      "The **Triage** section of `ux-review.md` is written",
      "**My decisions** has your line for each act-on-now finding and each move"
    ],
    why: "Agreeing with the model is fine, as long as you can say why each finding goes ahead. In Session 4, Copilot reads these lines when it helps you choose which direction to build."
  },

  {
    kind: "list",
    eyebrow: "What you'll produce",
    title: "Three outputs",
    items: [
      { label: "3 prototype directions in Figma", text: "with `prototype-directions.md` describing each" },
      { label: "`app-flow.md`", text: "the screen-by-screen path through each direction" },
      { label: "`ux-review.md`", text: "the persona review, the prioritized findings, and your triage" }
    ]
  },

  {
    kind: "statement",
    eyebrow: "What you'll take away",
    text: "Given your own problem and personas as structured files, a generative tool returns prototypes grounded in the research, and you can pressure-test them straight away against the same personas."
  },

  {
    id: "next",
    kind: "cover",
    session: "session-4",
    eyebrow: "Next",
    title: "Session 4",
    lead: "A project knowledge base, and one verified increment of a working MVP.",
    meta: ["Bring all three outputs", "Nothing to install"]
  }
];
