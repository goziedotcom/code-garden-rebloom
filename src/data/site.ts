import logoBlue from "@/assets/logo-blue-bg.jpg";
import logoLight from "@/assets/logo-white-bg.jpg";

export const site = {
  name: "Codegarden",
  slogan: "Where Coders Grow",
  tagline: "Nurturing the next generation of",
  // Words for the hero typewriter cursor effect
  rotatingWords: [
    "Game Developers",
    "Web Developers",
    "App Builders",
    "UI/UX Designers",
    "Python Programmers",
    "Roblox Creators",
  ],
  description:
    "Codegarden offers hands-on coding and programming tutorship for kids, teens and adults — from Scratch games to professional web and mobile apps.",
  logo: {
    primary: logoBlue, // blue background, white logo
    light: logoLight, // white background, blue logo
  },
  contact: {
    email: "info.codegarden@gmail.com",
    phone: "+234 810 502 5758",
    address: "Rivers State ICT Center, Air Force Road, Port Harcourt, Nigeria",
  },
  social: {
    instagram: "https://instagram.com/officialcodegarden",
    twitter: "https://twitter.com/officialcodegarden",
    youtube: "https://youtube.com/@officialcodegarden",
  },
  stats: [
    { value: "500+", label: "Students Taught" },
    { value: "12+", label: "Courses Offered" },
    { value: "98%", label: "Learner Satisfaction" },
    { value: "6+", label: "Years of Experience" },
  ],
  // Stock image for now — student learning visual
  classroomImage:
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1400&q=80",
};
