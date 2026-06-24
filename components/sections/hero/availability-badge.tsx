export function AvailabilityBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-light)] bg-[var(--color-surface)] px-4 py-1.5 font-mono text-xs font-medium text-[var(--color-accent-2)]">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-emerald)]" />
      Available for work
    </span>
  );
}
