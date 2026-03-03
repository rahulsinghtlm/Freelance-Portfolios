// src/hooks/useLenis.ts
"use client";

import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    let lenis: any = null;
    let rafId: number | null = null;

    // Dynamically import to avoid SSR issues
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    });

    // Cleanup function returned from useEffect (not from .then())
    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);
}