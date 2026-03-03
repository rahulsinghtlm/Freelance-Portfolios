"use client";

import { useState, useEffect } from "react";

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight   = document.body.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      // Guard against divide by zero
      if (totalHeight <= 0) {
        setProgress(0);
      } else {
        // Convert to percentage (0 to 100)
        setProgress((currentScroll / totalHeight) * 100);
      }
    };

    // Call handleScroll once on initialization to set initial progress
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress; // a number from 0–100
}