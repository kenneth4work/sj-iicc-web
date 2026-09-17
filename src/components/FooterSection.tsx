import React from 'react';
import { PhoneCall, MapPin, Clock, Instagram, Mail, ExternalLink, ShieldCheck, Award, Heart } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { companyInfo } from '../data/cateringData.ts';

export const FooterSection: React.FC = () => {
  return (
    <footer id="kontak" className="bg-[#042361] text-white pt-16 pb-12 border-t border-blue-900/50 relative overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#063694]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-blue-900/60">
          
          {/* Column 1: Brand & Holding Info (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="dark" />

            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed max-w-sm">
              Layanan katering profesional terpercaya di bawah naungan <strong>IPB International Convention Center (IICC)</strong>, unit usaha milik <strong>PT BLST Holding Company of IPB</strong>, Bogor.
            </p>

            {/* Quality Motto quote */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs italic text-blue-200">
              &ldquo;{companyInfo.quoteMotto}&rdquo;
            </div>

            {/* Holding Badge */}
            <div className="flex items-center gap-3 pt-2">
              <div className="px-3 py-1.5 rounded-lg bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>PT BLST IPB Holding Company</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/10 text-emerald-300 border border-emerald-400/30 text-xs font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Halal Certified</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#D4AF37] tracking-wider uppercase">
              Pilihan Layanan
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-blue-100/90">
              <li>
                <a href="#meal-box" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span>• Meal Box Paket Rp 35.000 (14 Varian)</span>
                </a>
              </li>
              <li>
                <a href="#meal-box" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span>• Meal Box Eksekutif Rp 50.000 + Soto/Sup</span>
                </a>
              </li>
              <li>
                <a href="#meal-box" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span>• Bento Nusantara &amp; Japanese VIP</span>
                </a>
              </li>
              <li>
                <a href="#prasmanan" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span>• Prasmanan Gathering (Non-Wedding)</span>
                </a>
              </li>
              <li>
                <a href="#prasmanan" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span>• Prasmanan Royal Wedding IICC</span>
                </a>
              </li>
              <li>
                <a href="#snack-box" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span>• Custom Snack Box Builder (25 Pilihan)</span>
                </a>
              </li>
              <li>
                <a href="#kalkulator-kalori" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span>• Kalkulator Kalori &amp; Analisis Gizi Menu</span>
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span>• Kalkulator Estimasi Anggaran Acara</span>
                </a>
              </li>
              <li>
                <a href="#syarat-ketentuan" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span>• Syarat &amp; Ketentuan Pemesanan (H-7)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address (Col 4) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-sm font-bold text-[#D4AF37] tracking-wider uppercase">
              Hubungi &amp; Kunjungi Kami
            </h4>

            <div className="space-y-3 text-xs text-blue-100/90">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  {companyInfo.address}
                </span>
              </div>

              {/* Phone / WA */}
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 font-semibold transition-colors"
                >
                  WhatsApp: {companyInfo.whatsappDisplay}
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href="https://instagram.com/botani.catering.iicc"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-300 transition-colors"
                >
                  {companyInfo.instagram}
                </a>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Jam Operasional Kantor:</div>
                  <div>{companyInfo.operatingHours}</div>
                </div>
              </div>
            </div>

            {/* Quick Map Button */}
            <div className="pt-2">
              <a
                href={companyInfo.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors border border-white/20"
              >
                <span>Buka Google Maps IICC Botani Square</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Copyright & Disclaimer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/60">
          <div>
            &copy; {new Date().getFullYear()} <strong>Saji Catering by IICC</strong>. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4">
            <span>Unit Usaha PT BLST IPB University</span>
            <span>•</span>
            <span>Kota Bogor, Jawa Barat</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
