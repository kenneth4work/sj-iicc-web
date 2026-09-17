import React, { useState, useMemo } from 'react';
import {
  Flame,
  Activity,
  HeartPulse,
  Sparkles,
  Info,
  CheckCircle2,
  Copy,
  Check,
  MessageCircle,
  RotateCcw,
  Utensils,
  Coffee,
  ChevronRight,
  TrendingUp,
  Apple,
  Salad
} from 'lucide-react';
import {
  presetMealNutritionData,
  componentNutritionList,
  eventProfiles,
  PresetMenuNutrition,
  NutritionInfo
} from '../data/nutritionData.ts';
import { companyInfo } from '../data/cateringData.ts';

export const CaloriesCalculator: React.FC = () => {
  // Mode: 'preset' (Paket Resmi) or 'diy' (Racik Piring Kustom)
  const [calculatorMode, setCalculatorMode] = useState<'preset' | 'diy'>('preset');

  // Preset Mode States
  const [selectedPresetId, setSelectedPresetId] = useState<string>(presetMealNutritionData[0].id);
  const [presetCategoryFilter, setPresetCategoryFilter] = useState<'all' | 'box35k' | 'box50k' | 'specialty' | 'prasmanan'>('all');
  const [includeExtraSnack, setIncludeExtraSnack] = useState<boolean>(false);
  const [extraSnackId, setExtraSnackId] = useState<string>('sn-lemper');
  const [includeExtraDrink, setIncludeExtraDrink] = useState<boolean>(false);
  const [extraDrinkId, setExtraDrinkId] = useState<string>('dr-air-mineral');
  const [paxCount, setPaxCount] = useState<number>(30);

  // DIY Mode States (Array of selected component IDs)
  const [selectedComponentIds, setSelectedComponentIds] = useState<string[]>([
    'c-nasi-putih',
    'p-ayam-bakar',
    's-brokoli-tofu',
    'pl-buah-potong',
    'dr-air-mineral'
  ]);

  // Selected Event Target Benchmark
  const [selectedEventProfileId, setSelectedEventProfileId] = useState<string>('board-meeting');

  // Copy Feedback State
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  // Filtered preset packages
  const filteredPresets = useMemo(() => {
    if (presetCategoryFilter === 'all') return presetMealNutritionData;
    return presetMealNutritionData.filter(p => p.category === presetCategoryFilter);
  }, [presetCategoryFilter]);

  // Current selected preset object
  const currentPreset = useMemo(() => {
    return presetMealNutritionData.find(p => p.id === selectedPresetId) || presetMealNutritionData[0];
  }, [selectedPresetId]);

  // Event Profile Benchmark object
  const currentEventProfile = useMemo(() => {
    return eventProfiles.find(e => e.id === selectedEventProfileId) || eventProfiles[0];
  }, [selectedEventProfileId]);

  // Extra Snack & Drink objects
  const currentExtraSnack = useMemo(() => {
    return componentNutritionList.find(c => c.id === extraSnackId);
  }, [extraSnackId]);

  const currentExtraDrink = useMemo(() => {
    return componentNutritionList.find(c => c.id === extraDrinkId);
  }, [extraDrinkId]);

  // Total Nutrition Calculation
  const totalNutrition: NutritionInfo = useMemo(() => {
    if (calculatorMode === 'preset') {
      const base = { ...currentPreset.nutrition };
      if (includeExtraSnack && currentExtraSnack) {
        base.calories += currentExtraSnack.nutrition.calories;
        base.protein += currentExtraSnack.nutrition.protein;
        base.carbs += currentExtraSnack.nutrition.carbs;
        base.fat += currentExtraSnack.nutrition.fat;
        base.fiber += currentExtraSnack.nutrition.fiber;
      }
      if (includeExtraDrink && currentExtraDrink) {
        base.calories += currentExtraDrink.nutrition.calories;
        base.protein += currentExtraDrink.nutrition.protein;
        base.carbs += currentExtraDrink.nutrition.carbs;
        base.fat += currentExtraDrink.nutrition.fat;
        base.fiber += currentExtraDrink.nutrition.fiber;
      }
      return base;
    } else {
      // DIY Mode: sum of all selected items
      return selectedComponentIds.reduce(
        (acc, id) => {
          const item = componentNutritionList.find(c => c.id === id);
          if (item) {
            acc.calories += item.nutrition.calories;
            acc.protein += item.nutrition.protein;
            acc.carbs += item.nutrition.carbs;
            acc.fat += item.nutrition.fat;
            acc.fiber += item.nutrition.fiber;
          }
          return acc;
        },
        { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
      );
    }
  }, [calculatorMode, currentPreset, includeExtraSnack, currentExtraSnack, includeExtraDrink, currentExtraDrink, selectedComponentIds]);

  // Percentage of Calories from Macros (Protein: 4 kcal/g, Carbs: 4 kcal/g, Fat: 9 kcal/g)
  const macroPercentages = useMemo(() => {
    const totalCals = totalNutrition.calories || 1;
    const proteinCals = totalNutrition.protein * 4;
    const carbsCals = totalNutrition.carbs * 4;
    const fatCals = totalNutrition.fat * 9;

    const pPct = Math.round((proteinCals / totalCals) * 100);
    const cPct = Math.round((carbsCals / totalCals) * 100);
    const fPct = Math.max(0, 100 - (pPct + cPct));

    return { proteinPct: pPct, carbsPct: cPct, fatPct: fPct };
  }, [totalNutrition]);

  // Benchmark Analysis Result
  const benchmarkStatus = useMemo(() => {
    const cals = totalNutrition.calories;
    const min = currentEventProfile.targetCaloriesMin;
    const max = currentEventProfile.targetCaloriesMax;

    if (cals < min - 50) {
      return {
        label: 'Kalori Ringan (Di Bawah Target Rata-Rata)',
        color: 'text-sky-600 bg-sky-50 border-sky-200',
        barColor: 'bg-sky-500',
        pct: Math.min(100, Math.round((cals / max) * 100)),
        note: 'Sangat cocok untuk diet rendah kalori atau rapat santai berdurasi singkat.'
      };
    } else if (cals > max + 60) {
      return {
        label: 'Kalori Padat (Melebihi Rekomendasi Rapat Santai)',
        color: 'text-amber-700 bg-amber-50 border-amber-200',
        barColor: 'bg-amber-500',
        pct: 100,
        note: 'Ideal untuk aktivitas fisik intens atau acara lapangan yang membakar banyak energi.'
      };
    } else {
      return {
        label: 'Optimal & Seimbang (Sesuai Target Acara)',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        barColor: 'bg-emerald-500',
        pct: Math.round(((cals - min) / (max - min)) * 60 + 20),
        note: 'Porsi sangat pas menjaga daya konsentrasi tanpa memicu rasa kantuk (food coma).'
      };
    }
  }, [totalNutrition.calories, currentEventProfile]);

  // Toggle item for DIY Mode
  const toggleDIYItem = (id: string) => {
    setSelectedComponentIds(prev => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // Keep at least one item
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Quick preset loader for DIY mode (Healthy Balanced Plate)
  const applyRecommendedDIYPlate = () => {
    setSelectedComponentIds([
      'c-nasi-merah',
      'p-pepes-ayam',
      's-brokoli-tofu',
      'pl-buah-potong',
      'dr-air-mineral'
    ]);
  };

  // Reset DIY to default
  const resetDIYPlate = () => {
    setSelectedComponentIds([
      'c-nasi-putih',
      'p-ayam-bakar',
      's-brokoli-tofu',
      'pl-buah-potong',
      'dr-air-mineral'
    ]);
  };

  // Handle WhatsApp consultation with detailed nutritional breakdown
  const handleWhatsAppNutrition = () => {
    const mealTitle = calculatorMode === 'preset'
      ? `${currentPreset.code} - ${currentPreset.name} (${currentPreset.categoryLabel})`
      : `Racikan Piring Kustom (${selectedComponentIds.length} item hidangan)`;

    const message = encodeURIComponent(
      `Halo Botani Catering by IICC, saya telah menggunakan *Kalkulator Kalori & Gizi Katering* untuk acara kami:\n\n` +
      `📌 *Menu yang Dihitung:* ${mealTitle}\n` +
      `👥 *Jumlah Peserta (Pax):* ${paxCount} Orang\n` +
      `🎯 *Tipe Acara:* ${currentEventProfile.name}\n\n` +
      `📊 *Rincian Estimasi Nutrisi per Porsi:*\n` +
      `• Energi / Kalori: *${totalNutrition.calories} kcal*\n` +
      `• Protein: *${totalNutrition.protein} g* (${macroPercentages.proteinPct}% kalori)\n` +
      `• Karbohidrat: *${totalNutrition.carbs} g* (${macroPercentages.carbsPct}% kalori)\n` +
      `• Lemak Total: *${totalNutrition.fat} g* (${macroPercentages.fatPct}% kalori)\n` +
      `• Serat Pangan: *${totalNutrition.fiber.toFixed(1)} g*\n` +
      `• Total Kalori Acara (${paxCount} pax): *${(totalNutrition.calories * paxCount).toLocaleString('id-ID')} kcal*\n\n` +
      `Saya ingin berkonsultasi mengenai ketersediaan paket ini dan opsi kustomisasi menu sehat untuk acara kami. Terima kasih!`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  // Copy Summary to Clipboard
  const handleCopySummary = () => {
    const mealTitle = calculatorMode === 'preset'
      ? `${currentPreset.code} - ${currentPreset.name}`
      : `Piring Kustom (${selectedComponentIds.length} item)`;

    const textToCopy =
      `Estimasi Kalori & Nutrisi Botani Catering by IICC\n` +
      `Menu: ${mealTitle}\n` +
      `Kalori: ${totalNutrition.calories} kcal/porsi\n` +
      `Protein: ${totalNutrition.protein}g | Karbohidrat: ${totalNutrition.carbs}g | Lemak: ${totalNutrition.fat}g | Serat: ${totalNutrition.fiber.toFixed(1)}g\n` +
      `Kesesuaian: ${benchmarkStatus.label} untuk ${currentEventProfile.name}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    });
  };

  return (
    <section id="kalkulator-kalori" className="py-20 sm:py-24 bg-white border-b border-slate-200/70 relative">
      {/* Background soft ambient decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold tracking-wide shadow-2xs">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Kalkulator Kalori &amp; Analisis Gizi Katering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063694] tracking-tight">
            Hitung Asupan Kalori &amp; Nutrisi Acara
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Pastikan hidangan rapat, seminar, dan pesta Anda memiliki keseimbangan gizi optimal.
            Pilih paket menu resmi Botani Catering atau racik sendiri komposisi piring untuk melihat estimasi kalori, protein, karbohidrat, dan serat pangan.
          </p>
        </div>

        {/* Main 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Mode Switcher Tabs */}
            <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center gap-1.5 border border-slate-200/80 shadow-2xs">
              <button
                id="btn-mode-preset"
                onClick={() => setCalculatorMode('preset')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  calculatorMode === 'preset'
                    ? 'bg-white text-[#063694] shadow-sm border border-slate-200/70'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <Utensils className="w-4 h-4 text-[#063694]" />
                <span>Pilih Paket Menu Resmi</span>
              </button>

              <button
                id="btn-mode-diy"
                onClick={() => setCalculatorMode('diy')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  calculatorMode === 'diy'
                    ? 'bg-white text-[#063694] shadow-sm border border-slate-200/70'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <Salad className="w-4 h-4 text-emerald-600" />
                <span>Racik Piring Kustom (DIY)</span>
              </button>
            </div>

            {/* TAB 1: PRESET MENU SELECTION */}
            {calculatorMode === 'preset' && (
              <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-5">
                
                {/* Category Filter Pills */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    Kategori Pilihan Paket:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { key: 'all', label: 'Semua Menu' },
                      { key: 'box35k', label: 'Box Rp 35k' },
                      { key: 'box50k', label: 'Box Rp 50k (+Sup)' },
                      { key: 'specialty', label: 'Signature Bento' },
                      { key: 'prasmanan', label: 'Buffet Prasmanan' }
                    ].map(tab => (
                      <button
                        key={tab.key}
                        onClick={() => setPresetCategoryFilter(tab.key as any)}
                        className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all ${
                          presetCategoryFilter === tab.key
                            ? 'bg-[#063694] text-white shadow-2xs'
                            : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preset Menu Dropdown / Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Pilih Varian Hidangan:
                  </label>
                  <select
                    id="preset-menu-select"
                    value={selectedPresetId}
                    onChange={(e) => setSelectedPresetId(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 shadow-2xs focus:ring-2 focus:ring-[#063694] focus:border-[#063694] transition-all"
                  >
                    {filteredPresets.map(preset => (
                      <option key={preset.id} value={preset.id}>
                        {preset.code}: {preset.name} — Rp {preset.price.toLocaleString('id-ID')} ({preset.nutrition.calories} kcal)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Active Preset Preview Card */}
                <div className="bg-white border border-blue-100 rounded-xl p-4 shadow-2xs space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-bold text-[#063694] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                        {currentPreset.categoryLabel}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 mt-1">
                        {currentPreset.code}: {currentPreset.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium italic mt-0.5">
                        &ldquo;{currentPreset.highlight}&rdquo;
                      </p>
                    </div>
                    <span className="text-sm font-extrabold text-[#063694] shrink-0 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
                      Rp {currentPreset.price.toLocaleString('id-ID')}
                    </span>
                  </div>

                  {/* Composition Pills */}
                  <div className="border-t border-slate-100 pt-2.5">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Komposisi Hidangan Lengkap:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {currentPreset.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center text-[11px] bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dietary Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {currentPreset.dietaryTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Optional Add-on Snacks & Drinks */}
                <div className="border-t border-slate-200/80 pt-4 space-y-3">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Tambahan Pelengkap Acara (Opsional):
                  </span>

                  {/* Snack Box Add-on */}
                  <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200">
                    <label className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={includeExtraSnack}
                        onChange={(e) => setIncludeExtraSnack(e.target.checked)}
                        className="w-4 h-4 text-[#063694] rounded-sm focus:ring-[#063694]"
                      />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        + Snack Kudapan Rapat
                      </span>
                    </label>

                    {includeExtraSnack && (
                      <select
                        value={extraSnackId}
                        onChange={(e) => setExtraSnackId(e.target.value)}
                        className="text-xs bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 font-medium text-slate-800 focus:ring-1 focus:ring-[#063694]"
                      >
                        {componentNutritionList.filter(c => c.category === 'snack').map(sn => (
                          <option key={sn.id} value={sn.id}>
                            {sn.name} (+{sn.nutrition.calories} kcal)
                          </option>
                        ))}
                      </select>
                    )}
                  </div>

                  {/* Drink Add-on */}
                  <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200">
                    <label className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={includeExtraDrink}
                        onChange={(e) => setIncludeExtraDrink(e.target.checked)}
                        className="w-4 h-4 text-[#063694] rounded-sm focus:ring-[#063694]"
                      />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        + Minuman Segar
                      </span>
                    </label>

                    {includeExtraDrink && (
                      <select
                        value={extraDrinkId}
                        onChange={(e) => setExtraDrinkId(e.target.value)}
                        className="text-xs bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 font-medium text-slate-800 focus:ring-1 focus:ring-[#063694]"
                      >
                        {componentNutritionList.filter(c => c.category === 'minuman').map(dr => (
                          <option key={dr.id} value={dr.id}>
                            {dr.name} (+{dr.nutrition.calories} kcal)
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: DIY CUSTOM MEAL BUILDER */}
            {calculatorMode === 'diy' && (
              <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-6">
                
                {/* DIY Quick Action Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Pilih Komponen Piring Anda
                    </h4>
                    <p className="text-xs text-slate-500">
                      Centang lauk, sayur, dan pelengkap sesuai selera.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={applyRecommendedDIYPlate}
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Rekomendasi Diet Sehat</span>
                    </button>
                    <button
                      onClick={resetDIYPlate}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-800 bg-white border border-slate-200 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                      title="Reset Pilihan"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Grouped Component Lists */}
                {[
                  { key: 'karbohidrat', title: '1. Karbohidrat Pokok' },
                  { key: 'protein', title: '2. Lauk Utama (Protein)' },
                  { key: 'sayuran_sup', title: '3. Sayuran Hijau & Aneka Sup' },
                  { key: 'pelengkap', title: '4. Pelengkap Tradisional & Buah' },
                  { key: 'snack', title: '5. Snack Rapat (Opsional)' },
                  { key: 'minuman', title: '6. Pilihan Minuman' }
                ].map(group => {
                  const items = componentNutritionList.filter(c => c.category === group.key);
                  return (
                    <div key={group.key} className="space-y-2">
                      <span className="text-xs font-bold text-[#063694] uppercase tracking-wider">
                        {group.title}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {items.map(item => {
                          const isSelected = selectedComponentIds.includes(item.id);
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => toggleDIYItem(item.id)}
                              className={`text-left p-2.5 rounded-xl border transition-all flex items-start justify-between gap-2 cursor-pointer ${
                                isSelected
                                  ? 'bg-blue-50/70 border-[#063694] ring-1 ring-[#063694]/20 shadow-2xs'
                                  : 'bg-white border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <div className="space-y-0.5">
                                <div className="flex items-center gap-1.5">
                                  <div className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0 ${
                                    isSelected ? 'bg-[#063694] border-[#063694] text-white' : 'border-slate-300 bg-white'
                                  }`}>
                                    {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                  </div>
                                  <span className={`text-xs font-bold leading-tight ${
                                    isSelected ? 'text-[#063694]' : 'text-slate-800'
                                  }`}>
                                    {item.name}
                                  </span>
                                </div>
                                <div className="text-[11px] text-slate-500 pl-5">
                                  {item.portion} • P: {item.nutrition.protein}g | C: {item.nutrition.carbs}g
                                </div>
                              </div>
                              <span className={`text-[11px] font-extrabold px-1.5 py-0.5 rounded shrink-0 ${
                                isSelected ? 'bg-[#063694] text-white' : 'bg-slate-100 text-slate-700'
                              }`}>
                                {item.nutrition.calories} kcal
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

              </div>
            )}

            {/* Target Acara (Benchmark Selector) & Pax Slider */}
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#063694]" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Target Aktivitas / Format Acara
                  </h4>
                </div>
                <span className="text-[11px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                  Rekomendasi Gizi
                </span>
              </div>

              {/* Event Profiler Radio Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {eventProfiles.map(profile => {
                  const isCurrent = profile.id === selectedEventProfileId;
                  return (
                    <button
                      key={profile.id}
                      type="button"
                      onClick={() => setSelectedEventProfileId(profile.id)}
                      className={`text-left p-3 rounded-xl border transition-all ${
                        isCurrent
                          ? 'bg-blue-50/80 border-[#063694] ring-1 ring-[#063694]'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold ${isCurrent ? 'text-[#063694]' : 'text-slate-800'}`}>
                          {profile.name}
                        </span>
                        <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                          {profile.targetCaloriesMin} - {profile.targetCaloriesMax} kcal
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                        {profile.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Pax Count Selector */}
              <div className="pt-2 border-t border-slate-200/80">
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="pax-range" className="text-xs font-bold text-slate-700">
                    Jumlah Tamu / Peserta Acara:
                  </label>
                  <span className="text-sm font-extrabold text-[#063694] bg-white px-2.5 py-0.5 rounded-lg border border-slate-200">
                    {paxCount} Orang (Pax)
                  </span>
                </div>
                <input
                  id="pax-range"
                  type="range"
                  min={10}
                  max={300}
                  step={5}
                  value={paxCount}
                  onChange={(e) => setPaxCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#063694]"
                />
                <div className="flex justify-between text-[10px] font-medium text-slate-400 mt-1">
                  <span>10 Pax</span>
                  <span>100 Pax</span>
                  <span>200 Pax</span>
                  <span>300+ Pax</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Calorie & Macro Analytics Dashboard (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            
            {/* Main Scorecard Card */}
            <div className="bg-gradient-to-br from-[#042361] via-[#063694] to-[#0a4bbd] text-white rounded-3xl p-6 sm:p-7 shadow-xl relative overflow-hidden">
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-blue-100 border border-white/20">
                    <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>Ringkasan Nutrisi Lengkap</span>
                  </span>
                  <span className="text-[11px] font-semibold text-blue-200">
                    Per Porsi Hidangan
                  </span>
                </div>

                {/* Big Calorie Display */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-black tracking-tight text-white">
                      {totalNutrition.calories}
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-amber-300">
                      kcal / pax
                    </span>
                  </div>
                  <p className="text-xs text-blue-200/90 font-medium">
                    Total Kebutuhan Acara ({paxCount} pax): <strong className="text-white font-bold">{(totalNutrition.calories * paxCount).toLocaleString('id-ID')} kcal</strong>
                  </p>
                </div>

                {/* Target Benchmark Assessment Pill */}
                <div className={`p-3.5 rounded-2xl border text-xs font-medium space-y-1.5 ${benchmarkStatus.color}`}>
                  <div className="flex items-center gap-2 font-bold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{benchmarkStatus.label}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed opacity-90">
                    {benchmarkStatus.note}
                  </p>
                  
                  {/* Calorie Range Progress Bar */}
                  <div className="w-full bg-black/10 rounded-full h-2 mt-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${benchmarkStatus.barColor}`}
                      style={{ width: `${benchmarkStatus.pct}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold opacity-75 pt-0.5">
                    <span>Target: {currentEventProfile.targetCaloriesMin} kcal</span>
                    <span>Batas: {currentEventProfile.targetCaloriesMax} kcal</span>
                  </div>
                </div>

                {/* Macro Nutrient Grid (Protein, Carbs, Fat, Fiber) */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  
                  {/* Protein */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-200 font-semibold">Protein</span>
                      <span className="text-[10px] font-extrabold bg-blue-400/20 text-blue-200 px-1.5 py-0.5 rounded">
                        {macroPercentages.proteinPct}% Cals
                      </span>
                    </div>
                    <div className="text-2xl font-black text-white">
                      {totalNutrition.protein} <span className="text-xs font-semibold text-blue-200">gram</span>
                    </div>
                    <p className="text-[10px] text-blue-200/80">
                      {totalNutrition.protein >= 30 ? '✓ High Protein' : 'Sedang'}
                    </p>
                  </div>

                  {/* Carbs */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-amber-200 font-semibold">Karbohidrat</span>
                      <span className="text-[10px] font-extrabold bg-amber-400/20 text-amber-200 px-1.5 py-0.5 rounded">
                        {macroPercentages.carbsPct}% Cals
                      </span>
                    </div>
                    <div className="text-2xl font-black text-white">
                      {totalNutrition.carbs} <span className="text-xs font-semibold text-amber-200">gram</span>
                    </div>
                    <p className="text-[10px] text-amber-200/80">
                      Energi aktivitas
                    </p>
                  </div>

                  {/* Fat */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-rose-200 font-semibold">Lemak Total</span>
                      <span className="text-[10px] font-extrabold bg-rose-400/20 text-rose-200 px-1.5 py-0.5 rounded">
                        {macroPercentages.fatPct}% Cals
                      </span>
                    </div>
                    <div className="text-2xl font-black text-white">
                      {totalNutrition.fat} <span className="text-xs font-semibold text-rose-200">gram</span>
                    </div>
                    <p className="text-[10px] text-rose-200/80">
                      {totalNutrition.fat <= 22 ? '✓ Rendah Lemak' : 'Seimbang'}
                    </p>
                  </div>

                  {/* Fiber */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-emerald-200 font-semibold">Serat Pangan</span>
                      <span className="text-[10px] font-extrabold bg-emerald-400/20 text-emerald-200 px-1.5 py-0.5 rounded">
                        Sayur &amp; Buah
                      </span>
                    </div>
                    <div className="text-2xl font-black text-white">
                      {totalNutrition.fiber.toFixed(1)} <span className="text-xs font-semibold text-emerald-200">gram</span>
                    </div>
                    <p className="text-[10px] text-emerald-200/80">
                      {totalNutrition.fiber >= 5.0 ? '✓ Kaya Serat' : 'Standar'}
                    </p>
                  </div>

                </div>

                {/* Macro Ratio Color-Coded Bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-[11px] font-semibold text-blue-100">
                    <span>Distribusi Kalori:</span>
                    <span className="text-[10px] text-blue-200">
                      P: {macroPercentages.proteinPct}% | C: {macroPercentages.carbsPct}% | L: {macroPercentages.fatPct}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden flex">
                    <div
                      style={{ width: `${macroPercentages.proteinPct}%` }}
                      className="bg-blue-400 h-full"
                      title={`Protein: ${macroPercentages.proteinPct}%`}
                    />
                    <div
                      style={{ width: `${macroPercentages.carbsPct}%` }}
                      className="bg-amber-400 h-full"
                      title={`Karbohidrat: ${macroPercentages.carbsPct}%`}
                    />
                    <div
                      style={{ width: `${macroPercentages.fatPct}%` }}
                      className="bg-rose-400 h-full"
                      title={`Lemak: ${macroPercentages.fatPct}%`}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-blue-200 pt-0.5">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" /> Protein
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> Karbohidrat
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" /> Lemak
                    </span>
                  </div>
                </div>

                {/* Call-to-Action Buttons */}
                <div className="pt-2 space-y-2.5">
                  <button
                    id="btn-whatsapp-nutrition"
                    onClick={handleWhatsAppNutrition}
                    className="w-full py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Konsultasi Menu Sehat via WhatsApp</span>
                  </button>

                  <button
                    id="btn-copy-nutrition-summary"
                    onClick={handleCopySummary}
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-blue-100 font-semibold text-xs border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copiedNotification ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" />
                        <span className="text-emerald-300 font-bold">Rincian Berhasil Disalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Rincian Nutrisi untuk Tim</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>

            {/* Health & Quality Standards Trust Box */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-xs">
                <HeartPulse className="w-4 h-4 text-[#063694]" />
                <span>Standar Mutu Gizi &amp; Keamanan Pangan IPB</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Standar Higienis HACCP:</strong> Dapur berstandar internasional dengan pengawasan ahli gizi universitas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>100% Halal Certified:</strong> Bahan pangan segar bersertifikasi halal dan tanpa pengawet berbahaya.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Custom Dietary Request:</strong> Menerima permintaan khusus penderita diabetes, hipertensi, atau vegan/vegetarian.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
