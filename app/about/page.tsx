import CraftingExcellence from "@/components/about/CraftingExcellence";
import OurStory from "@/components/about/OurStory";
import OurTeam from "@/components/about/OurTeam";
import Stats from "@/components/about/Stats";
import Newsletter from "@/components/home/Newsletter";
import PartnersSection from "@/components/PartnersSection";

export default function About() {
  return (
    <div>
      <OurStory />
      <CraftingExcellence />
      <Stats />
      <OurTeam />
      <PartnersSection />
      <Newsletter />
    </div>
  );
}
