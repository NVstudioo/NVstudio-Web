"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import SlideWrapper from "../wrappers/SlideWrapper";

const ITEMS = Array.from({ length: 10 }, (_, i) => i);
// Sonsuz dövr üçün klonlama: [...items, ...items, ...items]
const INFINITE_ITEMS = [...ITEMS, ...ITEMS, ...ITEMS];
const ORIGINAL_LENGTH = ITEMS.length;

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(ORIGINAL_LENGTH); // Ortadan başla
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const visibleItems =
    typeof window !== "undefined" && window.innerWidth < 640
      ? 1
      : typeof window !== "undefined" && window.innerWidth < 1024
        ? 2
        : 4;

  const itemWidth = 100 / visibleItems;

  const goTo = useCallback((index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  }, []);

  const next = useCallback(() => {
    goTo(currentIndex + 1);
  }, [currentIndex, goTo]);

  const prev = useCallback(() => {
    goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  // Sonsuz dövr: kənar hədlərə çatdıqda animasiyasız sıçra
  useEffect(() => {
    if (currentIndex >= ORIGINAL_LENGTH * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(ORIGINAL_LENGTH);
      }, 300);
      return () => clearTimeout(timer);
    }
    if (currentIndex <= 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(ORIGINAL_LENGTH);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Auto-play
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      next();
    }, 2500);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [next]);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
    // Auto-play yenidən başlat
    autoPlayRef.current = setInterval(() => next(), 2500);
  };

  const translateX = currentIndex * itemWidth;

  return (
    <SlideWrapper className="slide-left px-6 md:px-16 py-20">
      <p className="section-label mb-3">Digital Moments</p>
      <h2 className="text-responsive-h1 font-bold mb-10 text-[#EDEDED]">
        Our Visual Process
      </h2>
      <div className="flex items-center gap-4">
        {/* Prev button */}
        <button
          onClick={() => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
            prev();
            autoPlayRef.current = setInterval(() => next(), 2500);
          }}
          className="w-9 h-9 rounded-full border border-[rgba(80,0,255,0.3)] text-[#EDEDED]/50 flex items-center justify-center hover:border-[#5000FF] transition flex-shrink-0 disabled:opacity-50"
        >
          <Image src="/arrow-left.png" alt="Prev" width={32} height={32} />
        </button>

        {/* Track */}
        <div
          className="flex-1 overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={trackRef}
            className="flex gap-4"
            style={{
              transition: isTransitioning ? "transform 0.3s ease" : "none",
              transform: `translateX(calc(-${translateX}% - ${currentIndex * 16}px))`,
            }}
          >
            {INFINITE_ITEMS.map((n, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-xl bg-[rgba(80,0,255,0.07)] border border-[#241F31] overflow-hidden relative"
                style={{
                  width: `calc(${itemWidth}% - 12px)`,
                  aspectRatio: "4/3",
                  minWidth: `calc(${itemWidth}% - 12px)`,
                }}
              >
                <Image
                  src="/hero-3d.png"
                  alt="Gallery"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={() => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
            next();
            autoPlayRef.current = setInterval(() => next(), 2500);
          }}
          className="w-9 h-9 rounded-full border border-[#241F31] text-[#EDEDED] flex items-center justify-center hover:border-[#5000FF] transition flex-shrink-0"
        >
          <Image src="/arrow-right.png" alt="Next" width={32} height={32} />
        </button>
      </div>
    </SlideWrapper>
  );
}
