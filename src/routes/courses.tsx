import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";
import inSessionImg from "@/assets/in-session-class.jpg";

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

      {/* In-session class showcase */}
      <section className="bg-secondary/60 py-20">
        <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gold/20 blur-2xl rounded-3xl opacity-60" />
            <img
              src={inSessionImg}
              alt="A live in-session class at Code Garden"
              loading="lazy"
              className="relative rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover border border-border"
            />
            <div className="absolute -bottom-5 -left-5 hidden md:block bg-card border border-border rounded-2xl px-5 py-4 shadow-elevated">
              <div className="text-2xl font-display font-bold text-deep-blue">Live</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">In-session at our center</div>
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">In the classroom</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Real classes. <span className="text-deep-blue">Real mentors.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Learners thrive in our hands-on environment — small cohorts, mentor-led sessions and projects that ship by the end of every term. Join us in-person at our Port Harcourt center or online from anywhere.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
