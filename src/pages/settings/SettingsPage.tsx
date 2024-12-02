import React from 'react';
import { ProfileSettings } from './ProfileSettings';
import { NotificationSettings } from './NotificationSettings';
import { SecuritySettings } from './SecuritySettings';
import { CompanySettings } from './CompanySettings';

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="pb-5 border-b border-gray-200">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Settings
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Manage your account settings and preferences
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <ProfileSettings />
        <CompanySettings />
        <NotificationSettings />
        <SecuritySettings />
      </div>
    </div>
  );
}