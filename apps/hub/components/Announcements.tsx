const announcements = [
  {
    id: 1,
    title: "Q2 All-hands meeting — Thursday 5 June",
    body: "Join us for the quarterly all-hands. Teams link will be shared by Wednesday. Please come prepared with any questions.",
    author: "Management",
    date: "27 May 2026",
    tag: "Event",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Microsoft AI Cloud Partner designation achieved",
    body: "Wism has been awarded the Microsoft AI Cloud Partner designation. Huge thanks to everyone involved in the application process.",
    author: "Leadership",
    date: "26 May 2026",
    tag: "News",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    title: "Updated expense policy — effective 1 June",
    body: "Please review the updated expense reimbursement policy on SharePoint before submitting your next claim.",
    author: "HR",
    date: "24 May 2026",
    tag: "Policy",
    tagColor: "bg-amber-100 text-amber-700",
  },
];

export default function Announcements() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className="font-semibold text-gray-900">Announcements</h2>
        <span className="text-xs text-gray-400">Latest updates</span>
      </div>
      <ul className="divide-y divide-gray-100">
        {announcements.map((item) => (
          <li key={item.id} className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.tagColor}`}>
                {item.tag}
              </span>
              <span className="text-xs text-gray-400">{item.date}</span>
              <span className="text-xs text-gray-400">· {item.author}</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-xs text-gray-500 line-clamp-2">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
