"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2024, suffix: "",  label: "Date of Establishment" },
  { value: 4,    suffix: "+", label: "Active Projects" },
  { value: 3,    suffix: "",  label: "Products in Development" },
  { value: 30,   suffix: "+", label: "Team Members" },
];

function ChipIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <path d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M4 9h3M4 12h3M4 15h3M17 9h3M17 12h3M17 15h3" />
    </svg>
  );
}

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

function StatCard({
  stat,
  delay,
}: {
  stat: (typeof stats)[0];
  delay: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const duration = stat.value >= 1000 ? 2200 : 1800;
  const count = useCountUp(stat.value, duration, visible);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`
        bg-[#010715] border border-white/8 rounded-2xl
        flex flex-col items-center gap-4 px-6 py-8
        transition-all
        ${visible ? "animate-[fadeUp_0.55s_ease_forwards]" : "opacity-0 translate-y-4"}
      `}
    >
      <div className="w-14 h-14 rounded-full bg-[#010715] border border-gray-500/25 flex items-center justify-center text-[#1E00FF]">
        <ChipIcon />
      </div>

      <span className="text-[40px] font-bold text-[#1E00FF] leading-none tracking-tight tabular-nums" aria-live="polite">
        {count}{stat.suffix}
      </span>

      <span className="text-sm text-[#EDEDED] text-center">
        {stat.label}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#010715] px-6 py-12 mx-6 rounded-2xl" aria-label="Company statistics">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}