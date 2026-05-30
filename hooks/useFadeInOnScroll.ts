"use client";

import { useEffect, useRef } from "react";

export function useFadeInOnScroll() {
  const ref = useRef<HTMLElement | null>(null);

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
      { threshold: 0.2 }, // sectionun %20-si göründükdə işləyir
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
