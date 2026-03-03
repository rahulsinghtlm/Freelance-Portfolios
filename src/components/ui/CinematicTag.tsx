"use client";

import { motion } from "framer-motion";

const easeFilm = [0.77, 0, 0.18, 1] as const;

interface CinematicTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function CinematicTag({ children, className = "" }: CinematicTagProps) {
  return (
    <motion.span
      className={`
        cinematic-tag-wrap relative inline-block overflow-hidden
        font-['Syne'] text-[10px] font-bold tracking-[0.28em] uppercase
        py-1.5 px-3
        text-[var(--text-primary)]
        rounded-sm
        border border-[var(--accent)]/40
        bg-[var(--bg-soft)]
        ${className}
      `}
      style={{
        boxShadow: "0 0 18px rgba(255,77,69,0.15)",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 28px rgba(255,77,69,0.35)",
        borderColor: "rgba(255,77,69,0.7)",
        transition: { duration: 0.35, ease: easeFilm },
      }}
      transition={{ duration: 0.25, ease: easeFilm }}
    >
      {/* Shimmer sweep on hover (CSS-driven) */}
      <span className="cinematic-tag-shimmer" />
      <span className="relative z-10">{children}</span>
    </motion.span>
  );
}
