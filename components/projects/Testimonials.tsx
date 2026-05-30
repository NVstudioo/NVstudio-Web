"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Image from "next/image";
import SlideWrapper from "../wrappers/SlideWrapper";

const testimonials = [
  {
    text: "The NV Studio team truly amplified our messaging...",
    name: "Joe Simeone",
    role: "CEO, Hold Team",
    imgUrl: "/user.png",
  },
  {
    text: "Amazing experience, very professional team.",
    name: "Sarah John",
    role: "Product Manager",
    imgUrl: "/user.png",
  },
  {
    text: "They delivered exactly what we wanted and more. The quality and attention to detail was outstanding.",
    name: "Alex Brown",
    role: "Founder, TechStart",
    imgUrl: "/user.png",
  },
  {
    text: "NV Studio took our outdated brand and turned it into something modern and powerful. Highly recommend.",
    name: "Leyla Hasanova",
    role: "Marketing Director, Azeri Corp",
    imgUrl: "/user.png",
  },
];

function CarouselInner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <button
        onClick={scrollPrev}
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/70 text-white rounded-full hover:bg-black/90 transition"
      >
        {"<"}
      </button>
      <button
        onClick={scrollNext}
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/70 text-white rounded-full hover:bg-black/90 transition"
      >
        {">"}
      </button>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-stretch">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-4 flex"
            >
              <div className="bg-[#0b0b1a] text-white rounded-2xl p-6 shadow-lg w-full h-full flex flex-col justify-between">
                <p className="mb-6 text-sm opacity-80">"{item.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <Image
                    src={item.imgUrl}
                    width={50}
                    height={50}
                    alt={item.name}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs opacity-60">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <SlideWrapper
      direction="left"
      className="relative"
      style={{ padding: "clamp(20px, 5vw, 80px) clamp(24px, 6vw, 64px)" }}
    >
      <p
        style={{
          fontSize: "clamp(10px, 1vw, 14px)",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#EA00FF",
          marginBottom: "clamp(8px, 1vw, 16px)",
        }}
      >
        What Our Clients Say
      </p>
      <h2
        style={{
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: "bold",
          marginBottom: "clamp(24px, 5vw, 48px)",
          color: "#EDEDED",
        }}
      >
        Testimonials
      </h2>
      <CarouselInner />
    </SlideWrapper>
  );
}
