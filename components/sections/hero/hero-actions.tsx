"use client";

import { useSmoothScroll } from "@/hooks/smooth-scroll";

export function HeroActions() {
  const scrollToSection = useSmoothScroll();

  return (
    <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
      <button
        className="group rounded-xl bg-[var(--color-accent)] px-7 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(99,102,241,0.4)] transition-all duration-300 hover:bg-[var(--color-accent-2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]"
        onClick={() => scrollToSection("projects")}
      >
        View Portfolio
        <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>
      <button
        className="rounded-xl border border-[var(--color-border-light)] bg-[var(--color-surface)]/60 px-7 py-3 text-sm font-medium text-[var(--color-text-muted)] transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-2)] hover:text-white"
        onClick={() => scrollToSection("contact")}
      >
        Contact Me
      </button>
    </div>
  );
}
