"use client";

import { motion } from "framer-motion";
import { mobileProjects } from "@/lib/data";
import { sectionTransition } from "@/lib/animations";
import { useReveal } from "@/hooks/reveal";
import { MobileProjectCard } from "@/components/sections/mobile-projects/mobile-project-card";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionHeader } from "@/components/ui/section-header";

export function MobileProjects() {
  const { inView, ref } = useReveal<HTMLElement>();

  return (
    <section id="mobile" ref={ref} className="relative px-6 py-32">
      <SectionDivider />

      <div className="mx-auto max-w-6xl">
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : {}}
          initial={{ opacity: 0, y: 30 }}
          transition={sectionTransition}
        >
          <SectionHeader
            label="03. Mobile"
            subtitle="Cross-platform apps built with React Native - from secure messengers to social platforms and e-commerce."
            title="Mobile Applications"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mobileProjects.map((project, index) => (
            <MobileProjectCard
              key={project.id}
              index={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
