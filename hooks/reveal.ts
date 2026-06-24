"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

type MarginValue = `${number}${"px" | "%"}`;
type RevealMargin =
  | MarginValue
  | `${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`;

export function useReveal<T extends Element>(margin: RevealMargin = "-80px") {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, margin });

  return { inView, ref };
}
