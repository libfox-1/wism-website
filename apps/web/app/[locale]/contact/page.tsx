import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — Wism",
  description: "Get in touch with Wism. Microsoft consultancy and web studio.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
      <Footer />
    </main>
  );
}
