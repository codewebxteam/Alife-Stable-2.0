"use client";

import React, { useState } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { WhatIsAlife } from "../components/WhatIsAlife";
import { WhatYouGet } from "../components/WhatYouGet";
import { YourAcademy } from "../components/YourAcademy";
import { Pricing } from "../components/Pricing";
import { Testimonials } from "../components/Testimonials";
import { FaqSection } from "../components/FaqSection";
import { CtaBanner } from "../components/CtaBanner";
import { Footer } from "../components/Footer";
import { MobileStickyCta } from "../components/MobileStickyCta";
import { DemoModal } from "../components/DemoModal";

export default function HomePage() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "partner";
  }>({
    isOpen: false,
    type: "demo",
  });

  const handleOpenDemo = () => {
    setModalState({ isOpen: true, type: "demo" });
  };

  const handleOpenPartner = () => {
    setModalState({ isOpen: true, type: "partner" });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7EF] text-[#102B2B] antialiased selection:bg-[#078765]/20 selection:text-[#064E43]">
      {/* 1. Header with desktop and mobile navigation */}
      <Header
        onOpenDemo={handleOpenDemo}
        onOpenPartner={handleOpenPartner}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />

        {/* 3. What is Alife Stable? with Partner Education Dashboard Mockup */}
        <WhatIsAlife
          onOpenDemo={handleOpenDemo}
        />

        {/* 4. Starting Alone vs. Partnering with Alife Stable Comparison Cards */}
        <WhatYouGet
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />

        {/* 5. Your Academy, Your Brand with Learning Platform Mockup & checklist */}
        <YourAcademy
          onOpenPartner={handleOpenPartner}
        />

        {/* 6. Partnership Price Details with Single Complete Partnership Plan */}
        <Pricing
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />

        {/* 7. Testimonials from verified community profiles */}
        <Testimonials />

        {/* 8. FAQ with customer support illustration & interactive accordion */}
        <FaqSection
          onOpenDemo={handleOpenDemo}
        />

        {/* 9. Final High-Conversion CTA Banner */}
        <CtaBanner
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />
      </main>

      {/* 10. Comprehensive Footer */}
      <Footer
        onOpenDemo={handleOpenDemo}
        onOpenPartner={handleOpenPartner}
      />

      {/* 11. Fixed Mobile Bottom Sticky CTA Bar */}
      <MobileStickyCta
        onOpenDemo={handleOpenDemo}
        onOpenPartner={handleOpenPartner}
      />

      {/* 12. Lead Generation & Demo Booking Dialog Modal */}
      <DemoModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        initialType={modalState.type}
      />
    </div>
  );
}
