import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';

export function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Terms of Service</h1>
          <p className="mt-4 text-xl text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="mt-12 prose prose-blue max-w-none">
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <div className="flex items-center">
              <AlertCircle className="h-6 w-6 text-yellow-600 mr-2" />
              <p className="text-yellow-700 font-medium">
                Please read these terms carefully before using BilldFlow's services.
              </p>
            </div>
          </div>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using BilldFlow's services, you agree to be bound by these
            Terms of Service and all applicable laws and regulations.
          </p>

          <h2>2. Service Description</h2>
          <p>
            BilldFlow provides a construction billing management platform that includes:
          </p>
          <ul>
            <li>AI-powered billing validation</li>
            <li>Approval workflow management</li>
            <li>Secure document storage</li>
            <li>Payment processing services</li>
          </ul>

          <h2>3. User Responsibilities</h2>
          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-4">You agree to:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                <span>Provide accurate and complete information</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                <span>Maintain the security of your account</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                <span>Comply with all applicable laws and regulations</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                <span>Report any unauthorized use of your account</span>
              </li>
            </ul>
          </div>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, features, and functionality of BilldFlow are owned by us and
            are protected by international copyright, trademark, and other intellectual
            property laws.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            BilldFlow shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use of our services.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify
            users of any material changes via email or through our platform.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at:
          </p>
          <ul>
            <li>Email: legal@billdflow.com</li>
            <li>Phone: (555) 123-4567</li>
          </ul>
        </div>
      </div>
    </div>
  );
}