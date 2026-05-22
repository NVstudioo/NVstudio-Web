"use client";

import Image from "next/image";
import { useState } from "react";

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Array.from({ length: 10 }, (_, i) => i); // 100 items for infinite scroll
  const visibleItems = 4;
  const maxScroll = items.length - visibleItems;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxScroll ? prev + 1 : maxScroll));
  };

  return (
    <section className="px-6 md:px-16 py-20">
      <p className="section-label mb-3">Digital Moments</p>
      <h2 className="text-responsive-h1 font-bold mb-10 text-[#EDEDED]">
        Our Visual Process
      </h2>
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="w-9 h-9 rounded-full border border-[rgba(80,0,255,0.3)] text-[#EDEDED]/50 flex items-center justify-center hover:border-[#5000FF] transition flex-shrink-0 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentIndex === 0}
        >
          <Image
            className="text-white"
            src="/arrow-left.png"
            alt="Next"
            width={32}
            height={32}
          />
        </button>
        <div className="flex-1 overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems + 16 / (100 * 4))}%)`,
            }}
          >
            {items.map((n) => (
              <div
                key={n}
                className="flex-shrink-0 w-70 h-50 aspect-square rounded-xl bg-[rgba(80,0,255,0.07)] border border-[#241F31] overflow-hidden relative"
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
        <button
          onClick={handleNext}
          className="w-15 h-15 rounded-full border border-[#241F31] text-[#EDEDED] flex items-center justify-center hover:border-[#5000FF] transition flex-shrink-0 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentIndex === maxScroll}
        >
          <Image
            className="text-white"
            src="/arrow-right.png"
            alt="Next"
            width={32}
            height={32}
          />
        </button>
      </div>
    </section>
  );
}
