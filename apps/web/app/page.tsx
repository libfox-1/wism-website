import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyWism from "@/components/WhyWism";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyWism />
      <CTA />
      <Footer />
    </main>
  );
}
