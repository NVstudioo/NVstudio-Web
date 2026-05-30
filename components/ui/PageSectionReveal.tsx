"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Direction = "up" | "left" | "right";

interface PageSectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  amount?: number;
}

const initialByDirection: Record<Direction, { opacity: number; x?: number; y?: number }> = {
  up: { opacity: 0, y: 36 },
  left: { opacity: 0, x: -36 },
  right: { opacity: 0, x: 36 },
};

export default function PageSectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  amount = 0.25,
}: PageSectionRevealProps) {
  return (
    <motion.section
      className={className}
      initial={initialByDirection[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
