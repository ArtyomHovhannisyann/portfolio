"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { cardTransition } from "@/lib/animations";
import { useReveal } from "@/hooks/reveal";
import { Icon } from "@/components/ui/icon";
import { TechStack } from "@/components/ui/tech-stack";

type ProjectCardProps = {
  index: number;
  project: Project;
};

export function ProjectCard({ index, project }: ProjectCardProps) {
  const { inView, ref } = useReveal<HTMLDivElement>("-60px");

  return (
    <motion.div
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-500 hover:border-[var(--color-border-light)] hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]"
      initial={{ opacity: 0, y: 30 }}
      transition={{ ...cardTransition, delay: (index % 3) * 0.1 }}
    >
      <div className="relative h-44 overflow-hidden bg-[var(--color-surface-2)]">
        {project.image ? (
          <Image
            alt={project.title}
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            src={project.image}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-purple)]/20" />
        )}
        <div className="absolute inset-0 bg-[var(--color-bg)]/0 transition-colors duration-500 group-hover:bg-[var(--color-bg)]/20" />

        <div className="absolute top-3 left-3">
          <span className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]/70 px-2.5 py-1 font-mono text-[10px] font-medium text-[var(--color-text-muted)] backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="mb-2 text-base font-semibold text-white transition-colors group-hover:text-[var(--color-accent-2)]">
            {project.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {project.description}
          </p>
        </div>

        <TechStack technologies={project.technologies} />

        <div className="mt-auto flex gap-3 pt-2">
          <a
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[var(--color-accent)] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[var(--color-accent-2)]"
            href={project.demoUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon className="h-3.5 w-3.5" name="external-link" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
