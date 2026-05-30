import Stats from "@/components/about/Stats";
import OurWork from "@/components/projects/OurWork";
import StartProject from "@/components/projects/StartProject";
import Testimonials from "@/components/projects/Testimonials";
import PageSectionReveal from "@/components/ui/PageSectionReveal";

export default function Projects() {
  return (
    <div>
      {/* <OurWork />
      <Testimonials />
      <Stats />
      <StartProject /> */}
      {/* /**COming Soon Page */}
      <PageSectionReveal amount={0.12}>
        <div
          className="min-h-screen flex items-center justify-center"
          style={{ padding: "clamp(20px, 5vw, 80px) clamp(140px, 6vw, 64px)" }}
        >
          <h1 className="text-6xl font-bold text-white">Coming Soon</h1>
        </div>
      </PageSectionReveal>
    </div>
  );
}
