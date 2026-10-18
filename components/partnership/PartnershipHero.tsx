"use client";

import React from "react";
import Image from "next/image";
import { IMAGE_ASSETS } from "../constants";
import { ArrowRightIcon, CheckIcon } from "../Icons";
import { TrendingUp, Sparkles, Award } from "lucide-react";

interface PartnershipHeroProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

export function PartnershipHero({ onOpenDemo, onOpenPartner }: PartnershipHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#E8F4EC]/40 via-[#FBF7EF] to-[#FBF7EF] pt-2 sm:pt-4 lg:pt-8 pb-4 sm:pb-6 lg:pb-10">
      {/* Decorative Organic Background Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#078765]/8 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-5 right-10 w-72 h-72 bg-[#078765]/6 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-center">
          {/* Phone View: Top (order-1) | Desktop: Right (lg:order-2 lg:col-span-5) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center">
            <div className="relative max-w-[210px] sm:max-w-[270px] lg:max-w-md w-full">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#078765]/20 to-[#064E43]/10 rounded-[1.8rem] sm:rounded-[2.5rem] blur-lg sm:blur-xl transform -rotate-3 scale-105 pointer-events-none" />

              {/* Main Sticker Frame */}
              <div className="relative bg-white p-2 sm:p-3 lg:p-4 rounded-[1.6rem] sm:rounded-[2rem] lg:rounded-[2.5rem] shadow-xl sm:shadow-2xl shadow-[#078765]/20 border-3 sm:border-4 border-white ring-2 ring-[#078765]/25 transform -rotate-2 hover:rotate-0 transition-transform duration-300 ease-out group">
                {/* Sticker Cutout / Inner Image Container */}
                <div className="relative w-full aspect-[4/4.1] rounded-[1.2rem] sm:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden bg-[#E8F4EC]">
                  <Image
                    src={IMAGE_ASSETS.empoweringWomanAnalytics}
                    alt="Empowering educator with real-time academy analytics"
                    fill
                    priority
                    sizes="(max-width: 640px) 210px, (max-width: 1024px) 270px, 460px"
                    className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                  {/* Subtle inner gradient shadow at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Floating Sticker Top Badge */}
                <div className="absolute -top-2.5 -left-2.5 sm:-top-3.5 sm:-left-3.5 bg-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md border border-[#078765]/25 flex items-center gap-1 text-[9px] sm:text-[11px] font-black text-[#064E43] uppercase tracking-wider transform -rotate-3">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#078765]" />
                  <span>Verified Partner</span>
                </div>

                {/* Floating Sticker Bottom Analytics Card */}
                <div className="absolute -bottom-3 -right-2.5 sm:-bottom-4 sm:-right-3 bg-white/95 backdrop-blur-md p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg border border-[#078765]/20 flex items-center gap-2 sm:gap-2.5 transform rotate-2 max-w-[180px] sm:max-w-[220px]">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#E8F4EC] text-[#078765] flex items-center justify-center shrink-0 shadow-2xs">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#078765]" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#078765] animate-pulse" />
                      <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-[#078765]">
                        Live Analytics
                      </span>
                    </div>
                    <div className="text-[10px] sm:text-xs font-extrabold text-[#102B2B] truncate mt-0.5">
                      100% Direct Profit
                    </div>
                  </div>
                </div>

                {/* Small Floating Pill on Left */}
                <div className="hidden sm:flex absolute bottom-5 -left-3 bg-[#102B2B] text-white px-2.5 py-0.5 rounded-full shadow-md text-[9px] font-bold tracking-wide items-center gap-1">
                  <Award className="w-2.5 h-2.5 text-[#078765]" />
                  <span>500+ Academies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone View: Below Pic (order-2) | Desktop: Left (lg:order-1 lg:col-span-7) */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-3.5 sm:space-y-4 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] border border-[#078765]/25 text-[#078765] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#078765] animate-pulse" />
              OFFICIAL PARTNERSHIP PROGRAM
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B2B] tracking-tight leading-[1.15]">
              Build & Scale Your Branded Course Business{" "}
              <span className="text-[#078765] inline-block relative">
                with Alife Stable
                <svg
                  className="absolute -bottom-1 left-0 w-full text-[#078765]/25 h-1.5"
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

            {/* Subheading */}
            <p className="text-xs sm:text-base text-[#65736F] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Launch your own branded academy with ready-to-sell AI & digital courses, a personal domain, full admin controls, and complete tech support. You focus on learners — we handle the technology.
            </p>

            {/* Dual CTAs in Hero */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-1">
              <button
                type="button"
                onClick={onOpenPartner}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base cursor-pointer active:scale-98"
              >
                Become a Partner
                <ArrowRightIcon className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-[#064E43] bg-white border-2 border-[#078765]/40 hover:border-[#078765] hover:bg-[#E8F4EC] transition-all duration-200 text-sm sm:text-base shadow-xs cursor-pointer active:scale-98"
              >
                Book Your Free Demo
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
              {[
                "100% White-Label Platform",
                "Zero Course Creation Required",
                "Keep 100% Course Profits",
                "Turnkey Technical Support",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/90 border border-[#078765]/20 text-[#064E43] text-[11px] sm:text-xs font-semibold shadow-2xs"
                >
                  <CheckIcon className="w-3 h-3 text-[#078765]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
