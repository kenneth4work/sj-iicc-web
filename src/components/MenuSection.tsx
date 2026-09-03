import React, { useState } from 'react';
import { Utensils, Award, Sparkles, Filter, ChevronRight, PhoneCall, Star } from 'lucide-react';
import { MenuCard } from './MenuCard.tsx';
import { MenuModal } from './MenuModal.tsx';
import { cateringPackagesSummary, specialtyMenuBoxes, companyInfo } from '../data/cateringData.ts';

interface MenuSectionProps {
  onScrollToSnackBuilder: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onScrollToSnackBuilder }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'Meal Box' | 'Prasmanan' | 'Signature'>('all');
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    variantType: 'box35k' | 'box50k' | 'prasmanan' | 'snack' | null;
    title: string;
    price: string;
  }>({
    isOpen: false,
    variantType: null,
    title: '',
    price: '',
  });

  const filterTabs = [
    { id: 'all', label: 'Semua Menu' },
    { id: 'Meal Box', label: 'Meal Box (35k & 50k)' },
    { id: 'Signature', label: 'Bento & Nasi Nusantara' },
    { id: 'Prasmanan', label: 'Prasmanan Buffet' },
  ];

  const handleOpenVariants = (
    type: 'box35k' | 'box50k' | 'prasmanan' | 'snack',
    title: string,
    price: string
  ) => {
    if (type === 'snack') {
      onScrollToSnackBuilder();
      return;
    }
    setModalState({
      isOpen: true,
      variantType: type,
      title,
      price,
    });
  };

  const handleOrderSpecialty = (name: string, price: string) => {
    const text = encodeURIComponent(
      `Halo Saji Catering by IICC, saya ingin memesan menu signature *${name}* (${price}). Mohon info pemesanan dan ketersediaan.`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <section id="meal-box" className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#063694] border border-blue-200/70 text-xs font-bold uppercase tracking-wider">
            <Utensils className="w-3.5 h-3.5 text-[#063694]" />
            <span>Pilihan Menu Katering Resmi</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Pilihan Paket Menu <br className="hidden sm:block" />
            <span className="text-[#063694]">Meal Box &amp; Prasmanan</span>
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Dari rapat harian direksi hingga gala dinner akbar ribuan tamu. Nikmati hidangan lezat berstandar IPB International Convention Center yang diolah higienis dan teruji rasa.
          </p>

          {/* Filter Tabs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`filter-tab-${tab.id.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setActiveCategory(tab.id as any)}
                  type="button"
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#063694] text-white shadow-md scale-102'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80 shadow-2xs'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Packages Grid (Meal Box & Prasmanan) */}
        {(activeCategory === 'all' || activeCategory === 'Meal Box' || activeCategory === 'Prasmanan') && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {cateringPackagesSummary
              .filter((pkg) => {
                if (activeCategory === 'all') return pkg.category !== 'Snack Box';
                return pkg.category === activeCategory;
              })
              .map((pkg) => (
                <MenuCard
                  key={pkg.id}
                  id={pkg.id}
                  name={pkg.name}
                  category={pkg.category}
                  priceDisplay={pkg.priceDisplay}
                  subtitle={pkg.subtitle}
                  minOrder={pkg.minOrder}
                  image={pkg.image}
                  badge={pkg.badge}
                  description={pkg.description}
                  features={pkg.features}
                  variantsCount={pkg.variantsCount}
                  variantType={pkg.variantType as any}
                  onOpenVariants={handleOpenVariants}
                />
              ))}
          </div>
        )}

        {/* Specialty Bento & Indonesian Heritage Section */}
        {(activeCategory === 'all' || activeCategory === 'Signature') && (
          <div className="mt-20 pt-12 border-t border-slate-200/80">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                  Pilihan Bento Spesial (Halaman 5 Booklet)
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Menu Box Signature &amp; Nasi Tradisional
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                  Sajian bento box tematik nusantara &amp; internasional lengkap dengan lauk pilihan dan puding dessert penutup.
                </p>
              </div>

              <div className="text-xs font-semibold text-slate-500 bg-white px-4 py-2 rounded-xl border border-slate-200 self-start sm:self-auto shadow-2xs">
                Kemasan Eksklusif + Dessert Puding
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialtyMenuBoxes.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 right-2.5 bg-white/95 text-[#063694] font-bold text-[11px] px-2.5 py-0.5 rounded-full shadow">
                        {item.priceDisplay}
                      </div>
                      {item.badge && (
                        <div className="absolute bottom-2.5 left-2.5 bg-[#063694]/90 text-white font-semibold text-[10px] px-2 py-0.5 rounded-md">
                          {item.badge}
                        </div>
                      )}
                    </div>

                    <div className="p-4 space-y-2">
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-[#063694] transition-colors line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="pt-2 border-t border-slate-100 space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Isi Menu:</span>
                        <ul className="text-[11px] text-slate-600 space-y-0.5">
                          {item.dishes.slice(0, 3).map((d, i) => (
                            <li key={i} className="flex items-center gap-1.5 line-clamp-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#063694] shrink-0" />
                              <span>{d}</span>
                            </li>
                          ))}
                          {item.dishes.length > 3 && (
                            <li className="text-[10px] text-slate-400 italic">
                              + {item.dishes.length - 3} lauk &amp; puding penutup
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <button
                      onClick={() => handleOrderSpecialty(item.name, item.priceDisplay)}
                      type="button"
                      className="w-full py-2.5 px-3 rounded-xl bg-[#063694] hover:bg-[#042361] text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Pesan Menu Ini</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* Prasmanan Highlight Banner */}
        <div id="prasmanan" className="mt-20 bg-gradient-to-r from-[#042361] via-[#063694] to-[#042361] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Buffet &amp; Wedding Catering</span>
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Paket Prasmanan Non-Wedding &amp; Royal Wedding
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed max-w-2xl">
                Tersedia 14 varian menu prasmanan lengkap (Menu A - N). Setiap paket sudah mencakup hidangan sup/soto pembuka, 2 protein utama (daging, ayam, atau ikan), tumis sayuran, buah potong segar, kerupuk, sambal, serta perlengkapan pemanas chafing dish mewah dan tenaga pramusaji terlatih.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => handleOpenVariants('prasmanan', 'Pilihan Menu Prasmanan Lengkap (Menu A - N)', 'Mulai Rp 75.000 / PAX')}
                  type="button"
                  className="bg-[#D4AF37] hover:bg-[#c49f2e] text-[#042361] font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Buka 14 Variasi Menu Prasmanan</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent('Halo Saji Catering, saya ingin konsultasi paket prasmanan untuk acara saya.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/40 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                  <span>Konsultasi Ballroom &amp; Menu</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-blue-200">
                Kapasitas &amp; Ketentuan
              </div>
              <div className="text-2xl font-black text-[#D4AF37]">
                Mulai 50 PAX
              </div>
              <p className="text-xs text-blue-100">
                Dapat disajikan langsung di Ballroom IPB International Convention Center Botani Square atau diantar ke lokasi gedung/kantor Anda.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Menu Detail Modal for exploring 14 variants */}
      <MenuModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        variantType={modalState.variantType}
        packageTitle={modalState.title}
        packagePrice={modalState.price}
      />
    </section>
  );
};
