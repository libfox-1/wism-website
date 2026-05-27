import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";

const contactDetails = [
  {
    label: "Email",
    value: "hello@wism.io",
    href: "mailto:hello@wism.io",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Response time",
    value: "Within one business day",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Based in",
    value: "The Netherlands · Remote across Europe",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

const steps = [
  { step: "01", title: "Discovery call", detail: "30 minutes to understand your challenge, goals and timeline." },
  { step: "02", title: "Proposal", detail: "A clear, fixed-scope proposal — no ambiguous day-rate estimates." },
  { step: "03", title: "Kick-off", detail: "Meet the team, align on delivery approach, and get started." },
];

export default function ContactPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#204390] font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-5">Let's talk</h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Tell us about your project and we'll come back to you within one business day with honest advice on how we can help.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left: details + what to expect */}
            <div className="lg:col-span-2 space-y-10">
              {/* Contact details */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-5">Get in touch</h2>
                <ul className="space-y-4">
                  {contactDetails.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#204390] shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-gray-900 hover:text-[#204390] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-gray-900">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to expect */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-5">What happens next</h2>
                <div className="space-y-5">
                  {steps.map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#204390] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {s.step}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{s.title}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
