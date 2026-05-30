"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SlideWrapper from "../wrappers/SlideWrapper";

const projects = [
  {
    id: 1,
    title: "Birbank App",
    category: "Mobile Development",
    tag: "Mobile",
    desc: "Full-featured mobile banking platform with real-time analytics.",
    gradient: "linear-gradient(135deg, #0a1628 0%, #1e3a8a 100%)",
    accent: "#818cf8",
    year: "2025",
  },
  {
    id: 2,
    title: "Azerconnect Portal",
    category: "Web Development",
    tag: "Web",
    desc: "Enterprise portal serving 200K+ users with real-time service management.",
    gradient: "linear-gradient(135deg, #0a1f1c 0%, #134e4a 100%)",
    accent: "#34d399",
    year: "2025",
  },
  {
    id: 3,
    title: "UX Design System",
    category: "UI/UX Design",
    tag: "Design",
    desc: "Comprehensive design system with 150+ components and visual guidelines.",
    gradient: "linear-gradient(135deg, #1a0533 0%, #3b0764 100%)",
    accent: "#e879f9",
    year: "2024",
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "Branding",
    tag: "Brand",
    desc: "Full brand overhaul — logo, typography, color system and brand assets.",
    gradient: "linear-gradient(135deg, #1c0a00 0%, #431407 100%)",
    accent: "#fb923c",
    year: "2024",
  },
];

