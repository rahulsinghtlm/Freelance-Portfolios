"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplitText from "./ui/SplitText";
import CinematicTag from "./ui/CinematicTag";
import RevealStack, { RevealStackItem } from "./ui/RevealStack";

const easeFilm = [0.77, 0, 0.18, 1] as const;
const ABOUT_TAGS = ["Premiere Pro", "After Effects", "YouTube", "Color Grading", "Motion Design"];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const leftX = useTransform(scrollYProgress, [0.1, 0.4], [-56, 0]);
  const leftOp = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section
      ref={ref}
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-[var(--bg-elevated)]"
    >
      <motion.div
        className="flex flex-col justify-center px-8 md:px-16 py-20 md:py-24"
        style={{ x: leftX, opacity: leftOp }}
      >
        <RevealStackItem delay={0}>
          <p className="font-['Syne'] text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--text-muted)] mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-[var(--accent)]" />
            About Me
          </p>
        </RevealStackItem>

        <RevealStackItem delay={0.06}>
          <h2 className="font-['Bebas_Neue'] text-[clamp(3rem,5vw,5rem)] leading-none text-[var(--text-primary)] mb-8">
            <SplitText text="RAFAEL" delay={0.1} />
            <br />
            <SplitText text="A. COSTA" className="text-[var(--accent)]" delay={0.2} />
          </h2>
        </RevealStackItem>

        <RevealStackItem delay={0.12}>
          <p className="font-['Instrument_Serif'] italic text-xl text-[var(--text-muted)] leading-relaxed mb-4 max-w-sm">
            Based in São Paulo, Brazil. Making videos that stop the scroll since 2021.
          </p>
        </RevealStackItem>

        <RevealStackItem delay={0.18}>
          <p className="font-['Syne'] text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
            Every frame is intentional. I work with YouTubers, brands, and filmmakers
            who want their content to feel cinematic — not just edited.
          </p>
        </RevealStackItem>

        <motion.div
          className="flex flex-wrap gap-3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.05, delayChildren: 0.25 },
            },
          }}
        >
          {ABOUT_TAGS.map((tag) => (
            <motion.div key={tag} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeFilm } } }}>
              <CinematicTag>{tag}</CinematicTag>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="relative overflow-hidden" style={{ clipPath }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0B0B] via-[#0b0b0f] to-[#090312]">
          <span className="absolute inset-0 flex items-center justify-center font-['Bebas_Neue'] text-[20rem] text-[var(--text-primary)]/5 select-none">
            RC
          </span>
        </div>
        <motion.div
          className="absolute bottom-12 right-12 bg-[var(--accent)] text-black font-['Bebas_Neue'] text-xl tracking-wider px-6 py-4 leading-tight shadow-[var(--glow-soft)]"
          initial={{ scale: 0, rotate: 12 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.5 }}
        >
          Available<br />for Hire
        </motion.div>
      </motion.div>
    </section>
  );
}
