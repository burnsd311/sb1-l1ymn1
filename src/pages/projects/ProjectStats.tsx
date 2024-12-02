import React from 'react';
import { Building2, Clock, DollarSign, Users } from 'lucide-react';
import { StatCard } from '../../components/ui/StatCard';

export function ProjectStats() {
  const stats = {
    activeProjects: 12,
    totalBudget: 36000000,
    avgCompletion: 68,
    totalTeamMembers: 85,
  };

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Active Projects"
        value={stats.activeProjects}
        icon={Building2}
        trend={{ value: '+2', direction: 'up' }}
      />
      <StatCard
        title="Total Budget"
        value={`$${(stats.totalBudget / 1000000).toFixed(1)}M`}
        icon={DollarSign}
        trend={{ value: '+15.3%', direction: 'up' }}
      />
      <StatCard
        title="Avg. Completion"
        value={`${stats.avgCompletion}%`}
        icon={Clock}
        trend={{ value: '+5.2%', direction: 'up' }}
      />
      <StatCard
        title="Team Members"
        value={stats.totalTeamMembers}
        icon={Users}
        trend={{ value: '+12', direction: 'up' }}
      />
    </div>
  );
}