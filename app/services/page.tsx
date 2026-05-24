import HeroSection from "../../components/servicesPage/HeroSection";
import ServicesSection from "../../components/servicesPage/ServicesSection";
import ProcessSection from "../../components/servicesPage/ProcessSection";
import PricingSection from "../../components/servicesPage/PricingSection";
import ContactSection from "../../components/ContactSection";
import GallerySection from "../../components/servicesPage/GallerySection";
import PartnersSection from "../../components/PartnersSection";
import CTASection from "../../components/servicesPage/CTASection";

export default function ServicesPage() {
  return (
    <div className="bg-[#01010B] text-[#EDEDED] overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <ContactSection />
      <GallerySection />
      <PartnersSection />
      <CTASection />
    </div>
  );
}
