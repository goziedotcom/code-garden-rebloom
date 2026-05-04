import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { TypewriterCursor } from "./TypewriterCursor";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-hero-gradient overflow-hidden text-white">
      {/* decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* gold glow blob */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/30 blur-3xl animate-float" />
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-deep-blue/60 blur-3xl" />

      <div className="container mx-auto max-w-7xl px-6 pt-32 pb-20 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-medium text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            {site.slogan}
          </span>

          <h1 className="mt-6 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            {site.tagline}
            <br />
            <TypewriterCursor
              words={site.rotatingWords}
              className="text-gold inline-block min-h-[1.1em]"
            />
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed">
            {site.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient text-gold-foreground px-7 py-3.5 font-semibold hover:shadow-gold-glow hover:scale-[1.02] transition-all"
            >
              Explore Courses <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-7 py-3.5 font-semibold hover:bg-white/10 transition-colors"
            >
              Book a Free Trial
            </Link>
          </div>

          <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {site.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-bold text-gold">{s.value}</dt>
                <dd className="text-xs uppercase tracking-wider text-white/60 mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Code window mock */}
        <div className="lg:col-span-5 hidden lg:block animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/20 blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl bg-navy/80 backdrop-blur border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/30">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3 text-xs text-white/50 font-mono">main.py</span>
              </div>
              <pre className="p-6 text-sm font-mono leading-relaxed text-white/90">
{`# Welcome to Code Garden 🌱
def grow(student):
    skills = ["create", "build", "ship"]
    for skill in skills:
        student.learn(skill)
    return student.confidence + ∞

`}<span className="text-gold">future_dev</span>{` = grow(you)
print("Let's code!")`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
