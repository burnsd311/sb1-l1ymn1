import React from 'react';

export function BackgroundGraph() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.15]"
      viewBox="0 0 800 400"
      preserveAspectRatio="none"
    >
      {/* Grid Lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={`horizontal-${i}`}
          x1="0"
          y1={i * 80}
          x2="800"
          y2={i * 80}
          stroke="#94a3b8"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <line
          key={`vertical-${i}`}
          x1={i * 133.33}
          y1="0"
          x2={i * 133.33}
          y2="400"
          stroke="#94a3b8"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      ))}
      
      {/* Main Line */}
      <path
        d="M0 300 C 100 280, 200 260, 300 240 S 500 220, 600 180 S 700 160, 800 140"
        fill="none"
        stroke="#2563eb"
        strokeWidth="4"
        className="drop-shadow-md"
      />
      
      {/* Gradient Area */}
      <path
        d="M0 300 C 100 280, 200 260, 300 240 S 500 220, 600 180 S 700 160, 800 140 L 800 400 L 0 400 Z"
        fill="url(#blue-gradient)"
        opacity="0.3"
      />
      
      {/* Trend Line */}
      <path
        d="M0 290 C 100 270, 200 250, 300 230 S 500 210, 600 170 S 700 150, 800 130"
        fill="none"
        stroke="#16a34a"
        strokeWidth="3"
        strokeDasharray="6 4"
        className="drop-shadow-sm"
      />
      
      {/* Data Points */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle
          key={`point-${i}`}
          cx={i * 160}
          cy={280 - i * 30}
          r="4"
          fill="#2563eb"
          className="drop-shadow-md"
        />
      ))}
      
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="blue-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
}