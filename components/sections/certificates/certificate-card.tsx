"use client";

import { motion } from "framer-motion";
import type { Certificate } from "@/lib/data";
import { cardTransition } from "@/lib/animations";
import { useReveal } from "@/hooks/reveal";
import { Icon } from "@/components/ui/icon";
import { CertificateActions } from "@/components/sections/certificates/certificate-actions";
import { CertificatePreview } from "@/components/sections/certificates/certificate-preview";

type CertificateCardProps = {
  certificate: Certificate;
  index: number;
};

export function CertificateCard({ certificate, index }: CertificateCardProps) {
  const { inView, ref } = useReveal<HTMLDivElement>("-60px");

  return (
    <motion.div
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-500 hover:border-[var(--color-border-light)] hover:shadow-[0_0_30px_rgba(99,102,241,0.07)]"
      initial={{ opacity: 0, y: 30 }}
      transition={{ ...cardTransition, delay: (index % 2) * 0.1 }}
    >
      <CertificatePreview certificate={certificate} index={index} />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="mb-1 text-sm leading-snug font-semibold text-white transition-colors group-hover:text-[var(--color-accent-2)]">
            {certificate.title}
          </h3>
          <p className="text-xs text-[var(--color-text-muted)]">
            {certificate.organization}
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--color-text-dim)]">
          <Icon className="h-3.5 w-3.5" name="calendar" />
          {certificate.date}
        </div>

        <div className="mt-auto flex gap-2 pt-2">
          <CertificateActions credentialUrl={certificate.credentialUrl} />
        </div>
      </div>
    </motion.div>
  );
}
