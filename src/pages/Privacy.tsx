import React from 'react';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

export function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
          <p className="mt-4 text-xl text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="mt-12 prose prose-blue max-w-none">
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <p className="text-blue-700 font-medium">
                Your privacy is our top priority. We are committed to protecting your
                personal and business information.
              </p>
            </div>
          </div>

          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including but not
            limited to:
          </p>
          <ul>
            <li>Name and contact information</li>
            <li>Company details and role</li>
            <li>Billing and payment information</li>
            <li>Project-related data</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our
            services, including:
          </p>
          <ul>
            <li>Processing and managing billing workflows</li>
            <li>Providing customer support</li>
            <li>Sending important updates and notifications</li>
            <li>Improving our AI validation systems</li>
          </ul>

          <h2>Data Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {[
              {
                icon: Lock,
                title: 'Encryption',
                description: 'All data is encrypted in transit and at rest',
              },
              {
                icon: Eye,
                title: 'Access Controls',
                description: 'Strict role-based access control systems',
              },
              {
                icon: Shield,
                title: 'Compliance',
                description: 'Regular security audits and compliance checks',
              },
              {
                icon: FileCheck,
                title: 'Backup',
                description: 'Automated backup systems and disaster recovery',
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start p-4 bg-gray-50 rounded-lg">
                <Icon className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                  <p className="mt-2 text-gray-500">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: privacy@billdflow.com</li>
            <li>Address: 123 Construction Ave, Suite 100, Builder City, BC 12345</li>
          </ul>
        </div>
      </div>
    </div>
  );
}