"use client";

import { motion } from "framer-motion";

function StatRing({ number, label, delay }: { number: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center justify-center w-[85px] h-[85px] md:w-32 md:h-32 rounded-full border-[2px] border-t-zinc-400 border-l-zinc-400 border-b-red-600 border-r-red-600 bg-gradient-to-br from-black/80 to-red-950/60"
      style={{ boxShadow: "0 0 20px rgba(255, 0, 0, 0.4), inset 0 0 15px rgba(255, 0, 0, 0.3)" }}
    >
      <div className="absolute inset-[3px] rounded-full border border-red-500/20" />
      <span
        className="font-['Bebas_Neue'] text-3xl md:text-5xl text-transparent bg-clip-text z-10 tracking-wider"
        style={{
          backgroundImage: "linear-gradient(to bottom, #ffffff, #a1a1aa)",
          filter: "drop-shadow(0 0 8px rgba(255,255,255,0.4))"
        }}
      >
        {number}
      </span>
      <span className="font-['Bebas_Neue'] text-[10px] md:text-sm text-zinc-100 tracking-[0.2em] z-10 mt-0">
        {label}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#050000] flex flex-col">
      {/* ── Background: Deep Red Cinematic Glow and Flares ── */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        {/* Central huge red glow */}
        <div className="absolute w-[200vw] md:w-[150vw] h-[150vh] bg-[radial-gradient(circle_at_center,rgba(220,10,10,0.5)_0%,rgba(80,0,0,0.6)_40%,rgba(0,0,0,1)_75%)] opacity-90" />

        {/* Fake diagonal light rays / sparks simulation */}
        <div className="absolute top-0 left-[-20%] w-[140%] h-[30%] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-30 blur-3xl transform -rotate-12" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[100%] h-[40%] bg-[radial-gradient(ellipse_at_bottom,rgba(255,0,0,0.2)_0%,transparent_70%)] opacity-40 blur-3xl transform rotate-12" />
      </div>

      {/* ── Main Content Container ── */}
      <div className="relative z-10 w-full flex-1 flex flex-col pt-24 md:pt-32 pb-8 md:pb-12 px-6 md:px-12 max-w-[1600px] mx-auto">

        {/* Top Metallic Text */}
        <motion.div
          initial={{ y: -30, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full text-center z-20"
        >
          <h1
            className="font-['Bebas_Neue'] text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.85] tracking-widest text-transparent bg-clip-text uppercase"
            style={{
              backgroundImage: "linear-gradient(to bottom, #ffffff 0%, #a1a1aa 45%, #ffffff 55%, #52525b 100%)",
              filter: "drop-shadow(0px 8px 16px rgba(0,0,0,1)) drop-shadow(0px 0px 30px rgba(255,0,0,0.4))"
            }}
          >
            HI IM QUANTOM THE EDITOR<br />
            YOU'LL ALWAYS NEED
          </h1>
        </motion.div>

        {/* Center Portrait - Rises from the bottom */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] sm:w-[80%] md:w-[60%] max-w-[750px] h-[75vh] pointer-events-none z-10"
        >
          <img
            src="/images/editor-portrait-1.png"
            alt="Quantom"
            className="w-full h-full object-contain object-bottom"
            style={{ filter: "drop-shadow(0px -10px 50px rgba(200,0,0,0.3))" }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </motion.div>

        {/* Bottom Elements: Left Text and Right Stats */}
        <div className="mt-auto w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 z-20 pb-4">

          {/* Bottom Left: Italic Paragraph */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="w-full lg:w-[40%] text-center lg:text-left drop-shadow-2xl"
          >
            <h2
              className="font-['Bebas_Neue'] italic text-3xl md:text-5xl lg:text-5xl leading-[1] tracking-wide text-transparent bg-clip-text uppercase"
              style={{
                backgroundImage: "linear-gradient(to right, #ffffff, #e4e4e7)",
                filter: "drop-shadow(3px 5px 5px rgba(0,0,0,1)) drop-shadow(0 0 15px rgba(255,0,0,0.6))",
                WebkitTextStroke: "1px rgba(239, 68, 68, 0.4)"
              }}
            >
              Video editing that makes<br />
              people feel something — for<br />
              YouTube, brands, and film.
            </h2>
          </motion.div>

          {/* Bottom Right: Circular Stats */}
          <div className="w-full lg:w-auto flex items-center justify-center lg:justify-end gap-3 md:gap-5 pb-2">
            <StatRing number="100M+" label="VIEWS" delay={0.6} />
            <StatRing number="10000+" label="PROJECTS" delay={0.7} />
            <StatRing number="3+" label="YEARS" delay={0.8} />
          </div>

        </div>
      </div>
    </section>
  );
}