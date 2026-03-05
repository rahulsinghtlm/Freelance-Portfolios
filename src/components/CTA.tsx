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
        CONTACT
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

        <h2 className="font-['Bebas_Neue'] text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] text-[var(--text-primary)] mb-10">
          LET&apos;S<br />
          <span className="text-[var(--accent)]">COLLABORATE</span>
        </h2>

        <MagneticButton>
          <a
            href="mailto:abhishekbhattacharya121@gmail.com"
            className="inline-block font-['Syne'] text-sm font-bold tracking-[0.15em] uppercase border-2 border-[var(--border-strong)] text-[var(--text-primary)] px-14 py-5 rounded-full bg-[rgba(11,11,15,0.75)] hover:bg-[var(--accent)] hover:text-black hover:border-transparent shadow-[var(--glow-soft)]"
          >
            Start a Conversation
          </a>
        </MagneticButton>

        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="font-['Syne'] text-xs text-[var(--text-muted)] tracking-[0.18em] uppercase">
            Email & socials
          </p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:abhishekbhattacharya121@gmail.com"
              className="font-['Syne'] text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
            >
              abhishekbhattacharya121@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-bhattacharya-260299245"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[rgba(11,11,15,0.85)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-[var(--text-muted)] group-hover:fill-[var(--accent)]"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.32 8.16H4.7V24H.32V8.16zM8.1 8.16h4.16v2.15h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.9 5.21 6.68V24h-4.38v-8.06c0-1.92-.03-4.39-2.68-4.39-2.68 0-3.09 2.1-3.09 4.26V24H8.1V8.16z" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}