import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 hover:border-gray-200 transition-all duration-200 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="p-6 border-b border-gray-100">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-6">{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-xl">{children}</div>;
}