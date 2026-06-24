import type { Certificate } from "@/lib/data";
import { Icon } from "@/components/ui/icon";

const organizationLabels: Record<string, string> = {
  "Amazon Web Services": "AWS",
  "Meta / Coursera": "META",
  "OpenJS Foundation": "OJS",
  "Scrum.org": "PSM",
};

const accentColors = [
  {
    bg: "from-[#FF9900]/15 to-[#FF9900]/5",
    border: "border-[#FF9900]/20",
    text: "#FF9900",
  },
  {
    bg: "from-[var(--color-accent)]/15 to-[var(--color-accent)]/5",
    border: "border-[var(--color-accent)]/20",
    text: "var(--color-accent-2)",
  },
  {
    bg: "from-[#0082FB]/15 to-[#0082FB]/5",
    border: "border-[#0082FB]/20",
    text: "#60a5fa",
  },
  {
    bg: "from-[var(--color-emerald)]/15 to-[var(--color-emerald)]/5",
    border: "border-[var(--color-emerald)]/20",
    text: "var(--color-emerald)",
  },
];

type CertificatePreviewProps = {
  certificate: Certificate;
  index: number;
};

export function CertificatePreview({
  certificate,
  index,
}: CertificatePreviewProps) {
  const color = accentColors[index % accentColors.length];
  const label =
    organizationLabels[certificate.organization] ??
    certificate.organization.slice(0, 3).toUpperCase();

  return (
    <div
      className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${color.bg}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div
        className={`relative z-10 rounded-xl border px-5 py-3 font-mono text-3xl font-bold tracking-wider ${color.border}`}
        style={{ color: color.text }}
      >
        {label}
      </div>

      <div
        className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-full border-2 opacity-30"
        style={{ borderColor: color.text }}
      >
        <Icon className="h-4 w-4" name="check" />
      </div>
    </div>
  );
}
