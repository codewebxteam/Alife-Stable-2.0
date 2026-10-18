"use client";

import React, { useState } from "react";
import { Header } from "../../components/Header";
import { LiveCoursesSection } from "../../components/LiveCoursesSection";
import { Footer } from "../../components/Footer";
import { MobileStickyCta } from "../../components/MobileStickyCta";
import { DemoModal } from "../../components/DemoModal";

export default function CoursesPage() {
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
      {/* 1. Header with navigation */}
      <Header
        onOpenDemo={handleOpenDemo}
        onOpenPartner={handleOpenPartner}
      />

      {/* 2. Main Dedicated Courses Page Content */}
      <main className="flex-1">
        <LiveCoursesSection
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />
      </main>

      {/* 3. Footer */}
      <Footer
        onOpenDemo={handleOpenDemo}
        onOpenPartner={handleOpenPartner}
      />

      {/* 4. Fixed Mobile Bottom Sticky CTA Bar */}
      <MobileStickyCta
        onOpenDemo={handleOpenDemo}
        onOpenPartner={handleOpenPartner}
      />

      {/* 5. Demo & Partner Application Modal */}
      <DemoModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        initialType={modalState.type}
      />
    </div>
  );
}
