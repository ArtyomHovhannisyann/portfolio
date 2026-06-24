"use client";

import { motion } from "framer-motion";
import type { NavLink } from "@/lib/navigation";

type DesktopNavProps = {
  active: string;
  links: readonly NavLink[];
  onNavigate: (href: string) => void;
};

export function DesktopNav({ active, links, onNavigate }: DesktopNavProps) {
  return (
    <ul className="hidden items-center gap-1 md:flex">
      {links.map((link) => {
        const id = link.href.replace("#", "");
        const isActive = active === id;

        return (
          <li key={link.href}>
            <button
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "text-white"
                  : "text-[var(--color-text-muted)] hover:text-white"
              }`}
              onClick={() => onNavigate(link.href)}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg border border-[var(--color-border-light)] bg-[var(--color-surface-2)]"
                  transition={{ bounce: 0.2, duration: 0.5, type: "spring" }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
