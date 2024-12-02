import React from 'react';
import { Brain, Shield, FileSearch, CheckCircle, Clock, Lock } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Validation',
    description: 'Automatically validate billing against project schedules using advanced machine learning algorithms.',
    icon: Brain,
    details: [
      'Compare billing amounts with completed work',
      'Detect schedule discrepancies automatically',
      'Prevent overbilling with smart validation'
    ]
  },
  {
    name: 'Real-Time Approval Tracking',
    description: 'Track every step of the approval process with instant updates and notifications.',
    icon: FileSearch,
    details: [
      'Monitor approval status in real-time',
      'Automated stakeholder notifications',
      'Custom approval workflows'
    ]
  },
  {
    name: 'Secure File Management',
    description: 'Enterprise-grade security for all your payment applications and sensitive documents.',
    icon: Shield,
    details: [
      'Bank-level encryption for all files',
      'Secure document version control',
      'Role-based access control'
    ]
  }
];

const FeatureIcon = ({ Icon }: { Icon: typeof Brain }) => (
  <div className="relative">
    <div className="h-16 w-16 rounded-xl bg-blue-600 flex items-center justify-center">
      <Icon className="h-8 w-8 text-white" />
    </div>
  </div>
);

export function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need to streamline billing
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Powerful tools designed specifically for construction payment management
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <FeatureIcon Icon={feature.icon} />
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-500">
                    {feature.description}
                  </p>
                  
                  <ul className="mt-8 space-y-4">
                    {feature.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 inline-flex items-center text-blue-600 hover:text-blue-500">
                  Learn more
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 py-4 px-8 bg-blue-50 rounded-full">
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 text-blue-500 mr-2" />
              <span>Save 80% of processing time</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Lock className="h-5 w-5 text-blue-500 mr-2" />
              <span>Enterprise-grade security</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}