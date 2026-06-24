import { personalInfo } from "@/lib/data";

export const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: "github",
    contactClassName: "hover:border-white/30 hover:text-white",
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: "linkedin",
    contactClassName: "hover:border-[#0A66C2]/40 hover:text-[#0A66C2]",
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: "email",
    contactClassName:
      "hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent-2)]",
  },
  {
    label: "Telegram",
    href: personalInfo.telegram,
    icon: "telegram",
    contactClassName: "hover:border-[#2AABEE]/40 hover:text-[#2AABEE]",
  },
] as const;

export type SocialLink = (typeof socialLinks)[number];
