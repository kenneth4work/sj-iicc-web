import React, { useState } from 'react';
import { X, Download, Printer, FileText, ChevronLeft, ChevronRight, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import {
  menuBox35kVariants,
  menuBox50kVariants,
  prasmananVariants,
  specialtyMenuBoxes,
  snackItemsData,
  termsAndConditions,
  companyInfo
} from '../data/cateringData.ts';
import { Logo } from './Logo.tsx';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 6;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // In browser, window.print or direct catalog download prompt
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[92vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        
        {/* Top Control Bar */}
        <div className="bg-[#042361] text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b border-blue-900/60 shrink-0">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h3 className="text-sm sm:text-base font-bold">Katalog Resmi &amp; Booklet Menu Botani Catering by IICC</h3>
              <p className="text-[11px] text-blue-200">Dokumen Resmi PT BLST IPB University</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
              title="Cetak Katalog"
            >
              <Printer className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Cetak / Print</span>
            </button>

            <a
              href="/Katalog-Menu-Botani-Catering-IICC.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Katalog-Menu-Botani-Catering-IICC.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#c49f2e] text-[#042361] text-xs font-bold transition-colors cursor-pointer shadow-xs"
              title="Buka & Unduh Berkas PDF Resmi"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh File PDF</span>
            </a>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors ml-2 cursor-pointer"
              aria-label="Tutup Katalog"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Page Switcher Header */}
        <div className="bg-slate-100 px-4 py-2 flex items-center justify-between border-b border-slate-200 text-xs text-slate-700 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-1 rounded bg-white border border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-semibold">
              Halaman {currentPage} dari {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-1 rounded bg-white border border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-500">
            <span className={currentPage === 1 ? 'font-bold text-[#063694]' : ''}>1. Profil</span> •
            <span className={currentPage === 2 ? 'font-bold text-[#063694]' : ''}>2. Box 35k</span> •
            <span className={currentPage === 3 ? 'font-bold text-[#063694]' : ''}>3. Box 50k &amp; Bento</span> •
            <span className={currentPage === 4 ? 'font-bold text-[#063694]' : ''}>4. Prasmanan</span> •
            <span className={currentPage === 5 ? 'font-bold text-[#063694]' : ''}>5. Snack Box</span> •
            <span className={currentPage === 6 ? 'font-bold text-[#063694]' : ''}>6. S&amp;K</span>
          </div>
        </div>

        {/* Catalog Body (Interactive Scrollable Sheet) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-200/50 flex justify-center">
          <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-6 sm:p-10 border border-slate-200 space-y-8 print:p-0 print:shadow-none print:border-none">
            
            {/* PAGE 1: Brand & Profile */}
            {currentPage === 1 && (
              <div className="space-y-8 animate-fadeIn">
                <div className="text-center space-y-4 border-b border-slate-200 pb-6">
                  <Logo variant="light" className="justify-center" />
                  <div className="inline-block bg-[#063694] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Katalog Resmi Layanan Katering
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    &ldquo;Serving Up Perfection&rdquo;
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Saji Catering merupakan penyedia layanan katering profesional di bawah naungan <strong>IPB International Convention Center (IICC)</strong>, unit usaha milik <strong>BLST Holding Company of IPB</strong>, Bogor. Melayani berbagai kebutuhan acara meliputi kegiatan perusahaan/instansi, acara keluarga, seminar kenegaraan, dan pesta pernikahan.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
                    <h4 className="text-sm font-bold text-[#063694] uppercase tracking-wider">
                      Keunggulan Layanan Kami:
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#063694] shrink-0" />
                        <span>Tim kuliner master chef berpengalaman IICC</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#063694] shrink-0" />
                        <span>Bahan baku segar berkualitas &amp; 100% Halal</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#063694] shrink-0" />
                        <span>Dapur modern higienis berstandar HACCP</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#063694] shrink-0" />
                        <span>Pengiriman tepat waktu ke seluruh Jabodetabek</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#042361] text-white p-5 rounded-xl space-y-3">
                    <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
                      Hubungi Sales Executive:
                    </h4>
                    <div className="text-xs space-y-1.5 text-blue-100">
                      <p><strong>WhatsApp:</strong> {companyInfo.whatsappDisplay}</p>
                      <p><strong>Instagram:</strong> {companyInfo.instagram}</p>
                      <p><strong>Lokasi:</strong> {companyInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PAGE 2: Menu Box Paket Rp 35.000 */}
            {currentPage === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900">Menu Box Paket Rp 35.000</h2>
                    <p className="text-xs text-slate-500">14 Pilihan Kombinasi Menu Lezat &amp; Bergizi (Menu A - N)</p>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                    Rp 35.000 / Box
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {menuBox35kVariants.map((v) => (
                    <div key={v.code} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex items-center gap-2 font-bold text-[#063694] mb-1">
                        <span className="bg-[#063694] text-white px-2 py-0.5 rounded text-[10px]">{v.code}</span>
                        <span>{v.title}</span>
                      </div>
                      <p className="text-slate-600 text-[11px]">{v.items.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PAGE 3: Menu Box Paket Rp 50.000 + Bento Specialty */}
            {currentPage === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900">Menu Box Paket Rp 50.000</h2>
                    <p className="text-xs text-slate-500">Dilengkapi Sajian Soto &amp; Sup Nusantara Hangat</p>
                  </div>
                  <span className="bg-blue-100 text-[#063694] text-xs font-bold px-3 py-1 rounded-full">
                    Rp 50.000 / Box
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {menuBox50kVariants.slice(0, 8).map((v) => (
                    <div key={v.code} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex items-center gap-2 font-bold text-[#063694] mb-1">
                        <span className="bg-[#063694] text-white px-2 py-0.5 rounded text-[10px]">{v.code}</span>
                        <span>{v.title}</span>
                      </div>
                      <p className="text-slate-600 text-[11px]">{v.items.join(', ')}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h3 className="font-bold text-slate-800 text-sm mb-3">Pilihan Nasi Nusantara &amp; Bento Signature:</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {specialtyMenuBoxes.slice(0, 4).map((s) => (
                      <div key={s.id} className="p-2.5 bg-blue-50/50 rounded-lg border border-blue-200/60">
                        <div className="font-bold text-slate-900 line-clamp-1">{s.name}</div>
                        <div className="text-[11px] font-extrabold text-[#063694]">{s.priceDisplay}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PAGE 4: Prasmanan Buffet */}
            {currentPage === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900">Pilihan Menu Prasmanan (Buffet)</h2>
                    <p className="text-xs text-slate-500">Standar Hotel Berbintang dengan Peralatan Mewah</p>
                  </div>
                  <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                    Mulai Rp 75.000 / PAX
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {prasmananVariants.slice(0, 8).map((v) => (
                    <div key={v.code} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex items-center gap-2 font-bold text-[#063694] mb-1">
                        <span className="bg-[#063694] text-white px-2 py-0.5 rounded text-[10px]">{v.code}</span>
                        <span>{v.title}</span>
                      </div>
                      <p className="text-slate-600 text-[11px]">{v.items.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PAGE 5: Custom Snack Box */}
            {currentPage === 5 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900">Custom Snack Box (25 Pilihan)</h2>
                    <p className="text-xs text-slate-500">Bebas Dikostumisasi untuk Coffee Break &amp; Rapat</p>
                  </div>
                  <span className="bg-purple-100 text-purple-900 text-xs font-bold px-3 py-1 rounded-full">
                    Mulai Rp 25.000 / Box
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <h4 className="font-bold text-amber-700 mb-1">Pilihan Snack Manis (10 Item):</h4>
                    <p className="text-slate-600">
                      Vanilla Sultana, Kaya Twist, Pandan Lattice, Banana Cake, Fudgy Brownies, Apple Pie, American Chocolate Cake, Eclair, Marmer Cake, Lemon Cake.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-emerald-700 mb-1">Pilihan Snack Asin (10 Item):</h4>
                    <p className="text-slate-600">
                      Tahu Bakso Sapi, Sosis Solo, Risol Mayo Smoked Beef, Samosa Kari Daging, Macaroni Schotel, Sosis Roll Pastry, Asinan Buah Segar, Tempe Mendoan, Holland Kroket, Bitterballen Keju.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-purple-700 mb-1">Pilihan Kletikan Renyah (5 Item):</h4>
                    <p className="text-slate-600">
                      Keripik Singkong Balado, Telur Gabus Asin, Kacang Telur Spesial, Keripik Pisang Madu, Talas Stick Gurih Bogor.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* PAGE 6: Syarat & Ketentuan */}
            {currentPage === 6 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-200 pb-4">
                  <h2 className="text-2xl font-black text-slate-900">Syarat &amp; Ketentuan Pemesanan</h2>
                  <p className="text-xs text-slate-500">Kebijakan Resmi Saji Catering by IICC (PT BLST IPB)</p>
                </div>

                <div className="space-y-4 text-xs text-slate-700">
                  {termsAndConditions.slice(0, 5).map((term) => (
                    <div key={term.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-1">{term.title}</h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-600">
                        {term.points.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer on print */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Saji Catering by IICC • PT BLST IPB University</span>
              <span>WhatsApp: {companyInfo.whatsappDisplay}</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
