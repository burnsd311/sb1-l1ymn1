import { SignupData } from '../types';

const STORAGE_KEY = 'billdflow_signups';

export const storage = {
  saveSignup: (data: Omit<SignupData, 'id' | 'createdAt'>): SignupData => {
    const signups = storage.getSignups();
    const newSignup: SignupData = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...signups, newSignup]));
    return newSignup;
  },

  getSignups: (): SignupData[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
};