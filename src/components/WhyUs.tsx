import { Rocket, HeartHandshake, Trophy, Lightbulb } from "lucide-react";
import { site } from "@/data/site";

const items = [
  { Icon: Rocket, title: "Project-based learning", text: "Learners build real apps, games and websites — not just slides." },
  { Icon: Lightbulb, title: "Small class sizes", text: "Personalized attention so every student gets to shine." },
  { Icon: HeartHandshake, title: "All ages welcome", text: "Tailored tracks for kids, teens and adults — beginners to pros." },
  { Icon: Trophy, title: "Showcase & certificates", text: "End every term with a portfolio piece you're proud of." },
];

export function WhyUs() {
  return (
    <section className="bg-secondary/60 py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Why Codegarden</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            We grow coders, at every age
          </h2>
          <p className="mt-4 text-muted-foreground">
            From curious kids to career-switching adults, our mentors meet learners where they are and take them where they want to go.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gold/20 blur-2xl rounded-3xl opacity-60" />
            <img
              src={site.classroomImage}
              alt="Students learning to code at Codegarden"
              className="relative rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover border border-border"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -right-5 hidden md:block bg-card border border-border rounded-2xl px-5 py-4 shadow-elevated">
              <div className="text-2xl font-display font-bold text-deep-blue">Hands-on</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Real projects, real skills</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
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
      </div>
    </section>
  );
}
