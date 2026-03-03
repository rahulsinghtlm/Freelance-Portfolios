"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollAmbient() {
  const { scrollYProgress } = useScroll();
  const gradientY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "15%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 0.08]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[5]"
      style={{ y: gradientY, opacity }}
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,77,69,0.12) 0%, transparent 55%)",
        }}
      />
    </motion.div>
  );
}
