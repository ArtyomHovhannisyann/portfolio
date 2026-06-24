"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { NavLink } from "@/lib/navigation";

type MobileMenuProps = {
  links: readonly NavLink[];
  onNavigate: (href: string) => void;
  open: boolean;
};

export function MobileMenu({ links, onNavigate, open }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          animate={{ height: "auto", opacity: 1 }}
          className="overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-xl md:hidden"
          exit={{ height: 0, opacity: 0 }}
          initial={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  className="w-full rounded-lg px-4 py-2.5 text-left text-sm text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-2)] hover:text-white"
                  onClick={() => onNavigate(link.href)}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="mt-2">
              <button
                className="w-full rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-sm font-medium text-white"
                onClick={() => onNavigate("#contact")}
              >
                Hire Me
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
