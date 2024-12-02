import React from 'react';
import { DollarSign, TrendingUp, Clock, AlertCircle } from 'lucide-react';

export function ReportsSummary() {
  const stats = [
    {
      name: 'Total Revenue YTD',
      value: '$2.4M',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
    },
    {
      name: 'Average Pay App Value',
      value: '$125K',
      change: '+5.2%',
      trend: 'up',
      icon: TrendingUp,
    },
    {
      name: 'Processing Time',
      value: '4.2 days',
      change: '-15.3%',
      trend: 'down',
      icon: Clock,
    },
    {
      name: 'Rejection Rate',
      value: '2.3%',
      change: '-1.1%',
      trend: 'down',
      icon: AlertCircle,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white overflow-hidden shadow-sm rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.name}
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-lg font-semibold text-gray-900">
                      {stat.value}
                    </div>
                    <div className={`ml-2 flex items-baseline text-sm font-semibold
                      ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}