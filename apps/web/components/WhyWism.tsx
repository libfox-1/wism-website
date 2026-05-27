const reasons = [
  {
    title: "Microsoft Certified",
    description:
      "Our consultants hold active Microsoft certifications across Power Platform, Azure, and AI. We stay current so you don't have to.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "End-to-End Delivery",
    description:
      "From discovery workshop to production deployment and beyond — we own the full lifecycle so nothing falls through the cracks.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: "Proven Track Record",
    description:
      "50+ successful projects across manufacturing, finance, professional services, and the public sector. We know your industry.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Fast Time to Value",
    description:
      "Our agile delivery model means you see working software in weeks, not months. No lengthy spec documents before we start.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function WhyWism() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#204390] font-semibold text-sm uppercase tracking-widest mb-3">
              Why Wism
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              The Microsoft partner that treats your problems like our own
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We're not a large SI that rotates junior staff onto your account.
              You get an experienced, hands-on team invested in your outcomes —
              from first conversation to go-live and beyond.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-gray-50 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#204390] flex items-center justify-center mb-4">
                  {r.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
