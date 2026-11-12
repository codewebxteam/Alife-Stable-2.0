"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { DemoBookingExperience } from "../../components/DemoBookingExperience";

export default function BookDemoPage() {
  const router = useRouter();

  const handleOpenDemo = () => {
    router.push("/book-demo");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#E8F4EC]/50 via-[#FBF7EF] to-[#FBF7EF] text-[#102B2B] antialiased selection:bg-[#078765]/20 selection:text-[#064E43]">
      <Header onOpenDemo={handleOpenDemo} onOpenPartner={handleOpenDemo} />

      <main className="flex-1 py-4 sm:py-8 lg:py-10 px-3 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-5">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 shadow-xl shadow-[#078765]/5 border border-[#078765]/15">
            <DemoBookingExperience />
          </div>
        </div>
      </main>

      <Footer onOpenDemo={handleOpenDemo} onOpenPartner={handleOpenDemo} />
    </div>
  );
}
