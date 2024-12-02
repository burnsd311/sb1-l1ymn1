import React from 'react';
import { Bell } from 'lucide-react';

export function NotificationSettings() {
  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
        <div className="mt-6 space-y-6">
          <div className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                id="new_payapp"
                name="new_payapp"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="new_payapp" className="font-medium text-gray-700">
                New Pay Applications
              </label>
              <p className="text-gray-500">Get notified when a new pay application is submitted</p>
            </div>
          </div>

          <div className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                id="status_updates"
                name="status_updates"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="status_updates" className="font-medium text-gray-700">
                Status Updates
              </label>
              <p className="text-gray-500">Receive updates when pay applications are approved or rejected</p>
            </div>
          </div>

          <div className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                id="payment_confirmation"
                name="payment_confirmation"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="payment_confirmation" className="font-medium text-gray-700">
                Payment Confirmations
              </label>
              <p className="text-gray-500">Get notified when payments are processed</p>
            </div>
          </div>

          <div className="sm:col-span-6">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Bell className="h-5 w-5 mr-2" />
              Update Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}