const team = [
  { name: "Yannick O.", role: "Managing Director", initials: "YO", color: "bg-[#0078D4]" },
  { name: "Sarah K.", role: "Azure Architect", initials: "SK", color: "bg-purple-500" },
  { name: "James R.", role: "Power Platform Lead", initials: "JR", color: "bg-emerald-500" },
  { name: "Priya M.", role: "Copilot Engineer", initials: "PM", color: "bg-amber-500" },
  { name: "Tom H.", role: "DevOps Engineer", initials: "TH", color: "bg-rose-500" },
];

export default function TeamDirectory() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className="font-semibold text-gray-900">Team</h2>
        <a href="/team" className="text-xs text-[#0078D4] hover:underline font-medium">
          View all
        </a>
      </div>
      <ul className="divide-y divide-gray-100">
        {team.map((member) => (
          <li
            key={member.name}
            className="px-6 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
          >
            <div
              className={`w-8 h-8 rounded-full ${member.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}
            >
              {member.initials}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 leading-none">{member.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{member.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
