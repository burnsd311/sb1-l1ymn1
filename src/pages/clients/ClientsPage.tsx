import React from 'react';
import { ClientList } from './ClientList';
import { ClientStats } from './ClientStats';

export function ClientsPage() {
  return (
    <div className="space-y-6">
      <ClientStats />
      <ClientList />
    </div>
  );
}