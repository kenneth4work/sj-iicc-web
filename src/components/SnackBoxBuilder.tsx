import React, { useState, useMemo } from 'react';
import { CheckCircle2, Sparkles, ShoppingBag, RotateCcw, MessageCircle, Heart, Plus, Minus, Info } from 'lucide-react';
import { snackItemsData, SnackItem, companyInfo } from '../data/cateringData.ts';

export const SnackBoxBuilder: React.FC = () => {
  const [selectedSnackIds, setSelectedSnackIds] = useState<string[]>(['snack-m-1', 'snack-a-3', 'snack-k-1']);
  const [boxQuantity, setBoxQuantity] = useState<number>(30);
  const [activeTab, setActiveTab] = useState<'all' | 'manis' | 'asin' | 'kletikan'>('all');

  const manisItems = useMemo(() => snackItemsData.filter((s) => s.category === 'manis'), []);
  const asinItems = useMemo(() => snackItemsData.filter((s) => s.category === 'asin'), []);
  const kletikanItems = useMemo(() => snackItemsData.filter((s) => s.category === 'kletikan'), []);

  const selectedSnacks = useMemo(() => {
    return snackItemsData.filter((s) => selectedSnackIds.includes(s.id));
  }, [selectedSnackIds]);

  const toggleSnack = (id: string) => {
    if (selectedSnackIds.includes(id)) {
      setSelectedSnackIds(selectedSnackIds.filter((item) => item !== id));
    } else {
      setSelectedSnackIds([...selectedSnackIds, id]);
    }
  };

  const resetSelection = () => {
    setSelectedSnackIds([]);
  };

  const selectPopularCombo = () => {
    // 1 Manis, 1 Asin, 1 Kletikan (Klasik IICC)
    setSelectedSnackIds(['snack-m-5', 'snack-a-3', 'snack-k-5']);
  };

  // Estimate price: Standard 3 items ~ Rp 25.000 / box. Each additional item + Rp 7.000.
  const pricePerBox = useMemo(() => {
    const count = selectedSnackIds.length;
    if (count <= 3) return 25000;
    return 25000 + (count - 3) * 7000;
  }, [selectedSnackIds.length]);

  const totalEstimated = useMemo(() => {
    return pricePerBox * boxQuantity;
  }, [pricePerBox, boxQuantity]);

  const handleWhatsAppOrder = () => {
    const itemsList = selectedSnacks.map((s, idx) => `${idx + 1}. ${s.name} (${s.categoryLabel})`).join('\n');
    const message = encodeURIComponent(
      `Halo Saji Catering by IICC, saya ingin memesan *Custom Snack Box* dengan rincian berikut:\n\n` +
      `📦 *Jumlah Pesanan:* ${boxQuantity} Box\n` +
      `🍽️ *Pilihan Snack (${selectedSnackIds.length} item per box):*\n${itemsList}\n\n` +
      `💰 *Estimasi Harga:* Rp ${pricePerBox.toLocaleString('id-ID')} / Box (Total: Rp ${totalEstimated.toLocaleString('id-ID')})\n\n` +
      `Mohon konfirmasi ketersediaan dan invoice resminya.`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  const renderCategoryGrid = (title: string, subtitle: string, items: SnackItem[], badgeBg: string) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${badgeBg}`} />
            <span>{title}</span>
            <span className="text-xs font-normal text-slate-500">({items.length} pilihan)</span>
          </h3>
          <p className="text-xs text-slate-500">{subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {items.map((item) => {
          const isSelected = selectedSnackIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleSnack(item.id)}
              className={`flex flex-col items-center text-center p-3 rounded-2xl cursor-pointer transition-all duration-200 select-none group border ${
                isSelected
                  ? 'bg-blue-50/70 border-[#063694] shadow-md ring-2 ring-[#063694]/20'
                  : 'bg-white border-slate-200/80 hover:border-[#063694]/50 hover:bg-slate-50/80 shadow-2xs'
              }`}
            >
              {/* Circular Dish Frame matching specification */}
              <div className="relative w-24 h-24 rounded-full border-2 border-slate-200 hover:border-[#063694] overflow-hidden group mb-2.5 transition-all shadow-inner">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                    isSelected ? 'brightness-90' : ''
                  }`}
                  loading="lazy"
                />

                {/* State: When checked, display green/royal checkmark overlay */}
                {isSelected && (
                  <div className="absolute inset-0 bg-[#063694]/40 backdrop-blur-[1px] flex items-center justify-center transition-all animate-scaleIn">
                    <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Snack Name & Category Tag */}
              <div className="w-full">
                <span
                  className={`text-xs font-bold block leading-tight line-clamp-2 transition-colors ${
                    isSelected ? 'text-[#063694]' : 'text-slate-800 group-hover:text-[#063694]'
                  }`}
                >
                  {item.name}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block truncate">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Check Indicator Pill */}
              <div className="mt-2">
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-semibold transition-colors ${
                    isSelected
                      ? 'bg-[#063694] text-white'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                  }`}
                >
                  {isSelected ? 'Terpilih' : '+ Pilih'}
                </span>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="snack-box" className="py-20 sm:py-28 bg-white relative border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ecfdf5] text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Snack Box Builder</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Susun Kotak Snack Impian Anda <br />
            <span className="text-[#063694]">Bebas Kombinasi Sesuai Selera</span>
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Mulai dari <strong>Rp 25.000 / Box</strong> (Non-Wedding). Pilih kombinasi favorit Anda dari 25 pilihan pastry manis lembut, snack asin gurih, dan kletikan renyah khas Bogor.
          </p>

          {/* Category Tabs & Quick Action buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#063694] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Semua (25 Pilihan)
            </button>
            <button
              onClick={() => setActiveTab('manis')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'manis'
                  ? 'bg-[#063694] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Snack Manis (10 Item)
            </button>
            <button
              onClick={() => setActiveTab('asin')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'asin'
                  ? 'bg-[#063694] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Snack Asin (10 Item)
            </button>
            <button
              onClick={() => setActiveTab('kletikan')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'kletikan'
                  ? 'bg-[#063694] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Kletikan Renyah (5 Item)
            </button>

            <button
              onClick={selectPopularCombo}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Paket Rekomendasi IICC (3 Item)</span>
            </button>

            {selectedSnackIds.length > 0 && (
              <button
                onClick={resetSelection}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Snack Categories Grids */}
        <div className="mt-12 space-y-12">
          {(activeTab === 'all' || activeTab === 'manis') &&
            renderCategoryGrid(
              '1. Pilihan Snack Manis',
              'Pastry spiral, danish pastry, pie, cake lembut, dan brownies cokelat pekat',
              manisItems,
              'bg-amber-500'
            )}

          {(activeTab === 'all' || activeTab === 'asin') &&
            renderCategoryGrid(
              '2. Pilihan Snack Asin',
              'Tahu bakso, risol mayo, sosis solo, kroket, samosa, dan macaroni schotel',
              asinItems,
              'bg-emerald-500'
            )}

          {(activeTab === 'all' || activeTab === 'kletikan') &&
            renderCategoryGrid(
              '3. Pilihan Kletikan',
              'Keripik balado, stik talas Bogor, kacang telur, telur gabus, dan keripik pisang',
              kletikanItems,
              'bg-purple-500'
            )}
        </div>

        {/* Bottom Sticky Summary Bar */}
        <div className="sticky bottom-4 z-40 mt-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-[#063694]/30 p-4 sm:p-5 transition-all">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Left: Selection details */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full lg:w-auto">
              <div className="bg-[#063694] text-white px-3.5 py-1.5 rounded-xl font-extrabold text-sm flex items-center gap-2 shrink-0">
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                <span>{selectedSnackIds.length} Snack Terpilih</span>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 flex-1 truncate">
                {selectedSnacks.length > 0 ? (
                  <span className="font-medium text-slate-800">
                    {selectedSnacks.map((s) => s.name).join(' • ')}
                  </span>
                ) : (
                  <span className="text-slate-400 italic">Silakan klik lingkaran snack di atas untuk memilih item.</span>
                )}
              </div>
            </div>

            {/* Middle: Quantity Controller */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-start border-t lg:border-t-0 pt-2 lg:pt-0 border-slate-100">
              <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
                <button
                  onClick={() => setBoxQuantity(Math.max(10, boxQuantity - 10))}
                  className="w-7 h-7 rounded-lg bg-white text-slate-700 font-bold flex items-center justify-center hover:bg-slate-200 transition-colors"
                  aria-label="Kurangi 10 box"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-bold px-2 text-slate-800 min-w-16 text-center">
                  {boxQuantity} Box
                </span>
                <button
                  onClick={() => setBoxQuantity(boxQuantity + 10)}
                  className="w-7 h-7 rounded-lg bg-white text-slate-700 font-bold flex items-center justify-center hover:bg-slate-200 transition-colors"
                  aria-label="Tambah 10 box"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Estimated Price */}
              <div className="text-right">
                <div className="text-[10px] text-slate-400 font-medium">Estimasi Total ({boxQuantity} Box):</div>
                <div className="text-base sm:text-lg font-extrabold text-[#063694]">
                  Rp {totalEstimated.toLocaleString('id-ID')}
                </div>
              </div>

              {/* WhatsApp Direct Order Button */}
              <button
                onClick={handleWhatsAppOrder}
                disabled={selectedSnackIds.length === 0}
                className={`py-3 px-5 sm:px-6 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer shrink-0 ${
                  selectedSnackIds.length > 0
                    ? 'bg-[#25D366] hover:bg-[#20ba5a] text-white hover:shadow-lg active:scale-98'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Pesan Custom via WA</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
