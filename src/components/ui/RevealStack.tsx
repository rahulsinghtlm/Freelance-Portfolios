"use client";

import { motion } from "framer-motion";

const easeFilm = [0.77, 0, 0.18, 1] as const;

interface RevealStackProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  slide?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function RevealStack({
  children,
  className = "",
  delay = 0,
  slide = 48,
  direction = "up",
}: RevealStackProps) {
  const directionMap = {
    up: { y: slide, animateY: 0 },
    down: { y: -slide, animateY: 0 },
    left: { x: slide, animateX: 0 },
    right: { x: -slide, animateX: 0 },
  };
  const d = directionMap[direction];
  const isVertical = direction === "up" || direction === "down";

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{
        opacity: 0,
        ...(isVertical ? { y: d.y } : { x: d.x }),
      }}
      whileInView={{
        opacity: 1,
        ...(isVertical ? { y: d.animateY } : { x: d.animateX }),
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: easeFilm }}
    >
      {children}
    </motion.div>
  );
}

interface RevealStackChildrenProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  slide?: number;
}

export function RevealStackItem({
  children,
  className = "",
  delay = 0,
  slide = 44,
}: RevealStackChildrenProps) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, y: slide }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: easeFilm }}
    >
      {children}
    </motion.div>
  );
}
