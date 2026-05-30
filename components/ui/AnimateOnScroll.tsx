"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Direction = "up" | "left" | "right" | "none";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number; // milliseconds
  direction?: Direction;
  stagger?: boolean;
}

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
  stagger = false,
}: AnimateOnScrollProps) {
  const delta = (delay || 0) / 1000;

  const container = stagger
    ? {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: delta } },
      }
    : undefined;

  const item = {
    hidden:
      direction === "left"
        ? { opacity: 0, x: -24 }
        : direction === "right"
        ? { opacity: 0, x: 24 }
        : { opacity: 0, y: 24 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any, delay: delta } },
  };

  // If used as a simple wrapper, animate the container itself.
  // When `stagger` is true, this component provides container variants so children
  // can use variants to stagger. Otherwise we animate the wrapper directly.
  if (stagger) {
    return (
      <motion.div
        className={className}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={item.hidden}
      whileInView={item.visible}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any, delay: delta }}
    >
      {children}
    </motion.div>
  );
}
