"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const pointerX = useMotionValue(-200);
  const pointerY = useMotionValue(-200);

  const x = useSpring(pointerX, { stiffness: 180, damping: 24, mass: 0.35 });
  const y = useSpring(pointerY, { stiffness: 180, damping: 24, mass: 0.35 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      pointerX.set(event.clientX - 90);
      pointerY.set(event.clientY - 90);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [pointerX, pointerY]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
      style={{ x, y }}
    >
      <div
        className="rounded-full"
        style={{
          width: 180,
          height: 180,
          background:
            "radial-gradient(circle, rgba(108,74,255,0.28) 0%, rgba(234,0,255,0.08) 35%, transparent 72%)",
          filter: "blur(14px)",
        }}
      />
    </motion.div>
  );
}
