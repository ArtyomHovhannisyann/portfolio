"use client";

import { motion } from "framer-motion";
import { sectionTransition } from "@/lib/animations";
import { useReveal } from "@/hooks/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { AboutDetails } from "@/components/sections/about/about-details";
import { AboutProfile } from "@/components/sections/about/about-profile";

export function About() {
  const { inView, ref } = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : {}}
          initial={{ opacity: 0, y: 30 }}
          transition={sectionTransition}
        >
          <SectionHeader
            label="01. About"
            subtitle="A developer driven by curiosity, craftsmanship, and a relentless pursuit of clean code."
            title="Who I Am"
          />
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <AboutProfile inView={inView} />
          <AboutDetails inView={inView} />
        </div>
      </div>
    </section>
  );
}
