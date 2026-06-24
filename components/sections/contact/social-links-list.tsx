import { socialLinks } from "@/lib/social-links";
import { Icon } from "@/components/ui/icon";

export function SocialLinksList() {
  return (
    <div>
      <p className="mb-3 font-mono text-xs tracking-widest text-[var(--color-text-dim)] uppercase">
        Find me on
      </p>
      <div className="flex flex-wrap gap-2">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            aria-label={link.label}
            className={`flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-2 text-xs font-medium text-[var(--color-text-muted)] transition-all duration-300 ${link.contactClassName}`}
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon className="h-5 w-5" name={link.icon} />
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
