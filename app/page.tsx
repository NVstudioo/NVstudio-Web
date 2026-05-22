import Hero from "@/components/home/Hero";
import Partnerships from "@/components/home/Partnerships";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <main className="min-h-screen px-36 bg-black text-white">
      <Hero />
      <Partnerships />
      <Services />
      <Projects />
      <Newsletter />
    </main>
  );
}
