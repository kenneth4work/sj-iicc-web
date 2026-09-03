import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { StatsAndTrust } from './components/StatsAndTrust.tsx';
import { MenuSection } from './components/MenuSection.tsx';
import { SnackBoxBuilder } from './components/SnackBoxBuilder.tsx';
import { BudgetCalculator } from './components/BudgetCalculator.tsx';
import { TermsSection } from './components/TermsSection.tsx';
import { FooterSection } from './components/FooterSection.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { CatalogModal } from './components/CatalogModal.tsx';

export default function App() {
  const [catalogOpen, setCatalogOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#063694] selection:text-white">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenCatalog={() => setCatalogOpen(true)}
      />

      {/* Main Landing Content */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onOpenCatalog={() => setCatalogOpen(true)}
          onScrollToMenu={() => scrollToSection('meal-box')}
        />

        {/* 3. Credibility, Stats & IICC Heritage */}
        <StatsAndTrust />

        {/* 4. Menu Showcase (Meal Box, Signature Bento, Prasmanan) */}
        <MenuSection
          onScrollToSnackBuilder={() => scrollToSection('snack-box')}
        />

        {/* 5. Interactive Custom Snack Box Builder */}
        <SnackBoxBuilder />

        {/* 6. Event Budget & Quotation Calculator */}
        <BudgetCalculator />

        {/* 7. Syarat & Ketentuan Accordion */}
        <TermsSection />
      </main>

      {/* 8. Footer Section (Deep Sapphire Theme) */}
      <FooterSection />

      {/* 9. Floating WhatsApp Widget with pulse indicator */}
      <FloatingWhatsApp />

      {/* 10. Printable/Downloadable Catalog Booklet Modal */}
      <CatalogModal
        isOpen={catalogOpen}
        onClose={() => setCatalogOpen(false)}
      />
    </div>
  );
}
