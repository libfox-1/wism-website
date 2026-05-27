import Link from "next/link";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    id: "contoso-power-automate",
    client: "Contoso Ltd",
    sector: "Manufacturing",
    service: "Power Platform",
    serviceColor: "bg-purple-100 text-purple-700",
    title: "Automating purchase approvals saves 400 hours a year",
    challenge: "A manual, email-based purchase approval process was causing delays and compliance gaps across 12 sites.",
    outcome: "A Power Automate solution reduced approval time from 3 days to 4 hours, saving an estimated 400 person-hours annually.",
    metrics: ["400 hrs saved/year", "3 days → 4 hours", "12 sites covered"],
  },
  {
    id: "fabrikam-azure-migration",
    client: "Fabrikam",
    sector: "Financial Services",
    service: "Microsoft Azure",
    serviceColor: "bg-blue-100 text-blue-700",
    title: "Cloud migration cuts infrastructure costs by 35%",
    challenge: "Aging on-premise servers approaching end-of-life, with no clear cloud strategy and a hard deadline.",
    outcome: "Full Azure migration completed in 14 weeks, with a 35% reduction in infrastructure costs and zero critical downtime.",
    metrics: ["35% cost reduction", "14-week delivery", "Zero critical downtime"],
  },
  {
    id: "northwind-copilot-hr",
    client: "Northwind Traders",
    sector: "Retail",
    service: "Copilot Agents",
    serviceColor: "bg-emerald-100 text-emerald-700",
    title: "Copilot agent handles 80% of routine HR queries",
    challenge: "HR team spending 15+ hours per week answering repetitive policy and process questions from staff.",
    outcome: "A custom Copilot Studio agent, grounded in SharePoint HR documentation, now handles 80% of queries without human intervention.",
    metrics: ["80% queries automated", "15 hrs/week reclaimed", "< 2 second response"],
  },
  {
    id: "adventure-works-ai-docs",
    client: "Adventure Works",
    sector: "Professional Services",
    service: "Artificial Intelligence",
    serviceColor: "bg-rose-100 text-rose-700",
    title: "AI contract review cuts processing time by 70%",
    challenge: "Legal team manually reviewing hundreds of vendor contracts monthly, creating a bottleneck ahead of a major procurement programme.",
    outcome: "Azure Document Intelligence and Azure OpenAI extract and summarise key clauses, reducing review time by 70% and flagging risk automatically.",
    metrics: ["70% faster review", "100s of docs/month", "Risk flagging automated"],
  },
  {
    id: "litware-power-pages",
    client: "Litware Inc",
    sector: "Technology",
    service: "Power Platform",
    serviceColor: "bg-purple-100 text-purple-700",
    title: "Customer portal delivered in 6 weeks with Power Pages",
    challenge: "Customers had no self-service portal — all account queries required direct contact with the support team.",
    outcome: "A branded Power Pages portal integrated with Dataverse went live in 6 weeks, reducing inbound support volume by 45%.",
    metrics: ["6-week delivery", "45% support reduction", "Self-service 24/7"],
  },
  {
    id: "tailspin-devops",
    client: "Tailspin Toys",
    sector: "Consumer Goods",
    service: "Microsoft Azure",
    serviceColor: "bg-blue-100 text-blue-700",
    title: "DevOps transformation takes deployments from weeks to hours",
    challenge: "Manual release processes across three Azure environments were causing a 3-week deployment cycle and frequent rollback incidents.",
    outcome: "Azure DevOps pipelines with automated testing and Infrastructure as Code reduced deployment time to under 2 hours with a 90% drop in rollbacks.",
    metrics: ["Weeks → 2 hours", "90% fewer rollbacks", "3 environments unified"],
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#204390] font-semibold text-sm uppercase tracking-widest mb-3">Client Work</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-5">Case Studies</h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Real projects, real outcomes. Here's a selection of how we've helped organisations across sectors get value from the Microsoft platform.
          </p>
        </div>
      </section>

      {/* Case study grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="p-8 flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${cs.serviceColor}`}>
                      {cs.service}
                    </span>
                    <span className="text-xs text-gray-400">{cs.sector}</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{cs.client}</p>
                  <h2 className="text-lg font-bold text-gray-900 mb-4 leading-snug">{cs.title}</h2>
                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Challenge</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Outcome</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{cs.outcome}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.metrics.map((m) => (
                      <span key={m} className="text-xs font-semibold bg-[#204390]/10 text-[#204390] px-3 py-1 rounded-full">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-8 py-4 border-t border-gray-100">
                  <Link
                    href={`/case-studies/${cs.id}`}
                    className="text-sm font-semibold text-[#204390] hover:underline"
                  >
                    Read full case study →
                  </Link>
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
