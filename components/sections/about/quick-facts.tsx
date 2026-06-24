import { personalInfo } from "@/lib/data";

const quickFacts = [
  { label: "Location", value: personalInfo.location },
  { label: "Email", value: "artyomhovhannisyan005" },
  { label: "Focus", value: "Web & Mobile" },
  { label: "Status", value: "Open to work" },
];

export function QuickFacts() {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-4">
      {quickFacts.map((fact) => (
        <div
          key={fact.label}
          className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3"
        >
          <div className="mb-1 font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] uppercase">
            {fact.label}
          </div>
          <div className="truncate text-sm font-medium text-white">
            {fact.value}
          </div>
        </div>
      ))}
    </div>
  );
}
