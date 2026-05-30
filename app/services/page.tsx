import HeroSection from "../../components/servicesPage/HeroSection";
import ServicesSection from "../../components/servicesPage/ServicesSection";
import ProcessSection from "../../components/servicesPage/ProcessSection";
import PricingSection from "../../components/servicesPage/PricingSection";
import ContactSection from "../../components/ContactSection";
import GallerySection from "../../components/servicesPage/GallerySection";
import PartnersSection from "../../components/PartnersSection";
import CTASection from "../../components/servicesPage/CTASection";
import PageSectionReveal from "@/components/ui/PageSectionReveal";

export default function ServicesPage() {
  return (
    <main className="bg-black text-white overflow-y-hidden min-h-screen">
      <PageSectionReveal amount={0.14}>
        <HeroSection />
      </PageSectionReveal>
      <PageSectionReveal delay={0.05} direction="left">
        <ServicesSection />
      </PageSectionReveal>
      <PageSectionReveal delay={0.08} direction="right">
        <ProcessSection />
      </PageSectionReveal>
      <PageSectionReveal delay={0.1}>
        <PricingSection />
      </PageSectionReveal>
      <PageSectionReveal delay={0.12}>
        <ContactSection />
      </PageSectionReveal>
      <PageSectionReveal delay={0.14}>
        <GallerySection />
      </PageSectionReveal>
      <PageSectionReveal delay={0.16}>
        <PartnersSection />
      </PageSectionReveal>
      <PageSectionReveal delay={0.18}>
        <CTASection />
      </PageSectionReveal>
    </main>
  );
}
