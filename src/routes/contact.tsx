import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Code Garden" },
      { name: "description", content: "Get in touch with Code Garden to enroll, ask questions, or book a free trial class." },
      { property: "og:title", content: "Contact Code Garden" },
      { property: "og:description", content: "Book a free trial or send us a message." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Layout>
      <PageHero
        eyebrow="Get in Touch"
        title={<>Let's start your <span className="text-gold">coding journey</span></>}
        subtitle="Questions about a course, age requirements, or scheduling? Whether you're enrolling a child, teen, or yourself — we'd love to hear from you."
      />

      <section className="container mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {[
            { Icon: Mail, label: "Email", value: site.contact.email },
            { Icon: Phone, label: "Phone", value: site.contact.phone },
            { Icon: MapPin, label: "Location", value: site.contact.address },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 rounded-2xl bg-card border border-border p-6">
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-gold-gradient text-gold-foreground shrink-0">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="mt-1 font-medium text-foreground">{value}</div>
              </div>
            </div>
          ))}

          <a
            href={`https://wa.me/${site.contact.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi Code Garden! I'd like to learn more about your courses.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] text-white p-5 font-semibold hover:bg-[#1ebe57] transition-colors shadow-elevated"
          >
            <MessageCircle className="h-5 w-5" />
            Chat with us on WhatsApp
          </a>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="lg:col-span-3 rounded-2xl bg-card border border-border p-8 shadow-elevated"
        >
          {submitted ? (
            <div className="py-16 text-center">
              <div className="mx-auto h-14 w-14 rounded-full bg-gold-gradient text-gold-foreground grid place-items-center">
                <Send className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">Message sent!</h3>
              <p className="mt-2 text-muted-foreground">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Learner age" name="age" />
              <Field label="Course of interest" name="course" />
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  rows={5}
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="Tell us a bit about your goals or interests..."
                />
              </div>
              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient text-gold-foreground px-7 py-3.5 font-semibold hover:shadow-gold-glow transition-shadow"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
      />
    </div>
  );
}
