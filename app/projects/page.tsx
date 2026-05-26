import Stats from "@/components/about/Stats";
import OurWork from "@/components/projects/OurWork";
import StartProject from "@/components/projects/StartProject";
import Testimonials from "@/components/projects/Testimonials";

export default function Projects() {
  return (
    <div>
      <OurWork />
      <Testimonials />
      <Stats />
      <StartProject />
    </div>
  );
}
