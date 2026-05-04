import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { site } from "@/data/site";
import { Sprout, Target, Eye } from "lucide-react";

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
