import Hero from "@/components/home/Hero";

import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Newsletter from "@/components/home/Newsletter";
import PartnersSection from "@/components/PartnersSection";
import PageSectionReveal from "@/components/ui/PageSectionReveal";

export default function HomePage() {
  return (
    <main className="min-h-screen  bg-black text-white">
      <PageSectionReveal amount={0.12}>
        <Hero />
      </PageSectionReveal>
      <PageSectionReveal delay={0.05}>
        <PartnersSection />
      </PageSectionReveal>
      <PageSectionReveal delay={0.08}>
        <Services />
      </PageSectionReveal>
      <PageSectionReveal delay={0.1}>
        <Projects />
      </PageSectionReveal>
      <PageSectionReveal delay={0.12}>
        <Newsletter />
      </PageSectionReveal>
    </main>
  );
}
