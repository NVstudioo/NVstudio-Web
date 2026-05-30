import SlideWrapper from "../wrappers/SlideWrapper";

const SERVICES_DATA = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, fast and scalable web applications built with the latest technologies — from landing pages to complex SaaS platforms.",
    tags: ["Next.js", "React", "Node.js"],
    accent: "#22d3ee",
    iconPath:
      "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Interfaces that feel inevitable — researched, refined and obsessively crafted for the users who matter most.",
    tags: ["Figma", "Prototyping", "Research"],
    accent: "#f472b6",
    iconPath:
      "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    number: "03",
    title: "Mobile Development",
    description:
      "iOS and Android apps built for performance, reliability and exceptional user experience across all devices.",
    tags: ["React Native", "Flutter", "Swift"],
    accent: "#a78bfa",
    iconPath:
      "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    number: "04",
    title: "Branding",
    description:
      "Brand identity, logo design and comprehensive visual systems that make your business truly unforgettable.",
    tags: ["Identity", "Logo", "Guidelines"],
    accent: "#fbbf24",
    iconPath:
      "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  },
  {
    number: "05",
    title: "SEO & Marketing",
    description:
      "Data-driven strategies that grow your organic visibility, drive qualified traffic and convert visitors into customers.",
    tags: ["SEO", "Analytics", "Content"],
    accent: "#34d399",
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    number: "06",
    title: "AI Solutions",
    description:
      "Custom AI integrations, chatbots and intelligent automation tools that give your business a competitive edge.",
    tags: ["OpenAI", "ML", "Automation"],
    accent: "#60a5fa",
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
];

export default function ServicesSection() {
  return (
    <SlideWrapper className="px-6 md:px-16 py-20">
      <p className="section-label mb-3">Services</p>
      <h2 className="text-responsive-h1 font-bold mb-12 text-[#EDEDED]">
        Solutions designed to scale
      </h2>
      <div className="grid grid-cols-1 items-center justify-center mx-auto gap-5 md:grid-cols-3 border border-[rgba(80,0,255,0.15)] rounded-xl overflow-hidden max-w-6xl">
        {SERVICES_DATA.map((s, i) => (
          <div
            key={i}
            className={`service-card p-7 flex flex-col gap-3 mt-3 bg-[#2C1169] rounded-3xl ${i < 3 ? "border-b border-[rgba(80,0,255,0.12)]" : ""} ${i % 3 !== 2 ? "md:border-r border-[rgba(80,0,255,0.12)]" : ""}`}
          >
            <div className="flex items-start justify-between">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${s.accent}18` }}
              >
                <svg
                  width={22}
                  height={22}
                  fill="none"
                  stroke={s.accent}
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d={s.iconPath} />
                </svg>
              </div>
              <span className="text-[#EDEDED]/10 font-bold text-3xl">
                {s.number}
              </span>
            </div>
            <h3 className="font-semibold text-responsive-h3 text-[#EDEDED] mt-1">
              {s.title}
            </h3>
            <p className="text-responsive-small text-[#EDEDED]/45 leading-relaxed">
              {s.description}
            </p>
            <div className="flex gap-2 flex-wrap mt-auto pt-2">
              {s.tags.map((t, j) => (
                <span key={j} className="tag-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SlideWrapper>
  );
}
