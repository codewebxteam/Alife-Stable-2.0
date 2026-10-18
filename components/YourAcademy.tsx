"use client";

import React from "react";
import Image from "next/image";
import { IMAGE_ASSETS, YOUR_ACADEMY_CHECKLIST } from "./constants";
import { ArrowRightIcon, CheckIcon } from "./Icons";

interface YourAcademyProps {
  onOpenPartner: () => void;
}

export function YourAcademy({ onOpenPartner }: YourAcademyProps) {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
          {/* Left Column: Academy Narrative & Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-xs font-bold tracking-wider uppercase">
              YOUR ACADEMY, YOUR BRAND
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B2B] tracking-tight leading-tight">
              Launch Your Own Learning Platform Under Your Brand
            </h2>

            <p className="text-base sm:text-lg text-[#65736F] leading-relaxed">
              We set up a fully branded platform for you — with your logo, domain, brand name, and customizations. It looks and feels like your own academy.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 pt-2">
              {YOUR_ACADEMY_CHECKLIST.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#078765] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-[#102B2B]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenPartner}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-base"
              >
                Become a Partner
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Free Floating Academy Learning Platform Mockup */}
          <div className="lg:col-span-7 relative">
            {/* Floating Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#064E43] text-white text-xs font-bold shadow-md mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E8F4EC] animate-pulse" />
              100% White-Labeled For Your Business
            </div>

            {/* Free Floating Mockup (No outer box frame) */}
            <div className="relative w-full aspect-[16/10] drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={IMAGE_ASSETS.academyPlatformMockup}
                alt="Your Academy Learning Platform Mockup showing branded student portal, video lectures, and curriculum"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
