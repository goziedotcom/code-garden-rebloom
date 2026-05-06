import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={site.logo.light}
            alt={`${site.name} logo`}
            className="h-8 w-auto group-hover:scale-105 transition-transform"
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-full bg-gold-gradient text-gold-foreground px-5 py-2 text-sm font-semibold hover:shadow-gold-glow transition-shadow"
          >
            Enroll Now
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border animate-fade-up">
          <div className="px-6 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/80 hover:text-gold"
                activeProps={{ className: "text-gold font-semibold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-gold-gradient text-gold-foreground px-5 py-2 text-sm font-semibold"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
