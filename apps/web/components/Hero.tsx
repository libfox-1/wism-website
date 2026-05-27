import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Enterprise clients" },
  { value: "98%", label: "Client satisfaction" },
  { value: "5+", label: "Years of expertise" },
];

export default function Hero() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-5 bg-blue-50 text-[#204390] font-bold px-8 py-5 rounded-2xl mb-8">
            <Image src="/logo-blue.svg" alt="Wism" width={72} height={72} />
            <span className="text-5xl text-gray-900">Wism<span className="text-[#204390]">.io</span></span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Power Platform.{" "}
            <span className="text-[#204390]">Azure.</span>
            <br />
            Copilot Agents.
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            End-to-end Microsoft consultancy that turns complex technology into
            real business outcomes. We design, build and run solutions that scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="w-full sm:w-auto bg-[#204390] hover:bg-[#106EBE] text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-base"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto text-gray-700 hover:text-[#204390] font-semibold px-8 py-3.5 rounded-md border border-gray-200 hover:border-[#204390] transition-colors text-base"
            >
              Talk to an expert →
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center border-t border-gray-100 pt-16">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold text-[#204390]">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
