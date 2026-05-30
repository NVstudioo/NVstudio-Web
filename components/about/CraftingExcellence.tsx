"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Innovation",
    desc: "We challenge the status quo and build for the future — embracing new technologies and creative approaches to every problem.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    bg: "rgba(34,211,238,0.08)",
    border: "rgba(34,211,238,0.2)",
    accent: "#22d3ee",
    number: "01",
  },
  {
    title: "Collaboration",
    desc: "Our multi-team, multi-project structure drives shared success. We believe the best outcomes come from great teams working together.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.2)",
    accent: "#a78bfa",
    number: "02",
  },
  {
    title: "Impact",
    desc: "We build real products that solve real problems for real users. Every line of code, every design decision — it all matters.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#34d399"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.2)",
    accent: "#34d399",
    number: "03",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any },
  },
};

export default function CraftingExcellence() {
  return (
    <section
      className="w-full bg-black"
      style={{ padding: "clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 2rem)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any }}
        >
          <p className="section-label mb-3">Crafting Excellence Together</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <h2
              className="font-black text-white"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Mission &amp; Values
            </h2>
            <p
              className="text-white/35 max-w-xs leading-relaxed"
              style={{ fontSize: "clamp(0.8rem, 1vw, 0.875rem)" }}
            >
              The principles that guide everything we build and everyone we work
              with.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((v) => (
            <motion.div key={v.title} variants={item}>
              <div
                className="service-card-v2 group h-full flex flex-col"
                style={{ padding: "clamp(1.5rem, 2.5vw, 2rem)" }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="svc-icon-box"
                    style={{
                      background: v.bg,
                      border: `1px solid ${v.border}`,
                    }}
                  >
                    {v.icon}
                  </div>
                  <span
                    className="font-black"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                      color: `${v.accent}14`,
                    }}
                  >
                    {v.number}
                  </span>
                </div>

                <h3
                  className="text-white font-bold mb-3"
                  style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-white/45 leading-relaxed flex-1"
                  style={{ fontSize: "clamp(0.8rem, 1vw, 0.875rem)" }}
                >
                  {v.desc}
                </p>

                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-[20px]"
                  style={{
                    background: `linear-gradient(to right, ${v.accent}, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
