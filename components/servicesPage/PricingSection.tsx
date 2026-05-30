"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SlideWrapper from "../wrappers/SlideWrapper";

const PRICING_PLANS = [
  {
    key: "starter",
    title: "Başlanğıc",
    priceValue: "799",
    priceLabel: "birdəfəlik ödəniş",
    subtitle: "Kiçik bizneslər və landing page-lər üçün ideal",
    badge: null,
    features: [
      { text: "Landing page — 3 səhifəyə qədər", ok: true },
      { text: "Mobil uyğun (responsive) dizayn", ok: true },
      { text: "Əsas SEO qurğusu", ok: true },
      { text: "2 dəfə düzəliş imkanı", ok: true },
      { text: "10 iş günü ərzində təslim", ok: true },
      { text: "1 ay texniki dəstək", ok: true },
      { text: "CMS inteqrasiyası yoxdur", ok: false },
      { text: "Xüsusi animasiyalar yoxdur", ok: false },
    ],
    cta: "Əlaqə Saxla",
    href: "/contact",
    highlighted: false,
  },
  {
    key: "professional",
    title: "Peşəkar",
    priceValue: "1,599",
    priceLabel: "birdəfəlik ödəniş",
    subtitle: "Tam veb mövcudluğa ehtiyac duyan bizneslər üçün",
    badge: "Ən Populyar",
    features: [
      { text: "8 səhifəyə qədər xüsusi dizayn", ok: true },
      { text: "Framer Motion animasiyaları", ok: true },
      { text: "CMS inteqrasiyası (Sanity / Contentful)", ok: true },
      { text: "Qabaqcıl SEO qurğusu", ok: true },
      { text: "5 dəfə düzəliş imkanı", ok: true },
      { text: "15 iş günü ərzində təslim", ok: true },
      { text: "2 ay texniki dəstək", ok: true },
      { text: "Sürət optimizasiyası (Lighthouse 90+)", ok: true },
      { text: "Google Analytics qurğusu", ok: true },
    ],
    cta: "İndi Başla",
    href: "/contact",
    highlighted: true,
  },
  {
    key: "enterprise",
    title: "Korporativ",
    priceValue: "2,999+",
    priceLabel: "fərdi qiymət",
    subtitle: "Maksimum təsir üçün tam miqyaslı rəqəmsal məhsullar",
    badge: null,
    features: [
      { text: "Tam veb tətbiq (web application)", ok: true },
      { text: "Xüsusi funksiya inkişafı", ok: true },
      { text: "API və üçüncü tərəf inteqrasiyaları", ok: true },
      { text: "Məhdudiyyətsiz düzəliş imkanı", ok: true },
      { text: "Ayrılmış layihə meneceri", ok: true },
      { text: "Prioritet dəstək və SLA", ok: true },
      { text: "Davamlı texniki xidmət planı", ok: true },
      { text: "Komanda üçün təlim sessiyası", ok: true },
      { text: "3 ay premium dəstək", ok: true },
    ],
    cta: "Təklif Al",
    href: "/contact",
    highlighted: false,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any },
  },
};

export default function PricingSection() {
  return (
    <section
      className="w-full bg-black"
      style={{ padding: "clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 2rem)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any }}
        >
          <p className="section-label mb-3">QİYMƏT PLANLARIMIZ</p>
          <h2
            className="font-black text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Şəffaf Qiymətlər
          </h2>
          <p
            className="text-white/40 mb-12"
            style={{ fontSize: "clamp(0.95rem, 1.2vw, 1rem)", maxWidth: 720 }}
          >
            Gizli haqq yoxdur. Birdəfəlik ödəniş. Vaxtında təslim — ya da düzgün
            olana qədər işləyirik.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.key}
              variants={item}
              whileHover={{
                y: -8,
                boxShadow: plan.highlighted
                  ? "0 20px 40px rgba(80,0,255,0.18)"
                  : "0 14px 30px rgba(0,0,0,0.45)",
                scale: plan.highlighted ? 1.03 : 1,
              }}
              className="relative rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                padding: "clamp(1.5rem, 2.5vw, 2rem)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                borderRadius: 16,
                border: plan.highlighted
                  ? "2px solid"
                  : "1px solid rgba(255,255,255,0.04)",
                borderImage: plan.highlighted
                  ? "linear-gradient(90deg,#5000FF,#EA00FF) 1"
                  : undefined,
                boxShadow: plan.highlighted
                  ? "0 10px 30px rgba(80,0,255,0.12)"
                  : "0 6px 18px rgba(0,0,0,0.4)",
                transformOrigin: "center top",
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: -12,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      padding: "6px 12px",
                      borderRadius: 999,
                      background: "linear-gradient(90deg,#7c3aed,#5000FF)",
                      color: "white",
                      fontWeight: 700,
                      fontSize: 12,
                      boxShadow: "0 6px 18px rgba(124,58,237,0.18)",
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div style={{ paddingTop: plan.badge ? 16 : 0 }}>
                <div
                  className="text-white font-bold"
                  style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)" }}
                >
                  {plan.title}
                </div>
                <div
                  className="text-white/40 mb-4"
                  style={{ fontSize: "clamp(0.78rem, 1vw, 0.9rem)" }}
                >
                  {plan.subtitle}
                </div>

                <div className="mb-2 flex items-end gap-3">
                  <span
                    style={{
                      color: "#5000FF",
                      fontWeight: 800,
                      fontSize: "clamp(1.15rem, 1.6vw, 1.3rem)",
                    }}
                  >
                    ₼
                  </span>
                  <span
                    className="font-black text-white"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
                  >
                    {plan.priceValue}
                  </span>
                </div>
                <div
                  className="text-white/30 mb-6"
                  style={{ fontSize: "0.85rem" }}
                >
                  {plan.priceLabel}
                </div>

                <div
                  style={{
                    height: 1,
                    background: "rgba(255,255,255,0.03)",
                    marginBottom: 16,
                  }}
                />

                <ul className="flex flex-col gap-3 mb-6">
                  {plan.features.map((f) => (
                    <li
                      key={f.text}
                      className="flex items-start gap-3 text-white/70"
                      style={{ fontSize: "0.95rem" }}
                    >
                      <span
                        style={{
                          width: 20,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 2,
                        }}
                      >
                        {f.ok ? (
                          <span style={{ color: "#34d399", fontWeight: 700 }}>
                            ✓
                          </span>
                        ) : (
                          <span style={{ color: "#ef4444", fontWeight: 700 }}>
                            ✗
                          </span>
                        )}
                      </span>
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className="block text-center rounded-xl font-semibold py-3"
                  style={{
                    background: plan.highlighted
                      ? "linear-gradient(90deg,#7c3aed,#5000FF)"
                      : "transparent",
                    color: plan.highlighted ? "#fff" : "#EDEDED",
                    border: plan.highlighted
                      ? "none"
                      : "1px solid rgba(255,255,255,0.06)",
                    boxShadow: plan.highlighted
                      ? "0 8px 30px rgba(124,58,237,0.16)"
                      : undefined,
                    textDecoration: "none",
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust strip */}
      </div>
    </section>
  );
}
