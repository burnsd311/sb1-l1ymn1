import React, { useState } from 'react';
import { Search, FileText, Users, Settings } from 'lucide-react';

const searchCategories = [
  { name: 'Documentation', icon: FileText },
  { name: 'Account', icon: Users },
  { name: 'Settings', icon: Settings },
];

export function HelpSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search for help..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="mt-4 flex justify-center space-x-4">
          {searchCategories.map((category) => (
            <button
              key={category.name}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}