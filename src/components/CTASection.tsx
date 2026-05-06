import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-12 md:p-16 text-white shadow-elevated">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/30 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Ready to plant the seed of <span className="text-gold">code</span>?
          </h2>
          <p className="mt-4 text-white/75 text-lg">
            Book a free trial class and see your child light up as they create their first project.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-gradient text-gold-foreground px-7 py-3.5 font-semibold hover:shadow-gold-glow transition-shadow"
          >
            Book a Demo Class <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
