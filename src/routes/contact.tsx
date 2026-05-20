import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";
import { Mail, Phone, MapPin, Send, MessageCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

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

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  age: z.string().trim().max(50).optional().or(z.literal("")),
  course: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", age: "", course: "", message: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const { error } = await supabase.from("contact_submissions").insert({
      name: values.name,
      email: values.email,
      age: values.age || null,
      course: values.course || null,
      message: values.message,
    });

    if (error) {
      toast.error("Something went wrong", {
        description: "Please try again or reach us on WhatsApp.",
      });
      return;
    }

    toast.success("Message sent!", {
      description: "We'll get back to you within 24 hours.",
    });
    reset();
    setSubmitted(true);
  };

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
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-3 rounded-2xl bg-card border border-border p-8 shadow-elevated"
          noValidate
        >
          {submitted ? (
            <div className="py-16 text-center">
              <div className="mx-auto h-14 w-14 rounded-full bg-gold-gradient text-gold-foreground grid place-items-center">
                <Send className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">Message sent!</h3>
              <p className="mt-2 text-muted-foreground">We'll get back to you within 24 hours.</p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-medium text-gold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" error={errors.name?.message} {...register("name")} />
              <Field label="Email" type="email" error={errors.email?.message} {...register("email")} />
              <Field label="Learner age" error={errors.age?.message} {...register("age")} />
              <Field label="Course of interest" error={errors.course?.message} {...register("course")} />
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  rows={5}
                  {...register("message")}
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="Tell us a bit about your goals or interests..."
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient text-gold-foreground px-7 py-3.5 font-semibold hover:shadow-gold-glow transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending <Loader2 className="h-4 w-4 animate-spin" /></>
                ) : (
                  <>Send Message <Send className="h-4 w-4" /></>
                )}
              </button>
            </div>
          )}
        </form>
      </section>
    </Layout>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  ({ label, error, type = "text", ...rest }, ref) => (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        ref={ref}
        type={type}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        {...rest}
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  ),
);
Field.displayName = "Field";
