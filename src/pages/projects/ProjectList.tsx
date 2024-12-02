import React, { useState } from 'react';
import { Building2, Calendar, DollarSign, Users, Search, Plus, ArrowUpRight } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: '1',
    name: 'Office Tower Phase 2',
    location: 'Downtown Business District',
    startDate: '2024-01-15',
    endDate: '2025-06-30',
    budget: 12500000,
    spent: 3200000,
    status: 'active',
    progress: 75,
    team: 28,
  },
  {
    id: '2',
    name: 'Retail Complex',
    location: 'Westside Shopping Center',
    startDate: '2024-03-01',
    endDate: '2025-02-28',
    budget: 8500000,
    spent: 2100000,
    status: 'active',
    progress: 45,
    team: 22,
  },
  {
    id: '3',
    name: 'Hospital Wing',
    location: 'Central Medical Center',
    startDate: '2024-02-01',
    endDate: '2025-08-31',
    budget: 15000000,
    spent: 5800000,
    status: 'active',
    progress: 90,
    team: 35,
  },
];

export function ProjectList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white p-6 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 text-gray-400 mr-2" />
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{project.location}</p>
                </div>
                <Link
                  to={`/dashboard/projects/${project.id}`}
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1.5 text-gray-400" />
                  <span>
                    {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <DollarSign className="h-4 w-4 mr-1.5 text-gray-400" />
                  <span>
                    ${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1.5 text-gray-400" />
                  <span>{project.team} team members</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-500">Progress</span>
                      <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}