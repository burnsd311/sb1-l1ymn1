import React from 'react';
import { TrendingUp, AlertCircle } from 'lucide-react';

interface DrawData {
  month: string;
  estimated: number;
  actual?: number;
}

interface DrawProjectionsChartProps {
  data: DrawData[];
}

export function DrawProjectionsChart({ data }: DrawProjectionsChartProps) {
  const maxAmount = Math.max(
    ...data.flatMap(d => [d.estimated, d.actual || 0])
  );

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
        {data.map((item) => (
          <div
            key={item.month}
            className="flex-1 flex flex-col items-center"
          >
            {/* Estimated Bar */}
            <div className="relative w-full group">
              <div
                className="w-full bg-blue-200 rounded-t transition-all duration-300"
                style={{
                  height: `${(item.estimated / maxAmount) * 100}%`,
                }}
              >
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  Estimated: ${item.estimated.toLocaleString()}
                  {item.actual && (
                    <>
                      <br />
                      Actual: ${item.actual.toLocaleString()}
                      <br />
                      Variance: {(((item.actual - item.estimated) / item.estimated) * 100).toFixed(1)}%
                    </>
                  )}
                </div>
              </div>

              {/* Actual Bar (if exists) */}
              {item.actual && (
                <div
                  className={`absolute bottom-0 w-full rounded-t transition-all duration-300 ${
                    item.actual > item.estimated ? 'bg-red-500' : 'bg-green-500'
                  }`}
                  style={{
                    height: `${(item.actual / maxAmount) * 100}%`,
                    opacity: 0.8,
                  }}
                />
              )}

              {/* Variance Indicator */}
              {item.actual && Math.abs(item.actual - item.estimated) / item.estimated > 0.1 && (
                <div className="absolute -top-4 right-0">
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                </div>
              )}
            </div>

            <div className="mt-2 text-xs text-gray-500">
              {item.month}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}