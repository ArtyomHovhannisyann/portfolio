"use client";

import { motion } from "framer-motion";
import { sectionTransition } from "@/lib/animations";
import { useReveal } from "@/hooks/reveal";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactInfo } from "@/components/sections/contact/contact-info";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionHeader } from "@/components/ui/section-header";

export function Contact() {
  const { inView, ref } = useReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="relative px-6 py-32">
      <SectionDivider />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[var(--color-accent)]/3 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : {}}
          initial={{ opacity: 0, y: 30 }}
          transition={sectionTransition}
        >
          <SectionHeader
            label="05. Contact"
            subtitle="Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you."
            title="Let's Work Together"
          />
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
          <ContactInfo inView={inView} />
          <ContactForm inView={inView} />
        </div>
      </div>
    </section>
  );
}
