import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Wism",
  description: "Microsoft Power Platform Solution Architect. Senior expertise without the overhead.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col flex-1">
      <div className="flex-1">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
