"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { MobileProject } from "@/lib/data";
import { cardTransition } from "@/lib/animations";
import { useReveal } from "@/hooks/reveal";
import { useSmoothScroll } from "@/hooks/smooth-scroll";
import { Icon } from "@/components/ui/icon";
import { TechStack } from "@/components/ui/tech-stack";

const fallbackGradients = [
  "from-[var(--color-accent)]/20 to-[var(--color-purple)]/20",
  "from-[var(--color-cyan)]/20 to-[var(--color-accent)]/20",
  "from-[var(--color-purple)]/20 to-[var(--color-cyan)]/20",
  "from-[var(--color-emerald)]/20 to-[var(--color-accent)]/20",
  "from-[var(--color-accent)]/20 to-[var(--color-emerald)]/20",
];

type MobileProjectCardProps = {
  index: number;
  project: MobileProject;
};

export function MobileProjectCard({ index, project }: MobileProjectCardProps) {
  const { inView, ref } = useReveal<HTMLDivElement>("-60px");
  const scrollToSection = useSmoothScroll();
  const fallbackClassName = fallbackGradients[index % fallbackGradients.length];

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
          <div
            className={`absolute inset-0 bg-gradient-to-br ${fallbackClassName}`}
          />
        )}
        <div className="absolute inset-0 bg-[var(--color-bg)]/0 transition-colors duration-500 group-hover:bg-[var(--color-bg)]/20" />

        <div className="absolute top-3 left-3">
          <span className="flex items-center gap-1.5 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]/70 px-2.5 py-1 font-mono text-[10px] font-medium text-[var(--color-text-muted)] backdrop-blur-sm">
            <Icon className="h-3 w-3" name="mobile" />
            Mobile App
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

        <div className="mt-auto flex gap-2 pt-2">
          {project.relatedUrl && (
            <a
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[var(--color-accent)] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[var(--color-accent-2)]"
              href={project.relatedUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className="h-3.5 w-3.5" name="external-link" />
              View Web
            </a>
          )}
          <button
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-2 text-xs font-medium text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)] hover:text-white"
            onClick={() => scrollToSection("contact")}
          >
            Inquire
          </button>
        </div>
      </div>
    </motion.div>
  );
}
