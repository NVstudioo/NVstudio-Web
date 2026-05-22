const PRICING_PLANS = [
  {
    name: "Starter",
    badge: null,
    price: "$1.999",
    period: "one-time",
    description: "Perfect for startups and small projects",
    features: [
      "Landing Page/Website",
      "Landing Page/Website",
      "Landing Page/Website",
      "Landing Page/Website",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
  {
    name: "Starter",
    badge: "Most Popular",
    price: "$1.999",
    period: "one-time",
    description: "Perfect for startups and small projects",
    features: [
      "Landing Page/Website",
      "Landing Page/Website",
      "Landing Page/Website",
      "Landing Page/Website",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Starter",
    badge: null,
    price: "$1.999",
    period: "one-time",
    description: "Perfect for startups and small projects",
    features: [
      "Landing Page/Website",
      "Landing Page/Website",
      "Landing Page/Website",
      "Landing Page/Website",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="px-6 md:px-16 py-20">
      <p className="section-label mb-3">Pricing Plan</p>
      <h2 className="text-responsive-h1 font-bold mb-12 text-[#EDEDED]">
        Where Products Begin
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-6 max-w-5xl">
        {PRICING_PLANS.map((plan, i) => (
          <div
            key={i}
            className={`pricing-card rounded-xl p-8 flex flex-col relative ${plan.highlighted ? "highlighted" : ""}`}
          >
            {plan.badge && (
              <span className="absolute top-4 right-4 text-[10px] bg-[#5000FF] text-white px-3 py-1 rounded-full font-semibold">
                {plan.badge}
              </span>
            )}
            <div className="font-bold text-responsive-h3 text-[#EDEDED] mb-1">
              {plan.name}
            </div>
            <div className="text-responsive-small text-[#EDEDED]/35 mb-5">
              {plan.description}
            </div>
            <div className="text-responsive-h2 font-bold text-[#EDEDED] mb-1">
              {plan.price}
            </div>
            <div className="text-responsive-small text-[#EDEDED]/25 mb-8">
              {plan.period}
            </div>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {plan.features.map((f, j) => (
                <li
                  key={j}
                  className="flex items-center gap-3 text-responsive-small text-[#EDEDED]/60 border-b border-[rgba(80,0,255,0.12)] pb-3 last:border-0"
                >
                  <span className="text-[#5000FF] font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-lg font-semibold text-responsive-small transition-all ${plan.highlighted ? "gradient-btn text-white" : "border border-[rgba(80,0,255,0.35)] text-[#EDEDED] hover:border-[#5000FF]"}`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
