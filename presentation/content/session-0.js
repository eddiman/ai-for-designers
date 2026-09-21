window.DECKS = window.DECKS || {};

window.DECKS["session-0"] = [
  {
    kind: "cover",
    eyebrow: "Session 0",
    title: "Get your workspace ready",
    lead: "A guided setup. Everyone finishes with the course folder open in VS Code, a Markdown file they can edit and preview, and Microsoft 365 Copilot ready for Session 1.",
    meta: ["Do this together", "Stop at every check", "About 15 minutes"]
  },

  {
    kind: "list",
    eyebrow: "Before you arrive for Session 1",
    title: "Bring these four things",
    items: [
      { label: "Your laptop.", text: "Use the machine you will work on throughout the course." },
      { label: "VS Code installed.", text: "Download it from `code.visualstudio.com/download`, install it, and open it once." },
      { label: "Microsoft 365 Copilot access.", text: "Sign in with your work account and confirm that you can start a browser chat." },
      { label: "Permission to download a ZIP.", text: "The course files come from the Download button on the presentation home page." }
    ],
    callout: {
      tone: "stop",
      title: "Sort out blocked installs before the session",
      text: "If your company laptop will not install VS Code, contact your support team before Session 1. The hands-on work starts in VS Code."
    }
  },

  {
    kind: "table",
    eyebrow: "Two tools with similar names",
    title: "Which Copilot are we using?",
    cols: ["Tool", "Where it runs", "Used in"],
    rows: [
      ["Microsoft 365 Copilot chat", "Your web browser", "Sessions 1 and 2: prompts, summaries, insights and personas"],
      ["GitHub Copilot", "Inside VS Code", "Sessions 3 and 4: Figma review, knowledge base and MVP build"]
    ],
    note: "Session 1 uses Microsoft 365 Copilot in the browser. VS Code is where you read the source files and save the work you want to carry forward."
  },

  {
    kind: "map",
    eyebrow: "Set up in this order",
    title: "Eight checks before Session 1",
    steps: [
      "install VS Code",
      "download",
      "extract",
      "open folder",
      "find files",
      "edit and save",
      "preview",
      "check chat"
    ]
  },

  {
    kind: "step",
    n: 1,
    title: "Install and open VS Code",
    lead: "If VS Code is already installed, open it and wait for the next step.",
    doItems: [
      "From the presentation home page, select **Get VS Code**.",
      "**Mac:** download the macOS version, open the downloaded file, drag **Visual Studio Code** into **Applications**, then open it.",
      "**Windows:** download the Windows installer, open it, follow the setup steps with the default choices, then select **Finish**.",
      "If your computer asks whether to open the downloaded application, confirm that you want to open it."
    ],
    doneItems: [
      "The Visual Studio Code window is open",
      "You can see **File** in the menu"
    ],
    why: "VS Code is where you browse the course folders, read the source material, and save the work produced in every session."
  },

  {
    kind: "step",
    n: 2,
    title: "Download the course files",
    lead: "The direct ZIP download is on the presentation home page.",
    doItems: [
      "Select **Home** in the presentation controls at the bottom of the screen.",
      "Select **Download course files (.zip)** below the introduction.",
      "Open your **Downloads** folder in Finder on Mac or File Explorer on Windows."
    ],
    doneItems: [
      "You can see `ai-for-designers-main.zip`",
      "Or your browser has already created an `ai-for-designers-main` folder"
    ],
    why: "The ZIP is a snapshot of the course repository. It contains the source material, empty files for your work, and the instructions for every session."
  },

  {
    kind: "step",
    n: 3,
    title: "Extract the ZIP",
    lead: "VS Code needs the extracted folder. Do not work inside the compressed ZIP.",
    doItems: [
      "**Mac:** double-click `ai-for-designers-main.zip`. If the folder already exists, your browser extracted it for you.",
      "**Windows:** right-click `ai-for-designers-main.zip`, choose **Extract All...**, then choose **Extract**.",
      "Move the extracted `ai-for-designers-main` folder to **Documents** or another place where you can find it again."
    ],
    doneItems: [
      "You have a normal folder named `ai-for-designers-main`",
      "Opening it shows `session-1-research-synthesis` and the other session folders"
    ],
    why: "The extracted folder is your course workspace. Changes you make there stay on your machine."
  },

  {
    kind: "step",
    n: 4,
    title: "Open the whole folder in VS Code",
    lead: "Open `ai-for-designers-main`, rather than one file or one session folder.",
    doItems: [
      "Open **Visual Studio Code**.",
      "Choose **File → Open Folder...** from the menu.",
      "Select the extracted `ai-for-designers-main` folder.",
      "Choose **Open** on Mac or **Select Folder** on Windows.",
      "If Workspace Trust appears, choose **Yes, I trust the authors**. These files came from the course download."
    ],
    doneItems: [
      "The Explorer shows `ai-for-designers-main` at the top",
      "You can see folders for Sessions 1 through 4"
    ],
    why: "Opening the whole course folder lets later sessions find the files you produce in earlier sessions."
  },

  {
    kind: "step",
    n: 5,
    title: "Find the Session 1 files",
    lead: "The Explorer is the file list on the left side of VS Code.",
    doItems: [
      "If the Explorer is hidden, select its two-file icon at the top left. Shortcut: **Cmd+Shift+E** on Mac or **Ctrl+Shift+E** on Windows.",
      "Select the arrow beside `session-1-research-synthesis` to expand it.",
      "Expand `premade` and open `interview-1-maja.md`.",
      "Then open `interview-summaries.md` from the Session 1 folder."
    ],
    doneItems: [
      "Maja's transcript opens as a tab",
      "`interview-summaries.md` opens as a second tab"
    ],
    why: "During Session 1, you read and copy from `premade/`, then write and paste your results into the empty files beside it."
  },

  {
    kind: "table",
    eyebrow: "Inside session-1-research-synthesis",
    title: "Read here, write here",
    cols: ["Location", "What it contains", "What you do"],
    rows: [
      ["`premade/`", "Three interview transcripts and questionnaire results", "Open, read, copy and attach. Leave these source files unchanged."],
      ["`interview-summaries.md`", "Space for all three interview summaries", "Paste summaries and comparison notes here."],
      ["`questionnaire-summary.md`", "Space for the questionnaire summaries", "Paste the questionnaire work here."],
      ["`triangulation.md`", "Agree, conflict, gaps and central tension", "Fill this after choosing one summary per source."]
    ]
  },

  {
    kind: "step",
    n: 6,
    title: "Type, paste and save",
    lead: "Use `interview-summaries.md` for a short setup check.",
    doItems: [
      "In the Explorer, select `interview-summaries.md`.",
      "Find **Interview 1: Maja**, then click the empty line below **Summary**.",
      "Type `Setup check`, then copy and paste this sentence after it: `I can paste into this file.`",
      "Save with **Cmd+S** on Mac or **Ctrl+S** on Windows."
    ],
    doneItems: [
      "Your text appears below Maja's Summary heading",
      "The white dot on the file tab disappears after saving"
    ],
    why: "This is the same action you use during Session 1: copy a response from the browser, paste it under the right heading, then save the file."
  },

  {
    kind: "step",
    n: 7,
    title: "Preview a Markdown file",
    lead: "Markdown is plain text with simple formatting. Preview shows how its headings, lists and emphasis will read.",
    doItems: [
      "Keep `interview-summaries.md` active.",
      "**Mac:** press **Cmd+Shift+V**. **Windows:** press **Ctrl+Shift+V**.",
      "The formatted preview opens in another tab. Return to the `interview-summaries.md` tab when you want to edit.",
      "Delete the two setup-check lines from the source file and save again."
    ],
    doneItems: [
      "You can open the formatted preview",
      "You know which tab is editable",
      "The temporary setup text is removed and saved"
    ],
    why: "Preview catches broken headings and lists before you attach the file to another tool."
  },

  {
    kind: "list",
    eyebrow: "If the preview shortcut does nothing",
    title: "Open the preview from the menu",
    ordered: true,
    items: [
      { label: "Open the Command Palette.", text: "Press **Cmd+Shift+P** on Mac or **Ctrl+Shift+P** on Windows." },
      { label: "Search for the command.", text: "Type `Markdown: Open Preview`." },
      { label: "Run it.", text: "Select **Markdown: Open Preview** from the list or press **Enter**." }
    ],
    callout: {
      tone: "go",
      title: "Same result, different route",
      text: "The Command Palette is VS Code's searchable list of actions. You can use it whenever you forget a shortcut."
    }
  },

  {
    kind: "step",
    n: 8,
    title: "Check Microsoft 365 Copilot",
    lead: "Session 1 uses Copilot in your browser alongside VS Code.",
    doItems: [
      "Open `m365.cloud.microsoft/chat`, or the Microsoft 365 Copilot link supplied by your organization.",
      "Sign in with your work account.",
      "Start a new chat and send: `Reply with: setup complete`"
    ],
    doneItems: [
      "Copilot replies in the browser",
      "You know where to start a fresh chat",
      "VS Code is still open with the course folder"
    ],
    why: "You will move between browser chat and VS Code throughout Session 1, so both need to be ready before the research exercise begins."
  },

  {
    kind: "map",
    eyebrow: "How you work in Session 1",
    title: "One repeatable loop",
    lead: "Keep VS Code and the browser open side by side if your screen allows it.",
    steps: [
      "open one source",
      "copy or attach it",
      "prompt in a fresh chat",
      "read the response",
      "paste into the output file",
      "save",
      "preview"
    ]
  },

  {
    kind: "list",
    eyebrow: "Readiness gate",
    title: "Do not start Session 1 until all five are true",
    check: true,
    items: [
      "VS Code shows the extracted `ai-for-designers-main` folder in the Explorer.",
      "You can open files in `session-1-research-synthesis/premade/`.",
      "You can type, paste and save in `interview-summaries.md`.",
      "**Cmd+Shift+V** on Mac or **Ctrl+Shift+V** on Windows opens the Markdown preview.",
      "Microsoft 365 Copilot answers in your browser."
    ],
    callout: {
      tone: "stop",
      title: "Raise your hand if one check fails",
      text: "Say which numbered step stopped you. We fix that step before the room moves on."
    }
  },

  {
    kind: "table",
    eyebrow: "Requirements for later sessions",
    title: "What to arrange after Session 1",
    cols: ["When", "You need", "Setup"],
    rows: [
      ["Session 2", "The same VS Code folder and Microsoft 365 Copilot chat", "No additional setup."],
      ["Before Session 3", "Figma desktop, Figma Make, an editable Figma file, and GitHub Copilot in VS Code", "Update Figma. Start any BSD, customer or internal Bouvet access request early."],
      ["During Session 3", "Figma's local MCP server", "We connect and verify it together, one step at a time."],
      ["Session 4", "VS Code with GitHub Copilot in Agent mode", "No app framework, packages or build tools to install."]
    ]
  },

  {
    kind: "cover",
    eyebrow: "Workspace ready",
    title: "Session 1: Research synthesis",
    lead: "Open the research files in VS Code, use Microsoft 365 Copilot in the browser, and save each result as Markdown.",
    meta: ["VS Code", "Microsoft 365 Copilot chat", "session-1-research-synthesis/"]
  }
];
