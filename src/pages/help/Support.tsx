import React from 'react';
import { Mail, MessageCircle, Phone, Clock } from 'lucide-react';

export function Support() {
  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">Contact Support</h3>
        <div className="mt-6 space-y-6">
          <div className="flex items-center">
            <Clock className="h-6 w-6 text-gray-400" />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Support Hours</h4>
              <p className="text-sm text-gray-500">Monday - Friday, 9AM - 6PM EST</p>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <MessageCircle className="h-5 w-5 mr-2" />
              Start Live Chat
            </button>

            <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Mail className="h-5 w-5 mr-2" />
              Email Support
            </button>

            <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Phone className="h-5 w-5 mr-2" />
              Schedule a Call
            </button>
          </div>

          <div className="rounded-md bg-blue-50 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Premium Support
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    Need priority support? Upgrade to our premium plan for 24/7
                    dedicated assistance.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="-mx-2 -my-1.5 flex">
                    <button className="px-3 py-2 rounded-md text-sm font-medium text-blue-800 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}