import React from 'react';
import { Users, Briefcase, TrendingUp } from 'lucide-react';

export function ClientStats() {
  const stats = {
    totalClients: 25,
    activeProjects: 12,
    totalRevenue: 2500000,
  };

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div className="bg-white overflow-hidden shadow-sm rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Users className="h-6 w-6 text-gray-400" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Total Clients
                </dt>
                <dd className="text-lg font-semibold text-gray-900">
                  {stats.totalClients}
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
              <Briefcase className="h-6 w-6 text-gray-400" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Active Projects
                </dt>
                <dd className="text-lg font-semibold text-gray-900">
                  {stats.activeProjects}
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
                  Total Revenue
                </dt>
                <dd className="text-lg font-semibold text-gray-900">
                  ${stats.totalRevenue.toLocaleString()}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}