import { Link } from "@tanstack/react-router";
import { Code2, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground/90 mt-24">
      <div className="container mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-gold-gradient text-gold-foreground">
              <Code2 className="h-5 w-5" />
            </span>
            <span className="font-display font-bold text-lg text-white">{site.name}</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/70">{site.description}</p>
          <div className="mt-6 flex gap-3">
            {[
              { href: site.social.instagram, Icon: Instagram },
              { href: site.social.twitter, Icon: Twitter },
              { href: site.social.youtube, Icon: Youtube },
              { href: `mailto:${site.contact.email}`, Icon: Mail },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid place-items-center h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/courses" className="hover:text-gold">Courses</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>{site.contact.email}</li>
            <li>{site.contact.phone}</li>
            <li>{site.contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6 py-6 text-xs text-white/50 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>{site.slogan}</span>
        </div>
      </div>
    </footer>
  );
}
