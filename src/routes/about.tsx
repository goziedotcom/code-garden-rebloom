import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { site } from "@/data/site";
import { Sprout, Target, Eye, Quote } from "lucide-react";
import ceoPhoto from "@/assets/ceo-wilfred.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Code Garden" },
      { name: "description", content: "Learn about Code Garden's mission to grow the next generation of creators and coders." },
      { property: "og:title", content: "About Code Garden" },
      { property: "og:description", content: "Our mission, our vision, our story." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Us"
        title={<>Where curious minds become <span className="text-gold">confident creators</span></>}
        subtitle={site.description}
      />
      <section className="container mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-6">
        {[
          { Icon: Sprout, title: "Our Story", text: "Code Garden began with a simple idea: kids learn best when they're building something they care about. Today, we're helping students everywhere bring their ideas to life with code." },
          { Icon: Target, title: "Our Mission", text: "To make programming accessible, joyful and meaningful for every young person — regardless of background or experience." },
          { Icon: Eye, title: "Our Vision", text: "A generation that doesn't just consume technology — but shapes it." },
        ].map(({ Icon, title, text }) => (
          <div key={title} className="rounded-2xl bg-card border border-border p-8 hover:border-gold/40 transition-colors">
            <span className="grid place-items-center h-12 w-12 rounded-xl bg-gold-gradient text-gold-foreground">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </section>

      <section className="container mx-auto max-w-6xl px-6 pb-8">
        <div className="relative rounded-3xl bg-hero-gradient text-white p-10 md:p-14 overflow-hidden shadow-elevated">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative grid md:grid-cols-[auto,1fr] gap-10 items-center">
            <div className="relative mx-auto md:mx-0">
              <div className="absolute -inset-3 bg-gold/30 blur-2xl rounded-full" />
              <img
                src={ceoPhoto}
                alt="Mr. Wilfred W., CEO of Code Garden Institute"
                className="relative h-48 w-48 md:h-56 md:w-56 rounded-full object-cover border-4 border-gold/60 shadow-elevated"
              />
            </div>
            <div>
              <Quote className="h-8 w-8 text-gold" />
              <blockquote className="mt-4 font-display text-xl md:text-2xl leading-relaxed text-white/90">
                At Code Garden, we nurture young minds by seamlessly blending offline and online coding classes. Our innovative approach ensures kids embark on a coding journey that transcends digital boundaries, fostering creativity and skills that last a lifetime. Join us in cultivating the next generation of tech enthusiasts!
              </blockquote>
              <div className="mt-6">
                <div className="font-display text-lg font-bold text-gold">Mr. Wilfred W.</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">CEO, Code Garden Institute</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="container mx-auto max-w-7xl px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {site.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-5xl font-bold text-deep-blue">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
