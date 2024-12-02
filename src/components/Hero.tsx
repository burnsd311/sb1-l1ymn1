import React from 'react';
import { HardHat, Building2, FileCheck } from 'lucide-react';
import { SignupForm } from './SignupForm';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-300/40 via-blue-50/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center">
          <div className="flex items-center justify-center mb-8">
            <FileCheck className="h-12 w-12 text-blue-400" />
            <span className="ml-2 text-3xl font-bold text-gray-900">BilldFlow</span>
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Take the Guesswork</span>
            <span className="block text-blue-400">Out of Invoicing</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Smart Construction Billing for GCs, Architects, and Owners
          </p>
          
          <div className="mt-8 flex justify-center space-x-8">
            <div className="flex items-center text-gray-500">
              <HardHat className="h-6 w-6 mr-2" />
              <span>General Contractors</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Building2 className="h-6 w-6 mr-2" />
              <span>Architects & Owners</span>
            </div>
          </div>

          <div className="mt-10">
            <SignupForm />
          </div>

          <div className="mt-8 text-sm text-gray-500">
            Join industry leaders already streamlining their billing process
          </div>
        </div>
      </div>

      {/* Subtle top-left glow */}
      <div className="absolute -top-20 left-0 transform">
        <div className="h-80 w-80 rounded-full bg-blue-200/10 blur-[96px]" />
      </div>
    </div>
  );
}