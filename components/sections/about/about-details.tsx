"use client";

import { motion } from "framer-motion";
import { smoothEase } from "@/lib/animations";
import { AboutCopy } from "@/components/sections/about/about-copy";
import { SkillsList } from "@/components/sections/about/skills-list";

type AboutDetailsProps = {
  inView: boolean;
};

export function AboutDetails({ inView }: AboutDetailsProps) {
  return (
    <motion.div
      animate={inView ? { opacity: 1, x: 0 } : {}}
      className="flex flex-col gap-8"
      initial={{ opacity: 0, x: 40 }}
      transition={{ delay: 0.25, duration: 0.8, ease: smoothEase }}
    >
      <AboutCopy />
      <SkillsList />
    </motion.div>
  );
}
