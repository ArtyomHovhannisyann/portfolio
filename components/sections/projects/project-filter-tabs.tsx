"use client";

type ProjectFilterTabsProps = {
  activeCategory: string;
  categories: string[];
  inView: boolean;
  onSelect: (category: string) => void;
};

export function ProjectFilterTabs({
  activeCategory,
  categories,
  inView,
  onSelect,
}: ProjectFilterTabsProps) {
  return (
    <div
      className={`mb-12 flex flex-wrap justify-center gap-2 transition-all duration-500 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      {categories.map((category) => {
        const active = activeCategory === category;

        return (
          <button
            key={category}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
              active
                ? "bg-[var(--color-accent)] text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:border-[var(--color-border-light)] hover:text-white"
            }`}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
