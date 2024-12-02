import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  item: {
    name: string;
    icon: LucideIcon;
    path: string;
  };
  isActive: boolean;
  isCollapsed: boolean;
}

export function SidebarItem({ item, isActive, isCollapsed }: SidebarItemProps) {
  return (
    <Link
      to={item.path}
      className={`
        group flex items-center px-2 py-2 text-sm font-medium rounded-lg
        transition-colors duration-150 ease-in-out
        ${isActive
          ? 'bg-gray-800 text-white'
          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
        }
      `}
    >
      <item.icon
        className={`
          ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}
          ${isCollapsed ? 'h-6 w-6' : 'h-5 w-5 mr-3'}
          transition-colors duration-150 ease-in-out
        `}
      />
      {!isCollapsed && (
        <span className="truncate">{item.name}</span>
      )}
      {isCollapsed && (
        <div className="absolute left-full ml-6 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
          {item.name}
        </div>
      )}
    </Link>
  );
}