import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const services = [
  {
    id: "power-platform",
    name: "Power Platform",
    tagline: "Automate, analyse, build — no code required.",
    description:
      "Microsoft Power Platform puts enterprise-grade software development in the hands of your people. We help organisations design, build and govern Power Platform solutions that deliver real productivity gains — from automating manual processes to building full internal applications.",
    capabilities: [
      { name: "Power Apps", detail: "Custom business applications built fast, without a dev team." },
      { name: "Power Automate", detail: "End-to-end workflow automation across your Microsoft stack." },
      { name: "Power BI", detail: "Dashboards and reports that surface the data your teams actually need." },
      { name: "Power Pages", detail: "Secure, branded external portals for customers and partners." },
      { name: "Dataverse", detail: "A governed, scalable data layer underpinning all your Power apps." },
    ],
    color: "bg-purple-50 text-purple-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    tagline: "Azure solutions that deliver real outcomes.",
    description:
      "We design and implement Azure solutions that solve real business problems. Whether you're moving workloads to the cloud, modernising legacy applications, or establishing DevOps practices — our Azure specialists guide you from strategy to go-live.",
    capabilities: [
      { name: "Application Modernisation", detail: "Lift, shift and re-architect legacy systems for the cloud." },
      { name: "Azure Migrations", detail: "Risk-managed migration of infrastructure, data and applications." },
      { name: "DevOps & CI/CD", detail: "Automated pipelines, Infrastructure as Code and release management." },
      { name: "Azure Security", detail: "Identity, network and compliance controls built in from day one." },
      { name: "Data Platforms", detail: "Azure SQL, Synapse, Data Factory — analytics-ready data architecture." },
    ],
    color: "bg-blue-50 text-blue-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    id: "copilot",
    name: "Copilot Agents",
    tagline: "AI that works the way you do.",
    description:
      "We design and deploy custom Microsoft Copilot agents that embed AI directly into your workflows and Microsoft 365 environment. From simple FAQ bots to complex multi-step agents, we build solutions that save time and surface the right information at the right moment.",
    capabilities: [
      { name: "Custom Copilot Agents", detail: "Purpose-built agents for HR, finance, IT, legal and more." },
      { name: "Microsoft 365 Copilot", detail: "Deployment, governance and adoption for M365 Copilot." },
      { name: "Copilot Studio", detail: "Low-code agent development on the Microsoft platform." },
      { name: "AI Automation", detail: "Power Automate + AI Builder flows for intelligent process automation." },
      { name: "RAG & Knowledge Bases", detail: "Grounding agents in your own documents, SharePoint and data sources." },
    ],
    color: "bg-emerald-50 text-emerald-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    tagline: "Intelligent solutions, built for your business.",
    description:
      "We help organisations move beyond the hype and deploy AI that delivers measurable value. Using Azure AI and OpenAI services, we build production-grade AI solutions — from intelligent document processing to custom language model deployments grounded in your business data.",
    capabilities: [
      { name: "Azure OpenAI", detail: "GPT-4 and beyond, deployed securely within your Azure tenant." },
      { name: "Azure AI Services", detail: "Vision, speech, language and decision APIs integrated into your products." },
      { name: "ML Pipelines", detail: "End-to-end machine learning workflows on Azure ML." },
      { name: "Document Intelligence", detail: "Automated extraction and processing of unstructured documents." },
      { name: "AI Strategy", detail: "Roadmap and governance to deploy AI responsibly at scale." },
    ],
    color: "bg-rose-50 text-rose-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#204390] font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-5">Our Services</h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            We cover the full Microsoft technology stack — from low-code automation to enterprise AI.
            Every engagement is tailored to your business, not a template.
          </p>
        </div>
      </section>

      {/* Service sections — 2-column grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col"
              >
                <div className={`inline-flex p-3 rounded-xl ${service.color} mb-5 self-start`}>
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{service.name}</h2>
                <p className="text-[#204390] font-semibold text-sm mb-4">{service.tagline}</p>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">{service.description}</p>

                <div className="space-y-3 mt-auto">
                  {service.capabilities.map((cap) => (
                    <div key={cap.name} className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#204390] mt-1.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{cap.name}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{cap.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
