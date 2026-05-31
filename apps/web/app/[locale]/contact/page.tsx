import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — Wism",
  description: "Get in touch with Wism. Microsoft consultancy and web studio.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col flex-1">
      <div className="flex-1">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
