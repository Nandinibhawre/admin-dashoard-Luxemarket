import StatsCard from "../components/StatsCard";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <StatsCard title="Total Users" value="12,548" />
      <StatsCard title="Orders" value="16,748" />
      <StatsCard title="Revenue" value="₹45,251" />
      <StatsCard title="Delivered" value="5,124" />

      <div className="col-span-2 bg-white p-6 rounded-xl shadow">
        <h2 className="font-bold mb-4">Company Revenue</h2>
        <div className="h-40 bg-gray-200 rounded"></div>
      </div>

      <div className="col-span-2 bg-white p-6 rounded-xl shadow">
        <h2 className="font-bold mb-4">Recent Stats</h2>
        <div className="h-40 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}