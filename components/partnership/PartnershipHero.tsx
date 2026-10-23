"use client";

import React from "react";
import Image from "next/image";
import { IMAGE_ASSETS } from "../constants";
import { ArrowRightIcon, CheckIcon } from "../Icons";

interface PartnershipHeroProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

export function PartnershipHero({ onOpenDemo, onOpenPartner }: PartnershipHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#FBF7EF] pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-14 lg:py-16 flex items-center">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#E8F4EC]/90 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#078765]/12 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E8F4EC]/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-left z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] border border-[#078765]/20 text-[#078765] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#078765] animate-pulse" />
              OFFICIAL PARTNERSHIP PROGRAM
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-4xl xl:text-[54px] font-extrabold text-[#102B2B] tracking-tight leading-tight sm:leading-[1.12]">
              Build & Scale Your Branded Course Business{" "}
              <span className="text-[#078765] inline-block relative">
                with Alife Stable
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-[#078765]/30 h-2.5"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 5.5C50 1.5 150 1.5 199 5.5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading - High-contrast readable dark text */}
            <p className="text-sm sm:text-base md:text-lg text-[#0F2926] leading-relaxed max-w-xl font-medium">
              Launch your own branded academy with ready-to-sell AI & digital courses, a personal domain, full admin controls, and complete tech support. You focus on learners — we handle the technology.
            </p>

            {/* Dual CTAs in Hero - Visible on desktop/tablet */}
            <div className="hidden sm:flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1">
              <button
                type="button"
                onClick={onOpenPartner}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base cursor-pointer active:scale-98"
              >
                Become a Partner
                <ArrowRightIcon className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-[#064E43] bg-white border-2 border-[#078765]/40 hover:border-[#078765] hover:bg-[#E8F4EC] transition-all duration-200 text-sm sm:text-base shadow-xs cursor-pointer active:scale-98"
              >
                Book Your Free Demo
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "100% White-Label Platform",
                "Zero Course Creation Required",
                "Keep 100% Course Profits",
                "Turnkey Technical Support",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#078765]/20 text-[#064E43] text-xs font-semibold shadow-2xs"
                >
                  <CheckIcon className="w-3.5 h-3.5 text-[#078765]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Enlarged Growth Through Partnership Illustration */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-end relative mt-6 lg:mt-0">
            {/* Ambient emerald backlight */}
            <div className="absolute w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] lg:w-[750px] lg:h-[750px] rounded-full bg-[#078765]/15 blur-3xl pointer-events-none -z-10" />

            <div className="relative w-full max-w-[620px] sm:max-w-[760px] lg:max-w-[920px] xl:max-w-[1000px] lg:-mr-10 xl:-mr-16 flex items-center justify-center lg:justify-end">
              <Image
                src={IMAGE_ASSETS.partnershipGrowth}
                alt="Growth Through Partnership - Alife Stable Partner Program"
                width={1536}
                height={1024}
                priority
                sizes="(min-width: 1280px) 1000px, (min-width: 1024px) 65vw, (min-width: 640px) 760px, 98vw"
                className="w-full h-auto object-contain drop-shadow-[0_26px_56px_rgba(7,135,101,0.24)] hover:scale-[1.015] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
