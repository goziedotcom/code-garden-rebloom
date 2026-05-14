import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import type { Course } from "@/data/courses";
import { courseDetails } from "@/data/course-details";
import { Clock, Users, GraduationCap, Wrench, Calendar, MapPin, ArrowLeft, Check } from "lucide-react";

export function CourseDetailView({ course }: { course: Course }) {
  const detail = courseDetails[course.slug];

  return (
    <Layout>
      <section className="relative bg-hero-gradient text-white pt-36 pb-20 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/25 blur-3xl animate-float" />
        <div className="container mx-auto max-w-7xl px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <Link to="/courses" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-gold mb-6">
              <ArrowLeft className="h-4 w-4" /> All courses
            </Link>
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">{course.category}</span>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">{course.title}</h1>
            <p className="mt-5 text-lg text-white/80 max-w-xl">{course.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Pill icon={<Users className="h-4 w-4" />}>{course.ageRange}</Pill>
              <Pill icon={<Clock className="h-4 w-4" />}>{course.duration}</Pill>
              <Pill icon={<GraduationCap className="h-4 w-4" />}>{course.level}</Pill>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center rounded-full bg-gold-gradient text-gold-foreground px-6 py-3 font-semibold hover:shadow-gold-glow transition-shadow">
                Enroll Today
              </Link>
              <Link to="/contact" className="inline-flex items-center rounded-full border border-white/30 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors">
                Book a Demo Class
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 bg-gold/20 blur-2xl rounded-3xl opacity-60" />
            <img
              src={course.image}
              alt={course.title}
              className="relative rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover border border-white/10"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {detail?.overview && (
            <div>
              <h2 className="font-display text-3xl font-bold">Course overview</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{detail.overview}</p>
            </div>
          )}

          {detail?.outcomes && (
            <div>
              <h2 className="font-display text-3xl font-bold">What you'll learn</h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {detail.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-gold-gradient text-gold-foreground shrink-0">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-foreground/90">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {detail?.whatYoullBuild && (
            <div>
              <h2 className="font-display text-3xl font-bold">What you'll build</h2>
              <ul className="mt-5 space-y-2">
                {detail.whatYoullBuild.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {detail?.modules && (
            <div>
              <h2 className="font-display text-3xl font-bold">Curriculum</h2>
              <div className="mt-5 space-y-4">
                {detail.modules.map((m, i) => (
                  <div key={m.title} className="rounded-2xl bg-card border border-border p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid place-items-center h-8 w-8 rounded-full bg-secondary text-deep-blue text-sm font-semibold">
                        {i + 1}
                      </span>
                      <h3 className="font-display text-lg font-bold">{m.title}</h3>
                    </div>
                    <ul className="mt-4 ml-11 space-y-1.5 text-sm text-muted-foreground">
                      {m.lessons.map((l) => (
                        <li key={l} className="list-disc list-outside">{l}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="lg:sticky lg:top-28 self-start">
          <div className="rounded-2xl bg-card border border-border p-6 shadow-elevated space-y-5">
            <h3 className="font-display text-xl font-bold">Course details</h3>
            <InfoRow icon={<Users className="h-4 w-4" />} label="Ages" value={course.ageRange} />
            <InfoRow icon={<Clock className="h-4 w-4" />} label="Duration" value={course.duration} />
            <InfoRow icon={<GraduationCap className="h-4 w-4" />} label="Level" value={course.level} />
            {detail?.schedule && <InfoRow icon={<Calendar className="h-4 w-4" />} label="Schedule" value={detail.schedule} />}
            {detail?.format && <InfoRow icon={<MapPin className="h-4 w-4" />} label="Format" value={detail.format} />}
            {detail?.tools && (
              <InfoRow icon={<Wrench className="h-4 w-4" />} label="Tools" value={detail.tools.join(", ")} />
            )}
            {detail?.prerequisites && (
              <div className="pt-3 border-t border-border">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Prerequisites</div>
                <ul className="text-sm space-y-1">
                  {detail.prerequisites.map((p) => (
                    <li key={p} className="text-foreground/90">• {p}</li>
                  ))}
                </ul>
              </div>
            )}
            <Link to="/contact" className="block text-center w-full rounded-full bg-gold-gradient text-gold-foreground px-5 py-3 font-semibold hover:shadow-gold-glow transition-shadow">
              Enroll Today
            </Link>
          </div>
        </aside>
      </section>
    </Layout>
  );
}

function Pill({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1.5">
      {icon}
      {children}
    </span>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid place-items-center h-8 w-8 rounded-lg bg-secondary text-deep-blue shrink-0">{icon}</span>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}
