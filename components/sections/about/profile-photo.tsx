import Image from "next/image";
import { personalInfo } from "@/lib/data";

export function ProfilePhoto() {
  return (
    <div className="relative">
      <div className="h-56 w-56 overflow-hidden rounded-3xl border border-[var(--color-border)]">
        <Image
          alt="Artyom Hovhannisyan"
          className="h-full w-full object-cover object-top"
          height={224}
          priority
          src="/IMG_0233.jpeg"
          width={224}
        />
      </div>
      <div className="absolute inset-0 -z-10 scale-110 rounded-3xl bg-[var(--color-accent)]/10 blur-2xl" />
      <div className="absolute -right-4 -bottom-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1.5 font-mono text-xs text-[var(--color-accent-2)]">
        {personalInfo.yearsOfExperience}+ yrs
      </div>
    </div>
  );
}
