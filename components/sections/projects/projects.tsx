"use client";

import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/data";
import { sectionTransition } from "@/lib/animations";
import { useProjectFilter } from "@/hooks/project-filter";
import { useReveal } from "@/hooks/reveal";
import { ProjectCard } from "@/components/sections/projects/project-card";
import { ProjectFilterTabs } from "@/components/sections/projects/project-filter-tabs";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionHeader } from "@/components/ui/section-header";

export function Projects() {
  const { inView, ref } = useReveal<HTMLElement>();
  const { activeCategory, categories, filteredProjects, setActiveCategory } =
    useProjectFilter(projects);

  return (
    <section id="projects" ref={ref} className="relative px-6 py-32">
      <SectionDivider />

      <div className="mx-auto max-w-6xl">
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : {}}
          initial={{ opacity: 0, y: 30 }}
          transition={sectionTransition}
        >
          <SectionHeader
            label="02. Work"
            subtitle="A curated collection of projects that showcase my skills across the full stack."
            title="Selected Projects"
          />
        </motion.div>

        <ProjectFilterTabs
          activeCategory={activeCategory}
          categories={categories}
          inView={inView}
          onSelect={setActiveCategory}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                project={project}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
