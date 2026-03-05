"use client";

import { motion } from "framer-motion";
import RevealStack, { RevealStackItem } from "./ui/RevealStack";

const easeFilm = [0.77, 0, 0.18, 1] as const;

export default function Software() {
  const tools = [
    {
      name: "Adobe Premiere Pro",
      short: "Pr",
      href: "https://www.adobe.com/products/premiere.html",
      gradient: "from-[#2A004B] via-[#2A004B] to-[#000000]",
    },
    {
      name: "Adobe After Effects",
      short: "Ae",
      href: "https://www.adobe.com/products/aftereffects.html",
      gradient: "from-[#0A0035] via-[#1E0059] to-[#000000]",
    },
    {
      name: "Adobe Photoshop",
      short: "Ps",
      href: "https://www.adobe.com/products/photoshop.html",
      gradient: "from-[#001E36] via-[#003E69] to-[#020617]",
    },
    {
      name: "Blender",
      short: "Bl",
      href: "https://www.blender.org/",
      gradient: "from-[#0B1B2B] via-[#1D3557] to-[#020617]",
    },
    {
      name: "Adobe Illustrator",
      short: "Ai",
      href: "https://www.adobe.com/products/illustrator.html",
      gradient: "from-[#270800] via-[#7C2D12] to-[#020617]",
    },
  ] as const;

  return (
    <section id="software" className="py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="mb-16 border-b border-[var(--border-subtle)] pb-8">
        <RevealStack delay={0} slide={50}>
          <p className="font-['Syne'] text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--text-muted)] mb-4">
            — Toolkit
          </p>
        </RevealStack>
        <RevealStackItem delay={0.08}>
          <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,6vw,5rem)] leading-none text-[var(--text-primary)]">
            CREATIVE ARSENAL
          </h2>
        </RevealStackItem>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.06,
              delayChildren: 0.12,
            },
          },
        }}
      >
        {tools.map((tool) => (
          <motion.a
            key={tool.name}
            href={tool.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-3 focus:outline-none"
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: easeFilm },
              },
            }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.35),transparent_55%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              <div
                className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.gradient} border border-white/10 shadow-[0_0_25px_rgba(15,23,42,0.9)] transition-transform duration-300 group-hover:scale-105`}
              >
                <span className="font-['Syne'] text-lg font-semibold tracking-wide text-white">
                  {tool.short}
                </span>
              </div>
            </div>
            <span className="font-['Syne'] text-[11px] text-[var(--text-muted)] tracking-[0.18em] uppercase text-center">
              {tool.name}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
