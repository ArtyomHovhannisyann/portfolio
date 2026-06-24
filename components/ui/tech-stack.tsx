type TechStackProps = {
  maxVisible?: number;
  technologies: string[];
};

export function TechStack({ maxVisible = 4, technologies }: TechStackProps) {
  const visibleTech = technologies.slice(0, maxVisible);
  const overflowCount = technologies.length - visibleTech.length;

  return (
    <div className="flex flex-wrap gap-1.5">
      {visibleTech.map((tech) => (
        <span
          key={tech}
          className="rounded border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-text-dim)]"
        >
          {tech}
        </span>
      ))}
      {overflowCount > 0 && (
        <span className="rounded border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-text-dim)]">
          +{overflowCount}
        </span>
      )}
    </div>
  );
}
