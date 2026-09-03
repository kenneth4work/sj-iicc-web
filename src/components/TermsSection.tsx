import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, FileCheck, AlertCircle, CreditCard, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { termsAndConditions, companyInfo } from '../data/cateringData.ts';

export const TermsSection: React.FC = () => {
  // Default open the first two important terms
  const [openIds, setOpenIds] = useState<string[]>(['term-2', 'term-4']);

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const getIconForTerm = (id: string) => {
    switch (id) {
      case 'term-1':
        return <FileCheck className="w-5 h-5 text-[#063694]" />;
      case 'term-2':
        return <Calendar className="w-5 h-5 text-[#063694]" />;
      case 'term-3':
        return <Clock className="w-5 h-5 text-[#063694]" />;
      case 'term-4':
        return <CreditCard className="w-5 h-5 text-[#D4AF37]" />;
      case 'term-5':
        return <AlertCircle className="w-5 h-5 text-rose-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#063694]" />;
    }
  };

  return (
    <section id="syarat-ketentuan" className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#063694] border border-blue-200/70 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#063694]" />
            <span>Standar Layanan &amp; Kebijakan Resmi</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Syarat &amp; Ketentuan Pemesanan
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Informasi lengkap mengenai jadwal pemesanan (H-7), perubahan menu (H-3), skema pembayaran resmi PT BLST IPB, dan kebijakan jaminan mutu acara Anda.
          </p>
        </div>

        {/* Accordion Cards */}
        <div className="space-y-4">
          {termsAndConditions.map((term) => {
            const isOpen = openIds.includes(term.id);
            return (
              <div
                key={term.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs ${
                  isOpen ? 'border-[#063694]/40 shadow-md ring-1 ring-[#063694]/10' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(term.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                      {getIconForTerm(term.id)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {term.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">{term.subtitle}</p>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-blue-50 text-[#063694]' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/40 text-slate-700 space-y-3 animate-fadeIn">
                    <ul className="space-y-2.5">
                      {term.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#063694] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Official Assurance Banner */}
        <div className="mt-10 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Butuh Penawaran Resmi &amp; Invoice untuk Lembaga / BUMN?
            </h4>
            <p className="text-xs text-slate-500">
              Tim sales eksekutif kami siap menerbitkan Surat Penawaran Harga (SPH), MOU, dan kelengkapan administrasi perpajakan resmi PT BLST IPB.
            </p>
          </div>

          <a
            href={`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent('Halo Saji Catering, saya membutuhkan Surat Penawaran Harga (SPH) resmi untuk instansi kami.')}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#063694] hover:bg-[#042361] text-white px-6 py-3 font-semibold text-xs whitespace-nowrap flex items-center gap-2 shadow-md shrink-0 cursor-pointer"
          >
            <span>Minta Penawaran Resmi (SPH)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
