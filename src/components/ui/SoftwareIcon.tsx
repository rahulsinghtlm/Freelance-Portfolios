"use client";

import { motion } from "framer-motion";

const easeFilm = [0.77, 0, 0.18, 1] as const;

interface SoftwareIconProps {
  name: string;
  slug: string;
}

const ICON_BASE = "https://cdn.simpleicons.org";

export default function SoftwareIcon({ name, slug }: SoftwareIconProps) {
  return (
    <motion.a
      href="#"
      className="group relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-[var(--bg-soft)] border border-[var(--border-subtle)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, ease: easeFilm }}
      whileHover={{
        y: -4,
        rotate: 1.5,
        transition: { duration: 0.3, ease: easeFilm },
      }}
    >
      <span
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: "0 0 32px rgba(255,77,69,0.25)" }}
      />
      <img
        src={`${ICON_BASE}/${slug}/9ca3af`}
        alt={name}
        className="w-12 h-12 object-contain transition-all duration-300 group-hover:brightness-125"
      />
      <span className="font-['Syne'] text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] group-hover:text-[var(--text-primary)]">
        {name}
      </span>
    </motion.a>
  );
}
