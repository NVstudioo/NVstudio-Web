import Image from "next/image";

const SERVICES_DATA = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Interface that feel inevitable-researched,refined, obsessively crafted.",
    tags: ["Figma", "Figma", "Figma"],
  },
  {
    number: "02",
    title: "UX/UI Design",
    description:
      "Interface that feel inevitable-researched,refined, obsessively crafted.",
    tags: ["Figma", "Figma", "Figma"],
  },
  {
    number: "03",
    title: "Mobil Development",
    description:
      "Interface that feel inevitable-researched,refined, obsessively crafted.",
    tags: ["Figma", "Figma", "Figma"],
  },
  {
    number: "04",
    title: "Branding",
    description:
      "Interface that feel inevitable-researched,refined, obsessively crafted.",
    tags: ["Figma", "Figma", "Figma"],
  },
  {
    number: "05",
    title: "SEO & Marketing",
    description:
      "Interface that feel inevitable-researched,refined, obsessively crafted.",
    tags: ["Figma", "Figma", "Figma"],
  },
  {
    number: "06",
    title: "Ai Solutions",
    description:
      "Interface that feel inevitable-researched,refined, obsessively crafted.",
    tags: ["Figma", "Figma", "Figma"],
  },
];

export default function ServicesSection() {
  return (
    <section className="px-6 md:px-16 py-20">
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
              <div className="icon-box">
                <Image
                  src={`/service-icon-${i + 1}.png`}
                  alt=""
                  width={18}
                  height={18}
                />
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
    </section>
  );
}
