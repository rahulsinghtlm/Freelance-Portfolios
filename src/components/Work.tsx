"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/libs/constants";
import SplitText from "./ui/SplitText";
import ProjectCard from "./ProjectCard";
import RevealStack, { RevealStackItem } from "./ui/RevealStack";

const sizeMap = {
  wide:   "col-span-2 aspect-[16/9]",
  tall:   "col-span-1 aspect-[3/4]",
  square: "col-span-1 aspect-square",
};

const gradients = [
  "from-[#7F1D1D] to-[#000000]",
  "from-[#B91C1C] to-[#111827]",
  "from-[#DC2626] to-[#020617]",
  "from-[#991B1B] to-[#000000]",
  "from-[#F97373] to-[#1F2937]",
  "from-[#EF4444] to-[#020617]",
];

const easeFilm = [0.77, 0, 0.18, 1] as const;

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 border-b border-[var(--border-subtle)] pb-10">
        <div>
          <RevealStack delay={0} slide={50}>
            <p className="font-['Syne'] text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--text-muted)] mb-4">
              — Selected Work
            </p>
          </RevealStack>
          <RevealStackItem delay={0.06}>
            <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,6vw,5rem)] leading-none text-[var(--text-primary)]">
              <SplitText text="RECENT PROJECTS" />
            </h2>
          </RevealStackItem>
        </div>
        <RevealStack delay={0.12} slide={40}>
          <motion.a
            href="#"
            className="font-['Syne'] text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-2"
            whileHover={{ x: 6 }}
            transition={{ duration: 0.25, ease: easeFilm }}
          >
            All Projects →
          </motion.a>
        </RevealStack>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            sizeMap={sizeMap}
            gradients={gradients}
          />
        ))}
      </div>
    </section>
  );
}
