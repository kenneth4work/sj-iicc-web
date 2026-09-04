import React from 'react';
import userLogoImg from '../assets/images/images/logo-saji.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSublabel?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  const isLight = variant === 'light';
  const fallbackSrc = isLight ? '/images/logo-saji.png' : '/images/logo-saji-dark.png';
  const logoSrc = userLogoImg || fallbackSrc;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Saji Catering Brand Logo Image */}
      <div className="flex items-center">
        <img
          id="brand-logo-image"
          src={logoSrc}
          alt="saji CATERING by IICC"
          style={{ width: '161.217px', height: '89px' }}
          className="w-[161.217px] h-[89px] object-contain select-none transition-transform duration-200"
          referrerPolicy="no-referrer"
          draggable={false}
        />
      </div>
    </div>
  );
};
