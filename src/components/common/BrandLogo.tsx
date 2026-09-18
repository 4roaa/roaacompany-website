import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  className?: string;
  isScrolled?: boolean;
  hideText?: boolean;
  size?: 'sm' | 'md';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  hideText = false,
  size = 'sm',
}) => {
  const isSm = size === 'sm';

  return (
    <Link
      to="/"
      className={`inline-flex items-center ${isSm ? 'gap-2' : 'gap-2.5'} group transition-opacity hover:opacity-95 ${className}`}
      aria-label="Roaacompany - Home"
    >
      {/* Abstract Digital Ribbon Emblem */}
      <div className={`relative ${isSm ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-8 h-8 sm:w-9 sm:h-9'} flex-shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="ribbonGrad1" x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2A835F" />
              <stop offset="0.6" stopColor="#12544F" />
              <stop offset="1" stopColor="#2A835F" />
            </linearGradient>
            <linearGradient id="ribbonGrad2" x1="40" y1="8" x2="8" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#12544F" />
              <stop offset="0.8" stopColor="#2A835F" />
              <stop offset="1" stopColor="#F7F4ED" />
            </linearGradient>
          </defs>
          {/* Ribbon path representing connected system loop */}
          <path
            d="M8 14C8 10.6863 10.6863 8 14 8H26C31.5228 8 36 12.4772 36 18C36 21.8488 33.8344 25.1917 30.6698 26.8533L16 34.5C12.5 36.3 8 33.8 8 29.8V14Z"
            fill="url(#ribbonGrad1)"
            opacity="0.95"
          />
          <path
            d="M36 30C36 33.3137 33.3137 36 30 36H18C12.4772 36 8 31.5228 8 26C8 22.1512 10.1656 18.8083 13.3302 17.1467L28 9.5C31.5 7.7 36 10.2 36 14.2V30Z"
            fill="url(#ribbonGrad2)"
            opacity="0.8"
            style={{ mixBlendMode: 'screen' }}
          />
          {/* Subtle node accent in brand ivory */}
          <circle cx="28" cy="14" r="3" fill="#F7F4ED" />
          <circle cx="16" cy="30" r="2.5" fill="#2A835F" />
        </svg>
      </div>

      {!hideText && (
        <div className="flex items-center gap-1.5 sm:gap-2 leading-none">
          <span className={`${isSm ? 'text-xs sm:text-base' : 'text-sm sm:text-lg'} font-bold tracking-tight text-[#F7F4ED] font-['Manrope',sans-serif]`}>
            Roaacompany
          </span>
          <span className="text-[#2A835F] text-xs sm:text-sm font-light select-none">|</span>
          <span className={`${isSm ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-sm'} font-medium tracking-normal text-[#F7F4ED]/85 whitespace-nowrap hidden min-[360px]:inline-block`}>
            Digital Solution
          </span>
        </div>
      )}
    </Link>
  );
};
