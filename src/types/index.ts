export type UserRole = 'GC' | 'ARCHITECT' | 'OWNER';

export interface SignupData {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}

export interface PayApp {
  id: string;
  userId: string;
  projectName: string;
  billingAmount: number;
  percentageComplete: number;
  status: 'draft' | 'submitted' | 'reviewed' | 'approved' | 'rejected';
  description: string;
  fileLinks: string[];
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface DatabaseSchema {
  payApps: PayApp[];
  signups: SignupData[];
}