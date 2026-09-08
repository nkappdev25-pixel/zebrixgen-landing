import React from 'react';

interface ZebrixLogoProps {
  className?: string;
  isDark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const ZebrixLogo: React.FC<ZebrixLogoProps> = ({
  className = '',
  isDark = false,
  size = 'md',
}) => {
  const sizeMap = {
    sm: { height: 'h-7', text: 'text-lg', iconSize: 24 },
    md: { height: 'h-8', text: 'text-xl', iconSize: 28 },
    lg: { height: 'h-10', text: 'text-2xl', iconSize: 34 },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Zebrix single-stroke narrative icon */}
      <svg
        width={currentSize.iconSize}
        height={currentSize.iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200"
        aria-hidden="true"
      >
        <path
          d="M6 8.5C10 8.5 15.5 8 19 8C22.5 8 26 10.5 26 14C26 18.5 17 20 12 21.5C8 22.7 6 24.5 6 27C6 27 10.5 27 15 27C19.5 27 24 25.5 26 24"
          stroke={isDark ? '#FFFFFF' : '#4F46E5'}
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="26"
          cy="24"
          r="1.75"
          fill={isDark ? '#14B8A6' : '#14B8A6'}
        />
      </svg>

      <span
        className={`font-semibold tracking-tight leading-none ${currentSize.text} ${
          isDark ? 'text-white' : 'text-[#0F1F3D]'
        }`}
      >
        Zebrix
      </span>
    </div>
  );
};
