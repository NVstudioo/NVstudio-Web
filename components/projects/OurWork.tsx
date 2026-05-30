"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SlideWrapper from "../wrappers/SlideWrapper";

const categories = ["All", "Web", "Mobile", "Branding", "AI"];

const projects = [
  {
    id: 1,
    title: "Birbank Digital Platform",
    category: "Web",
    desc: "Full-stack banking portal with real-time transaction dashboard.",
    gradient: "linear-gradient(135deg, #0a1628 0%, #1e3a8a 100%)",
    accent: "#818cf8",
    year: "2025",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile",
    desc: "iOS & Android app for seamless mobile financial management.",
    gradient: "linear-gradient(135deg, #0d0a2e 0%, #312e81 100%)",
    accent: "#a5b4fc",
    year: "2025",
  },
  {
    id: 3,
    title: "NV Brand Identity",
    category: "Branding",
    desc: "Complete visual identity system: logo, typography and guidelines.",
    gradient: "linear-gradient(135deg, #1c0a00 0%, #431407 100%)",
    accent: "#fb923c",
    year: "2024",
  },
  {
    id: 4,
    title: "InstaUp AI Platform",
    category: "AI",
    desc: "AI-powered growth automation tool for content creators.",
    gradient: "linear-gradient(135deg, #030712 0%, #1e1b4b 100%)",
    accent: "#60a5fa",
    year: "2024",
  },
  {
    id: 5,
    title: "Azerconnect Portal",
    category: "Web",
    desc: "Enterprise customer portal with real-time service management.",
    gradient: "linear-gradient(135deg, #0a1f1c 0%, #134e4a 100%)",
    accent: "#34d399",
    year: "2024",
  },
  {
    id: 6,
    title: "UstaUp Mobile App",
    category: "Mobile",
    desc: "On-demand service marketplace connecting users with professionals.",
    gradient: "linear-gradient(135deg, #0c1a14 0%, #166534 100%)",
    accent: "#4ade80",
    year: "2024",
  },
];

function GlowAccent({ accent }: { accent: string }) {
  return (
    <div
      className="absolute -top-12 -right-12 w-36 h-36 rounded-full pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${accent}28 0%, transparent 70%)`,
        filter: "blur(24px)",
      }}
    />
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function OurWork() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <SlideWrapper
      direction="top"
      style={{ padding: "clamp(20px, 5vw, 80px) clamp(24px, 6vw, 64px)" }}
    >
      <div className="max-w-7xl mx-auto">
        <p className="section-label mb-3">Our Work</p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <h2
            className="font-black text-white"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Selected Projects
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="font-medium rounded-full transition-all duration-200"
                style={{
                  padding:
                    "clamp(0.4rem, 0.8vw, 0.5rem) clamp(0.9rem, 1.5vw, 1.25rem)",
                  fontSize: "clamp(0.75rem, 1vw, 0.85rem)",
                  background:
                    active === cat ? "#5000FF" : "rgba(255,255,255,0.04)",
                  border:
                    active === cat
                      ? "1px solid #5000FF"
                      : "1px solid rgba(255,255,255,0.1)",
                  color: active === cat ? "#fff" : "rgba(255,255,255,0.5)",
                  boxShadow:
                    active === cat ? "0 0 20px rgba(80,0,255,0.35)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="group relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: "4/3", borderRadius: "18px" }}
                whileHover={{
                  scale: 1.025,
                  y: -6,
                  boxShadow: `0 24px 60px ${project.accent}35, 0 8px 30px rgba(0,0,0,0.5)`,
                  transition: {
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  },
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: project.gradient }}
                />
                <GlowAccent accent={project.accent} />

                <div
                  className="absolute top-4 left-4 rounded-full backdrop-blur-sm z-10"
                  style={{
                    padding: "3px 12px",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.55)",
                    background: "rgba(0,0,0,0.35)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {project.year}
                </div>
                <div
                  className="absolute top-4 right-4 rounded-full font-medium z-10"
                  style={{
                    padding: "3px 12px",
                    fontSize: 11,
                    background: `${project.accent}18`,
                    border: `1px solid ${project.accent}35`,
                    color: project.accent,
                  }}
                >
                  {project.category}
                </div>

                <div
                  className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  style={{
                    background: `linear-gradient(to top, rgba(0,0,15,0.92) 0%, ${project.accent}18 55%, transparent 80%)`,
                  }}
                >
                  <div>
                    <h3
                      className="font-bold text-white mb-1"
                      style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-white/55 mb-2"
                      style={{ fontSize: "clamp(0.72rem, 1vw, 0.8rem)" }}
                    >
                      {project.desc}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 rounded-full font-medium"
                      style={{
                        padding: "3px 12px",
                        fontSize: 11,
                        background: `${project.accent}20`,
                        border: `1px solid ${project.accent}40`,
                        color: project.accent,
                      }}
                    >
                      {project.category} →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
