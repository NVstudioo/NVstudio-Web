"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { motion, useInView } from "framer-motion";

import SlideWrapper from "../wrappers/SlideWrapper";

const stats = [
  { value: 2024, suffix: "", label: "Date of Establishment" },
  { value: 4, suffix: "+", label: "Active Projects" },
  { value: 3, suffix: "", label: "Products in Development" },
  { value: 30, suffix: "+", label: "Team Members" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const duration = stat.value >= 1000 ? 2200 : 1800;
  const count = useCountUp(stat.value, duration, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="bg-[#010715] border border-white/8 rounded-2xl flex flex-col items-center gap-4 px-6 py-8"
    >
      <div className="w-14 h-14 rounded-full bg-[#010715] border border-gray-500/25 flex items-center justify-center text-[#1E00FF]">
        <Image src="/chipIcon.png" width={40} height={40} alt="Chip Icon" />
      </div>

      <span
        className="text-[40px] font-bold text-[#1E00FF] leading-none tracking-tight tabular-nums"
        aria-live="polite"
      >
        {count}
        {stat.suffix}
      </span>

      <span className="text-sm text-[#EDEDED] text-center">{stat.label}</span>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <SlideWrapper
      className="slide-right bg-[#010715] px-6 py-12 mx-6 rounded-2xl"
      aria-label="Company statistics"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </SlideWrapper>
  );
}
