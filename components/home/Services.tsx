import Link from "next/link";

const services = [
  {
    title: "Web Development",
    desc: "Modern and responsive websites that represent your brand perfectly",
    href: "/services/web",
  },
  {
    title: "Mobile Development",
    desc: "iOS and Android applications built for performance and reliability.",
    href: "/services/mobile",
  },
  {
    title: "UI/UX Design",
    desc: "Intuitive interfaces and user experiences that people love.",
    href: "/services/design",
  },
  {
    title: "Branding",
    desc: "Brand identity, logo design, and visual branding solutions.",
    href: "/services/branding",
  },
];

function TagIcon() {
  return (
    <svg
      className="text-teal-400 mb-4 shrink-0"
      style={{ width: "clamp(1.25rem, 2vw, 1.75rem)", height: "clamp(1.25rem, 2vw, 1.75rem)" }}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L8.836 3.659A2.25 2.25 0 0 0 7.245 3H5.25"
      />
      <circle cx="6" cy="6" r=".75" fill="currentColor" />
    </svg>
  );
}

export default function Services() {
  return (
    <section
      className="w-full"
      style={{ padding: "clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 5vw, 2rem)" }}
    >
      <p
        className="text-purple-500 font-semibold tracking-widest uppercase mb-3"
        style={{ fontSize: "clamp(0.7rem, 1vw, 0.8rem)" }}
      >
        Services
      </p>
      <h2
        className="font-black text-white mb-8 md:mb-10"
        style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
      >
        What We Offer
      </h2>

      {/* 1 col mobile → 2 col tablet → 4 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="group border border-white/10 rounded-2xl bg-black/70 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            style={{
              padding: "clamp(1rem, 2.5vw, 1.5rem)",
              minHeight: "clamp(180px, 22vw, 220px)",
            }}
          >
            {/* Top: icon + text */}
            <div>
              <TagIcon />
              <h3
                className="text-white font-bold mb-2"
                style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)" }}
              >
                {service.title}
              </h3>
              <p
                className="text-[#FFD700] leading-relaxed"
                style={{ fontSize: "clamp(0.75rem, 1vw, 0.875rem)" }}
              >
                {service.desc}
              </p>
            </div>

            {/* Arrow — sits in normal flow, no absolute */}
            <div className="mt-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 text-lg">
              →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}