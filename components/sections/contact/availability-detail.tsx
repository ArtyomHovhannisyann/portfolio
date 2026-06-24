export function AvailabilityDetail() {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-emerald)]">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-emerald)]" />
      </span>
      <span className="text-[var(--color-emerald)]">
        Available for new projects
      </span>
    </div>
  );
}
