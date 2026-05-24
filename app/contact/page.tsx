import HeroSection from "@/components/contact/HeroSection";
import FAQSection from "@/components/contact/FAQSection";
import ContactSection from "@/components/ContactSection";
import OurLocation from "@/components/contact/OurLocation";

export default function ContactPage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden flex flex-col "
      style={{ background: "#01010B", color: "#EDEDED" }}
    >
      <HeroSection />
      <ContactSection />
      <OurLocation />
      <FAQSection />
    </main>
  );
}
