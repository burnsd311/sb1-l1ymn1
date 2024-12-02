import React from 'react';
import { DollarSign, TrendingUp, Clock } from 'lucide-react';
import { usePayApps } from '../../hooks/usePayApps';

export function InvoiceStats() {
  const { payApps } = usePayApps();

  const stats = {
    totalBilled: payApps.reduce((sum, app) => sum + app.billingAmount, 0),
    pendingAmount: payApps
      .filter(app => app.status === 'submitted')
      .reduce((sum, app) => sum + app.billingAmount, 0),
    averageProcessingDays: 5, // This would typically be calculated from actual data
  };

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div className="bg-white overflow-hidden shadow-sm rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <DollarSign className="h-6 w-6 text-gray-400" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Total Billed
                </dt>
                <dd className="text-lg font-semibold text-gray-900">
                  ${stats.totalBilled.toLocaleString()}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden shadow-sm rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <TrendingUp className="h-6 w-6 text-gray-400" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Pending Amount
                </dt>
                <dd className="text-lg font-semibold text-gray-900">
                  ${stats.pendingAmount.toLocaleString()}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden shadow-sm rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Clock className="h-6 w-6 text-gray-400" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Avg. Processing Time
                </dt>
                <dd className="text-lg font-semibold text-gray-900">
                  {stats.averageProcessingDays} days
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}