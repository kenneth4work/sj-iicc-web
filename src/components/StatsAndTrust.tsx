import React from 'react';
import { Award, Users, Utensils, ShieldCheck, HeartHandshake, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

export const StatsAndTrust: React.FC = () => {
  const stats = [
    { value: '10.000+', label: 'Acara Sukses Ditangani', sub: 'Corporate, BUMN & Wedding' },
    { value: '100%', label: 'Higienis & Berstandar IICC', sub: 'Protokol Kebersihan Ketat' },
    { value: '50+', label: 'Variasi Menu Nusantara', sub: 'Otentik & Kontemporer' },
    { value: '4.9 / 5.0', label: 'Tingkat Kepuasan Klien', sub: 'Berdasarkan Ulasan Nyata' },
  ];

  const clientCategories = [
    'Kementerian & Lembaga Negara',
    'BUMN & Institusi Perbankan',
    'Perusahaan Multinasional',
    'Civitas Akademika IPB University',
    'Resepsi Pernikahan Ballroom IICC',
    'Komunitas & Acara Keluarga'
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center pb-12 border-b border-slate-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#063694] tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Saji Catering Section */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#063694] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#063694]" />
              <span>Standar Keunggulan IICC</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Mengapa Mempercayakan Acara Anda pada Saji Catering?
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sebagai bagian resmi dari <strong>IPB International Convention Center (PT BLST IPB)</strong>, kami mewarisi standar mutu perhotelan bintang lima dengan komitmen cita rasa autentik dan kebersihan mutlak.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {clientCategories.map((c, i) => (
                <span
                  key={i}
                  className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60"
                >
                  ✓ {c}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-blue-50/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#063694] text-white flex items-center justify-center">
                <Utensils className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Executive Master Chef</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Diracik langsung oleh tim chef profesional berpengalaman dalam jamuan VVIP kenegaraan dan korporat.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-blue-50/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#063694] text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">100% Halal &amp; Higienis</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Bahan baku terseleksi segar setiap hari dengan standar sanitasi dapur bersertifikat resmi.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-blue-50/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#063694] text-white flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Legalitas &amp; Perpajakan Resmi</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kemudahan administrasi SPH, Faktur Pajak resmi, dan kerjasama institusi di bawah naungan PT BLST IPB.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-blue-50/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#063694] text-white flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-pink-400" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">On-Time Delivery Guarantee</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Layanan antar tepat waktu dengan armada khusus menjaga hidangan tetap hangat, rapi, dan segar.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
