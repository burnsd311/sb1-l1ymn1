import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import type { UserRole } from '../types';
import { z } from 'zod';

const ROLES: { value: UserRole; label: string }[] = [
  { value: 'GC', label: 'General Contractor' },
  { value: 'ARCHITECT', label: 'Architect' },
  { value: 'OWNER', label: 'Owner' },
];

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['GC', 'ARCHITECT', 'OWNER'], {
    errorMap: () => ({ message: 'Please select a valid role' }),
  }),
});

export function SignupForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        role: formData.get('role') as UserRole,
      };

      // Validate the data
      signupSchema.parse(data);

      // Submit to Netlify Forms
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'early-access-signup',
          ...data
        }).toString()
      })
      .then(() => {
        setStatus('success');
        // Reset form after 2 seconds
        setTimeout(() => {
          (e.target as HTMLFormElement).reset();
          setStatus('idle');
        }, 2000);
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        setStatus('error');
        setErrorMessage('Failed to submit form. Please try again.');
      });
    } catch (error) {
      setStatus('error');
      if (error instanceof z.ZodError) {
        setErrorMessage(error.errors[0].message);
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-4"
      name="early-access-signup"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="early-access-signup" />
      <div hidden>
        <input name="bot-field" />
      </div>

      <div className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="block w-full px-5 py-3 text-base rounded-lg text-gray-900 placeholder-gray-500 shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Work Email"
            className="block w-full px-5 py-3 text-base rounded-lg text-gray-900 placeholder-gray-500 shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <select
            name="role"
            className="block w-full px-5 py-3 text-base rounded-lg text-gray-900 placeholder-gray-500 shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            defaultValue=""
          >
            <option value="" disabled>Select Your Role</option>
            {ROLES.map(role => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {errorMessage && (
        <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting' || status === 'success'}
        className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="animate-spin h-5 w-5 mr-2" />
            Submitting...
          </>
        ) : status === 'success' ? (
          'Successfully Registered!'
        ) : (
          <>
            Sign Up for Early Access
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </button>

      <p className="text-sm text-gray-500 text-center mt-4">
        By signing up, you agree to our{' '}
        <a href="#" className="text-blue-600 hover:text-blue-500">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="text-blue-600 hover:text-blue-500">
          Privacy Policy
        </a>
      </p>
    </form>
  );
}