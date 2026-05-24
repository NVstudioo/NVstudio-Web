"use client";

import Image from "next/image";
import { useState, useRef } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on scope and complexity. A typical web app takes 4–8 weeks, while larger enterprise solutions may take 3–6 months.",
  },
  {
    q: "What technologies do you work with?",
    a: "We work with modern stacks including React, Next.js, Node.js, React Native, and various AI/ML frameworks tailored to your project needs.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, we provide ongoing maintenance, performance monitoring, and feature enhancements after launch through our dedicated support plans.",
  },
  {
    q: "How do you handle project communication?",
    a: "We assign a dedicated project manager and use tools like Slack and Notion for transparent, real-time communication throughout the project.",
  },
  {
    q: "Can you work with our existing codebase?",
    a: "Absolutely. Our team performs thorough code audits and seamlessly integrates new features or refactors existing systems.",
  },
  {
    q: "What is your payment structure?",
    a: "We typically work with a 30% upfront deposit, 40% at mid-project milestone, and 30% upon final delivery. Custom arrangements are available.",
  },
];

// FAQRow komponenti xaricə çıxarıldı
function FAQRow({
  item,
  idx,
  open,
  toggle,
  contentRef,
}: {
  item: FAQItem;
  idx: number;
  open: number | null;
  toggle: (i: number) => void;
  contentRef: (el: HTMLDivElement | null) => void;
}) {
  const isOpen = open === idx;

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
      style={{
        border: "1px solid rgba(54, 42, 83, 1)",
        background: isOpen ? "rgba(9, 6, 14, 1)" : "rgba(80,0,255,0.05)",
      }}
      onClick={() => toggle(idx)}
    >
      <div
        className="flex items-center justify-between"
        style={{
          padding: "clamp(12px, 2vw, 16px) clamp(14px, 3vw, 20px)",
        }}
      >
        <span
          style={{
            fontSize: "clamp(13px, 1.5vw, 15px)",
            fontWeight: 500,
            color: "#EDEDED",
          }}
        >
          {item.q}
        </span>
        <span
          className="text-[#a0a0b8] transition-transform duration-300 shrink-0"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            marginLeft: "clamp(8px, 1vw, 12px)",
          }}
        >
          <Image src="/arrowDown.png" width={20} height={20} alt="arrow down" />
        </span>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? "200px" : "0px",
        }}
      >
        <p
          style={{
            padding: "0 clamp(14px, 3vw, 20px) clamp(12px, 2vw, 16px)",
            fontSize: "clamp(12px, 1.4vw, 14px)",
            color: "#a0a0b8",
            lineHeight: 1.6,
          }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  const left = FAQ_ITEMS.slice(0, 3);
  const right = FAQ_ITEMS.slice(3, 6);

  return (
    <section
      style={{ padding: "clamp(20px, 5vw, 64px) clamp(24px, 6vw, 64px)" }}
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
        FAQ
      </p>
      <h2
        style={{
          fontSize: "clamp(20px, 4vw, 36px)",
          fontWeight: "bold",
          color: "white",
          marginBottom: "clamp(24px, 5vw, 40px)",
        }}
      >
        Common Questions
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
          <div className="flex flex-col gap-3">
            {left.map((item, i) => (
              <FAQRow
                key={i}
                item={item}
                idx={i}
                open={open}
                toggle={toggle}
                contentRef={(el) => {
                  contentRefs.current[i] = el;
                }}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {right.map((item, i) => (
              <FAQRow
                key={i + 3}
                item={item}
                idx={i + 3}
                open={open}
                toggle={toggle}
                contentRef={(el) => {
                  contentRefs.current[i + 3] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
