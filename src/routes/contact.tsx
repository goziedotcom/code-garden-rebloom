import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.7.244-1.06 0-.488-1.466-1.376-1.838-1.633zm-2.95 7.622c-4.81 0-8.785-3.974-8.785-8.785s3.974-8.785 8.785-8.785 8.785 3.974 8.785 8.785-3.974 8.785-8.785 8.785zm0-19.66c-5.99 0-10.875 4.886-10.875 10.875 0 2.06.573 3.918 1.547 5.563l-1.96 5.788 6.013-1.92a10.71 10.71 0 0 0 5.275 1.36c5.99 0 10.875-4.886 10.875-10.876 0-5.99-4.886-10.875-10.875-10.875z" />
    </svg>
  );
}
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useForm as useFormspree } from "@formspree/react";

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
  const [formspreeState, submitToFormspree] = useFormspree("xeedewwd");
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
    try {
      await submitToFormspree(values);
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or reach us on WhatsApp.",
      });
    }
  };

  React.useEffect(() => {
    if (formspreeState.succeeded) {
      toast.success("Message sent!", {
        description: "We'll get back to you within 24 hours.",
      });
      reset();
      setSubmitted(true);
    } else if (formspreeState.errors && formspreeState.errors.getAllFieldErrors().length) {
      toast.error("Something went wrong", {
        description: "Please try again or reach us on WhatsApp.",
      });
    }
  }, [formspreeState.succeeded, formspreeState.errors, reset]);

  const submitting = isSubmitting || formspreeState.submitting;

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
                disabled={submitting}
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient text-gold-foreground px-7 py-3.5 font-semibold hover:shadow-gold-glow transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? (
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
