import React from 'react';
import { HelpSearch } from './HelpSearch';
import { QuickStart } from './QuickStart';
import { FAQ } from './FAQ';
import { Support } from './Support';

export function HelpPage() {
  return (
    <div className="space-y-6">
      <div className="pb-5 border-b border-gray-200">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Help Center
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Find answers, documentation, and support
        </p>
      </div>
      
      <HelpSearch />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <QuickStart />
          <div className="mt-6">
            <FAQ />
          </div>
        </div>
        <div className="lg:col-span-1">
          <Support />
        </div>
      </div>
    </div>
  );
}