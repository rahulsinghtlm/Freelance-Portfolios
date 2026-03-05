"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SplitText from "./ui/SplitText";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // useScroll with a target = only tracks scroll within this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // start when top of section hits top of screen
  });

  const ringYRaw = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const ringY = useSpring(ringYRaw, { stiffness: 120, damping: 22 });

  // As user scrolls through hero:
  // - background image moves up slightly (parallax)
  // - text fades out and moves up
  // - overlay gets darker
  const bgY        = useTransform(scrollYProgress, [0, 1], ["0%",   "30%"]);   // parallax
  const textY      = useTransform(scrollYProgress, [0, 1], ["0%",   "-20%"]);  // text floats up
  const textOpacity= useTransform(scrollYProgress, [0, 0.5], [1, 0]);          // text fades
  const overlayOp  = useTransform(scrollYProgress, [0, 1], [0.15, 0.6]);       // darkens

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050507]"
    >
      {/* ── Background texture / placeholder image ── */}
      {/* Replace this div with an actual <Image> when you have one */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/10 via-[#00E5FF]/20 to-[#020308]"
        style={{ y: bgY }}   // THIS is the parallax — moves at different speed
      >
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-[radial-gradient(circle_at_center,#39FF14_0,#00E5FF_35%,transparent_70%)] opacity-60 blur-3xl" />

        {/* Decorative grid lines — editorial feel */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#1A1A1A" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Overlay that darkens on scroll */}
      <motion.div
        className="absolute inset-0 bg-[#1A1A1A]"
        style={{ opacity: overlayOp }}
      />

      {/* ── Main content — moves up and fades as you scroll ── */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-10 pt-28"
        style={{ y: textY, opacity: textOpacity }}
      >

        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="flex-1">
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0   }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.77, 0, 0.18, 1] }}
            >
              <span className="w-8 h-px bg-[#ef4444]" />
              <span className="font-['Syne'] text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8A8A8A]">
                Video Editor · Motion Designer
              </span>
            </motion.div>

            {/* Giant headline — char by char animation */}
            <h1 className="font-['Bebas_Neue'] text-[clamp(5rem,13vw,12rem)] leading-[0.88] tracking-tight text-[#f5f0e8] mb-8">
              <SplitText text="TURNING" delay={0.5} />
              <br />
              <SplitText text="RAW INTO" className="text-[#00E5FF]" delay={0.65} />
              <br />
              <SplitText text="CINEMA" delay={0.8} />
            </h1>

            {/* Sub-text + CTA in a row */}
            <div className="flex items-end justify-between flex-wrap gap-8">
              <motion.p
                className="font-['Instrument_Serif'] italic text-xl text-[#e5e7eb] max-w-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0  }}
                transition={{ duration: 0.9, delay: 1.2 }}
              >
                Video editing that makes people feel something — for YouTube, brands, and film.
              </motion.p>

              <motion.a
                href="#work"
                className="font-['Syne'] text-sm font-bold tracking-[0.1em] uppercase bg-[#ef4444] text-[#ffffff] px-10 py-4 hover:bg-[#b91c1c] hover:text-[#f5f0e8] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0  }}
                transition={{ duration: 0.9, delay: 1.4 }}
                whileHover={{ y: -3 }}
              >
                View Work ↓
              </motion.a>
            </div>

            {/* Hero stats */}
            <motion.div
              className="mt-14 grid grid-cols-3 gap-10 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <div>
                <p className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#39FF14] leading-none">
                  100M+
                </p>
                <p className="font-['Syne'] text-[10px] tracking-[0.2em] uppercase text-[#9CA3AF] mt-2">
                  VIEWS
                </p>
              </div>
              <div>
                <p className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#00E5FF] leading-none">
                  10000+
                </p>
                <p className="font-['Syne'] text-[10px] tracking-[0.2em] uppercase text-[#9CA3AF] mt-2">
                  PROJECTS
                </p>
              </div>
              <div>
                <p className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#f5f0e8] leading-none">
                  3+
                </p>
                <p className="font-['Syne'] text-[10px] tracking-[0.2em] uppercase text-[#9CA3AF] mt-2">
                  YEARS
                </p>
              </div>
            </motion.div>
          </div>

          {/* Portrait with circular rotating text */}
          <motion.div
            className="relative flex-1 flex justify-center lg:justify-end w-full"
            style={{ y: ringY }}
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="absolute inset-4 rounded-full border border-[#39FF14]/40 bg-black/40 backdrop-blur-sm overflow-hidden shadow-[0_0_60px_rgba(57,255,20,0.4)]">
              <Image
  src="/images/editor-portrait-1.png"
  alt="Quantom – video editor portrait"
  fill
  sizes="(max-width:768px) 60vw, 300px"
  className="object-cover"
  priority
/>
              </div>

              <motion.div
                className="absolute inset-0 rounded-full flex items-center justify-center pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              >
                <div className="relative w-full h-full">
                  {"HI I'M QUANTOM THE EDITOR YOU NEED"
                    .split("")
                    .map((char, index, arr) => {
                      const angle = (360 / arr.length) * index;
                      return (
                        <span
                          key={index}
                          className="absolute left-1/2 top-1/2 font-['Syne'] text-[10px] tracking-[0.3em] uppercase text-[#e5e7eb]"
                          style={{
                            transform: `rotate(${angle}deg) translateY(-135%)`,
                            transformOrigin: "0 0",
                          }}
                        >
                          {char}
                        </span>
                      );
                    })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

          {/* Scroll indicator — animated bouncing arrow */}
          <div className="ml-auto flex flex-col items-center gap-2 self-end pb-1">
            <motion.div
              className="w-px h-10 bg-[#1f2933]"
              animate={{ scaleY: [1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="font-['Syne'] text-[9px] tracking-[0.2em] uppercase text-[#8A8A8A]">
              scroll
            </span>
          </div>
        </motion.div>
      {/* ── Floating year badge — editorial detail ── */}
      <motion.div
        className="absolute top-32 right-10 font-['Bebas_Neue'] text-[8rem] leading-none text-[#f5f0e8]/5 select-none pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        2026
      </motion.div>
    </section>
  );
}