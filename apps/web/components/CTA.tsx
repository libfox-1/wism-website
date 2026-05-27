import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#0A2540] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to modernise your workflows?
        </h2>
        <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
          Let's talk about your challenges. A free 30-minute discovery call is all it takes to get started.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-[#204390] hover:bg-[#106EBE] text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
          >
            Schedule a free call
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto text-white border border-white/30 hover:border-white font-semibold px-8 py-3.5 rounded-md transition-colors"
          >
            See our services
          </Link>
        </div>
      </div>
    </section>
  );
}
