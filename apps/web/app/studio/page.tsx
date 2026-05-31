import StudioHero from "@/components/studio/StudioHero";
import Pricing from "@/components/studio/Pricing";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Wism Web Studio — Modern websites for your business",
  description: "Professional websites built fast. One pager, five pages, or fully custom. Pick a package and we handle the rest.",
};

export default function StudioPage() {
  return (
    <main>
      <StudioHero />
      <Pricing />
      <Footer />
    </main>
  );
}
