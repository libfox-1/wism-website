import Announcements from "@/components/Announcements";
import QuickLinks from "@/components/QuickLinks";
import TeamDirectory from "@/components/TeamDirectory";
import ProjectTracker from "@/components/ProjectTracker";

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Good morning, Yannick 👋</h1>
        <p className="text-gray-500 mt-1">Here's what's happening at Wism today.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Announcements />
          <ProjectTracker />
        </div>
        <div className="space-y-6">
          <QuickLinks />
          <TeamDirectory />
        </div>
      </div>
    </div>
  );
}
