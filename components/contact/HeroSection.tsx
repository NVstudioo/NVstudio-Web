import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[440px]  bg-[url('/contactHero.png')] bg-black h-screen bg-cover bg-center flex flex-col max-[640px]:bg-[center_top] items-center justify-center text-center   overflow-hidden"
      style={{
        minHeight: 420,
        padding: "clamp(24px, 5vw, 48px)",
      }}
    >
      {/* Pill label */}
      <div
        className="relative z-10 inline-flex items-center gap-2 rounded-full border border-purple-500/40 px-4 py-1.5"
        style={{
          marginBottom: "clamp(12px, 3vw, 24px)",
          animation: "fadeDown 0.7s ease both",
        }}
      >
        <span className="w-2 h-2 rounded-full bg-[#5000FF] shadow-[0_0_6px_#5000FF]" />
        <span
          style={{
            fontSize: "clamp(9px, 1vw, 12px)",
            fontWeight: 600,
            letterSpacing: "0.15em",
            color: "#d8b4ff",
            textTransform: "uppercase",
          }}
        >
          Contact Us
        </span>
      </div>

      <h1
        className="relative z-10 font-bold text-white mb-5 leading-tight"
        style={{
          fontSize: "clamp(28px, 7vw, 56px)",
          animation: "fadeDown 0.9s ease both",
        }}
      >
        Let's Create Together
      </h1>

      <p
        className="relative z-10 text-[#a0a0b8] max-w-lg leading-tight"
        style={{
          fontSize: "clamp(14px, 1.5vw, 18px)",
          animation: "fadeDown 1.1s ease both",
        }}
      >
        We turn ideas into scalable digital products designed for growth and
        long-term success.
      </p>
    </section>
  );
}
