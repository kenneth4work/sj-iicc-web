import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/cateringData.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('');

  const quickMessages = [
    'Halo, saya ingin tanya ketersediaan katering untuk tanggal tertentu.',
    'Halo, saya ingin pesan Meal Box Rp 35.000 / Rp 50.000 untuk rapat kantor.',
    'Halo, saya butuh penawaran paket prasmanan gathering / wedding IICC.',
    'Halo, saya ingin konsultasi Custom Snack Box untuk acara seminar.'
  ];

  const handleSend = (textToSend?: string) => {
    const message = textToSend || customText || 'Halo Saji Catering by IICC, saya ingin konsultasi kebutuhan katering.';
    window.open(
      `https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
    setIsOpen(false);
  };

  return (
    <aside aria-label="WhatsApp Customer Service" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden animate-fadeIn select-none">
          {/* Popover Header */}
          <div className="bg-[#042361] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#063694] font-serif font-bold text-lg shadow-inner">
                  saji
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#042361]" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Saji Catering CS</h4>
                <p className="text-[11px] text-blue-200">Online • Balas Cepat dalam Menit</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-1 rounded-full transition-colors"
              aria-label="Tutup Obrolan"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Popover Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-700 shadow-2xs">
              Selamat datang di <strong>Saji Catering by IICC (PT BLST IPB)</strong>! Ada yang bisa kami bantu untuk konsumsi acara Anda?
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Pilih Pesan Cepat:
              </span>
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(msg)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-[#063694]/40 text-xs text-slate-700 hover:text-[#063694] transition-all cursor-pointer font-medium"
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2 flex items-center gap-2">
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Ketik pesan Anda..."
                className="flex-1 text-xs px-3 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#063694]"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
              />
              <button
                onClick={() => handleSend()}
                className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white transition-colors cursor-pointer"
                aria-label="Kirim Pesan"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating WhatsApp Button */}
      <button
        id="floating-wa-button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full p-3.5 sm:p-4 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Chat WhatsApp Saji Catering"
      >
        {/* Pulsing indicator halo */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>

        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />

        {/* Desktop Tooltip */}
        {!isOpen && (
          <span className="hidden sm:block absolute right-full mr-3 bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat WhatsApp Kami (Fast Response)
          </span>
        )}
      </button>
    </aside>
  );
};
