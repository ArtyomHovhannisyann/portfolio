"use client";

import { useSmoothScroll } from "@/hooks/smooth-scroll";
import { Icon } from "@/components/ui/icon";

type CertificateActionsProps = {
  credentialUrl: string | null;
};

const actionClassName =
  "flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-2 text-xs font-medium text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/20 hover:text-[var(--color-accent-2)]";

export function CertificateActions({ credentialUrl }: CertificateActionsProps) {
  const scrollToSection = useSmoothScroll();
  const hasCredential = Boolean(credentialUrl && credentialUrl !== "#");

  if (!hasCredential) {
    return (
      <button
        className={actionClassName}
        onClick={() => scrollToSection("contact")}
      >
        <Icon className="h-3.5 w-3.5" name="chat" />
        Contact Me
      </button>
    );
  }

  return (
    <>
      <a
        className={actionClassName}
        href={credentialUrl ?? undefined}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon className="h-3.5 w-3.5" name="view" />
        View
      </a>
      <a
        className={actionClassName}
        href={credentialUrl ?? undefined}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon className="h-3.5 w-3.5" name="download" />
        Download
      </a>
    </>
  );
}
