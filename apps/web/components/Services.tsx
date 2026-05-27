const services = [
  {
    name: "Power Platform",
    tagline: "Automate, analyse, build — no code required.",
    description:
      "We help organisations harness the full Microsoft Power Platform to build apps, automate workflows and surface insights without the overhead of traditional development.",
    features: ["Power Apps", "Power Automate", "Power BI", "Power Pages", "Dataverse"],
    iconColor: "bg-purple-50 text-purple-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    name: "Microsoft Azure",
    tagline: "Azure solutions that deliver real outcomes.",
    description:
      "We design and implement Azure solutions that solve real business problems — from application modernisation and data platforms to DevOps, security and cost governance.",
    features: ["Application Modernisation", "Azure Migrations", "DevOps & CI/CD", "Azure Security", "Data Platforms"],
    iconColor: "bg-blue-50 text-blue-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    name: "Copilot Agents",
    tagline: "AI that works the way you do.",
    description:
      "We design and deploy custom Microsoft Copilot agents and AI-powered workflows that integrate seamlessly with your Microsoft 365 environment and business processes.",
    features: ["Custom Copilot Agents", "M365 Copilot", "Copilot Studio", "AI Automation", "RAG & Knowledge Bases"],
    iconColor: "bg-emerald-50 text-emerald-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    name: "Artificial Intelligence",
    tagline: "Intelligent solutions, built for your business.",
    description:
      "We help organisations move beyond the hype and deploy AI that delivers measurable value — from Azure OpenAI and machine learning pipelines to intelligent document processing.",
    features: ["Azure OpenAI", "Azure AI Services", "ML Pipelines", "Document Intelligence", "AI Strategy"],
    iconColor: "bg-rose-50 text-rose-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#204390] font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Full-stack Microsoft expertise
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From low-code apps to enterprise cloud architecture — we cover the entire Microsoft ecosystem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-xl ${s.iconColor} mb-6`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{s.name}</h3>
              <p className="text-[#204390] font-medium text-sm mb-4">{s.tagline}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.description}</p>
              <ul className="flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
