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
    sm: { height: 'h-7', text: 'text-lg', iconSize: 26 },
    md: { height: 'h-8', text: 'text-xl', iconSize: 32 },
    lg: { height: 'h-10', text: 'text-2xl', iconSize: 40 },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* 
        The brightness-0 invert classes make the logo white when isDark is true.
      */}
      <img 
        src="/logo/logo.png" 
        alt="Zebrix Logo" 
        width={currentSize.iconSize}
        height={currentSize.iconSize}
        className={`shrink-0 transition-transform duration-200 ${isDark ? 'brightness-0 invert' : ''}`}
        aria-hidden="true"
      />

      <span
        className={`font-bold tracking-tight leading-none ${currentSize.text} ${
          isDark ? 'text-white' : 'text-[#0F1F3D]'
        }`}
      >
        Zebrix
      </span>
    </div>
  );
};

