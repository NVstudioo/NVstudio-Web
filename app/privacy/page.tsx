import Link from "next/link";
import type { Metadata } from "next";
import PageSectionReveal from "@/components/ui/PageSectionReveal";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Privacy Policy | NV Studio",
  description: "Privacy Policy for NV Studio MMC — Digital Agency Baku, Azerbaijan.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly to us, such as your name, email address, phone number, and project details when you fill out our contact form or engage our services. We may also collect usage data when you visit our website.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information we collect to respond to your inquiries, deliver and improve our services, send project-related communications, and occasionally share updates about NV Studio. We will never sell your data to third parties.",
  },
  {
    title: "3. Data Storage & Security",
    body: "Your data is stored securely and protected against unauthorized access. We use industry-standard security measures including encryption and secure servers. We retain your data only as long as necessary to fulfill the purposes outlined in this policy.",
  },
  {
    title: "4. Cookies",
    body: "Our website uses cookies to improve your browsing experience and analyze site traffic. You can disable cookies in your browser settings at any time. Disabling cookies may affect some features of our website.",
  },
  {
    title: "5. Third-Party Services",
    body: "We may use third-party tools such as analytics platforms to understand how visitors use our site. These tools may collect anonymized data subject to their own privacy policies. We do not share personally identifiable information with these services.",
  },
  {
    title: "6. Your Rights",
    body: "You have the right to access, correct, or delete the personal data we hold about you. You may also request that we stop using your data for marketing purposes. To exercise these rights, contact us at hr.nvstudio@gmail.com.",
  },
  {
    title: "7. Children's Privacy",
    body: "Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us immediately.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on our website with an updated date. Your continued use of our services constitutes acceptance of the updated policy.",
  },
  {
    title: "9. Contact Us",
    body: "If you have questions or concerns about this Privacy Policy or how we handle your data, please contact us at hr.nvstudio@gmail.com.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <PageSectionReveal amount={0.15}>
        <section
          className="relative w-full overflow-hidden"
          style={{ padding: "clamp(5rem, 10vw, 8rem) clamp(1.25rem, 5vw, 2rem) clamp(3rem, 6vw, 4rem)" }}
        >
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(234,0,255,0.15) 0%, transparent 70%)" }}
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="section-label mb-3">Legal</p>
            <h1 className="font-black text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Privacy Policy
            </h1>
            <p className="text-white/40" style={{ fontSize: "clamp(0.875rem, 1.3vw, 1rem)" }}>
              Last updated: January 2026 · NV Studio MMC, Baku, Azerbaijan
            </p>
          </div>
        </section>
      </PageSectionReveal>

      {/* Content */}
      <PageSectionReveal delay={0.08}>
      <section style={{ padding: "0 clamp(1.25rem, 5vw, 2rem) clamp(4rem, 8vw, 6rem)" }}>
        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map((s, index) => (
            <AnimateOnScroll key={s.title} delay={index * 60}>
              <h2
                className="font-bold text-white mb-3"
                style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)" }}
              >
                {s.title}
              </h2>
              <p
                className="text-white/55 leading-relaxed"
                style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)" }}
              >
                {s.body}
              </p>
            </AnimateOnScroll>
          ))}

          <AnimateOnScroll delay={120}>
            <div
              className="rounded-2xl flex items-start gap-4 mt-12"
              style={{ padding: "clamp(1.25rem, 2vw, 1.75rem)", background: "rgba(234,0,255,0.05)", border: "1px solid rgba(234,0,255,0.15)" }}
            >
              <div>
                <p className="text-white font-semibold mb-1" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1rem)" }}>
                  Questions about your data?
                </p>
                <p className="text-white/50 mb-4" style={{ fontSize: "clamp(0.8rem, 1vw, 0.875rem)" }}>
                  We take data privacy seriously. Contact us and we&apos;ll respond within 48 hours.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 font-medium transition-colors"
                  style={{ fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)" }}
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={180}>
            <div className="flex items-center gap-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <Link href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors text-sm">
                Terms and Conditions
              </Link>
              <span className="text-white/20 text-sm">·</span>
              <Link href="/" className="text-white/40 hover:text-white/70 transition-colors text-sm">
                Back to Home
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      </PageSectionReveal>
    </main>
  );
}
