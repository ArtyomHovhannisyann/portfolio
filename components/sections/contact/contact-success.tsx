"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";

type ContactSuccessProps = {
  onReset: () => void;
};

export function ContactSuccess({ onReset }: ContactSuccessProps) {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center gap-4 py-12 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-emerald)]/30 bg-[var(--color-emerald)]/15">
        <Icon className="h-8 w-8 text-[var(--color-emerald)]" name="check" />
      </div>
      <h3 className="text-lg font-semibold text-white">Message Sent!</h3>
      <p className="text-sm text-[var(--color-text-muted)]">
        Thanks for reaching out. I&apos;ll get back to you within 24 hours.
      </p>
      <button
        className="mt-2 rounded-lg border border-[var(--color-border)] px-5 py-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
        onClick={onReset}
      >
        Send another
      </button>
    </motion.div>
  );
}
