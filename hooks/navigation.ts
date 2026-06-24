"use client";

import { useCallback, useEffect, useState } from "react";
import { navLinks } from "@/lib/navigation";
import { useSmoothScroll } from "@/hooks/smooth-scroll";

export function useNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollToSection = useSmoothScroll();

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      for (const id of [...sectionIds].reverse()) {
        const section = document.getElementById(id);

        if (section && window.scrollY >= section.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = useCallback(
    (href: string) => {
      setMobileOpen(false);
      scrollToSection(href);
    },
    [scrollToSection],
  );

  return {
    active,
    handleNav,
    mobileOpen,
    scrolled,
    setMobileOpen,
  };
}
