// Central source of detailed content for each course's individual page.
// Keyed by Course.slug. Add/edit content here — the dynamic /courses/$slug
// route renders whatever is provided.

export type CourseDetail = {
  overview: string;
  outcomes: string[];
  whatYoullBuild: string[];
  prerequisites: string[];
  tools: string[];
  schedule: string;
  format: string;
  modules: { title: string; lessons: string[] }[];
};

export const courseDetails: Record<string, CourseDetail> = {
  "game-dev-scratch": {
    overview:
      "A playful, project-driven introduction to coding for young learners. Using MIT's Scratch, kids learn how programs are built — sequences, events, loops and conditionals — by making animations, stories and games they can share with friends and family.",
    outcomes: [
      "Think computationally and break problems into steps",
      "Use events, loops and conditionals confidently",
      "Design characters, scenes and simple game mechanics",
      "Debug and improve their own projects",
    ],
    whatYoullBuild: [
      "An animated story with multiple scenes",
      "A side-scrolling platformer mini-game",
      "A quiz/trivia game with scoring",
      "A capstone game showcased on demo day",
    ],
    prerequisites: ["Basic reading and computer skills", "No prior coding experience required"],
    tools: ["Scratch 3.0", "A laptop with internet access"],
    schedule: "6-month program · 2 sessions per week · 1 hour each",
    format: "Hybrid — in-class at our Port Harcourt center or live online",
    modules: [
      { title: "Welcome to Scratch", lessons: ["Tour of the editor", "Sprites & stages", "Your first animation"] },
      { title: "Motion & Events", lessons: ["Movement blocks", "Keyboard & mouse events", "Mini project: chase game"] },
      { title: "Loops & Logic", lessons: ["Repeat & forever", "If/else decisions", "Variables & scoring"] },
      { title: "Capstone Game", lessons: ["Game design", "Build & polish", "Demo day showcase"] },
    ],
  },
  "game-dev-roblox": {
    overview:
      "Step into Roblox Studio and learn how real 3D games are made. Students design environments, script gameplay in Lua, and publish their own playable game to the Roblox platform.",
    outcomes: [
      "Build 3D worlds in Roblox Studio",
      "Write Lua scripts for gameplay logic",
      "Use parts, models, and assets effectively",
      "Publish and share a working Roblox game",
    ],
    whatYoullBuild: [
      "An obstacle-course (obby) game",
      "A simple shooter or collection game",
      "A capstone multiplayer experience",
    ],
    prerequisites: ["Comfortable using a computer", "A Roblox account (free)"],
    tools: ["Roblox Studio", "Lua"],
    schedule: "6–12 month program · 2 sessions per week · 1.5 hours each",
    format: "Hybrid — in-class or live online",
    modules: [
      { title: "Studio Basics", lessons: ["Interface tour", "Parts & terrain", "Lighting & atmosphere"] },
      { title: "Lua Scripting", lessons: ["Variables & functions", "Events", "Player interactions"] },
      { title: "Game Mechanics", lessons: ["Checkpoints", "Leaderboards", "Sound & FX"] },
      { title: "Publish & Share", lessons: ["Testing", "Game settings", "Going live on Roblox"] },
    ],
  },
  python: {
    overview:
      "Python is the most widely used language in the world — powering websites, data science, automation and AI. This course takes learners from zero to confident, building real projects every week.",
    outcomes: [
      "Write clean, idiomatic Python",
      "Apply OOP concepts to real problems",
      "Read & write files, work with APIs",
      "Build small AI/data projects",
    ],
    whatYoullBuild: [
      "Command-line games (hangman, tic-tac-toe)",
      "A small automation script",
      "A data analysis mini-project",
      "A capstone AI/chatbot project",
    ],
    prerequisites: ["Basic computer literacy", "Math fundamentals helpful but not required"],
    tools: ["Python 3", "VS Code", "Git basics"],
    schedule: "6–12 month program · 2 sessions per week · 1.5 hours each",
    format: "Hybrid — in-class or live online",
    modules: [
      { title: "Python Foundations", lessons: ["Syntax & variables", "Data types", "Control flow"] },
      { title: "Functions & OOP", lessons: ["Functions & scope", "Classes & objects", "Inheritance"] },
      { title: "Working with Data", lessons: ["Files & JSON", "APIs & requests", "Pandas intro"] },
      { title: "Capstone Project", lessons: ["Project planning", "Build week", "Showcase"] },
    ],
  },
  "mobile-app-dev": {
    overview:
      "Learn to design, build and ship real mobile apps. Students go from idea to app store using modern cross-platform tools, with mentorship through every stage.",
    outcomes: [
      "Design and prototype mobile UIs",
      "Build cross-platform apps for Android & iOS",
      "Connect apps to APIs and storage",
      "Publish a working app",
    ],
    whatYoullBuild: [
      "A to-do / habit tracker",
      "A weather or news client",
      "A capstone app of your own design",
    ],
    prerequisites: ["Basic JavaScript or Python helpful", "Comfort with computers"],
    tools: ["React Native / Expo", "Figma", "Git & GitHub"],
    schedule: "12-month program · 2 sessions per week · 2 hours each",
    format: "Hybrid — in-class or live online",
    modules: [
      { title: "Design Foundations", lessons: ["UX basics", "Wireframes", "Figma prototypes"] },
      { title: "Building with React Native", lessons: ["Components", "Navigation", "State"] },
      { title: "Data & APIs", lessons: ["Fetching", "Local storage", "Auth basics"] },
      { title: "Ship It", lessons: ["Testing", "Build configs", "App store submission"] },
    ],
  },
  "ui-ux-design": {
    overview:
      "Great products start with great design. This course builds a strong foundation in user-centered design, visual hierarchy and prototyping in Figma — the industry standard tool.",
    outcomes: [
      "Apply design thinking to real problems",
      "Produce wireframes & high-fidelity mockups",
      "Build interactive prototypes in Figma",
      "Run lightweight user tests",
    ],
    whatYoullBuild: [
      "A mobile app redesign case study",
      "A landing page for a real brand",
      "A capstone interactive prototype",
    ],
    prerequisites: ["No design experience needed", "An eye for detail"],
    tools: ["Figma", "FigJam"],
    schedule: "6–12 month program · 2 sessions per week · 1.5 hours each",
    format: "Hybrid — in-class or live online",
    modules: [
      { title: "Design Thinking", lessons: ["Empathize & define", "Ideate", "Prototype & test"] },
      { title: "Visual Foundations", lessons: ["Type & color", "Layout & grids", "Components"] },
      { title: "Figma Mastery", lessons: ["Auto-layout", "Variants", "Interactive prototypes"] },
      { title: "Capstone", lessons: ["Brief & research", "Design sprint", "Showcase"] },
    ],
  },
  "web-development": {
    overview:
      "Build the modern web from the ground up. Learners go from basic HTML pages to fully interactive React apps deployed to the cloud — with the same workflow professional developers use.",
    outcomes: [
      "Write semantic HTML & responsive CSS",
      "Use JavaScript for interactivity",
      "Build component-driven UIs with React",
      "Deploy real projects to the web",
    ],
    whatYoullBuild: [
      "A personal portfolio site",
      "An interactive product landing page",
      "A capstone full-stack-ish React app",
    ],
    prerequisites: ["Basic computer skills", "Curiosity & patience"],
    tools: ["HTML, CSS, JavaScript", "React", "Git, GitHub & Vercel"],
    schedule: "12-month program · 2 sessions per week · 2 hours each",
    format: "Hybrid — in-class or live online",
    modules: [
      { title: "The Web Platform", lessons: ["HTML structure", "CSS layout", "Responsive design"] },
      { title: "JavaScript", lessons: ["Syntax", "DOM & events", "Async & APIs"] },
      { title: "React", lessons: ["Components & props", "State & effects", "Routing"] },
      { title: "Ship It", lessons: ["Git & GitHub", "Deploy to Vercel", "Capstone showcase"] },
    ],
  },
};
