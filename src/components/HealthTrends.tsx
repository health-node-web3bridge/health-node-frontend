import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface HealthData {
  date: string;
  tb: string;
  db: string;
  alkphos: string;
  sgpt: string;
  sgot: string;
  tp: string;
  alb: string;
  agRatio: string;
}

const HealthTrends: React.FC = () => {
  const [healthData, setHealthData] = useState<HealthData[]>([]);

  useEffect(() => {
    const fetchHealthData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/health-history');
        const data = await response.json();
        setHealthData(data);
      } catch (error) {
        console.error('Error fetching health data:', error);
      }
    };

    fetchHealthData();
  }, []);

  const chartData = {
    labels: healthData.map(data => data.date),
    datasets: [
      {
        label: 'Total Bilirubin',
        data: healthData.map(data => parseFloat(data.tb)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      // Add more datasets for other health metrics
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Your Health Trends',
      },
    },
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-teal-800 mb-6">Your Health Trends</h2>
      <div className="mb-6">
        <Line options={options} data={chartData} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-teal-700 mb-2">Insights:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Your Total Bilirubin levels have {getTrend(healthData.map(d => parseFloat(d.tb)))} over time.</li>
          {/* Add more insights based on the data */}
        </ul>
      </div>
    </div>
  );
};

function getTrend(values: number[]): string {
  if (values.length < 2) return 'not enough data to determine a trend';
  const firstHalf = values.slice(0, Math.floor(values.length / 2));
  const secondHalf = values.slice(Math.floor(values.length / 2));
  const firstAvg = firstHalf.reduce((a, b) => a + b) / firstHalf.length;
  const secondAvg = secondHalf.reduce((a, b) => a + b) / secondHalf.length;
  if (secondAvg > firstAvg) return 'increased';
  if (secondAvg < firstAvg) return 'decreased';
  return 'remained stable';
}

export default HealthTrends;
