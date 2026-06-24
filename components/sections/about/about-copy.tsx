import { personalInfo } from "@/lib/data";

export function AboutCopy() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white">A bit about me</h3>
      <p className="leading-relaxed text-[var(--color-text-muted)]">
        {personalInfo.bio}
      </p>
      <p className="leading-relaxed text-[var(--color-text-muted)]">
        Currently a student at YSU (Yerevan, 2024-present) while working
        full-time at Fantasy Space. I mentor junior developers, conduct code
        reviews, and collaborate with UX/UI designers to bring wireframes to
        life. I work across Armenian, English, and Russian to deliver projects
        on time in cross-functional teams.
      </p>
    </div>
  );
}
