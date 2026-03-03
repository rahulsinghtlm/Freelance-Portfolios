"use client";

import { motion } from "framer-motion";
import { MARQUEE_ITEMS } from "@/libs/constants";

export default function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="overflow-hidden border-y border-[var(--border-subtle)] bg-[rgba(11,11,15,0.98)] py-5">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-['Bebas_Neue'] text-xl tracking-[0.2em] text-[var(--text-primary)]/40 px-8">
              {item}
            </span>
            <span className="text-[var(--accent)] text-sm">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}