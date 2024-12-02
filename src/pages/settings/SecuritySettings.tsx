import React from 'react';
import { Lock, Key, Shield } from 'lucide-react';

export function SecuritySettings() {
  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Security</h3>
        <div className="mt-6 space-y-6">
          <div>
            <label htmlFor="current_password" className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                name="current_password"
                id="current_password"
                className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="new_password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Key className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                name="new_password"
                id="new_password"
                className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Key className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                id="two_factor"
                name="two_factor"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="two_factor" className="font-medium text-gray-700">
                Enable Two-Factor Authentication
              </label>
              <p className="text-gray-500">Add an extra layer of security to your account</p>
            </div>
          </div>

          <div className="sm:col-span-6">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Shield className="h-5 w-5 mr-2" />
              Update Security Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}