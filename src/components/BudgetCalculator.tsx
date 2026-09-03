import React, { useState, useMemo } from 'react';
import { Calculator, Users, Utensils, Coffee, Check, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/cateringData.ts';

export const BudgetCalculator: React.FC = () => {
  const [eventType, setEventType] = useState<'mealbox' | 'prasmanan' | 'wedding'>('mealbox');
  const [mealPackage, setMealPackage] = useState<number>(35000);
  const [paxCount, setPaxCount] = useState<number>(50);
  const [includeSnackBox, setIncludeSnackBox] = useState<boolean>(true);
  const [snackPrice, setSnackPrice] = useState<number>(25000);
  const [includeMineralWater, setIncludeMineralWater] = useState<boolean>(false);

  const estimatedTotal = useMemo(() => {
    let mainCost = paxCount * mealPackage;
    let snackCost = includeSnackBox ? paxCount * snackPrice : 0;
    let mineralCost = includeMineralWater ? paxCount * 3000 : 0;
    return mainCost + snackCost + mineralCost;
  }, [eventType, mealPackage, paxCount, includeSnackBox, snackPrice, includeMineralWater]);

  const handleSendQuotation = () => {
    let typeName = 'Meal Box';
    if (eventType === 'prasmanan') typeName = 'Prasmanan Gathering / Corporate';
    if (eventType === 'wedding') typeName = 'Prasmanan Wedding';

    const message = encodeURIComponent(
      `Halo Saji Catering by IICC, saya telah menghitung estimasi katering untuk acara kami dengan detail berikut:\n\n` +
      `📌 *Jenis Layanan:* ${typeName}\n` +
      `👥 *Jumlah Tamu (Pax):* ${paxCount} Orang\n` +
      `🍱 *Paket Utama:* Rp ${mealPackage.toLocaleString('id-ID')} / pax\n` +
      `☕ *Snack Box Tambahan:* ${includeSnackBox ? `Ya (Rp ${snackPrice.toLocaleString('id-ID')} / box)` : 'Tidak'}\n` +
      `💧 *Air Mineral Botol Tambahan:* ${includeMineralWater ? 'Ya (Rp 3.000 / botol)' : 'Tidak'}\n` +
      `💰 *Estimasi Total Anggaran:* Rp ${estimatedTotal.toLocaleString('id-ID')}\n\n` +
      `Mohon dibantu pembuatan penawaran resmi (SPH) & ketersediaan tanggal.`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <section id="kalkulator" className="py-20 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-[#042361] to-[#063694] rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                <span>Simulasi Anggaran Acara</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Kalkulator Estimasi Katering
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/90">
                Hitung perkiraan kebutuhan biaya konsumsi untuk rapat kerja, seminar, atau resepsi pesta Anda dalam hitungan detik.
              </p>
            </div>

            {/* Form & Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              
              {/* Left Column: Form Configuration */}
              <div className="space-y-5 text-left">
                {/* 1. Pilih Jenis Acara */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-blue-200">
                    1. Pilih Jenis Layanan Katering
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setEventType('mealbox');
                        setMealPackage(35000);
                      }}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        eventType === 'mealbox'
                          ? 'bg-[#D4AF37] text-slate-950 shadow-md font-bold'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      Meal Box
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEventType('prasmanan');
                        setMealPackage(75000);
                      }}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        eventType === 'prasmanan'
                          ? 'bg-[#D4AF37] text-slate-950 shadow-md font-bold'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      Prasmanan
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEventType('wedding');
                        setMealPackage(125000);
                      }}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        eventType === 'wedding'
                          ? 'bg-[#D4AF37] text-slate-950 shadow-md font-bold'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      Wedding
                    </button>
                  </div>
                </div>

                {/* 2. Pilihan Paket Menu */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-blue-200">
                    2. Pilih Paket Menu Utama
                  </label>
                  {eventType === 'mealbox' && (
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <button
                        onClick={() => setMealPackage(35000)}
                        className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                          mealPackage === 35000 ? 'bg-white text-[#063694] font-bold border-white' : 'border-white/20 hover:bg-white/10'
                        }`}
                      >
                        Paket Rp 35k
                      </button>
                      <button
                        onClick={() => setMealPackage(50000)}
                        className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                          mealPackage === 50000 ? 'bg-white text-[#063694] font-bold border-white' : 'border-white/20 hover:bg-white/10'
                        }`}
                      >
                        Paket Rp 50k (+Sup)
                      </button>
                      <button
                        onClick={() => setMealPackage(75000)}
                        className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                          mealPackage === 75000 ? 'bg-white text-[#063694] font-bold border-white' : 'border-white/20 hover:bg-white/10'
                        }`}
                      >
                        VIP Liwet 75k
                      </button>
                    </div>
                  )}

                  {eventType === 'prasmanan' && (
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        onClick={() => setMealPackage(75000)}
                        className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                          mealPackage === 75000 ? 'bg-white text-[#063694] font-bold border-white' : 'border-white/20 hover:bg-white/10'
                        }`}
                      >
                        Standard 75k/pax
                      </button>
                      <button
                        onClick={() => setMealPackage(95000)}
                        className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                          mealPackage === 95000 ? 'bg-white text-[#063694] font-bold border-white' : 'border-white/20 hover:bg-white/10'
                        }`}
                      >
                        Deluxe 95k/pax
                      </button>
                    </div>
                  )}

                  {eventType === 'wedding' && (
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        onClick={() => setMealPackage(125000)}
                        className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                          mealPackage === 125000 ? 'bg-white text-[#063694] font-bold border-white' : 'border-white/20 hover:bg-white/10'
                        }`}
                      >
                        Royal 125k/pax
                      </button>
                      <button
                        onClick={() => setMealPackage(165000)}
                        className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                          mealPackage === 165000 ? 'bg-white text-[#063694] font-bold border-white' : 'border-white/20 hover:bg-white/10'
                        }`}
                      >
                        Grand Palace 165k/pax
                      </button>
                    </div>
                  )}
                </div>

                {/* 3. Slider Pax / Jumlah Porsi */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-blue-200">
                    <span>3. Jumlah Porsi (Pax)</span>
                    <span className="text-white text-sm font-extrabold bg-white/20 px-3 py-0.5 rounded-full">
                      {paxCount} Pax / Box
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="1000"
                    step="10"
                    value={paxCount}
                    onChange={(e) => setPaxCount(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] h-2 bg-white/20 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-blue-200/70">
                    <span>Min. 20 Pax</span>
                    <span>250 Pax</span>
                    <span>500 Pax</span>
                    <span>1.000+ Pax</span>
                  </div>
                </div>

                {/* 4. Add-on Checkbox */}
                <div className="pt-2 border-t border-white/10 space-y-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-blue-200 block">
                    4. Tambahan / Add-ons:
                  </label>

                  <label className="flex items-center gap-3 text-xs text-white cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={includeSnackBox}
                      onChange={(e) => setIncludeSnackBox(e.target.checked)}
                      className="w-4 h-4 rounded accent-[#D4AF37]"
                    />
                    <span>Sertakan Custom Snack Box (+Rp 25.000/box)</span>
                  </label>

                  <label className="flex items-center gap-3 text-xs text-white cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={includeMineralWater}
                      onChange={(e) => setIncludeMineralWater(e.target.checked)}
                      className="w-4 h-4 rounded accent-[#D4AF37]"
                    />
                    <span>Air Mineral Botol 330ml (+Rp 3.000/botol)</span>
                  </label>
                </div>

              </div>

              {/* Right Column: Live Calculation Summary Card */}
              <div className="bg-white text-slate-900 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-6 h-full">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Ringkasan Estimasi
                    </span>
                    <span className="text-xs font-bold text-[#063694] bg-blue-50 px-2.5 py-1 rounded-full">
                      {paxCount} Orang
                    </span>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Menu Utama ({paxCount}x @Rp {mealPackage.toLocaleString('id-ID')}):</span>
                      <span className="font-semibold text-slate-800">
                        Rp {(paxCount * mealPackage).toLocaleString('id-ID')}
                      </span>
                    </div>

                    {includeSnackBox && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Snack Box ({paxCount}x @Rp {snackPrice.toLocaleString('id-ID')}):</span>
                        <span className="font-semibold text-slate-800">
                          Rp {(paxCount * snackPrice).toLocaleString('id-ID')}
                        </span>
                      </div>
                    )}

                    {includeMineralWater && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Air Mineral ({paxCount}x @Rp 3.000):</span>
                        <span className="font-semibold text-slate-800">
                          Rp {(paxCount * 3000).toLocaleString('id-ID')}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t-2 border-dashed border-slate-200">
                    <div className="text-xs text-slate-400 font-medium">Perkiraan Total Investasi:</div>
                    <div className="text-2xl sm:text-3xl font-black text-[#063694] tracking-tight mt-0.5">
                      Rp {estimatedTotal.toLocaleString('id-ID')}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      *Estimasi belum termasuk PPN/Pajak resmi &amp; penyesuaian khusus.
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSendQuotation}
                  type="button"
                  className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] active:scale-98 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Dapatkan Penawaran Resmi via WhatsApp</span>
                </button>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
