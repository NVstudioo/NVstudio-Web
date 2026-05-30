import CraftingExcellence from "@/components/about/CraftingExcellence";
import OurStory from "@/components/about/OurStory";
import OurTeam from "@/components/about/OurTeam";
import Stats from "@/components/about/Stats";
import Newsletter from "@/components/home/Newsletter";
import PartnersSection from "@/components/PartnersSection";
import PageSectionReveal from "@/components/ui/PageSectionReveal";

export default function About() {
  return (
    <main className="bg-black text-white min-h-screen">
      <PageSectionReveal amount={0.16}>
        <OurStory />
      </PageSectionReveal>
      <PageSectionReveal delay={0.06} direction="left">
        <CraftingExcellence />
      </PageSectionReveal>
      <PageSectionReveal delay={0.09}>
        <Stats />
      </PageSectionReveal>
      <PageSectionReveal delay={0.12} direction="right">
        <OurTeam />
      </PageSectionReveal>
      <PageSectionReveal delay={0.14}>
        <PartnersSection />
      </PageSectionReveal>
      <PageSectionReveal delay={0.16}>
        <Newsletter />
      </PageSectionReveal>
    </main>
  );
}
