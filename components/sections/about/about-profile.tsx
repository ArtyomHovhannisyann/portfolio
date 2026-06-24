"use client";

import { motion } from "framer-motion";
import { smoothEase } from "@/lib/animations";
import { ProfilePhoto } from "@/components/sections/about/profile-photo";
import { QuickFacts } from "@/components/sections/about/quick-facts";
import { ResumeLink } from "@/components/sections/about/resume-link";

type AboutProfileProps = {
  inView: boolean;
};

export function AboutProfile({ inView }: AboutProfileProps) {
  return (
    <motion.div
      animate={inView ? { opacity: 1, x: 0 } : {}}
      className="flex flex-col items-center gap-8 lg:items-start"
      initial={{ opacity: 0, x: -40 }}
      transition={{ delay: 0.15, duration: 0.8, ease: smoothEase }}
    >
      <ProfilePhoto />
      <QuickFacts />
      <ResumeLink />
    </motion.div>
  );
}
