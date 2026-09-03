import React, { useState } from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSublabel?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', showSublabel = true }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {!imgError ? (
        <img
          src="images/logo.png"
          alt="Saji Catering by IICC"
          className="h-10 sm:h-12 w-auto object-contain transition-opacity duration-300"
          onError={() => setImgError(true)}
        />
      ) : (
        /* Elegant fallback badge with warm gold serif typography */
        <div className="flex items-center">
          <div className="flex items-baseline gap-1.5">
            <span
              className="font-serif italic text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-[#F3E7C4] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent drop-shadow-sm"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              saji
            </span>
            <div className="h-6 w-[1.5px] bg-[#D4AF37]/60 mx-1.5 self-center"></div>
            <div className="flex flex-col leading-none">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#D4AF37] uppercase">
                CATERING
              </span>
              <span className={`text-[9px] sm:text-[10px] font-semibold tracking-wider ${variant === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                by <strong className={variant === 'dark' ? 'text-white' : 'text-[#063694]'}>IICC</strong>
              </span>
            </div>
          </div>
        </div>
      )}

      {showSublabel && (
        <div className="hidden lg:flex flex-col border-l border-slate-300/40 pl-3 leading-tight">
          <span className={`text-[10px] font-semibold tracking-wider uppercase ${variant === 'dark' ? 'text-blue-200' : 'text-[#063694]'}`}>
            Unit Bisnis
          </span>
          <span className={`text-[10px] font-medium ${variant === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
            PT BLST IPB University
          </span>
        </div>
      )}
    </div>
  );
};
