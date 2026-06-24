"use client";

import { motion } from "framer-motion";
import { certificates } from "@/lib/data";
import { sectionTransition } from "@/lib/animations";
import { useReveal } from "@/hooks/reveal";
import { CertificateCard } from "@/components/sections/certificates/certificate-card";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionHeader } from "@/components/ui/section-header";

export function Certificates() {
  const { inView, ref } = useReveal<HTMLElement>();

  return (
    <section id="certificates" ref={ref} className="relative px-6 py-32">
      <SectionDivider />

      <div className="mx-auto max-w-6xl">
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : {}}
          initial={{ opacity: 0, y: 30 }}
          transition={sectionTransition}
        >
          <SectionHeader
            label="04. Credentials"
            subtitle="Professional certifications demonstrating expertise across cloud, agile, and modern development."
            title="Certifications"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
