"use client";

import { motion } from "framer-motion";
import { useNavigation } from "@/hooks/navigation";
import { navLinks } from "@/lib/navigation";
import { DesktopNav } from "@/components/sections/navbar/desktop-nav";
import { MenuToggle } from "@/components/sections/navbar/menu-toggle";
import { MobileMenu } from "@/components/sections/navbar/mobile-menu";

export function Navbar() {
  const { active, handleNav, mobileOpen, scrolled, setMobileOpen } =
    useNavigation();

  return (
    <motion.header
      animate={{ opacity: 1, y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          className="font-mono text-sm font-bold tracking-widest text-[var(--color-accent-2)] transition-colors hover:text-white"
          onClick={() => handleNav("#hero")}
        >
          AH<span className="text-[var(--color-accent)]">.</span>
        </button>

        <DesktopNav active={active} links={navLinks} onNavigate={handleNav} />

        <button
          className="hidden items-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-2)] md:flex"
          onClick={() => handleNav("#contact")}
        >
          Hire Me
        </button>

        <MenuToggle
          onToggle={() => setMobileOpen((current) => !current)}
          open={mobileOpen}
        />
      </nav>

      <MobileMenu links={navLinks} onNavigate={handleNav} open={mobileOpen} />
    </motion.header>
  );
}
