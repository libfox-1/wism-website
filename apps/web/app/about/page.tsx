import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const values = [
  {
    title: "Outcome-first",
    description:
      "We measure success by the results you see in your business — not the number of hours billed or tickets closed.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Microsoft-deep",
    description:
      "We don't dabble. Our team holds active certifications and goes deep on the Microsoft stack so you get the right solution, not the easiest one.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Honest expertise",
    description:
      "We'll tell you when something isn't the right fit. Our reputation is built on straight advice, not selling the largest engagement we can.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Partnership, not just delivery",
    description:
      "We stick around. Whether it's hypercare after go-live or a long-term managed service, we're invested in your continued success.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
      </svg>
    ),
  },
];

const team = [
  { name: "Yannick O.", role: "Managing Director", initials: "YO", color: "bg-[#204390]", bio: "Founder and MD. 10+ years delivering Microsoft solutions across enterprise and mid-market." },
  { name: "Sarah K.", role: "Azure Architect", initials: "SK", color: "bg-purple-600", bio: "Azure Solutions Architect Expert. Leads complex cloud migrations and greenfield deployments." },
  { name: "James R.", role: "Power Platform Lead", initials: "JR", color: "bg-emerald-600", bio: "Power Platform and Dataverse specialist. Passionate about putting automation in everyone's hands." },
  { name: "Priya M.", role: "Copilot & AI Engineer", initials: "PM", color: "bg-amber-500", bio: "Builds custom Copilot agents and Azure AI solutions. Azure AI Engineer Associate certified." },
  { name: "Tom H.", role: "DevOps Engineer", initials: "TH", color: "bg-rose-500", bio: "DevOps and CI/CD specialist. Keeps our clients' Azure environments running smoothly at scale." },
];

const stats = [
  { value: "2019", label: "Founded" },
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Enterprise clients" },
  { value: "5", label: "Certifications per consultant (avg)" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#204390] font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-5">
            We exist to make Microsoft<br />technology work for you
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Wism.io is a specialist Microsoft consultancy. We combine deep technical expertise with honest commercial thinking to help organisations get real value from the Microsoft platform.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#204390] font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Built by practitioners, for organisations that want results</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Wism.io was founded in 2019 with a simple belief: organisations deserve a Microsoft partner that treats them as a collaborator, not a contract. Too many consultancies deliver technically correct solutions that nobody uses. We do things differently.
                </p>
                <p>
                  We start every engagement by understanding the problem — not by reaching for the nearest Microsoft product. Our recommendations are grounded in what will actually work for your people, your processes and your budget.
                </p>
                <p>
                  From our first client to our fiftieth, we've maintained one standard: would we be proud to show this to any organisation in any sector? If the answer is yes, we ship it.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-bold text-[#204390] mb-2">{s.value}</div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#204390] font-semibold text-sm uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-3xl font-bold text-gray-900">What we stand for</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#204390] flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#204390] font-semibold text-sm uppercase tracking-widest mb-3">The Team</p>
            <h2 className="text-3xl font-bold text-gray-900">The people behind your project</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className={`w-20 h-20 rounded-2xl ${member.color} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-[#204390] text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{member.bio}</p>
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
