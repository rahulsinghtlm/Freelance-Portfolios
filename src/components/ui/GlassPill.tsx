"use client";

import { motion } from "framer-motion";

const easeFilm = [0.77, 0, 0.18, 1] as const;

interface GlassPillProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassPill({ children, className = "" }: GlassPillProps) {
  return (
    <motion.span
      className={`
        glass-pill-wrap relative inline-block overflow-hidden rounded-full
        font-['Syne'] text-[10px] font-semibold tracking-[0.2em] uppercase
        py-2 px-4
        text-[var(--text-muted)]
        border border-white/10
        bg-gradient-to-br from-white/[0.06] to-white/[0.02]
        ${className}
      `}
      style={{
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 20px rgba(0,0,0,0.2)",
      }}
      whileHover={{
        scale: 1.04,
        borderColor: "rgba(255,77,69,0.35)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 0 28px rgba(255,77,69,0.2)",
        transition: { duration: 0.3, ease: easeFilm },
      }}
      transition={{ duration: 0.25, ease: easeFilm }}
    >
      <span className="glass-pill-noise absolute inset-0 rounded-full opacity-[0.4] pointer-events-none" />
      <span className="glass-pill-shimmer absolute inset-0 rounded-full pointer-events-none" />
      <span className="relative z-10">{children}</span>
    </motion.span>
  );
}
