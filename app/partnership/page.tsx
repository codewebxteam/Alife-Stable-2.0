"use client";

import React, { useState } from "react";
import { Header } from "../../components/Header";
import { PartnershipHero } from "../../components/partnership/PartnershipHero";

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
      {/* 1. Header with Single CTA ("Book your free demo slot") */}
      <Header onOpenDemo={handleOpenDemo} onOpenPartner={handleOpenPartner} />

      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <PartnershipHero
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />

        {/* Section 2: Technology Ecosystem */}
        <TechEcosystem
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />

        {/* Section 3: Partnership Price Details (Simple & Transparent Partnership Plan) */}
        <Pricing
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />

        {/* Section 4: Launch your academy (4 Turnkey Phases) */}
        <LaunchInSteps
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />

        {/* Section 5: Interactive Revenue & Profit Calculator */}
        <RevenueCalculator
          onOpenPartner={handleOpenPartner}
          onOpenDemo={handleOpenDemo}
        />

        {/* Section 6: Partnership Testimonials */}
        <Testimonials />

        {/* Section 7: FAQ */}
        <FaqSection onOpenDemo={handleOpenDemo} />

        {/* Section 8: Final High-Conversion CTA Banner with Dual CTAs */}
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