function CardDecoration({ id, accent }: { id: number; accent: string }) {
  if (id === 1) {
    return (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {[50, 100, 150].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="200"
            y2={y}
            stroke="white"
            strokeWidth="0.4"
            strokeOpacity="0.05"
          />
        ))}
        {[50, 100, 150].map((x) => (
          <line
            key={x}
            x1={x}
            y1="0"
            x2={x}
            y2="200"
            stroke="white"
            strokeWidth="0.3"
            strokeOpacity="0.03"
          />
        ))}
        <rect
          x="18"
          y="122"
          width="22"
          height="78"
          rx="3"
          fill="white"
          fillOpacity="0.06"
        />
        <rect
          x="50"
          y="94"
          width="22"
          height="106"
          rx="3"
          fill="white"
          fillOpacity="0.09"
        />
        <rect
          x="82"
          y="64"
          width="22"
          height="136"
          rx="3"
          fill="white"
          fillOpacity="0.12"
        />
        <rect
          x="114"
          y="40"
          width="22"
          height="160"
          rx="3"
          fill="white"
          fillOpacity="0.10"
        />
        <rect
          x="146"
          y="18"
          width="22"
          height="182"
          rx="3"
          fill={accent}
          fillOpacity="0.18"
        />
        <polyline
          points="29,126 61,98 93,68 125,44 157,22"
          stroke={accent}
          strokeWidth="1.8"
          strokeOpacity="0.55"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="29" cy="126" r="2.5" fill="white" fillOpacity="0.35" />
        <circle cx="93" cy="68" r="3" fill="white" fillOpacity="0.45" />
        <circle cx="157" cy="22" r="4.5" fill={accent} fillOpacity="0.9" />
        <circle
          cx="170"
          cy="165"
          r="22"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.06"
          strokeDasharray="4 3"
        />
        <circle
          cx="170"
          cy="165"
          r="12"
          stroke={accent}
          strokeWidth="0.8"
          strokeOpacity="0.14"
        />
      </svg>
    );
  }

  if (id === 2) {
    return (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {[40, 80, 120, 160].flatMap((x) =>
          [40, 80, 120, 160].map((y) => (
            <circle
              key={`${x}${y}`}
              cx={x}
              cy={y}
              r="1.3"
              fill="white"
              fillOpacity="0.06"
            />
          )),
        )}
        <circle
          cx="100"
          cy="100"
          r="76"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.05"
          strokeDasharray="3 4"
        />
        {[
          [26, 26],
          [174, 26],
          [26, 174],
          [174, 174],
          [100, 16],
          [184, 100],
        ].map(([x2, y2], i) => (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={x2}
            y2={y2}
            stroke={accent}
            strokeWidth="0.8"
            strokeOpacity={i < 4 ? 0.15 : 0.1}
          />
        ))}
        <circle
          cx="100"
          cy="100"
          r="20"
          stroke={accent}
          strokeWidth="1.2"
          strokeOpacity="0.22"
          fill={accent}
          fillOpacity="0.06"
        />
        <circle cx="100" cy="100" r="8" fill={accent} fillOpacity="0.22" />
        <circle
          cx="26"
          cy="26"
          r="8"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.13"
          fill="white"
          fillOpacity="0.03"
        />
        <circle
          cx="174"
          cy="26"
          r="8"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.13"
          fill="white"
          fillOpacity="0.03"
        />
        <circle
          cx="26"
          cy="174"
          r="6"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.09"
          fill="white"
          fillOpacity="0.02"
        />
        <circle
          cx="174"
          cy="174"
          r="6"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.09"
          fill="white"
          fillOpacity="0.02"
        />
        <circle
          cx="100"
          cy="16"
          r="5"
          stroke={accent}
          strokeWidth="1"
          strokeOpacity="0.3"
          fill={accent}
          fillOpacity="0.12"
        />
        <circle
          cx="184"
          cy="100"
          r="5"
          stroke={accent}
          strokeWidth="1"
          strokeOpacity="0.25"
          fill={accent}
          fillOpacity="0.10"
        />
      </svg>
    );
  }

  if (id === 3) {
    return (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect
          x="60"
          y="12"
          width="80"
          height="155"
          rx="13"
          stroke="white"
          strokeWidth="1.2"
          strokeOpacity="0.13"
          fill="white"
          fillOpacity="0.02"
        />
        <rect
          x="65"
          y="25"
          width="70"
          height="131"
          rx="5"
          fill="white"
          fillOpacity="0.02"
        />
        <rect
          x="72"
          y="32"
          width="56"
          height="9"
          rx="2"
          fill="white"
          fillOpacity="0.09"
        />
        <rect
          x="72"
          y="47"
          width="56"
          height="32"
          rx="5"
          fill={accent}
          fillOpacity="0.12"
          stroke={accent}
          strokeWidth="0.6"
          strokeOpacity="0.28"
        />
        <rect
          x="78"
          y="54"
          width="30"
          height="6"
          rx="2"
          fill="white"
          fillOpacity="0.12"
        />
        <rect
          x="78"
          y="64"
          width="20"
          height="4"
          rx="1.5"
          fill="white"
          fillOpacity="0.07"
        />
        <rect
          x="72"
          y="86"
          width="24"
          height="22"
          rx="4"
          fill="white"
          fillOpacity="0.07"
        />
        <rect
          x="102"
          y="89"
          width="26"
          height="7"
          rx="2"
          fill="white"
          fillOpacity="0.10"
        />
        <rect
          x="102"
          y="100"
          width="18"
          height="5"
          rx="1.5"
          fill="white"
          fillOpacity="0.05"
        />
        <rect
          x="72"
          y="114"
          width="24"
          height="22"
          rx="4"
          fill="white"
          fillOpacity="0.07"
        />
        <rect
          x="102"
          y="117"
          width="26"
          height="7"
          rx="2"
          fill="white"
          fillOpacity="0.10"
        />
        <rect
          x="102"
          y="128"
          width="18"
          height="5"
          rx="1.5"
          fill="white"
          fillOpacity="0.05"
        />
        <rect
          x="72"
          y="143"
          width="56"
          height="11"
          rx="5.5"
          fill={accent}
          fillOpacity="0.22"
        />
        <rect
          x="86"
          y="159"
          width="28"
          height="3.5"
          rx="1.75"
          fill="white"
          fillOpacity="0.17"
        />
        <circle
          cx="36"
          cy="72"
          r="9"
          stroke={accent}
          strokeWidth="1"
          strokeOpacity="0.3"
          fill={accent}
          fillOpacity="0.08"
        />
        <circle
          cx="36"
          cy="100"
          r="9"
          stroke="white"
          strokeWidth="0.8"
          strokeOpacity="0.13"
          fill="white"
          fillOpacity="0.04"
        />
        <circle
          cx="36"
          cy="128"
          r="9"
          stroke="white"
          strokeWidth="0.8"
          strokeOpacity="0.09"
          fill="white"
          fillOpacity="0.03"
        />
        <line
          x1="45"
          y1="72"
          x2="60"
          y2="63"
          stroke="white"
          strokeWidth="0.4"
          strokeOpacity="0.07"
        />
        <line
          x1="45"
          y1="100"
          x2="60"
          y2="100"
          stroke="white"
          strokeWidth="0.4"
          strokeOpacity="0.06"
        />
      </svg>
    );
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 200 200"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <circle
        cx="100"
        cy="100"
        r="86"
        stroke="white"
        strokeWidth="0.4"
        strokeOpacity="0.05"
        strokeDasharray="3 4"
      />
      <circle
        cx="100"
        cy="100"
        r="60"
        stroke="white"
        strokeWidth="0.4"
        strokeOpacity="0.05"
        strokeDasharray="2 3"
      />
      <circle
        cx="100"
        cy="100"
        r="34"
        stroke="white"
        strokeWidth="0.6"
        strokeOpacity="0.08"
      />
      <line
        x1="14"
        y1="100"
        x2="186"
        y2="100"
        stroke="white"
        strokeWidth="0.4"
        strokeOpacity="0.05"
      />
      <line
        x1="100"
        y1="14"
        x2="100"
        y2="186"
        stroke="white"
        strokeWidth="0.4"
        strokeOpacity="0.05"
      />
      <line
        x1="40"
        y1="40"
        x2="160"
        y2="160"
        stroke="white"
        strokeWidth="0.3"
        strokeOpacity="0.04"
      />
      <line
        x1="160"
        y1="40"
        x2="40"
        y2="160"
        stroke="white"
        strokeWidth="0.3"
        strokeOpacity="0.04"
      />
      <polygon
        points="100,22 117,73 172,73 128,105 145,157 100,127 55,157 72,105 28,73 83,73"
        stroke="white"
        strokeWidth="0.8"
        strokeOpacity="0.09"
        fill="white"
        fillOpacity="0.02"
      />
      <polygon
        points="100,52 111,84 144,84 119,103 128,135 100,117 72,135 81,103 56,84 89,84"
        stroke={accent}
        strokeWidth="1.1"
        strokeOpacity="0.25"
        fill={accent}
        fillOpacity="0.06"
      />
      <circle cx="100" cy="100" r="5.5" fill={accent} fillOpacity="0.45" />
      <circle
        cx="162"
        cy="156"
        r="10"
        stroke={accent}
        strokeWidth="1"
        strokeOpacity="0.28"
        fill={accent}
        fillOpacity="0.08"
      />
      <circle
        cx="150"
        cy="166"
        r="8"
        stroke="white"
        strokeWidth="0.8"
        strokeOpacity="0.12"
        fill="white"
        fillOpacity="0.04"
      />
      <circle
        cx="174"
        cy="166"
        r="8"
        stroke="white"
        strokeWidth="0.8"
        strokeOpacity="0.09"
        fill="white"
        fillOpacity="0.03"
      />
    </svg>
  );
}

