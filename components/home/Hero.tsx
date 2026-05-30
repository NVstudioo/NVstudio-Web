"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useTransform,
  animate as animateValue,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Magnetic from "@/components/ui/Magnetic";

const STATS = [
  { target: 50, suffix: "+", label: "Projects" },
  { target: 30, suffix: "+", label: "Clients" },
  { target: 5, suffix: "+", label: "Years" },
];

function StatCounter({
  stat,
  index,
}: {
  stat: (typeof STATS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animateValue(0, stat.target, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return controls.stop;
  }, [isInView, stat.target]);

  return (
    <motion.div
      ref={ref}
      className={index > 0 ? "pl-6 sm:pl-8" : ""}
      style={
        index > 0 ? { borderLeft: "1px solid rgba(255,255,255,0.07)" } : {}
      }
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: premiumEase }}
    >
      <div className="stat-number">
        {count}
        {stat.suffix}
      </div>
      <div
        className="text-white/35 tracking-wide mt-0.5"
        style={{ fontSize: "clamp(0.65rem, 1vw, 0.75rem)" }}
      >
        {stat.label}
      </div>
    </motion.div>
  );
}

const LINE_ONE = ["We", "create", "digital"];
const LINE_TWO = ["solutions", "that", "drive"];
const premiumEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const orbYReverse = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, #5000FF, #EA00FF)",
          transformOrigin: "0%",
          scaleX,
          zIndex: 9999,
        }}
      />

      <section
        className="relative w-full overflow-hidden bg-black"
        style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(80,0,255,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Breathing orbs */}
        <motion.div
          className="absolute top-1/3 -left-40 rounded-full pointer-events-none"
          style={{
            width: 600,
            height: 600,
            background: "rgba(80,0,255,0.08)",
            filter: "blur(130px)",
            y: orbY,
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 right-10 rounded-full pointer-events-none"
          style={{
            width: 440,
            height: 440,
            background: "rgba(234,0,255,0.06)",
            filter: "blur(110px)",
            y: orbYReverse,
          }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2,
          }}
        />

        {/* Decorative SVG — rotating circle top-right */}
        <motion.svg
          className="absolute top-12 right-[13%] pointer-events-none hidden md:block"
          style={{ opacity: 0.12 }}
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          <circle
            cx="60"
            cy="60"
            r="54"
            stroke="url(#hCircleG)"
            strokeWidth="1.2"
            strokeDasharray="9 5"
          />
          <defs>
            <linearGradient id="hCircleG" x1="0" y1="0" x2="120" y2="120">
              <stop stopColor="#5000FF" />
              <stop offset="1" stopColor="#EA00FF" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Floating triangle top-left */}
        <motion.svg
          className="absolute top-28 left-[5%] pointer-events-none hidden md:block"
          style={{ opacity: 0.13 }}
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        >
          <polygon
            points="26,3 49,46 3,46"
            stroke="#5000FF"
            strokeWidth="1.5"
          />
        </motion.svg>

        {/* Rotating diamond bottom-right */}
        <motion.svg
          className="absolute bottom-28 right-[7%] pointer-events-none hidden md:block"
          style={{ opacity: 0.1 }}
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          <rect
            x="7"
            y="7"
            width="32"
            height="32"
            stroke="#EA00FF"
            strokeWidth="1.5"
            transform="rotate(45 23 23)"
          />
          <rect
            x="12"
            y="12"
            width="22"
            height="22"
            stroke="#EA00FF"
            strokeWidth="0.6"
            transform="rotate(45 23 23)"
          />
        </motion.svg>

        {/* Floating plus bottom-left */}
        <motion.svg
          className="absolute bottom-36 left-[9%] pointer-events-none hidden md:block"
          style={{ opacity: 0.14 }}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0.8,
          }}
        >
          <line
            x1="14"
            y1="2"
            x2="14"
            y2="26"
            stroke="#5000FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="2"
            y1="14"
            x2="26"
            y2="14"
            stroke="#5000FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Rotating dashed circle right-middle */}
        <motion.svg
          className="absolute top-[40%] right-[5%] pointer-events-none hidden md:block"
          style={{ opacity: 0.07 }}
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          <circle
            cx="40"
            cy="40"
            r="35"
            stroke="#5000FF"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
        </motion.svg>

        {/* Dot grids */}
        <div
          className="absolute top-[16%] right-[24%] pointer-events-none hidden md:block"
          style={{ opacity: 0.18 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "10px",
            }}
          >
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "rgba(160,120,255,0.8)",
                }}
              />
            ))}
          </div>
        </div>
        <div
          className="absolute bottom-[20%] left-[2%] pointer-events-none hidden md:block"
          style={{ opacity: 0.12 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "8px",
            }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "rgba(234,0,255,0.7)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Main layout */}
        <motion.div
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-0 py-12 md:py-8 w-full"
          style={{ y: heroContentY }}
        >
          {/* Left column */}
          <div className="w-full md:flex-1 z-10" style={{ maxWidth: "600px" }}>
            {/* Badge */}
            <motion.div
              className="hero-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{
                background: "rgba(80,0,255,0.1)",
                border: "1px solid rgba(80,0,255,0.22)",
              }}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
                style={{ animation: "pulseGlow 2s ease-in-out infinite" }}
              />
              <span
                className="text-purple-300 font-medium tracking-wider uppercase"
                style={{ fontSize: "clamp(9px, 1vw, 11px)" }}
              >
                Digital Studio · Available for Projects
              </span>
            </motion.div>

            {/* Headline — word-by-word with blur */}
            <h1
              className="hero-title font-black text-white leading-[1.1] mb-4"
              style={{ fontSize: "clamp(1.85rem, 4.5vw, 3.4rem)" }}
            >
              {LINE_ONE.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.22em]"
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.05,
                    ease: premiumEase,
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {LINE_TWO.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.22em]"
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.05,
                    ease: premiumEase,
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                className="gradient-text-purple relative inline-block"
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.5, ease: premiumEase }}
              >
                real impact
                <svg
                  className="absolute left-0 w-full overflow-visible"
                  style={{ bottom: "-4px" }}
                  height="5"
                  viewBox="0 0 200 5"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 4.5 C40 1.5 80 5 120 2.5 S175 4 200 3.5"
                    stroke="url(#uGrad)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="uGrad" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#5000FF" stopOpacity="0.8" />
                      <stop offset="1" stopColor="#EA00FF" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              className="hero-desc text-white/50 leading-relaxed max-w-md mb-7"
              style={{ fontSize: "clamp(0.875rem, 1.4vw, 1.05rem)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: premiumEase }}
            >
              We are a digital studio focused on building modern, fast and
              scalable websites, applications and brands that create lasting
              impressions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="hero-cta flex flex-wrap items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: premiumEase }}
            >
              <Magnetic className="inline-block" strength={18}>
                <motion.div
                  style={{ display: "inline-block" }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 0 24px rgba(80,0,255,0.55), 0 0 48px rgba(234,0,255,0.25)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href="/projects"
                    className="neon-btn-primary group text-white font-semibold rounded-full flex items-center justify-center gap-2 w-full sm:w-auto"
                    style={{
                      fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                      padding:
                        "clamp(0.75rem, 1.2vw, 0.875rem) clamp(1.5rem, 2.5vw, 1.75rem)",
                    }}
                  >
                    <span>Explore Our Work</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </Link>
                </motion.div>
              </Magnetic>

              <Magnetic className="inline-block" strength={14}>
                <motion.div
                  style={{ display: "inline-block" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href="/services"
                    className="text-white font-semibold rounded-full hover:bg-white/[0.09] hover:border-white/30 transition-all duration-300 w-full sm:w-auto text-center"
                    style={{
                      fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                      padding:
                        "clamp(0.75rem, 1.2vw, 0.875rem) clamp(1.5rem, 2.5vw, 1.75rem)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      background: "rgba(255,255,255,0.04)",
                      display: "block",
                    }}
                  >
                    Our Services
                  </Link>
                </motion.div>
              </Magnetic>
            </motion.div>

            {/* Stats row — animated counters */}
            <div
              className="hero-stats flex items-center gap-6 sm:gap-8 mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              {STATS.map((stat, i) => (
                <StatCounter key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </div>

          {/* Right column — 3D logo */}
          <motion.div
            className="hidden md:flex flex-1 justify-center items-center relative hero-image"
            style={{ minHeight: "380px" }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: premiumEase }}
          >
            {/* Decorative rings — different rotation speeds */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 400,
                height: 400,
                border: "1px solid rgba(80,0,255,0.07)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            />
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 340,
                height: 340,
                border: "1px solid rgba(234,0,255,0.05)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            />
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 280,
                height: 280,
                border: "1px solid rgba(100,120,255,0.04)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            />

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
              style={{
                width: 300,
                height: 80,
                background: "rgba(80,0,255,0.18)",
                filter: "blur(50px)",
              }}
            />

            {/* Floating badge — top right */}
            <div
              className="absolute glass-card rounded-2xl animate-float z-20"
              style={{
                top: "12%",
                right: "10%",
                padding: "10px 14px",
                animationDelay: "0.5s",
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 20,
                    height: 20,
                    background: "rgba(52,211,153,0.2)",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#34d399",
                    }}
                  />
                </div>
                <span
                  className="text-white/75 font-medium whitespace-nowrap"
                  style={{ fontSize: 12 }}
                >
                  Available Now
                </span>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div
              className="absolute glass-card rounded-2xl animate-float-slow z-20"
              style={{
                bottom: "20%",
                left: "5%",
                padding: "10px 14px",
                animationDelay: "0.8s",
              }}
            >
              <div
                className="text-purple-300 font-bold"
                style={{ fontSize: 12 }}
              >
                50+ Projects
              </div>
              <div className="text-white/35 mt-0.5" style={{ fontSize: 10 }}>
                Successfully Delivered
              </div>
            </div>

            {/* Floating badge — left middle */}
            <div
              className="absolute glass-card rounded-2xl animate-float z-20"
              style={{
                top: "48%",
                left: "2%",
                padding: "10px 14px",
                transform: "translateY(-50%)",
                animationDelay: "1.2s",
              }}
            >
              <div
                className="font-bold"
                style={{ fontSize: 12, color: "#5eead4" }}
              >
                ★ 5.0
              </div>
              <div className="text-white/35 mt-0.5" style={{ fontSize: 10 }}>
                Client Rating
              </div>
            </div>

            {/* 3D logo — floating loop */}
            <motion.div
              className="flex items-center justify-center z-10 relative"
              style={{
                width: "clamp(220px, 32vw, 400px)",
                height: "clamp(220px, 32vw, 400px)",
              }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
            >
              <motion.div
                initial={{
                  clipPath: "inset(0 0 100% 0 round 24px)",
                  opacity: 0,
                }}
                animate={{ clipPath: "inset(0 0 0% 0 round 24px)", opacity: 1 }}
                transition={{
                  duration: 1.05,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src="/hero-3d.png"
                  alt="NV Studio 3D Logo"
                  width={500}
                  height={500}
                  className="object-contain w-full h-full"
                  style={{
                    filter:
                      "drop-shadow(0 0 50px rgba(80,0,255,0.5)) drop-shadow(0 0 100px rgba(80,0,255,0.2))",
                  }}
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom section divider */}
        <div className="absolute bottom-0 left-0 w-full h-px pointer-events-none section-divider" />
      </section>
    </>
  );
}
