"use client";

import React, { useState } from "react";
import { Header } from "../../components/Header";
import { PartnershipHero } from "../../components/partnership/PartnershipHero";
import { PartnershipVideo } from "../../components/partnership/PartnershipVideo";
import { LaunchInSteps } from "../../components/partnership/LaunchInSteps";
import { RevenueCalculator } from "../../components/partnership/RevenueCalculator";
import { Pricing } from "../../components/Pricing";
import { TechEcosystem } from "../../components/partnership/TechEcosystem";
import { Testimonials } from "../../components/Testimonials";
import { FaqSection } from "../../components/FaqSection";
import { CtaBanner } from "../../components/CtaBanner";
import { Footer } from "../../components/Footer";
import { MobileStickyCta } from "../../components/MobileStickyCta";
import { DemoModal } from "../../components/DemoModal";

export default function PartnershipPage() {
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
      {/* 1. Header with Fixed Top-Right Dual CTAs ("Book Free Demo" & "Become a Partner") */}
      <Header onOpenDemo={handleOpenDemo} onOpenPartner={handleOpenPartner} />

      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <PartnershipHero
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />

        {/* Section 2: Partnership Presentation Video with Mid-Page CTAs */}
        <PartnershipVideo
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />

        {/* Section 3: Launch in Steps (4 Turnkey Phases with Mid-Page CTAs) */}
        <LaunchInSteps
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />

        {/* Section 4: Interactive Revenue & Profit Calculator (Boosts Sales & Demonstrates ROI) */}
        <RevenueCalculator
          onOpenPartner={handleOpenPartner}
          onOpenDemo={handleOpenDemo}
        />

        {/* Section 5: Partnership Price Details (All-In-One Plan at ₹1,999/yr) */}
        <Pricing
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />

        {/* Section 6: Technology Ecosystem with Mid-Page CTAs */}
        <TechEcosystem
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />

        {/* Section 7: Partnership Testimonials */}
        <Testimonials />

        {/* Section 8: FAQ */}
        <FaqSection onOpenDemo={handleOpenDemo} />

        {/* Section 9: Final High-Conversion CTA Banner with Dual CTAs */}
        <CtaBanner
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />
      </main>

      {/* Footer */}
      <Footer onOpenDemo={handleOpenDemo} onOpenPartner={handleOpenPartner} />

      {/* Fixed Mobile Bottom Sticky CTA Bar */}
      <MobileStickyCta
        onOpenDemo={handleOpenDemo}
        onOpenPartner={handleOpenPartner}
      />

      {/* Lead Generation & Demo Modal */}
      <DemoModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        initialType={modalState.type}
      />
    </div>
  );
}
