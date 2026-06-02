import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Wism",
  description: "Microsoft consultancy and web studio based in the Netherlands. Senior expertise without the overhead.",
};

export default function AboutPage() {
  return (
    <>
      <main className="flex-1">
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
