import ConsultancyHero from "@/components/ConsultancyHero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Microsoft Consultancy — Wism",
  description:
    "Senior Microsoft consultants delivering Dynamics 365, Power Platform, Copilot and Azure. End-to-end, no handoffs.",
};

export default function ConsultancyPage() {
  return (
    <main>
      <ConsultancyHero />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
