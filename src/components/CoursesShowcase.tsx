import { Link } from "@tanstack/react-router";
import { courses } from "@/data/courses";
import { CourseCard } from "./CourseCard";

export function CoursesShowcase({ limit }: { limit?: number }) {
  const list = limit ? courses.slice(0, limit) : courses;
  return (
    <section className="container mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Our Courses</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">
            Programs designed to <span className="text-deep-blue">spark curiosity</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From visual block coding for kids to professional web development for adults, every course is built for real outcomes — and a lot of fun along the way.
          </p>
        </div>
        {limit && (
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-deep-blue hover:text-gold transition-colors"
          >
            View all courses →
          </Link>
        )}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((c) => (
          <CourseCard key={c.slug} course={c} />
        ))}
      </div>
    </section>
  );
}
