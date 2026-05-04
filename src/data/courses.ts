export type Course = {
  slug: string;
  title: string;
  category: string;
  ageRange: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  blurb: string;
  highlights: string[];
  image: string;
  accent?: string;
};

export const courses: Course[] = [
  {
    slug: "game-dev-scratch",
    title: "Game Development with Scratch",
    category: "Game Development",
    ageRange: "Ages 7–11",
    duration: "8 weeks",
    level: "Beginner",
    blurb:
      "An exciting first step into coding. Kids design characters, animations and full mini-games using Scratch's visual blocks.",
    highlights: [
      "Drag-and-drop visual programming",
      "Story, animation & game projects",
      "Logical thinking & problem solving",
    ],
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
  },
  {
    slug: "game-dev-roblox",
    title: "Game Development with Roblox",
    category: "Game Development",
    ageRange: "Ages 10–16",
    duration: "10 weeks",
    level: "Intermediate",
    blurb:
      "Build playable 3D worlds in Roblox Studio and learn Lua scripting to bring your games to life.",
    highlights: [
      "3D world & terrain design",
      "Lua scripting fundamentals",
      "Publish your own Roblox game",
    ],
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
  },
  {
    slug: "python",
    title: "Python Programming",
    category: "Programming",
    ageRange: "Ages 11+",
    duration: "12 weeks",
    level: "Beginner",
    blurb:
      "Learn the world's most popular programming language. Build games, automate tasks and dive into AI basics.",
    highlights: [
      "Variables, loops & functions",
      "Object-oriented programming",
      "Mini AI & data projects",
    ],
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&q=80",
  },
  {
    slug: "mobile-app-dev",
    title: "Mobile App Development",
    category: "App Development",
    ageRange: "Ages 13+",
    duration: "12 weeks",
    level: "Intermediate",
    blurb:
      "Design and build real mobile apps for Android and iOS using modern frameworks.",
    highlights: [
      "App design & prototyping",
      "Cross-platform development",
      "Publish to app stores",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design",
    ageRange: "Ages 12+",
    duration: "8 weeks",
    level: "Beginner",
    blurb:
      "Master the craft of creating beautiful, intuitive digital experiences using Figma.",
    highlights: [
      "Design thinking & wireframes",
      "Figma from zero to pro",
      "Prototyping & user testing",
    ],
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80",
  },
  {
    slug: "web-development",
    title: "Website Development",
    category: "Web Development",
    ageRange: "Ages 12+",
    duration: "12 weeks",
    level: "Intermediate",
    blurb:
      "From HTML & CSS to interactive sites with JavaScript and React — build the modern web.",
    highlights: [
      "HTML, CSS & JavaScript",
      "Responsive design",
      "Build & deploy real projects",
    ],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
  },
];
