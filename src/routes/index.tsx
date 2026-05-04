import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CoursesShowcase } from "@/components/CoursesShowcase";
import { WhyUs } from "@/components/WhyUs";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Code Garden — Coding & Programming Tutorship for Kids & Teens" },
      {
        name: "description",
        content:
          "Code Garden teaches game development, Python, web, mobile and UI/UX design to young learners through fun, project-based courses.",
      },
      { property: "og:title", content: "Code Garden — Where Young Coders Grow" },
      { property: "og:description", content: "Hands-on coding courses for kids and teens." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <CoursesShowcase limit={6} />
      <WhyUs />
      <CTASection />
    </Layout>
  );
}
