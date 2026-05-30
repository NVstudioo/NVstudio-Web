"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SlideWrapper from "../wrappers/SlideWrapper";

const products = [
  {
    name: "SifarişX",
    desc: "AI-powered growth platform",
    color: "#7c3aed",
    logo: "/sifarisx.jpg",
  },
  {
    name: "Alfreela",
    desc: "Real estate digital solutions",
    color: "#0891b2",
    logo: "/alfreela.png",
  },
  {
    name: "UstaUp",
    desc: "On-demand service marketplace",
    color: "#059669",
    logo: "/ustaup.jpg",
  },
];

const productItem = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const productContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function OurStory() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(80,0,255,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "url('/bg-logo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="relative z-10 max-w-7xl mx-auto"
        style={{ padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 2rem)" }}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <SlideWrapper direction="left" className="flex-1">
            <p className="section-label mb-4">Our Story</p>
            <h2
              className="font-black text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Built in 2024.
              <br />
              <span className="gradient-text-purple">
                Building for the Future.
              </span>
            </h2>

            <div
              className="space-y-4 text-white/55 leading-relaxed"
              style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}
            >
              <p>
                A collective of builders and problem solvers on a mission to
                build real digital products that make a difference — across
                multiple projects, every day.
              </p>
              <p>
                <Link
                  href="/"
                  className="font-bold text-violet-400 hover:text-violet-300 transition-colors"
                >
                  NV Studio
                </Link>{" "}
                was founded in 2024 with a simple belief: great products come
                from focused teams, working in parallel, with a shared mission.
              </p>
              <p>
                We operate on a multi-project model, where dedicated teams
                build, ship, and scale digital products across different
                industries simultaneously.
              </p>
              <p>
                From{" "}
                <Link
                  href="/"
                  className="font-bold text-violet-400 hover:text-violet-300 transition-colors"
                >
                  InstaUp AI
                </Link>{" "}
                to{" "}
                <Link
                  href="/"
                  className="font-bold text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Alfreela
                </Link>{" "}
                to{" "}
                <Link
                  href="/"
                  className="font-bold text-violet-400 hover:text-violet-300 transition-colors"
                >
                  UstaUp
                </Link>
                , our ecosystem of products is growing — and we're just getting
                started.
              </p>
            </div>
          </SlideWrapper>

          {/* Right column: product cards */}
          <SlideWrapper direction="right" className="flex-1 lg:max-w-md w-full">
            <p
              className="text-white/40 font-medium mb-5 uppercase tracking-widest"
              style={{ fontSize: "clamp(0.7rem, 1vw, 0.8rem)" }}
            >
              Our Products
            </p>
            <motion.div
              className="space-y-4"
              variants={productContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {products.map((p) => (
                <motion.div
                  key={p.name}
                  variants={productItem}
                  className="glass-card rgb-glow-card rounded-2xl flex items-center gap-4 hover:border-white/20 transition-all duration-300 group"
                  style={{ padding: "clamp(1rem, 2vw, 1.25rem)" }}
                >
                  <div
                    className="flex-shrink-0 rounded-xl flex items-center justify-center overflow-hidden"
                    style={{
                      width: 48,
                      height: 48,
                      background: `${p.color}22`,
                      border: `1px solid ${p.color}44`,
                    }}
                  >
                    <Image
                      src={p.logo}
                      alt={`${p.name} logo`}
                      width={40}
                      height={40}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-white font-semibold"
                      style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)" }}
                    >
                      {p.name}
                    </div>
                    <div
                      className="text-white/40 mt-0.5"
                      style={{ fontSize: "clamp(0.75rem, 1vw, 0.8rem)" }}
                    >
                      {p.desc}
                    </div>
                  </div>
                  <span className="text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all duration-200">
                    →
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Founded badge */}
            <motion.div
              className="mt-6 rounded-2xl flex items-center gap-4"
              style={{
                padding: "clamp(1rem, 2vw, 1.25rem)",
                background: "rgba(80,0,255,0.08)",
                border: "1px solid rgba(80,0,255,0.2)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
            >
              <div
                className="rounded-xl flex-shrink-0 flex items-center justify-center"
                style={{
                  width: 48,
                  height: 48,
                  background: "rgba(80,0,255,0.15)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M11 2L13.09 8.26L20 9.27L15 14.14L16.18 21.02L11 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L11 2Z"
                    stroke="#a78bfa"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div
                  className="text-white font-bold"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}
                >
                  2024
                </div>
                <div
                  className="text-white/40"
                  style={{ fontSize: "clamp(0.7rem, 1vw, 0.75rem)" }}
                >
                  Year Founded · Baku, Azerbaijan
                </div>
              </div>
            </motion.div>
          </SlideWrapper>
        </div>
      </div>

      <div className="section-divider" />
    </section>
  );
}
