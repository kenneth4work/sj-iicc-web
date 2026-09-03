import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSublabel?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', showSublabel = true }) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Brand Logomark - Exact Font & Proportions without background */}
      <div className="flex items-center">
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Selector 1: 'saji' brand wordmark in high-contrast editorial serif */}
          <span className="flex items-center h-8 sm:h-9">
            <svg
              viewBox="0 0 102 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-auto drop-shadow-sm select-none"
              aria-label="saji"
            >
              <defs>
                <linearGradient id={`saji-gold-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  {isLight ? (
                    <>
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="50%" stopColor="#B8860B" />
                      <stop offset="100%" stopColor="#8C6207" />
                    </>
                  ) : (
                    <>
                      <stop offset="0%" stopColor="#FDE6B0" />
                      <stop offset="35%" stopColor="#E5C158" />
                      <stop offset="70%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#AA8012" />
                    </>
                  )}
                </linearGradient>
              </defs>
              <g fill={`url(#saji-gold-${variant})`}>
                {/* Lowercase 's' with teardrop ball terminals and high-contrast Didone spine */}
                <path d="M23 21.5a2.8 2.8 0 1 1-5.6 0 2.8 2.8 0 0 1 5.6 0zm-3.2-2.5c-1.2-.8-2.8-1.4-4.6-1.4-4.8 0-8.6 3.2-8.6 7.5 0 3.8 2.4 6.2 6.8 8.2l2.6 1.1c3.8 1.6 5.4 3.4 5.4 6 0 3.6-3.4 6.2-7.8 6.2-3.4 0-6.1-1.4-7.4-3.6a2.8 2.8 0 1 1 3.8-3.4c.8.9 2 1.4 3.6 1.4 3 0 5-1.6 5-3.8 0-2.2-1.4-3.6-4.8-5.1l-2.6-1.2C6.8 28.8 5 26.6 5 23.4c0-4.6 4-7.8 9.6-7.8 2.8 0 5.4.8 7.2 2.2z" />
                
                {/* Single-storey lowercase 'a' with oval bowl and clean vertical stem */}
                <path d="M52.5 17.5v5.8c-1.8-3.8-5.8-6.2-10.8-6.2-8.4 0-14.2 6.8-14.2 15.4s5.8 15.4 14.2 15.4c5 0 9-2.4 10.8-6v4.4c0 .8.6 1.4 1.5 1.4 1.2 0 3.2-.8 4.6-2l-.8-1.5c-1 .6-2 .8-2.6.7-.4-.1-.7-.6-.7-1.7V18.5c0-.9-.8-1.3-2-1zM42.2 19.8c6.2 0 10.3 5.4 10.3 12.8s-4.1 12.8-10.3 12.8c-6.2 0-10.1-5.4-10.1-12.8s3.9-12.8 10.1-12.8z" />
                
                {/* Lowercase 'j' with standalone circular dot (tittle) and elongated sweeping tail */}
                <circle cx="69" cy="8.5" r="3.4" />
                <path d="M66.5 17.5h5.4v30.5c0 7.4-3.8 13.2-9.8 15.6-3 1.2-6.2 1-8.8-.4l.9-2.2c2 1 4.4 1.1 6.8.2 4.2-1.7 6.6-6.4 6.6-12.3V18.6c0-.9-.7-1.1-.9-1.1z" />
                
                {/* Lowercase 'i' with matching circular dot (tittle) and foot terminal */}
                <circle cx="82.5" cy="8.5" r="3.4" />
                <path d="M78 17.5h8.8v2.2h-2.6v25.8h2.8v2.2h-9.2v-2.2h2.8V19.7H78z" />
              </g>
            </svg>
          </span>

          {/* Vertical divider line */}
          <div
            className={`h-6 sm:h-7 w-[1.5px] self-center opacity-85 ${
              isLight
                ? 'bg-gradient-to-b from-[#D4AF37] to-[#8C6207]'
                : 'bg-gradient-to-b from-[#F5E2B3] via-[#D4AF37] to-[#AA8012]'
            }`}
          ></div>

          {/* Right typography block */}
          <div className="flex flex-col justify-center leading-none select-none pl-0.5">
            {/* Selector 2: CATERING in geometric uppercase with wide letter-spacing */}
            <span
              className={`text-[11px] sm:text-[13px] font-bold tracking-[0.28em] sm:tracking-[0.32em] uppercase ${
                isLight
                  ? 'bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#8C6207] bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-[#FCEECB] via-[#E5C158] to-[#AA8012] bg-clip-text text-transparent'
              }`}
              style={{ fontFamily: "'Montserrat', 'Plus Jakarta Sans', sans-serif" }}
            >
              CATERING
            </span>

            {/* Selector 4: by IICC with bold IICC */}
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.18em] font-medium mt-1 flex items-baseline gap-1 ${
                isLight ? 'text-[#8C6207]' : 'text-[#E5C158]'
              }`}
              style={{ fontFamily: "'Montserrat', 'Plus Jakarta Sans', sans-serif" }}
            >
              by{' '}
              {/* Selector 3: IICC */}
              <strong
                className={`font-extrabold tracking-[0.2em] ${
                  isLight ? 'text-[#063694]' : 'text-[#F9ECCF]'
                }`}
              >
                IICC
              </strong>
            </span>
          </div>
        </div>
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
