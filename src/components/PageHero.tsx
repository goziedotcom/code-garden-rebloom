type Props = { eyebrow?: string; title: React.ReactNode; subtitle?: string };

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative bg-hero-gradient text-white pt-36 pb-20 overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/25 blur-3xl animate-float" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container mx-auto max-w-7xl px-6 relative z-10 animate-fade-up">
        {eyebrow && (
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">{eyebrow}</span>
        )}
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}
