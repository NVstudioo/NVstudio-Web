import Image from "next/image";

export default function CraftingExcellence() {
  const values = [
    {
      title: "Innovation",
      desc: "We challenge the status quo and build for the future.",
    },
    {
      title: "Collaboration",
      desc: "Our multi-team, multi-project structure drives shared success.",
    },
    {
      title: "Impact",
      desc: "We build real products that solve real problems for real users.",
    },
  ];
  return (
    <section
      className="w-full"
      style={{ padding: "clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 5vw, 2rem)" }}
    >
      <p
        style={{
          fontSize: "clamp(10px, 1vw, 14px)",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#EA00FF",
          marginBottom: "clamp(8px, 1vw, 16px)",
        }}
      >
        Crafting Excellence Together
      </p>

      <h2
        style={{
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: "bold",
          marginBottom: "clamp(24px, 5vw, 48px)",
          color: "#EDEDED",
        }}
      >
        Mission and Values
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {values.map((value) => (
          <div key={value.title} className="p-3 border border-white/10 rounded-2xl bg-black/70 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
            <Image
              src={"/price-tag.svg"}
              width={50}
              height={50}
              alt="Price tag"
            />
            <h3
              className="text-white font-bold mb-2 mt-2"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)" }}
            >
              {value.title}
            </h3>
            <p
              className="text-[#EDEDED] leading-relaxed"
              style={{ fontSize: "clamp(0.75rem, 1vw, 0.875rem)" }}
            >
              {value.desc}
            </p>
            {/* Arrow — sits in normal flow, no absolute */}
            <div className="flex justify-end m-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 text-lg">
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
