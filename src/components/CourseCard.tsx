import { Clock, Users, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Course } from "@/data/courses";

const courseLinks = {
  "game-dev-scratch": "/courses/game-dev-scratch",
  "game-dev-roblox": "/courses/game-dev-roblox",
  python: "/courses/python",
  "mobile-app-dev": "/courses/mobile-app-dev",
  "ui-ux-design": "/courses/ui-ux-design",
  "web-development": "/courses/web-development",
} as const;

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      to={courseLinks[course.slug as keyof typeof courseLinks]}
      className="group relative block rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-gold-gradient text-gold-foreground text-xs font-semibold px-3 py-1">
          {course.category}
        </span>
        <span className="absolute top-4 right-4 rounded-full bg-white/90 text-navy text-xs font-medium px-3 py-1">
          {course.level}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-gold transition-colors">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{course.blurb}</p>
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{course.ageRange}</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="text-sm font-semibold text-deep-blue">Learn more</span>
          <span className="grid place-items-center h-8 w-8 rounded-full bg-secondary text-deep-blue group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
