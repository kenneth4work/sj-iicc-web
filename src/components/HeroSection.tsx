import React from 'react';
import { ArrowDown, Download, Award, ShieldCheck, Utensils, Star, CheckCircle, MapPin } from 'lucide-react';
import { companyInfo } from '../data/cateringData.ts';
import snackBoxHeroImg from '../assets/images/regenerated_image_1788492937077.png';

interface HeroSectionProps {
  onOpenCatalog: () => void;
  onScrollToMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCatalog, onScrollToMenu }) => {
  return (
    <section
      id="beranda"
      className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-[#F8FAFC] to-[#F8FAFC]"
    >
      {/* Subtle Background Geometric Glow */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 -translate-x-1/2 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Value Prop & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Tagline Chip */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#063694] border border-blue-200/70 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#063694] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                Official Catering of IPB International Convention Center
              </span>
            </div>

            {/* Headline H1 */}
            <h1
              id="hero-headline"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Elegan, Higienis, &amp; <br />
              <span className="bg-gradient-to-r from-[#063694] via-[#042361] to-[#063694] bg-clip-text text-transparent">
                Berstandar IICC IPB
              </span>
            </h1>

            {/* Subtitle */}
            <p
              id="hero-subtitle"
              className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl font-normal"
            >
              Layanan katering profesional di bawah naungan <strong>IPB International Convention Center (IICC)</strong>, unit usaha milik <strong>BLST Holding Company of IPB</strong>. Menghadirkan sajian Nusantara &amp; Internasional terbaik untuk jamuan korporat eksekutif, acara kenegaraan, dan pesta pernikahan berkelas.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2 rounded-xl border border-slate-200/60 shadow-xs">
                <CheckCircle className="w-4 h-4 text-[#063694] shrink-0" />
                <span>100% Halal &amp; Higienis</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2 rounded-xl border border-slate-200/60 shadow-xs">
                <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Executive Chef IICC</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2 rounded-xl border border-slate-200/60 shadow-xs col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Botani Square Bogor</span>
              </div>
            </div>

            {/* CTA Button Group */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA (Official Blue Theme + Gold Arrow) */}
              <button
                id="hero-primary-cta"
                onClick={onScrollToMenu}
                type="button"
                className="bg-[#063694] hover:bg-[#042361] active:scale-98 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-3 transition-all duration-200 group cursor-pointer"
              >
                <span>Lihat Pilihan Menu</span>
                <ArrowDown className="text-[#D4AF37] w-4 h-4 transition-transform group-hover:translate-y-1" />
              </button>

              {/* Secondary CTA (Download PDF Catalog) */}
              <button
                id="hero-download-catalog-cta"
                onClick={onOpenCatalog}
                type="button"
                className="border-2 border-slate-200 bg-white text-slate-700 hover:border-[#063694] hover:text-[#063694] hover:bg-blue-50/40 px-6 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#063694]" />
                <span>Unduh Katalog Menu (PDF)</span>
              </button>
            </div>

            {/* Quality Commitment Quote */}
            <div className="pt-2 border-l-2 border-[#D4AF37] pl-3 italic text-xs text-slate-500 max-w-xl">
              &ldquo;{companyInfo.quoteMotto}&rdquo;
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase (Asymmetric Grid) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card (Buffet & Banquet Excellence) */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=85"
                  alt="Prasmanan Buffet Saji Catering by IICC"
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042361]/85 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center gap-1.5 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-1">
                    <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    <span>Executive Buffet Setup</span>
                  </div>
                  <h3 className="text-lg font-bold">Prasmanan &amp; Banquet Standar Hotel</h3>
                  <p className="text-xs text-blue-100/90 line-clamp-1">
                    Peralatan chafing dish stainless mewah &amp; dekorasi buffet elegan
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Cards */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                
                {/* Bento / Meal Box Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white group">
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
                    alt="Meal Box Saji Catering"
                    className="w-full h-32 sm:h-36 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                    <span className="text-[10px] font-bold text-[#E5C158] uppercase">Meal Box</span>
                    <span className="text-xs font-bold leading-tight">Mulai Rp 35.000</span>
                  </div>
                </div>

                {/* Custom Snack Box Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white group">
                  <img
                    src={snackBoxHeroImg}
                    alt="Snack Box Saji Catering"
                    className="w-full h-32 sm:h-36 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                    <span className="text-[10px] font-bold text-[#E5C158] uppercase">25+ Snack Pilihan</span>
                    <span className="text-xs font-bold leading-tight">Mulai Rp 25.000</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge (IICC Certification) */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#063694] flex items-center justify-center text-white shadow-xs">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Jaminan Mutu</div>
                  <div className="text-xs font-bold text-[#063694]">Standar IICC Botani</div>
                </div>
              </div>

              {/* Floating Review Badge */}
              <div className="absolute -bottom-3 -right-3 bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 shadow-xl border border-slate-100 flex items-center gap-2">
                <div className="flex text-[#D4AF37]">
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i} className="text-xs">{s}</span>
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-800">4.9/5.0</span>
                <span className="text-[10px] text-slate-500">Corporate Review</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
