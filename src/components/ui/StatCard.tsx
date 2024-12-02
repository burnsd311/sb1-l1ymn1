import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from './Card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    direction: 'up' | 'down';
  };
  className?: string;
}

export function StatCard({ title, value, icon: Icon, trend, className = '' }: StatCardProps) {
  return (
    <Card className={className}>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-500">{title}</div>
            <div className="mt-2 flex items-baseline">
              <div className="text-2xl font-semibold text-gray-900">{value}</div>
              {trend && (
                <span className={`ml-2 text-sm font-medium ${
                  trend.direction === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {trend.value}
                </span>
              )}
            </div>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>
    </Card>
  );
}