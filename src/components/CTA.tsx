"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./ui/MagneticButton";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.3"],
  });

  // Text starts small, grows to full size as section enters screen
  const scale   = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-[80vh] flex items-center justify-center bg-[radial-gradient(circle_at_top,_#1f2933,_#020308_55%)] overflow-hidden py-28 px-10"
    >
      {/* Big decorative background text */}
      <span className="absolute font-['Bebas_Neue'] text-[25vw] text-[var(--text-primary)]/[0.03] select-none pointer-events-none leading-none top-1/2 -translate-y-1/2">
        HIRE ME
      </span>

      <motion.div
        className="relative z-10 text-center"
        style={{ scale, opacity }}
      >
        <p className="font-['Syne'] text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--text-muted)] mb-8 flex items-center justify-center gap-3">
          <span className="w-6 h-px bg-[var(--accent)]" />
          Let&apos;s Collaborate
          <span className="w-6 h-px bg-[var(--accent)]" />
        </p>

        <h2 className="font-['Bebas_Neue'] text-[clamp(3.5rem,10vw,10rem)] leading-[0.9] text-[var(--text-primary)] mb-12">
          GOT A PROJECT<br />
          <span className="text-[var(--accent)]">IN MIND?</span>
        </h2>

        <MagneticButton>
          <a
            href="mailto:rafael@example.com"
            className="inline-block font-['Syne'] text-sm font-bold tracking-[0.15em] uppercase border-2 border-[var(--border-strong)] text-[var(--text-primary)] px-14 py-5 rounded-full bg-[rgba(11,11,15,0.75)] hover:bg-[var(--accent)] hover:text-black hover:border-transparent shadow-[var(--glow-soft)]"
          >
            Start a Conversation →
          </a>
        </MagneticButton>

        <p className="font-['Instrument_Serif'] italic text-[var(--text-muted)] mt-8">
          or email directly at{" "}
          <a href="mailto:rafael@example.com" className="text-[var(--accent)] hover:underline">
            rafael@example.com
          </a>
        </p>
      </motion.div>
    </section>
  );
}