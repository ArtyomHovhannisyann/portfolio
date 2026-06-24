import { Icon } from "@/components/ui/icon";

type ContactDetailProps = {
  icon: "email" | "location";
  text: string;
};

export function ContactDetail({ icon, text }: ContactDetailProps) {
  return (
    <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-accent-2)]">
        <Icon className="h-4 w-4" name={icon} />
      </span>
      {text}
    </div>
  );
}
