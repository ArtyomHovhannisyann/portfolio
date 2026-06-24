"use client";

import { Icon } from "@/components/ui/icon";

export function BackToTop() {
  return (
    <button
      aria-label="Back to top"
      className="group flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-2 text-xs text-[var(--color-text-muted)] transition-all hover:border-[var(--color-border-light)] hover:text-white"
      onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
    >
      <Icon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" name="up" />
      Back to top
    </button>
  );
}
