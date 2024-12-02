import React from 'react';
import { FileText, DollarSign, Clock, Upload, TrendingUp, CheckCircle2, Building2, ArrowUpRight, Calendar } from 'lucide-react';
import { usePayApps } from '../../hooks/usePayApps';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { StatCard } from '../ui/StatCard';

export function GCDashboard() {
  const { payApps } = usePayApps();

  // Calculate statistics
  const stats = {
    totalSubmitted: payApps.length,
    totalAmount: payApps.reduce((sum, app) => sum + app.billingAmount, 0),
    approved: payApps.filter(app => app.status === 'approved').length,
    pending: payApps.filter(app => app.status === 'submitted').length,
  };

  // Recent projects data
  const recentProjects = [
    { name: 'Office Tower Phase 2', progress: 75, status: 'on-track' },
    { name: 'Retail Complex', progress: 45, status: 'delayed' },
    { name: 'Hospital Wing', progress: 90, status: 'on-track' },
  ];

  // Monthly payment data
  const monthlyData = [
    { month: 'Jan', amount: 180000 },
    { month: 'Feb', amount: 220000 },
    { month: 'Mar', amount: 280000 },
    { month: 'Apr', amount: 250000 },
    { month: 'May', amount: 310000 },
    { month: 'Jun', amount: 290000 },
  ];

  const maxAmount = Math.max(...monthlyData.map(d => d.amount));

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
          <p className="mt-1 text-sm text-gray-500">
            Here's what's happening with your projects today.
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Upload className="h-4 w-4 mr-2" />
          New Pay App
        </button>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Total Pay Apps"
          value={stats.totalSubmitted}
          icon={FileText}
          trend={{ value: '+12.5%', direction: 'up' }}
        />
        <StatCard
          title="Total Billed"
          value={`$${stats.totalAmount.toLocaleString()}`}
          icon={DollarSign}
          trend={{ value: '+8.2%', direction: 'up' }}
        />
        <StatCard
          title="Pending"
          value={stats.pending}
          icon={Clock}
          trend={{ value: '-2.3%', direction: 'down' }}
        />
        <StatCard
          title="Approved"
          value={stats.approved}
          icon={CheckCircle2}
          trend={{ value: '+18.5%', direction: 'up' }}
        />
      </div>

      {/* Project Progress and Payment Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Progress */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Project Progress</h3>
              <button className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center">
                View All
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentProjects.map((project) => (
                <div key={project.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Building2 className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      <span className="ml-2 font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.name}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium
                      ${project.status === 'on-track' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {project.status === 'on-track' ? 'On Track' : 'Delayed'}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
                      <div
                        style={{ width: `${project.progress}%` }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center
                          ${project.progress > 80 ? 'bg-green-500' :
                            project.progress > 50 ? 'bg-blue-500' : 'bg-yellow-500'}`}
                      />
                    </div>
                    <span className="absolute right-0 -top-6 text-xs font-semibold text-gray-500">
                      {project.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Trends */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Payment Trends</h3>
                <p className="text-sm text-gray-500">Monthly payment volume</p>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center">
                View Details
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative h-64">
              <div className="absolute inset-0 flex items-end space-x-2">
                {monthlyData.map((data) => (
                  <div
                    key={data.month}
                    className="flex-1 flex flex-col items-center"
                  >
                    <div
                      className="w-full bg-blue-100 rounded-t"
                      style={{
                        height: `${(data.amount / maxAmount) * 100}%`,
                      }}
                    >
                      <div
                        className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
                        style={{
                          height: `${(data.amount / maxAmount) * 100}%`,
                        }}
                      />
                    </div>
                    <div className="mt-2 text-xs text-gray-500">{data.month}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                Last 6 months
              </div>
              <div className="font-medium text-gray-900">
                Total: ${monthlyData.reduce((sum, d) => sum + d.amount, 0).toLocaleString()}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}