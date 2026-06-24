import { personalInfo } from "@/lib/data";
import { Icon } from "@/components/ui/icon";

export function ResumeLink() {
  return (
    <a
      className="group flex items-center gap-2 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-surface)]/60 px-6 py-3 text-sm font-medium text-[var(--color-text-muted)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-white"
      href={personalInfo.resumeUrl}
    >
      <Icon className="h-4 w-4" name="download" />
      Download Resume
    </a>
  );
}
