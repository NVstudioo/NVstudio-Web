const partners = ["Azerconnect", "Birbank", "Unibank"];

export default function Partnerships() {
  // Enough duplicates to always fill the scroll container
  const marqueeItems = [
    ...partners, ...partners, ...partners,
    ...partners, ...partners, ...partners,
  ];

  return (
    <section className="w-full border-t border-white/5 py-10 md:py-12 overflow-hidden">
      <p
        className="text-purple-500 font-semibold tracking-widest uppercase mb-6 px-5 md:px-8"
        style={{ fontSize: "clamp(0.7rem, 1vw, 0.8rem)" }}
      >
        Partnerships
      </p>

      {/* Marquee wrapper — overflow hidden on parent, flex on child */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex animate-marquee"
          style={{ gap: "clamp(2rem, 6vw, 5rem)", width: "max-content" }}
        >
          {marqueeItems.map((name, i) => (
            <span
              key={i}
              className="text-white font-semibold tracking-wide shrink-0"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                opacity: i % 3 === 1 ? 0.35 : 1,
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}