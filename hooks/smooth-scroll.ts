"use client";

import { useCallback } from "react";

export function useSmoothScroll() {
  return useCallback((target: string) => {
    const id = target.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);
}
