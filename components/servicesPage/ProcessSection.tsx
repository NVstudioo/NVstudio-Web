import Image from "next/image";

const PROCESS_STEPS = [
  {
    title: "Discover",
    description:
      "We analyze your goals, users, and market to define the right problem before building anything.",
    img: "/painting.png",
  },
  {
    title: "Plan",
    description:
      "We define the technical architecture, roadmap, and delivery milestones for scalable execution.",
    img: "/painting.png",
  },
  {
    title: "Design",
    description:
      "We create intuitive user experiences and validated prototypes aligned with your product vision.",
    img: "/painting.png",
  },
  {
    title: "Develop",
    description:
      "We build secure, high-performance systems using modern engineering practices.",
    img: "/painting.png",
  },
  {
    title: "Launch",
    description:
      "We ship your product with optimized performance and production-ready infrastructure.",
    img: "/painting.png",
  },
  {
    title: "Support",
    description:
      "We provide ongoing maintenance, monitoring, and continuous improvements to keep your product evolving.",
    img: "/painting.png",
  },
];

export default function ProcessSection() {
  return (
    <section className="px-6 md:px-16 py-20">
      <p className="section-label mb-3">Our Process</p>
      <h2 className="text-responsive-h1 font-bold mb-16 text-[#EDEDED]">
        Where Products Begin
      </h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Center line - fixed gradient and fade effect */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#5000FF] via-[#5000FF]/40 to-transparent hidden md:block -translate-x-1/2" />

        {Array.from({ length: 3 }).map((_, row) => {
          const l = PROCESS_STEPS[row * 2];
          const r = PROCESS_STEPS[row * 2 + 1];
          return (
            <div
              key={row}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative"
            >
              {/* Dot - now perfectly centered on the line */}
              <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#5000FF] shadow-[0_0_12px_#5000FF] hidden md:block z-10" />

              <div className="md:pr-16 flex items-start gap-4">
                <div className="proces-box ">
                  <Image src={l.img} alt="" width={25} height={25} />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-[#EDEDED] mb-1">
                    {l.title}
                  </h4>
                  <p className="text-responsive-small text-[#EDEDED]/45 leading-relaxed">
                    {l.description}
                  </p>
                </div>
              </div>
              <div className="md:pl-16 flex items-start gap-4">
                <div className="proces-box">
                  <Image src={r.img} alt="" width={25} height={25} />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-[#EDEDED] mb-1">
                    {r.title}
                  </h4>
                  <p className="text-responsive-small text-[#EDEDED]/45 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
