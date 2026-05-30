import HeroSection from "@/components/contact/HeroSection";
import FAQSection from "@/components/contact/FAQSection";
import ContactSection from "@/components/ContactSection";
import PageSectionReveal from "@/components/ui/PageSectionReveal";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden flex flex-col bg-black text-white">
      <PageSectionReveal amount={0.14}>
        <HeroSection />
      </PageSectionReveal>
      <PageSectionReveal delay={0.08} direction="left">
        <ContactSection />
      </PageSectionReveal>
      <PageSectionReveal delay={0.12} direction="right">
        <FAQSection />
      </PageSectionReveal>
    </main>
  );
}
