import React from 'react';
import { FileText, ArrowRight, Play, CheckCircle } from 'lucide-react';

const guides = [
  {
    title: 'Getting Started with BilldFlow',
    description: 'Learn the basics of using BilldFlow for construction billing',
    icon: Play,
    time: '5 min read',
  },
  {
    title: 'Submitting Your First Pay Application',
    description: 'Step-by-step guide to submitting pay applications',
    icon: FileText,
    time: '8 min read',
  },
  {
    title: 'Review and Approval Process',
    description: 'Understanding the payment approval workflow',
    icon: CheckCircle,
    time: '6 min read',
  },
];

export function QuickStart() {
  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">Quick Start Guides</h3>
        <div className="mt-6 space-y-4">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
            >
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <guide.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <a href="#" className="focus:outline-none">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">{guide.title}</p>
                    <p className="text-sm text-gray-500">{guide.time}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{guide.description}</p>
                </a>
              </div>
              <div className="flex-shrink-0">
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}