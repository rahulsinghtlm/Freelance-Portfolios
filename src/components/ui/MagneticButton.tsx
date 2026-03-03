"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef, useCallback } from "react";

export default function MagneticButton({
  children,
  className = "",
  strength = 0.4,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // stable motion values (keep outside springs so springs track them)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 150, damping: 12 });
  const y = useSpring(my, { stiffness: 150, damping: 12 });

  const setFromPointer = useCallback((clientX: number, clientY: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((clientX - rect.left - rect.width / 2) * strength);
    my.set((clientY - rect.top - rect.height / 2) * strength);
  }, [mx, my, strength]);

  const handleLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onPointerMove={(e) => setFromPointer(e.clientX, e.clientY)}
      onPointerLeave={handleLeave}
      onMouseMove={(e) => setFromPointer(e.clientX, e.clientY)}
      onMouseLeave={handleLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}