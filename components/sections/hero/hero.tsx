"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { heroContainer, heroItem } from "@/lib/animations";
import { AvailabilityBadge } from "@/components/sections/hero/availability-badge";
import { HeroActions } from "@/components/sections/hero/hero-actions";
import { HeroStats } from "@/components/sections/hero/hero-stats";

const stats = [
  { label: "Years Experience", value: `${personalInfo.yearsOfExperience}+` },
  { label: "Live Projects", value: "7+" },
  { label: "Roles at Fantasy Space", value: "3" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="grid-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16"
    >
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-2/3 left-1/4 h-[400px] w-[400px] rounded-full bg-[var(--color-purple)]/5 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-[300px] w-[300px] rounded-full bg-[var(--color-cyan)]/4 blur-[90px]" />

      <motion.div
        animate="show"
        className="z-10 flex w-full max-w-4xl flex-col items-center gap-6 text-center"
        initial="hidden"
        variants={heroContainer}
      >
        <motion.div variants={heroItem}>
          <AvailabilityBadge />
        </motion.div>

        <motion.h1
          className="text-5xl leading-none font-bold tracking-tight sm:text-7xl lg:text-8xl"
          variants={heroItem}
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          className="font-mono text-lg tracking-wide text-[var(--color-accent-2)] sm:text-xl"
          variants={heroItem}
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          className="max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
          variants={heroItem}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div variants={heroItem}>
          <HeroActions />
        </motion.div>

        <motion.div variants={heroItem}>
          <HeroStats stats={stats} />
        </motion.div>
      </motion.div>
    </section>
  );
}
