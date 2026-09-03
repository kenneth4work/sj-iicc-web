import React from 'react';
import { CheckCircle2, Award, Utensils, MessageCircle, Sparkles, ChevronRight, Eye } from 'lucide-react';
import { companyInfo } from '../data/cateringData.ts';

export interface MenuCardProps {
  id: string;
  name: string;
  category: string;
  priceDisplay: string;
  subtitle?: string;
  minOrder?: string;
  image: string;
  badge?: string;
  description?: string;
  features: string[];
  variantsCount?: number;
  variantType?: 'box35k' | 'box50k' | 'prasmanan' | 'snack' | null;
  onOpenVariants?: (type: 'box35k' | 'box50k' | 'prasmanan' | 'snack', title: string, price: string) => void;
  onSelect?: () => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  name,
  category,
  priceDisplay,
  subtitle,
  minOrder,
  image,
  badge,
  description,
  features,
  variantsCount,
  variantType,
  onOpenVariants,
  onSelect
}) => {
  const handleOrder = () => {
    const text = encodeURIComponent(
      `Halo Saji Catering by IICC, saya ingin bertanya dan memesan paket *${name}* (${priceDisplay}). Mohon informasi pemesanan dan jadwal ketersediaan.`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
      
      {/* Top Product Image Banner */}
      <div className="relative h-52 w-full overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={name}
          className="h-52 w-full object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

        {/* Floating Badge */}
        {badge && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#063694] font-bold text-xs px-3 py-1 rounded-full shadow border border-white/50">
            {badge}
          </div>
        )}

        {/* Category & Min Order Tag */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="bg-[#063694]/80 backdrop-blur-xs px-2.5 py-1 rounded-md font-medium text-[11px]">
            {category}
          </span>
          {minOrder && (
            <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md font-medium text-[11px]">
              {minOrder}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          
          {/* Package Title + Gold Accent Icon */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#063694] transition-colors leading-tight">
                {name}
              </h3>
              {subtitle && (
                <p className="text-xs text-[#64748B] mt-0.5">{subtitle}</p>
              )}
            </div>
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
              <Award className="w-4 h-4 text-[#D4AF37]" />
            </div>
          </div>

          {/* Price display */}
          <div className="flex items-baseline gap-1 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-500 font-medium">Investasi:</span>
            <span className="text-lg font-extrabold text-[#063694] tracking-tight">
              {priceDisplay}
            </span>
          </div>

          {/* Description */}
          {description && (
            <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
              {description}
            </p>
          )}

          {/* Dish List: Vertical list with royal blue checkmark */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Highlight &amp; Fitur Layanan:
            </span>
            <ul className="space-y-1.5">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-[#063694] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          {variantsCount && variantType && variantType !== 'snack' && onOpenVariants ? (
            <button
              onClick={() => onOpenVariants(variantType, name, priceDisplay)}
              type="button"
              className="w-full py-2 px-3 rounded-xl border border-blue-200 text-[#063694] bg-blue-50/50 hover:bg-blue-100/60 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Lihat Semua {variantsCount} Pilihan Menu (Menu A - N)</span>
            </button>
          ) : null}

          <button
            onClick={onSelect || handleOrder}
            type="button"
            className="w-full bg-[#063694] hover:bg-[#042361] active:scale-98 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Pesan Paket Ini</span>
            <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
          </button>
        </div>

      </div>

    </div>
  );
};
