import React from 'react';
import { CheckCircle, XCircle, Clock, FileText, TrendingUp, AlertCircle, Building2 } from 'lucide-react';
import { usePayApps } from '../../hooks/usePayApps';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { StatCard } from '../ui/StatCard';
import { DrawProjections } from '../../pages/reports/DrawProjections';

export function ArchitectDashboard() {
  const { payApps, loading, updatePayApp } = usePayApps({ status: 'submitted' });

  // Calculate statistics
  const stats = {
    totalReviewed: payApps.filter(app => ['approved', 'rejected'].includes(app.status)).length,
    pendingReview: payApps.filter(app => app.status === 'submitted').length,
    averageReviewTime: '2.5 days',
    totalValue: payApps.reduce((sum, app) => sum + app.billingAmount, 0),
  };

  // Recent activity data
  const recentActivity = [
    { project: 'Office Tower Phase 2', action: 'approved', date: '2h ago' },
    { project: 'Retail Complex', action: 'rejected', date: '4h ago' },
    { project: 'Hospital Wing', action: 'pending', date: '6h ago' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
        <p className="mt-1 text-sm text-gray-500">
          Here's your review queue and project status.
        </p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Total Reviewed"
          value={stats.totalReviewed}
          icon={FileText}
          trend={{ value: '+8.3%', direction: 'up' }}
        />
        <StatCard
          title="Pending Review"
          value={stats.pendingReview}
          icon={Clock}
          trend={{ value: '-4.2%', direction: 'down' }}
        />
        <StatCard
          title="Total Value"
          value={`$${stats.totalValue.toLocaleString()}`}
          icon={TrendingUp}
          trend={{ value: '+12.5%', direction: 'up' }}
        />
        <StatCard
          title="Avg Review Time"
          value={stats.averageReviewTime}
          icon={AlertCircle}
          trend={{ value: '-15%', direction: 'down' }}
        />
      </div>

      {/* Draw Projections and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DrawProjections />

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </CardHeader>
          <CardContent>
            <div className="flow-root">
              <ul role="list" className="-mb-8">
                {recentActivity.map((activity, activityIdx) => (
                  <li key={activity.project}>
                    <div className="relative pb-8">
                      {activityIdx !== recentActivity.length - 1 ? (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white
                            ${activity.action === 'approved' ? 'bg-green-500' :
                              activity.action === 'rejected' ? 'bg-red-500' : 'bg-yellow-500'}`}>
                            {activity.action === 'approved' ? (
                              <CheckCircle className="h-5 w-5 text-white" />
                            ) : activity.action === 'rejected' ? (
                              <XCircle className="h-5 w-5 text-white" />
                            ) : (
                              <Clock className="h-5 w-5 text-white" />
                            )}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              {activity.action.charAt(0).toUpperCase() + activity.action.slice(1)}{' '}
                              <span className="font-medium text-gray-900">{activity.project}</span>
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            <time dateTime={activity.date}>{activity.date}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}