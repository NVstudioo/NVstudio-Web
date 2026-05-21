const PARTNERS = [
  "Azerconnect",
  "Birbank",
  "Unibank",
  "Azerconnect",
  "Birbank",
  "Unibank",
  "Azerconnect",
  "Birbank",
];

export default function PartnersSection() {
  return (
    <section className="py-10 overflow-hidden">
      <p className="section-label text-center mb-6">Partnerships</p>
      <div className="overflow-hidden">
        <div className="marquee-track">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <span
              key={i}
              className="text-[#EDEDED] text-2xl mx-10 whitespace-nowrap"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
