import React from 'react';
import { DollarSign, TrendingUp, Clock, CheckCircle2, Building2 } from 'lucide-react';
import { usePayApps } from '../../hooks/usePayApps';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { StatCard } from '../ui/StatCard';
import { DrawProjections } from '../../pages/reports/DrawProjections';

export function OwnerDashboard() {
  const { payApps } = usePayApps({ status: 'approved' });

  // Calculate statistics
  const stats = {
    totalApproved: payApps.reduce((sum, app) => 
      app.status === 'approved' ? sum + app.billingAmount : sum, 0
    ),
    totalPaid: payApps.reduce((sum, app) => 
      app.status === 'paid' ? sum + app.billingAmount : sum, 0
    ),
    pendingPayments: payApps.filter(app => app.status === 'approved').length,
    monthlySpend: 450000,
  };

  // Project spending data
  const projectSpending = [
    { name: 'Office Tower', spent: 1200000, budget: 1500000 },
    { name: 'Retail Complex', spent: 800000, budget: 1000000 },
    { name: 'Hospital Wing', spent: 2000000, budget: 2500000 },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
        <p className="mt-1 text-sm text-gray-500">
          Here's your financial overview and project status.
        </p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Total Approved"
          value={`$${stats.totalApproved.toLocaleString()}`}
          icon={DollarSign}
          trend={{ value: '+15.3%', direction: 'up' }}
        />
        <StatCard
          title="Total Paid"
          value={`$${stats.totalPaid.toLocaleString()}`}
          icon={CheckCircle2}
          trend={{ value: '+12.1%', direction: 'up' }}
        />
        <StatCard
          title="Pending Payments"
          value={stats.pendingPayments}
          icon={Clock}
          trend={{ value: '-2.5%', direction: 'down' }}
        />
        <StatCard
          title="Monthly Spend"
          value={`$${stats.monthlySpend.toLocaleString()}`}
          icon={TrendingUp}
          trend={{ value: '+8.2%', direction: 'up' }}
        />
      </div>

      {/* Draw Projections and Project Budgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DrawProjections />

        {/* Project Budgets */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Project Budgets</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projectSpending.map((project) => (
                <div key={project.name} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Building2 className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="font-medium text-gray-900">{project.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}
                    </span>
                  </div>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
                      <div
                        style={{ width: `${(project.spent / project.budget) * 100}%` }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center
                          ${(project.spent / project.budget) > 0.9 ? 'bg-red-500' :
                            (project.spent / project.budget) > 0.7 ? 'bg-yellow-500' : 'bg-green-500'}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}