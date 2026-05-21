import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center px-8 overflow-hidden">
      {/* Left Content */}
      <div className="flex-1 max-w-xl z-10">
        <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
          We create digital
          <br />
          solutions that drive
          <br />
          <span className="text-purple-500">real impact</span>
        </h1>

        <p className="text-white/60 text-base md:text-lg mt-6 mb-10 leading-relaxed max-w-md">
          We are a digital studio focused on building modern, fast
          and scalable websites, applications and brands.
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="/projects"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 flex items-center gap-2"
          >
            Explore Our Work
            <span>→</span>
          </Link>
          <Link
            href="/services"
            className="border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
          >
            Services
          </Link>
        </div>
      </div>

      {/* Right — 3D Hero Image */}
      <div className="flex-1 flex justify-center items-center relative">
        {/* ============================================================
            🖼️  HERO 3D IMAGE  — Parlayan NV loqosu (3D render)
            Məs: <Image src="/hero-3d.png" alt="NV Studio 3D Logo"
                   fill className="object-contain" priority />
            və ya next/image ilə: width={600} height={600}
            ============================================================ */}
        <div className="w-[500px] h-[500px] flex items-center justify-center">
          {/* 🖼️ Hero 3D NV image buraya */}
          <div className="text-purple-500/20 text-[200px] font-black select-none">
            NV
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-purple-700/10 blur-3xl rounded-full pointer-events-none" />
      </div>
    </section>
  );
}