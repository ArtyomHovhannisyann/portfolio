type HeroStat = {
  label: string;
  value: string;
};

type HeroStatsProps = {
  stats: HeroStat[];
};

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-16">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-2xl font-bold text-white sm:text-3xl">
            {stat.value}
          </div>
          <div className="mt-0.5 text-xs tracking-wide text-[var(--color-text-dim)] uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
