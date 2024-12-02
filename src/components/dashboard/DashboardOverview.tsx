import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { GCDashboard } from './GCDashboard';
import { ArchitectDashboard } from './ArchitectDashboard';
import { OwnerDashboard } from './OwnerDashboard';

export function DashboardOverview() {
  const { user } = useAuth();

  if (!user) return null;

  // Each role gets their specific dashboard view for the main overview
  const DashboardComponent = {
    GC: GCDashboard,
    ARCHITECT: ArchitectDashboard,
    OWNER: OwnerDashboard
  }[user.role];

  return <DashboardComponent />;
}