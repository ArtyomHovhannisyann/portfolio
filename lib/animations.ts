import type { Variants } from "framer-motion";

export const smoothEase = [0.16, 1, 0.3, 1] as const;

export const sectionTransition = {
  duration: 0.7,
  ease: smoothEase,
} as const;

export const cardTransition = {
  duration: 0.6,
  ease: smoothEase,
} as const;

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

export const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
};
