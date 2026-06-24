"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { smoothEase } from "@/lib/animations";
import { useContactForm } from "@/hooks/contact-form";
import { Icon } from "@/components/ui/icon";
import { ContactSuccess } from "@/components/sections/contact/contact-success";
import { FormField } from "@/components/sections/contact/form-field";

type ContactFormProps = {
  inView: boolean;
};

export function ContactForm({ inView }: ContactFormProps) {
  const { form, handleChange, handleSubmit, resetForm, status } =
    useContactForm(personalInfo.email);

  return (
    <motion.div
      animate={inView ? { opacity: 1, x: 0 } : {}}
      className="lg:col-span-3"
      initial={{ opacity: 0, x: 30 }}
      transition={{ delay: 0.25, duration: 0.7, ease: smoothEase }}
    >
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
        {status === "sent" ? (
          <ContactSuccess onReset={resetForm} />
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                label="Name"
                name="name"
                onChange={handleChange}
                placeholder="John Doe"
                value={form.name}
              />
              <FormField
                label="Email"
                name="email"
                onChange={handleChange}
                placeholder="john@example.com"
                type="email"
                value={form.email}
              />
            </div>

            <FormField
              label="Message"
              name="message"
              onChange={handleChange}
              placeholder="Tell me about your project..."
              value={form.message}
            />

            <button
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(99,102,241,0.3)] transition-all duration-300 hover:bg-[var(--color-accent-2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] disabled:opacity-60"
              disabled={status === "sending"}
              type="submit"
            >
              {status === "sending" ? (
                <>
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
                      fill="currentColor"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Icon className="h-4 w-4" name="send" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}
