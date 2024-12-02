import React, { useState } from 'react';
import { Home, FileText, Users, BarChart, Settings, HelpCircle, ChevronLeft, ChevronRight, FileCheck, FolderOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { SidebarItem } from './SidebarItem';

const navigation = [
  { name: 'Overview', icon: Home, path: '/dashboard' },
  { name: 'Projects', icon: FolderOpen, path: '/dashboard/projects' },
  { name: 'Invoices', icon: FileText, path: '/dashboard/invoices' },
  { name: 'Clients', icon: Users, path: '/dashboard/clients' },
  { name: 'Reports', icon: BarChart, path: '/dashboard/reports' },
  { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
  { name: 'Help', icon: HelpCircle, path: '/dashboard/help' },
];

export function Sidebar() {
  const location = useLocation();
  const { user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`relative flex flex-col min-h-screen bg-gray-900 transition-all duration-300 ${
      isCollapsed ? 'w-20' : 'w-64'
    }`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-16 bg-gray-900 text-gray-400 hover:text-white p-1 rounded-full border border-gray-700"
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>

      {/* Logo */}
      <div className="flex items-center h-16 px-4 border-b border-gray-800">
        <Link to="/" className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <FileCheck className="h-6 w-6 text-white" />
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold text-white">BilldFlow</span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        {navigation.map((item) => (
          <SidebarItem
            key={item.name}
            item={item}
            isActive={location.pathname === item.path}
            isCollapsed={isCollapsed}
          />
        ))}
      </nav>

      {/* User Profile */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-3">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="h-8 w-8 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {user?.name}
              </p>
              <p className="text-xs text-gray-400 truncate">
                {user?.role}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}