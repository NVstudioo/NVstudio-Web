import Link from "next/link";
import type { Metadata } from "next";
import PageSectionReveal from "@/components/ui/PageSectionReveal";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Terms and Conditions | NV Studio",
  description: "Terms and Conditions for NV Studio MMC — Digital Agency Baku, Azerbaijan.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing and using the NV Studio website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "2. Services",
    body: "NV Studio MMC provides digital services including web development, mobile app development, UI/UX design, branding, SEO & marketing, and AI solutions. The scope, timeline, and deliverables for each project are defined in individual service agreements.",
  },
  {
    title: "3. Intellectual Property",
    body: "Upon full payment, the client receives full ownership of all custom deliverables created for their project. NV Studio retains the right to showcase completed work in its portfolio unless otherwise agreed in writing.",
  },
  {
    title: "4. Payment Terms",
    body: "Payment schedules are outlined in individual project agreements. Typically, a deposit of 50% is required before work begins, with the remaining balance due upon project completion. Late payments may result in project delays.",
  },
  {
    title: "5. Revisions & Changes",
    body: "The number of revision rounds is specified per pricing plan or service agreement. Requests beyond the agreed scope may be subject to additional charges at our standard hourly rate.",
  },
  {
    title: "6. Limitation of Liability",
    body: "NV Studio shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the total amount paid for the specific service in question.",
  },
  {
    title: "7. Confidentiality",
    body: "We treat all client information and project details as strictly confidential. We do not share, sell, or disclose client data to third parties without explicit written consent.",
  },
  {
    title: "8. Governing Law",
    body: "These Terms and Conditions are governed by the laws of the Republic of Azerbaijan. Any disputes shall be resolved in the courts of Baku, Azerbaijan.",
  },
  {
    title: "9. Changes to Terms",
    body: "NV Studio reserves the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms. We will notify clients of significant changes via email.",
  },
  {
    title: "10. Contact",
    body: "For questions about these Terms and Conditions, please contact us at hr.nvstudio@gmail.com.",
  },
];

export default function TermsPage() {
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
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(80,0,255,0.18) 0%, transparent 70%)" }}
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="section-label mb-3">Legal</p>
            <h1 className="font-black text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Terms and Conditions
            </h1>
            <p className="text-white/40" style={{ fontSize: "clamp(0.875rem, 1.3vw, 1rem)" }}>
              Last updated: January 2026 · NV Studio MMC, Baku, Azerbaijan
            </p>
          </div>
        </section>
      </PageSectionReveal>

      {/* Content */}
      <PageSectionReveal delay={0.08} direction="up">
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
              style={{ padding: "clamp(1.25rem, 2vw, 1.75rem)", background: "rgba(80,0,255,0.07)", border: "1px solid rgba(80,0,255,0.2)" }}
            >
              <div>
                <p className="text-white font-semibold mb-1" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1rem)" }}>
                  Questions about our terms?
                </p>
                <p className="text-white/50 mb-4" style={{ fontSize: "clamp(0.8rem, 1vw, 0.875rem)" }}>
                  We&apos;re happy to clarify anything. Reach out to us directly.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  style={{ fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)" }}
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={180}>
            <div className="flex items-center gap-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <Link href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors text-sm">
                Privacy Policy
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
