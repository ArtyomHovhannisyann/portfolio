"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { smoothEase } from "@/lib/animations";
import { AvailabilityDetail } from "@/components/sections/contact/availability-detail";
import { ContactDetail } from "@/components/sections/contact/contact-detail";
import { SocialLinksList } from "@/components/sections/contact/social-links-list";

type ContactInfoProps = {
  inView: boolean;
};

export function ContactInfo({ inView }: ContactInfoProps) {
  return (
    <motion.div
      animate={inView ? { opacity: 1, x: 0 } : {}}
      className="flex flex-col gap-6 lg:col-span-2"
      initial={{ opacity: 0, x: -30 }}
      transition={{ delay: 0.15, duration: 0.7, ease: smoothEase }}
    >
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <h3 className="mb-4 text-base font-semibold text-white">
          Get in Touch
        </h3>

        <div className="mb-6 space-y-3">
          <ContactDetail icon="location" text={personalInfo.location} />
          <ContactDetail icon="email" text={personalInfo.email} />
          <AvailabilityDetail />
        </div>

        <SocialLinksList />
      </div>
    </motion.div>
  );
}
