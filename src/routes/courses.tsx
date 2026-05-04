import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Code Garden" },
      { name: "description", content: "Browse all coding and programming courses offered at Code Garden." },
      { property: "og:title", content: "Courses — Code Garden" },
      { property: "og:description", content: "Game dev, Python, web, mobile, UI/UX and more." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Courses"
        title={<>Find the perfect course for your <span className="text-gold">young coder</span></>}
        subtitle="Each program is designed for a specific age range and skill level. All courses include hands-on projects and a final showcase."
      />
      <section className="container mx-auto max-w-7xl px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
