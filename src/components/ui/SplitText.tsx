"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function SplitText({ text, className = "", delay = 0 }: SplitTextProps) {
  // Split into words, then each word into chars
  // We keep words together so line breaks happen naturally
  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-flex mr-[0.25em]">
          {word.split("").map((char, ci) => (
            // Each char is wrapped in overflow:hidden so it "slides up from floor"
            <span key={ci} className="overflow-hidden inline-block">
              <motion.span
                className="inline-block"
                initial={{ y: "110%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  // Each character starts slightly after the previous
                  delay: delay + (wi * word.length + ci) * 0.025,
                  ease: [0.77, 0, 0.18, 1],
                }}
              >
                {char}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}