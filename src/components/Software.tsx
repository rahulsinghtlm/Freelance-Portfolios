"use client";

import { motion } from "framer-motion";
import { SOFTWARE_TOOLS } from "@/libs/constants";
import SoftwareIcon from "./ui/SoftwareIcon";
import RevealStack, { RevealStackItem } from "./ui/RevealStack";

const easeFilm = [0.77, 0, 0.18, 1] as const;

export default function Software() {
  return (
    <section id="software" className="py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="mb-16 border-b border-[var(--border-subtle)] pb-8">
        <RevealStack delay={0} slide={50}>
          <p className="font-['Syne'] text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--text-muted)] mb-4">
            — Toolkit
          </p>
        </RevealStack>
        <RevealStackItem delay={0.08}>
          <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,6vw,5rem)] leading-none text-[var(--text-primary)]">
            CREATIVE ARSENAL
          </h2>
        </RevealStackItem>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.06,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {SOFTWARE_TOOLS.map((tool) => (
          <motion.div
            key={tool.slug}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeFilm } },
            }}
          >
            <SoftwareIcon name={tool.name} slug={tool.slug} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
