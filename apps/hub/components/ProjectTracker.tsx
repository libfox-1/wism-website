const projects = [
  {
    id: "WIS-001",
    client: "Contoso Ltd",
    name: "Power Automate workflow rollout",
    service: "Power Platform",
    status: "In Progress",
    statusColor: "bg-blue-100 text-blue-700",
    lead: "JR",
    leadColor: "bg-emerald-500",
    due: "13 Jun 2026",
  },
  {
    id: "WIS-002",
    client: "Fabrikam",
    name: "Azure data platform migration",
    service: "Azure",
    status: "In Review",
    statusColor: "bg-amber-100 text-amber-700",
    lead: "SK",
    leadColor: "bg-purple-500",
    due: "30 Jun 2026",
  },
  {
    id: "WIS-003",
    client: "Northwind",
    name: "Copilot Studio agent — HR FAQ",
    service: "Copilot Agents",
    status: "On Track",
    statusColor: "bg-green-100 text-green-700",
    lead: "PM",
    leadColor: "bg-amber-500",
    due: "20 Jul 2026",
  },
  {
    id: "WIS-004",
    client: "Adventure Works",
    name: "Power BI analytics suite",
    service: "Power Platform",
    status: "At Risk",
    statusColor: "bg-red-100 text-red-700",
    lead: "YO",
    leadColor: "bg-[#0078D4]",
    due: "6 Jun 2026",
  },
];

export default function ProjectTracker() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className="font-semibold text-gray-900">Active Projects</h2>
        <a href="/projects" className="text-xs text-[#0078D4] hover:underline font-medium">
          View all
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Project
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                Due
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Lead
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {projects.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900 leading-none">{p.name}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {p.client} · {p.id}
                  </p>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <span className="text-xs text-gray-500">{p.service}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${p.statusColor}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4 hidden sm:table-cell">
                  <span className="text-xs text-gray-500">{p.due}</span>
                </td>
                <td className="px-6 py-4">
                  <div
                    className={`w-7 h-7 rounded-full ${p.leadColor} flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {p.lead}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
