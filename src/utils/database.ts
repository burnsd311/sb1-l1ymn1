import { PayApp, DatabaseSchema, SignupData } from '../types';

const DB_KEY = 'billdflow_db';

interface ExtendedDatabaseSchema extends DatabaseSchema {
  signups: SignupData[];
}

class Database {
  private data: ExtendedDatabaseSchema;

  constructor() {
    const stored = localStorage.getItem(DB_KEY);
    this.data = stored ? JSON.parse(stored) : { payApps: [], signups: [] };
  }

  private persist() {
    localStorage.setItem(DB_KEY, JSON.stringify(this.data));
  }

  // Signup Methods
  async createSignup(signup: SignupData): Promise<SignupData> {
    this.data.signups.push(signup);
    this.persist();
    return signup;
  }

  async getSignups(): Promise<SignupData[]> {
    return this.data.signups;
  }

  // Pay Apps Methods
  async createPayApp(payApp: Omit<PayApp, 'id' | 'createdAt' | 'updatedAt'>): Promise<PayApp> {
    const now = new Date().toISOString();
    const newPayApp: PayApp = {
      ...payApp,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    };

    this.data.payApps.push(newPayApp);
    this.persist();
    return newPayApp;
  }

  async getPayApps(filters?: {
    userId?: string;
    status?: PayApp['status'];
  }): Promise<PayApp[]> {
    return this.data.payApps.filter(payApp => {
      if (filters?.userId && payApp.userId !== filters.userId) return false;
      if (filters?.status && payApp.status !== filters.status) return false;
      return true;
    });
  }

  async getPayAppById(id: string): Promise<PayApp | null> {
    return this.data.payApps.find(payApp => payApp.id === id) || null;
  }

  async updatePayApp(id: string, updates: Partial<PayApp>): Promise<PayApp | null> {
    const index = this.data.payApps.findIndex(payApp => payApp.id === id);
    if (index === -1) return null;

    const updatedPayApp = {
      ...this.data.payApps[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    this.data.payApps[index] = updatedPayApp;
    this.persist();
    return updatedPayApp;
  }

  async deletePayApp(id: string): Promise<boolean> {
    const initialLength = this.data.payApps.length;
    this.data.payApps = this.data.payApps.filter(payApp => payApp.id !== id);
    this.persist();
    return this.data.payApps.length < initialLength;
  }
}

export const db = new Database();