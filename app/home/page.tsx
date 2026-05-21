import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Partnerships from "@/components/home/Partnerships";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Partnerships />
      <Services />
      <Projects />
      <Newsletter />
    </main>
  );
}
