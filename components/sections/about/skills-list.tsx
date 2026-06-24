"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useReveal } from "@/hooks/reveal";

export function SkillsList() {
  const { inView, ref } = useReveal<HTMLDivElement>("-60px");

  return (
    <div ref={ref}>
      <h3 className="mb-4 font-mono text-sm tracking-widest text-[var(--color-text-dim)] uppercase">
        Technologies
      </h3>
      <motion.div
        animate={inView ? "show" : "hidden"}
        className="flex flex-wrap gap-2"
        initial="hidden"
        variants={staggerContainer}
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            className="cursor-default rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-muted)] transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent-2)]"
            variants={fadeUp}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
