"use client";

import { useEffect, useRef } from "react";

export default function SlideWrapper({
  children,
  direction = "left",
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  direction?: "left" | "right" | "top";
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={style} className={`slide-${direction} ${className}`}>
      {children}
    </div>
  );
}
