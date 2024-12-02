import React from 'react';
import { FileText, CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';

const activities = [
  {
    id: 1,
    project: 'Office Tower Phase 2',
    type: 'approved',
    amount: 125000,
    date: '2h ago',
    icon: CheckCircle,
    iconColor: 'text-green-500',
  },
  {
    id: 2,
    project: 'Retail Complex',
    type: 'rejected',
    amount: 85000,
    date: '4h ago',
    icon: XCircle,
    iconColor: 'text-red-500',
  },
  {
    id: 3,
    project: 'Hospital Wing',
    type: 'pending',
    amount: 250000,
    date: '6h ago',
    icon: Clock,
    iconColor: 'text-yellow-500',
  },
  {
    id: 4,
    project: 'School Renovation',
    type: 'flagged',
    amount: 75000,
    date: '8h ago',
    icon: AlertTriangle,
    iconColor: 'text-orange-500',
  },
];

export function RecentActivity() {
  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        <div className="mt-6 flow-root">
          <ul role="list" className="-mb-8">
            {activities.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== activities.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${activity.iconColor}`}>
                        <activity.icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium text-gray-900">
                            {activity.project}
                          </span>
                          {' - '}
                          <span className="font-medium text-gray-900">
                            ${activity.amount.toLocaleString()}
                          </span>
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        <time dateTime={activity.date}>{activity.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}