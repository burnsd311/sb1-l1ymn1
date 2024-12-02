import { SignupData } from '../types';
import { db } from '../utils/database';
import { z } from 'zod';

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['GC', 'ARCHITECT', 'OWNER'], {
    errorMap: () => ({ message: 'Please select a valid role' }),
  }),
});

export type SignupFormData = z.infer<typeof signupSchema>;

class SignupService {
  async createSignup(data: SignupFormData): Promise<SignupData> {
    // Validate the data
    const validated = signupSchema.parse(data);
    
    // Create signup record
    const signup = await db.createSignup({
      ...validated,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    });

    // Could add email notification here
    await this.notifyAdminOfNewSignup(signup);
    
    return signup;
  }

  async getSignups(): Promise<SignupData[]> {
    return db.getSignups();
  }

  private async notifyAdminOfNewSignup(signup: SignupData): Promise<void> {
    // In a real app, this would send an email or notification
    console.log('New signup:', signup);
  }
}

export const signupService = new SignupService();