function GlowAccent({ accent }: { accent: string }) {
  return (
    <div
      className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${accent}30 0%, transparent 70%)`,
        filter: "blur(20px)",
      }}
    />
  );
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Projects() {
  return (
    <SlideWrapper
      direction="right"
      className="w-full"
      style={{ padding: "clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 2rem)" }}
    >
      <div className="max-w-7xl mx-auto">
        <p className="section-label mb-3">Project</p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
          <h2
            className="font-black text-white"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Selected Projects
          </h2>
          <Link
            href="/projects"
            className="text-white/40 hover:text-white/70 transition-colors duration-200 flex items-center gap-1.5 flex-shrink-0"
            style={{ fontSize: "clamp(0.8rem, 1vw, 0.875rem)" }}
          >
            View all projects <span>→</span>
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative overflow-hidden cursor-pointer aspect-square"
              style={{ borderRadius: "18px" }}
              whileHover={{
                scale: 1.03,
                y: -6,
                boxShadow: `0 24px 60px ${project.accent}35, 0 8px 30px rgba(0,0,0,0.5)`,
                transition: {
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                },
              }}
            >
              <Link href="/projects" className="absolute inset-0">
                <div
                  className="absolute inset-0"
                  style={{ background: project.gradient }}
                />
                <GlowAccent accent={project.accent} />
                <CardDecoration id={project.id} accent={project.accent} />

                <div
                  className="absolute top-3 left-3 rounded-full backdrop-blur-sm z-10"
                  style={{
                    padding: "3px 10px",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.55)",
                    background: "rgba(0,0,0,0.35)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {project.year}
                </div>

                <div
                  className="absolute top-3 right-3 rounded-full font-medium z-10"
                  style={{
                    padding: "3px 10px",
                    fontSize: 10,
                    background: `${project.accent}20`,
                    border: `1px solid ${project.accent}40`,
                    color: project.accent,
                  }}
                >
                  {project.tag}
                </div>

                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  style={{
                    background: `linear-gradient(to top, rgba(0,0,20,0.92) 0%, ${project.accent}20 50%, transparent 75%)`,
                  }}
                >
                  <div>
                    <div
                      className="font-semibold text-white mb-1"
                      style={{ fontSize: "clamp(0.78rem, 1.3vw, 0.95rem)" }}
                    >
                      {project.title}
                    </div>
                    <div
                      className="flex items-center gap-1.5"
                      style={{
                        color: project.accent,
                        fontSize: "clamp(0.65rem, 1vw, 0.75rem)",
                      }}
                    >
                      <span
                        className="rounded-full"
                        style={{
                          padding: "1px 8px",
                          background: `${project.accent}22`,
                          border: `1px solid ${project.accent}44`,
                          fontSize: "clamp(0.6rem, 0.9vw, 0.7rem)",
                        }}
                      >
                        {project.tag}
                      </span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          }}
        >
          <Link
            href="/projects"
            className="group flex items-center gap-2 font-medium transition-all duration-300 border border-white/10 rounded-full text-white/60 hover:text-white hover:border-white/30"
            style={{
              fontSize: "clamp(0.8rem, 1.1vw, 0.9rem)",
              padding:
                "clamp(0.6rem, 1vw, 0.75rem) clamp(1.25rem, 2vw, 1.75rem)",
            }}
          >
            <span>Browse All Projects</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
