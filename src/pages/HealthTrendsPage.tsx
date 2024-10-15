import HealthTrends from '../components/HealthTrends';

function HealthTrendsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-teal-800 mb-6">Your Health Trends</h2>
      <HealthTrends />
    </div>
  );
}

export default HealthTrendsPage;

