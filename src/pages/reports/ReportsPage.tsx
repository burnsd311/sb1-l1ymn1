import React from 'react';
import { ReportsSummary } from './ReportsSummary';
import { ProjectStatus } from './ProjectStatus';
import { RecentActivity } from './RecentActivity';
import { DrawProjections } from './DrawProjections';

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <ReportsSummary />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DrawProjections />
        <ProjectStatus />
      </div>
      <RecentActivity />
    </div>
  );
}