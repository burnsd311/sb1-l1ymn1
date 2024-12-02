import React from 'react';
import { ProjectList } from './ProjectList';
import { ProjectStats } from './ProjectStats';

export function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="pb-5 border-b border-gray-200">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Projects
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Manage and track all your construction projects
        </p>
      </div>
      <ProjectStats />
      <ProjectList />
    </div>
  );
}