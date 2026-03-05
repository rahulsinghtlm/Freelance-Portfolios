"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function SplitText({ text, className = "", delay = 0 }: SplitTextProps) {
  let charIndex = 0;
  const wordsWithChars = text.split(" ").map((word) => {
    const chars = word.split("").map((char) => {
      return { char, index: charIndex++ };
    });
    charIndex++; // add one for space
    return { word, chars };
  });

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {wordsWithChars.map((wordObj, wi) => (
        <span key={wi} className="inline-flex mr-[0.25em]">
          {wordObj.chars.map((c, ci) => (
            // Each char is wrapped in overflow:hidden so it "slides up from floor"
            <span key={ci} className="overflow-hidden inline-block">
              <motion.span
                className="inline-block"
                initial={{ y: "110%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  // Each character starts slightly after the previous across the whole string
                  delay: delay + c.index * 0.025,
                  ease: [0.77, 0, 0.18, 1],
                }}
              >
                {c.char}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}