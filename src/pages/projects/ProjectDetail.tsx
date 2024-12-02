import React from 'react';
import { useParams } from 'react-router-dom';
import { Building2, Calendar, DollarSign, Users, FileText, Clock, TrendingUp, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import { StatCard } from '../../components/ui/StatCard';
import { DrawProjections } from '../reports/DrawProjections';

// Mock project data - in a real app, this would come from an API
const projectData = {
  id: '1',
  name: 'Office Tower Phase 2',
  location: 'Downtown Business District',
  description: 'Construction of a 25-story commercial office tower with integrated smart building systems and sustainable design features.',
  startDate: '2024-01-15',
  endDate: '2025-06-30',
  budget: 12500000,
  spent: 3200000,
  status: 'active',
  progress: 75,
  team: 28,
  milestones: [
    { name: 'Foundation Complete', date: '2024-03-15', status: 'completed' },
    { name: 'Steel Structure', date: '2024-07-30', status: 'in-progress' },
    { name: 'Facade Installation', date: '2024-12-15', status: 'pending' },
    { name: 'Interior Fitout', date: '2025-03-30', status: 'pending' },
  ],
  recentActivity: [
    { type: 'payment', description: 'Pay Application #12 Approved', date: '2024-03-15' },
    { type: 'milestone', description: 'Foundation Work Completed', date: '2024-03-12' },
    { type: 'update', description: 'Updated Project Schedule', date: '2024-03-10' },
  ],
};

export function ProjectDetail() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-5 border-b border-gray-200">
        <div>
          <div className="flex items-center">
            <Link
              to="/dashboard/projects"
              className="mr-4 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {projectData.name}
              </h2>
              <p className="mt-1 text-sm text-gray-500 flex items-center">
                <Building2 className="h-4 w-4 mr-1" />
                {projectData.location}
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Edit Project
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Submit Pay App
          </button>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Budget"
          value={`$${(projectData.budget / 1000000).toFixed(1)}M`}
          icon={DollarSign}
          trend={{ value: 'On Budget', direction: 'up' }}
        />
        <StatCard
          title="Progress"
          value={`${projectData.progress}%`}
          icon={TrendingUp}
          trend={{ value: 'On Schedule', direction: 'up' }}
        />
        <StatCard
          title="Time Remaining"
          value="458 days"
          icon={Clock}
          trend={{ value: 'On Track', direction: 'up' }}
        />
        <StatCard
          title="Team Size"
          value={projectData.team}
          icon={Users}
          trend={{ value: '+3 this month', direction: 'up' }}
        />
      </div>

      {/* Project Details and Draw Projections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Project Details</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Description</h4>
                <p className="mt-2 text-gray-900">{projectData.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-4">Key Milestones</h4>
                <div className="space-y-4">
                  {projectData.milestones.map((milestone) => (
                    <div key={milestone.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`h-2.5 w-2.5 rounded-full mr-3 ${
                          milestone.status === 'completed' ? 'bg-green-500' :
                          milestone.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                        }`} />
                        <span className="text-sm text-gray-900">{milestone.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(milestone.date).toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-4">Recent Activity</h4>
                <div className="flow-root">
                  <ul className="-mb-8">
                    {projectData.recentActivity.map((activity, activityIdx) => (
                      <li key={activity.date}>
                        <div className="relative pb-8">
                          {activityIdx !== projectData.recentActivity.length - 1 ? (
                            <span
                              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"
                            />
                          ) : null}
                          <div className="relative flex space-x-3">
                            <div>
                              <span className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center ring-8 ring-white">
                                <FileText className="h-4 w-4 text-blue-600" />
                              </span>
                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                              <div>
                                <p className="text-sm text-gray-500">{activity.description}</p>
                              </div>
                              <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                {new Date(activity.date).toLocaleDateString()}
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
          </CardContent>
        </Card>

        <DrawProjections />
      </div>
    </div>
  );
}