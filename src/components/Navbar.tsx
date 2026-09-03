import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X, Sparkles, FileText, ChevronRight } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { companyInfo } from '../data/cateringData.ts';

interface NavbarProps {
  onOpenCatalog: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCatalog }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['beranda', 'meal-box', 'prasmanan', 'snack-box', 'syarat-ketentuan', 'kalkulator'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'beranda', label: 'Beranda', href: '#beranda' },
    { id: 'meal-box', label: 'Meal Box', href: '#meal-box' },
    { id: 'prasmanan', label: 'Prasmanan', href: '#prasmanan' },
    { id: 'snack-box', label: 'Custom Snack Box', href: '#snack-box' },
    { id: 'syarat-ketentuan', label: 'Syarat & Ketentuan', href: '#syarat-ketentuan' },
  ];

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Halo Saji Catering by IICC, saya ingin konsultasi dan memesan katering untuk acara kami. Mohon informasi ketersediaan tanggal dan paket rekomendasi.`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Logo Container */}
          <a
            id="nav-logo-link"
            href="#beranda"
            className="flex items-center group transition-transform duration-200 hover:opacity-95"
          >
            <Logo variant="light" />
          </a>

          {/* Center: Desktop Nav Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-1 lg:space-x-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-[#063694] font-semibold' : 'text-slate-600 hover:text-[#063694]'
                  } after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:transition-all after:duration-300 ${
                    isActive ? 'after:bg-[#063694] after:scale-x-100' : 'after:bg-[#063694] after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Custom Pill CTA Button matching reference UI */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-download-catalog-btn"
              onClick={onOpenCatalog}
              type="button"
              className="text-xs font-semibold text-slate-600 hover:text-[#063694] flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-blue-50/60 transition-colors"
              title="Lihat & Unduh PDF Katalog"
            >
              <FileText className="w-3.5 h-3.5 text-[#063694]" />
              <span>Katalog PDF</span>
            </button>

            <button
              id="nav-cta-order-btn"
              onClick={handleWhatsAppOrder}
              type="button"
              className="rounded-full bg-[#063694] hover:bg-[#042361] active:scale-95 text-white px-5 sm:px-6 py-2.5 font-semibold text-sm flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <PhoneCall className="text-[#D4AF37] w-4 h-4 shrink-0" />
              <span>Pesan Sekarang</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-phone-btn"
              onClick={handleWhatsAppOrder}
              type="button"
              className="rounded-full bg-[#1B3D2F] text-white p-2 shadow-sm"
              aria-label="Telepon / WhatsApp"
            >
              <PhoneCall className="text-[#D4AF37] w-4 h-4" />
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-700 hover:text-[#063694] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="sm:hidden fixed inset-x-0 top-[62px] bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 transition-all duration-300 animate-fadeIn"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-${link.id}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-blue-50 text-[#063694] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                id="mobile-catalog-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCatalog();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50"
              >
                <FileText className="w-4 h-4 text-[#063694]" />
                <span>Unduh Katalog Lengkap (PDF)</span>
              </button>

              <button
                id="mobile-drawer-cta-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppOrder();
                }}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#1B3D2F] text-white font-bold text-sm shadow-md"
              >
                <PhoneCall className="text-[#D4AF37] w-4 h-4" />
                <span>Pesan Sekarang via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
