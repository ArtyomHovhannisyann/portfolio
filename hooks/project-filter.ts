"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/data";

export function useProjectFilter(projects: Project[]) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects],
  );

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory, projects],
  );

  return {
    activeCategory,
    categories,
    filteredProjects,
    setActiveCategory,
  };
}
