"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/libs/constants";

const easeFilm = [0.77, 0, 0.18, 1] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Scroll progress — accent line */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-[var(--accent)] z-[200] origin-left"
        style={{ width: progressWidth }}
      />

      {/* Top bar: logo + menu trigger */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-[150] flex items-center justify-between px-6 md:px-10 py-5"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: easeFilm }}
      >
        <Link
          href="/"
          className="font-['Bebas_Neue'] text-2xl tracking-[0.2em] text-[var(--text-primary)]"
        >
        </Link>

        <motion.button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(true)}
          className="font-['Syne'] text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.25, ease: easeFilm }}
        >
          Menu
        </motion.button>
      </motion.header>

      {/* Full-width expanding panel — film matte left → right */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop + dark overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[180]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: easeFilm }}
              onClick={() => setOpen(false)}
            />

            {/* Panel: slides in from left */}
            <motion.div
              className="fixed inset-y-0 left-0 w-full max-w-2xl z-[190] overflow-hidden"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              exit={{ clipPath: "inset(0 100% 0 0)" }}
              transition={{ duration: 0.6, ease: easeFilm }}
            >
              {/* Top gradient edge glow */}
              <div
                className="absolute top-0 left-0 right-0 h-24 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, rgba(255,77,69,0.12) 0%, transparent 100%)",
                }}
              />

              <div className="relative h-full bg-[var(--bg-main)]/95 backdrop-blur-2xl border-r border-[var(--border-subtle)] flex flex-col justify-center pl-10 md:pl-16 pr-10">
                <nav className="space-y-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.12 + i * 0.06,
                        ease: easeFilm,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="group relative inline-block py-3"
                      >
                        <span className="relative z-10 font-['Syne'] text-lg font-semibold tracking-[0.22em] uppercase text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
                          {link.label}
                        </span>
                        {/* Underline from center outward + glow */}
                        <span
                          className="absolute bottom-2 left-1/2 h-px bg-[var(--accent)] -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center w-24"
                          style={{ boxShadow: "0 0 12px rgba(255,77,69,0.5)" }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-12 inline-flex font-['Syne'] text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full border border-[var(--border-strong)] text-[var(--text-primary)] w-fit hover:bg-[var(--accent)] hover:text-black hover:border-transparent"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.5, ease: easeFilm }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 32px rgba(255,77,69,0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>

            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="fixed top-6 right-6 z-[195] font-['Syne'] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Close
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
