"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
          <h2 className="font-['Bebas_Neue'] text-[clamp(3rem,5vw,5rem)] leading-none text-[var(--text-primary)] mb-4">
            <SplitText text="ABHISHEK" delay={0.1} />
            <br />
            <SplitText text="BHATTACHARYA" className="text-[var(--accent)]" delay={0.2} />
          </h2>
        </RevealStackItem>

        <RevealStackItem delay={0.12}>
          <p className="font-['Syne'] text-sm md:text-base text-[var(--text-muted)] leading-relaxed mb-1 max-w-md">
            Also known as <span className="text-[var(--text-primary)] font-semibold">Quantom</span>. Currently based in India.
          </p>
        </RevealStackItem>

        <RevealStackItem delay={0.18}>
          <p className="font-['Syne'] text-sm md:text-base text-[var(--text-muted)] leading-relaxed mb-6 max-w-lg">
            Professional video editor working with multiple YouTube channels focused on football
            content and sports storytelling.
          </p>
        </RevealStackItem>

        <RevealStackItem delay={0.24}>
          <div className="font-['Syne'] text-sm md:text-base text-[var(--text-muted)] leading-relaxed mb-8 max-w-lg space-y-2">
            <p className="text-[var(--text-primary)]/80 font-semibold tracking-[0.18em] uppercase text-[11px] mb-3">
              Video Editing Agency
            </p>
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <span className="mt-[7px] h-[3px] w-3 rounded-full bg-[var(--accent)]" />
                <span>YouTube editing</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-[3px] w-3 rounded-full bg-[var(--accent)]" />
                <span>Football content editing</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-[3px] w-3 rounded-full bg-[var(--accent)]" />
                <span>Motion graphics</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-[3px] w-3 rounded-full bg-[var(--accent)]" />
                <span>Shorts & reels editing</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-[3px] w-3 rounded-full bg-[var(--accent)]" />
                <span>Social media edits</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-[3px] w-3 rounded-full bg-[var(--accent)]" />
                <span>Full production editing support</span>
              </li>
            </ul>
          </div>
        </RevealStackItem>

        <RevealStackItem delay={0.3}>
          <p className="font-['Syne'] text-sm md:text-base text-[var(--text-muted)] leading-relaxed max-w-lg">
            Open to working with creators, brands and sports channels worldwide who want
            their football content to feel cinematic and unforgettable.
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#02010A] to-[#050816]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff0f,transparent_60%)]" />
        </div>

        <div className="relative z-10 flex h-full w-full items-center justify-center px-6 py-16 md:px-10">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[conic-gradient(from_220deg_at_50%_0%,rgba(148,163,184,0.05),rgba(56,189,248,0.18),rgba(59,130,246,0.08),rgba(15,23,42,0.2))] opacity-80 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-[0_0_80px_rgba(15,23,42,0.9)]">
              <div className="relative aspect-[4/5] w-full">
              <Image
  src="/images/about-portrait-2.png"
  alt="Abhishek Bhattacharya – Quantom"
  fill
  sizes="(max-width:768px) 100vw, 420px"
  className="object-cover"
  priority
/>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <p className="font-['Syne'] text-[11px] tracking-[0.25em] uppercase text-white/60 mb-1">
                    Abhishek · Quantom
                  </p>
                  <p className="font-['Bebas_Neue'] text-2xl md:text-3xl text-white leading-none">
                    Football Editing & Story
                  </p>
                </div>
                <motion.div
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-2 font-['Syne'] text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-md"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5, ease: easeFilm }}
                >
                  India · Remote
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
