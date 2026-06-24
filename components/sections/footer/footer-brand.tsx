export function FooterBrand() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center gap-1 sm:items-start">
      <span className="font-mono text-sm font-bold text-[var(--color-accent-2)]">
        AH<span className="text-[var(--color-accent)]">.</span>
      </span>
      <p className="text-xs text-[var(--color-text-dim)]">
        © {year} Artyom Hovhannisyan. All rights reserved.
      </p>
    </div>
  );
}
