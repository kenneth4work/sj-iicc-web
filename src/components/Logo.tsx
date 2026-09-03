import React from 'react';
import userLogoImg from '../assets/images/images/logo-saji.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSublabel?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', showSublabel = true }) => {
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
          style={{ height: '80px' }}
          className="h-[80px] w-auto max-w-[280px] sm:max-w-[340px] object-contain select-none transition-transform duration-200"
          referrerPolicy="no-referrer"
          draggable={false}
        />
      </div>

      {showSublabel && (
        <div className="hidden lg:flex flex-col border-l border-slate-300/40 pl-3 leading-tight">
          <span className={`text-[10px] font-semibold tracking-wider uppercase ${isLight ? 'text-[#063694]' : 'text-blue-200'}`}>
            Unit Bisnis
          </span>
          <span className={`text-[10px] font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            PT BLST IPB University
          </span>
        </div>
      )}
    </div>
  );
};
