import React from 'react';

export const DigitalRibbonBg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 ${className}`}
      aria-hidden="true"
    >
      {/* Soft radial glow in brand emerald and pine */}
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#2A835F]/12 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#12544F]/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-[#2A835F]/10 rounded-full blur-3xl" />

      {/* Abstract connected ribbon vectors */}
      <svg
        className="absolute w-full h-full opacity-40"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="curveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A835F" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#12544F" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2A835F" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="curveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#12544F" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#2A835F" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#092328" stopOpacity="0" />
          </linearGradient>
          <pattern id="dotGrid" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#12544F" fillOpacity="0.4" />
          </pattern>
        </defs>

        {/* Subtle tech dot grid background */}
        <rect width="100%" height="100%" fill="url(#dotGrid)" />

        {/* Dynamic Ribbon Flow */}
        <path
          d="M-100,450 C300,200 650,650 1100,350 C1300,220 1500,400 1600,300"
          stroke="url(#curveGrad1)"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="8 6"
        />
        <path
          d="M-80,480 C320,230 670,680 1120,380 C1320,250 1520,430 1620,330"
          stroke="url(#curveGrad2)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Connected System Nodes in Jade and Warm Ivory */}
        <g opacity="0.7">
          <circle cx="300" cy="200" r="4.5" fill="#2A835F" />
          <circle cx="300" cy="200" r="11" stroke="#2A835F" strokeWidth="1" strokeOpacity="0.4" />

          <circle cx="650" cy="650" r="5" fill="#12544F" />
          <circle cx="650" cy="650" r="14" stroke="#2A835F" strokeWidth="1" strokeOpacity="0.3" />

          <circle cx="1100" cy="350" r="4" fill="#F7F4ED" />
          <circle cx="1100" cy="350" r="12" stroke="#F7F4ED" strokeWidth="1" strokeOpacity="0.3" />
        </g>
      </svg>
    </div>
  );
};
