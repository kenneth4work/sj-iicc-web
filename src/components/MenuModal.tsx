import React, { useState } from 'react';
import { X, CheckCircle2, Utensils, MessageCircle, Sparkles, PhoneCall, ChevronRight } from 'lucide-react';
import { menuBox35kVariants, menuBox50kVariants, prasmananVariants, companyInfo } from '../data/cateringData.ts';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  variantType: 'box35k' | 'box50k' | 'prasmanan' | 'signature' | null;
  packageTitle?: string;
  packagePrice?: string;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  variantType,
  packageTitle = 'Daftar Pilihan Menu',
  packagePrice = ''
}) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  if (!isOpen || !variantType) return null;

  let variantsList = menuBox35kVariants;
  let typeLabel = 'Meal Box Paket Rp 35.000 (14 Pilihan)';

  if (variantType === 'box50k') {
    variantsList = menuBox50kVariants;
    typeLabel = 'Meal Box Eksekutif Rp 50.000 + Sup/Soto (14 Pilihan)';
  } else if (variantType === 'prasmanan') {
    variantsList = prasmananVariants;
    typeLabel = 'Pilihan Set Menu Prasmanan (14 Variasi Menu A - N)';
  }

  const currentVariant = variantsList[selectedVariantIndex] || variantsList[0];

  const handleOrderVariant = (variantCode: string, variantTitle: string) => {
    const text = encodeURIComponent(
      `Halo Saji Catering by IICC, saya tertarik untuk memesan paket *${packageTitle}* dengan pilihan *${variantCode}: ${variantTitle}*. Mohon informasi ketersediaan dan penawaran resminya.`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-100">
        
        {/* Modal Header */}
        <div className="bg-[#063694] text-white p-4 sm:p-6 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-wider uppercase bg-[#D4AF37] text-slate-900 px-2.5 py-0.5 rounded-full">
                Katalog Menu Booklet IICC
              </span>
              <span className="text-xs text-blue-200">{packagePrice}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{packageTitle}</h2>
            <p className="text-xs text-blue-100/90">{typeLabel}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Tutup Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body: Left menu selector & Right menu detail */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          
          {/* Variant Selector List (Menu A to N) */}
          <div className="md:col-span-5 bg-slate-50 border-r border-slate-200 overflow-y-auto max-h-[50vh] md:max-h-[60vh] p-3 space-y-1.5 divide-y divide-slate-100">
            <div className="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Pilih Varian Menu (A - N)
            </div>
            {variantsList.map((item, idx) => {
              const isSelected = selectedVariantIndex === idx;
              return (
                <button
                  key={item.code}
                  onClick={() => setSelectedVariantIndex(idx)}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between text-xs sm:text-sm ${
                    isSelected
                      ? 'bg-[#063694] text-white shadow-md font-semibold'
                      : 'text-slate-700 hover:bg-slate-200/60'
                  }`}
                >
                  <div className="space-y-0.5 pr-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-md font-bold ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-[#063694]'
                      }`}>
                        {item.code}
                      </span>
                      <span className="line-clamp-1 font-medium">{item.title}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Variant Detail Panel */}
          <div className="md:col-span-7 p-6 overflow-y-auto max-h-[50vh] md:max-h-[60vh] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#063694] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  {currentVariant.code} - Saji Catering
                </span>
                {currentVariant.highlight && (
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                    {currentVariant.highlight}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-slate-900">{currentVariant.title}</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Diproses secara higienis menggunakan bahan segar berkualitas tinggi di dapur berstandar IICC.
                </p>
              </div>

              {/* Dish Items Breakdown */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2.5">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-[#063694]" />
                  Komposisi Sajian Lengkap:
                </h4>
                <ul className="space-y-2">
                  {currentVariant.items.map((dish, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#063694] shrink-0 mt-0.5" />
                      <span>{dish}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Packaging note */}
              <div className="text-xs text-slate-500 bg-blue-50/50 p-3 rounded-xl border border-blue-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Termasuk sendok, garpu, tisu higienis, dan kotak bento tebal eksklusif.</span>
              </div>
            </div>

            {/* Direct Order Button */}
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => handleOrderVariant(currentVariant.code, currentVariant.title)}
                className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Pesan {currentVariant.code} via WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
