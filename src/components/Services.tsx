"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/libs/constants";
import SplitText from "./ui/SplitText";
import GlassPill from "./ui/GlassPill";
import RevealStack, { RevealStackItem } from "./ui/RevealStack";

const easeFilm = [0.77, 0, 0.18, 1] as const;

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="mb-20 border-b border-[var(--border-subtle)] pb-10">
        <RevealStack delay={0} slide={48}>
          <p className="font-['Syne'] text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--text-muted)] mb-4">
            — What I Do
          </p>
        </RevealStack>
        <RevealStackItem delay={0.06}>
          <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,6vw,5rem)] leading-none text-[var(--text-primary)]">
            <SplitText text="SERVICES" />
          </h2>
        </RevealStackItem>
      </div>

      <div className="divide-y divide-[var(--border-subtle)]">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.number}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 md:py-14 group"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: i * 0.07, ease: easeFilm }}
          >
            <div className="md:col-span-1">
              <span className="font-['Bebas_Neue'] text-4xl text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-300">
                {service.number}
              </span>
            </div>
            <div className="md:col-span-3">
              <h3 className="font-['Bebas_Neue'] text-3xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300 leading-none">
                {service.title}
              </h3>
            </div>
            <div className="md:col-span-5">
              <p className="font-['Instrument_Serif'] italic text-lg text-[var(--text-muted)] leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="md:col-span-3 flex flex-wrap gap-3 content-start">
              {service.tags.map((tag) => (
                <GlassPill key={tag}>{tag}</GlassPill>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
