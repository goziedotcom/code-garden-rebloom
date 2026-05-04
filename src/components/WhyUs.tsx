import { Rocket, HeartHandshake, Trophy, Lightbulb } from "lucide-react";

const items = [
  { Icon: Rocket, title: "Project-based learning", text: "Students build real apps, games and websites — not just slides." },
  { Icon: Lightbulb, title: "Small class sizes", text: "Personalized attention so every learner gets to shine." },
  { Icon: HeartHandshake, title: "Patient mentors", text: "Friendly tutors who know how to make code click for kids." },
  { Icon: Trophy, title: "Showcase & certificates", text: "End every term with a portfolio piece they're proud of." },
];

export function WhyUs() {
  return (
    <section className="bg-secondary/60 py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Why Code Garden</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            We grow coders, not just students
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl bg-card p-6 border border-border hover:border-gold/40 hover:shadow-elevated transition-all"
            >
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-gold-gradient text-gold-foreground group-hover:scale-110 transition-transform">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
