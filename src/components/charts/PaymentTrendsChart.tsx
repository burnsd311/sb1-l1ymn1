import React from 'react';
import { Calendar, TrendingUp } from 'lucide-react';

interface PaymentData {
  month: string;
  amount: number;
  isProjection?: boolean;
}

interface PaymentTrendsChartProps {
  data: PaymentData[];
  projectionMonths?: number;
}

export function PaymentTrendsChart({ data, projectionMonths = 3 }: PaymentTrendsChartProps) {
  // Calculate trend line for projections
  const calculateProjections = (historicalData: PaymentData[]): PaymentData[] => {
    const trend = historicalData.reduce((acc, curr, idx, arr) => {
      if (idx === 0) return acc;
      return acc + (curr.amount - arr[idx - 1].amount);
    }, 0) / (historicalData.length - 1);

    const lastAmount = historicalData[historicalData.length - 1].amount;
    const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return Array.from({ length: projectionMonths }, (_, i) => ({
      month: months[i],
      amount: Math.max(0, lastAmount + (trend * (i + 1))),
      isProjection: true
    }));
  };

  const projections = calculateProjections(data);
  const allData = [...data, ...projections];
  const maxAmount = Math.max(...allData.map(d => d.amount));

  return (
    <div className="relative h-64">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 w-16 flex flex-col justify-between text-xs text-gray-500 py-2">
        {[100, 75, 50, 25, 0].map((percent) => (
          <div key={percent} className="flex items-center justify-end pr-2">
            ${((maxAmount * percent) / 100).toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </div>
        ))}
      </div>

      {/* Grid lines */}
      <div className="absolute left-16 right-0 top-0 bottom-0">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute left-0 right-0 border-t border-gray-100"
            style={{ top: `${(i * 25)}%` }}
          />
        ))}
      </div>

      {/* Bars */}
      <div className="absolute left-16 right-0 bottom-0 flex items-end space-x-2 pb-6">
        {allData.map((item, index) => (
          <div
            key={item.month}
            className="flex-1 flex flex-col items-center"
          >
            <div
              className={`w-full rounded-t transition-all duration-300 relative group
                ${item.isProjection ? 'bg-blue-200' : 'bg-blue-500 hover:bg-blue-600'}`}
              style={{
                height: `${(item.amount / maxAmount) * 100}%`,
              }}
            >
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                ${item.amount.toLocaleString()}
              </div>
              
              {/* Projection indicator */}
              {item.isProjection && (
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-blue-200/50" />
              )}
            </div>
            <div className="mt-2 text-xs text-gray-500 flex items-center">
              {item.month}
              {item.isProjection && (
                <TrendingUp className="h-3 w-3 ml-1 text-blue-500" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}