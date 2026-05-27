import Link from "next/link";

const links = [
  { name: "SharePoint", href: "#", desc: "Documents & files", icon: "📁" },
  { name: "Teams", href: "#", desc: "Chat & meetings", icon: "💬" },
  { name: "Power BI", href: "#", desc: "Dashboards", icon: "📊" },
  { name: "Azure Portal", href: "#", desc: "Cloud resources", icon: "☁️" },
  { name: "HR Portal", href: "#", desc: "Leave & benefits", icon: "🙋" },
  { name: "IT Support", href: "#", desc: "Raise a ticket", icon: "🛠️" },
];

export default function QuickLinks() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-900">Quick Links</h2>
      </div>
      <div className="p-4 grid grid-cols-2 gap-2">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-100 transition-colors"
          >
            <span className="text-lg leading-none">{link.icon}</span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-900 leading-none">{link.name}</p>
              <p className="text-xs text-gray-400 mt-0.5 truncate">{link.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
