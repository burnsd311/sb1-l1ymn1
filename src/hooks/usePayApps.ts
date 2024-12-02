import { useState, useEffect } from 'react';
import { PayApp } from '../types';
import { db } from '../utils/database';

export function usePayApps(filters?: {
  userId?: string;
  status?: PayApp['status'];
}) {
  const [payApps, setPayApps] = useState<PayApp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPayApps = async () => {
      try {
        const data = await db.getPayApps(filters);
        setPayApps(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch pay apps'));
      } finally {
        setLoading(false);
      }
    };

    fetchPayApps();
  }, [filters?.userId, filters?.status]);

  const createPayApp = async (data: Omit<PayApp, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newPayApp = await db.createPayApp(data);
    setPayApps(prev => [...prev, newPayApp]);
    return newPayApp;
  };

  const updatePayApp = async (id: string, updates: Partial<PayApp>) => {
    const updatedPayApp = await db.updatePayApp(id, updates);
    if (updatedPayApp) {
      setPayApps(prev => prev.map(app => app.id === id ? updatedPayApp : app));
    }
    return updatedPayApp;
  };

  const deletePayApp = async (id: string) => {
    const success = await db.deletePayApp(id);
    if (success) {
      setPayApps(prev => prev.filter(app => app.id !== id));
    }
    return success;
  };

  return {
    payApps,
    loading,
    error,
    createPayApp,
    updatePayApp,
    deletePayApp,
  };
}