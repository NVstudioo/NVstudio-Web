export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-black flex items-center justify-center text-center"
      style={{
        minHeight: "60vh",
        padding: "clamp(5rem, 10vw, 8rem) clamp(1.25rem, 5vw, 2rem)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(80,0,255,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Orbs */}
      <div
        className="absolute -left-16 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none animate-pulse-glow"
        style={{ background: "rgba(80,0,255,0.09)", filter: "blur(90px)" }}
      />
      <div
        className="absolute -right-16 bottom-0 w-72 h-72 rounded-full pointer-events-none animate-pulse-glow"
        style={{
          background: "rgba(234,0,255,0.07)",
          filter: "blur(80px)",
          animationDelay: "1s",
        }}
      />

      {/* Floating SVG */}
      <svg
        className="absolute top-10 left-[7%] animate-float pointer-events-none"
        style={{ opacity: 0.12 }}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <polygon points="24,3 45,42 3,42" stroke="#5000FF" strokeWidth="1.5" />
      </svg>
      <svg
        className="absolute bottom-10 right-[7%] animate-float-slow pointer-events-none"
        style={{ opacity: 0.1 }}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <rect
          x="5"
          y="5"
          width="30"
          height="30"
          stroke="#EA00FF"
          strokeWidth="1.5"
          transform="rotate(45 20 20)"
        />
      </svg>
      {/* Dot grid */}
      <div
        className="absolute top-[20%] right-[18%] pointer-events-none"
        style={{ opacity: 0.15 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "9px",
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
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

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <div
          className="hero-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7"
          style={{
            background: "rgba(80,0,255,0.1)",
            border: "1px solid rgba(80,0,255,0.22)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"
            style={{ animation: "pulseGlow 2s ease-in-out infinite" }}
          />
          <span
            className="text-purple-300 font-medium tracking-wider uppercase"
            style={{ fontSize: "clamp(9px, 1vw, 11px)" }}
          >
            Contact Us
          </span>
        </div>

        <h1
          className="hero-title font-black text-white leading-tight mb-6"
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
        >
          Let's <span className="gradient-text-purple">Create</span> Together
        </h1>

        <p
          className="hero-desc text-white/50 leading-relaxed max-w-lg mx-auto"
          style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)" }}
        >
          We turn ideas into scalable digital products designed for growth and
          long-term success. Tell us about your project.
        </p>

        {/* Quick contact badges */}
        <div className="hero-stats flex flex-wrap justify-center gap-3 mt-10">
          {[
            { icon: "✉", text: "hr.nvstudio@gmail.com" },
            { icon: "📍", text: "Baku, Azerbaijan" },
          ].map((item) => (
            <div
              key={item.text}
              className="glass-card rounded-full flex items-center gap-2"
              style={{
                padding: "8px 18px",
                fontSize: "clamp(0.75rem, 1vw, 0.85rem)",
              }}
            >
              <span>{item.icon}</span>
              <span className="text-white/60">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px section-divider pointer-events-none" />
    </section>
  );
}
