type SectionHeaderProps = {
  label: string;
  subtitle: string;
  title: string;
};

export function SectionHeader({ label, subtitle, title }: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <span className="mb-4 inline-block font-mono text-xs tracking-widest text-[var(--color-accent-2)] uppercase">
        {label}
      </span>
      <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto max-w-xl text-[var(--color-text-muted)]">
        {subtitle}
      </p>
    </div>
  );
}
