import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-0 py-14 md:py-0 md:min-h-[88vh]">
        {/* Left — full width mobile, half desktop */}
        <div className="w-full md:flex-1 md:max-w-xl z-10">
          <h1 className="font-black text-white leading-[1.1] mb-4 text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
            We create digital solutions that drive{" "}
            <span className="text-[#5000FF]">real impact</span>
          </h1>

          <p className="text-white/60 text-sm sm:text-base md:text-base lg:text-lg mt-5 mb-8 leading-relaxed max-w-md">
            We are a digital studio focused on building modern, fast and
            scalable websites, applications and brands.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="bg-[#5000FF] hover:bg-purple-700 text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-3 rounded-full transition-colors duration-200 flex items-center gap-2"
            >
              Explore Our Work <span>→</span>
            </Link>
            <Link
              href="/services"
              className="border-2 bg-[#EDEDED] border-white/80  text-[#5000FF] text-sm sm:text-base font-semibold px-5 sm:px-6 py-3 rounded-full hover:bg-white hover:text-[#5000FF] transition-all duration-200"
            >
              Services
            </Link>
          </div>
        </div>

        {/* Right — hidden on mobile, shows md+ */}
        <div className="hidden md:flex flex-1 justify-center items-center relative">
          {/* ============================================================
              🖼️  HERO 3D IMAGE  — Parlayan NV loqosu (3D render)
              <Image src="/hero-3d.png" alt="NV Studio 3D Logo"
                     width={500} height={500} className="object-contain" priority />
              ============================================================ */}
          <div className="w-[clamp(260px,38vw,500px)] h-[clamp(260px,38vw,500px)] flex items-center justify-center">
            <Image
              src="/hero-3d.png"
              alt="NV Studio 3D Logo"
              width={500}
              height={500}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-purple-700/10 blur-3xl rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
