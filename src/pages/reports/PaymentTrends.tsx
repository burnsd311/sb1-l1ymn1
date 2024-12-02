import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { PaymentTrendsChart } from '../../components/charts/PaymentTrendsChart';

export function PaymentTrends() {
  const historicalData = [
    { month: 'Jan', amount: 180000 },
    { month: 'Feb', amount: 220000 },
    { month: 'Mar', amount: 280000 },
    { month: 'Apr', amount: 250000 },
    { month: 'May', amount: 310000 },
    { month: 'Jun', amount: 290000 },
  ];

  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Payment Trends</h2>
          <p className="text-sm text-gray-500">Monthly payment volume with 3-month projection</p>
        </div>
        <button className="flex items-center text-sm text-blue-600 hover:text-blue-500">
          View Details
          <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>

      <PaymentTrendsChart data={historicalData} projectionMonths={3} />

      <div className="mt-6 flex items-center justify-between text-sm">
        <div className="flex items-center text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          Last 6 months + 3 month projection
        </div>
        <div className="font-medium text-gray-900">
          Historical Total: ${historicalData.reduce((sum, d) => sum + d.amount, 0).toLocaleString()}
        </div>
      </div>
    </div>
  );
}