import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { InvoiceList } from './InvoiceList';
import { InvoiceStats } from './InvoiceStats';
import { PayAppForm } from './PayAppForm';

export function InvoicesPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <InvoiceStats />
      {user?.role === 'GC' && <PayAppForm />}
      <InvoiceList />
    </div>
  );
}