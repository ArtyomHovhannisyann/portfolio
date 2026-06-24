import { socialLinks } from "@/lib/social-links";
import { Icon } from "@/components/ui/icon";

export function FooterSocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          aria-label={link.label}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text-muted)] transition-all hover:border-[var(--color-border-light)] hover:text-white"
          href={link.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon className="h-4 w-4" name={link.icon} />
        </a>
      ))}
    </div>
  );
}
