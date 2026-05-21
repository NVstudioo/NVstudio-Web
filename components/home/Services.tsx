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
      className="w-7 h-7 text-teal-400 mb-4"
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
    <section className="w-full px-8 py-16">
      <p className="text-purple-500 font-semibold text-sm tracking-wider uppercase mb-3">
        Services
      </p>
      <h2 className="text-4xl md:text-5xl font-black text-white mb-10">
        What We Offer
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="group relative border border-white/10 rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <TagIcon />
              <h3 className="text-white font-bold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-purple-300/80 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
            <div className="mt-6 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
              →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}