import React from 'react';
import { PieChart, Building2 } from 'lucide-react';

export function ProjectStatus() {
  const projects = [
    { status: 'On Track', count: 12, color: 'bg-green-500' },
    { status: 'At Risk', count: 3, color: 'bg-yellow-500' },
    { status: 'Delayed', count: 2, color: 'bg-red-500' },
    { status: 'Completed', count: 8, color: 'bg-blue-500' },
  ];

  const total = projects.reduce((sum, p) => sum + p.count, 0);

  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Project Status</h2>
          <p className="text-sm text-gray-500">Current project distribution</p>
        </div>
        <PieChart className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.status} className="flex items-center">
            <div className={`h-4 w-4 rounded-full ${project.color}`} />
            <div className="ml-3 flex-1">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-900">
                  {project.status}
                </div>
                <div className="text-sm text-gray-500">
                  {((project.count / total) * 100).toFixed(1)}%
                </div>
              </div>
              <div className="mt-1 w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`${project.color} h-2 rounded-full`}
                  style={{ width: `${(project.count / total) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <div className="flex items-center text-gray-500">
          <Building2 className="h-4 w-4 mr-1" />
          Total Projects
        </div>
        <div className="font-medium text-gray-900">{total}</div>
      </div>
    </div>
  );
}