const partners = ["Azerconnect", "Birbank", "Unibank"];

export default function Partnerships() {
  // Marquee effect üçün siyahını dublikat edirik
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="w-full py-12 border-t border-white/5">
      <p className="text-purple-500 font-semibold text-sm tracking-wider uppercase px-8 mb-6">
        Partnerships
      </p>

      {/* Scrolling marquee */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-16 whitespace-nowrap">
          {marqueeItems.map((name, i) => (
            <span
              key={i}
              className="text-white text-2xl font-semibold tracking-wide shrink-0"
              style={{ opacity: i % 3 === 1 ? 0.4 : 1 }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}