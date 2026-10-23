"use client";

import React from "react";
import Image from "next/image";
import {
  IMAGE_ASSETS,
  BRAND_INFO,
  HERO_FLOATING_BENEFITS,
} from "./constants";
import { ArrowRightIcon, CheckIcon } from "./Icons";

interface HeroProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

export function Hero({ onOpenDemo, onOpenPartner }: HeroProps) {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#FBF7EF] pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-14 lg:py-16 flex items-center"
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#E8F4EC]/90 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#078765]/12 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E8F4EC]/50 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 xl:col-span-5 text-left z-10">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] border border-[#078765]/30 text-[#078765] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#078765] animate-pulse" />
              {BRAND_INFO.eyebrow}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[62px] 2xl:text-[68px] font-black text-[#0A1F1D] tracking-tight leading-[1.08] sm:leading-[1.12] mb-4 sm:mb-5">
              Build Your AI <br className="hidden sm:inline" />
              Course Business{" "}
              <span className="text-[#078765] inline-block relative">
                with Alife Stable
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-[#078765]/35 h-2.5"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 5.5C50 1.5 150 1.5 199 5.5"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg md:text-xl xl:text-[21px] text-[#0F2926] leading-relaxed max-w-2xl mb-6 sm:mb-8 font-semibold">
              Launch your branded academy with ready-to-sell courses and your website. Focus on growing your business — we handle the technology.
            </p>

            {/* CTA Buttons - Visible on tablet/desktop, mobile has sticky CTA bar */}
            <div className="hidden sm:flex flex-row items-center gap-4 mb-6 sm:mb-8">
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

            {/* Floating Benefit Badges */}
            <div className="flex flex-wrap gap-2">
              {HERO_FLOATING_BENEFITS.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-[#078765]/25 text-[#0A221E] text-xs sm:text-[13px] font-bold shadow-2xs"
                >
                  <CheckIcon className="w-4 h-4 text-[#078765]" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 1.75x Enlarged Marketing Growth Blueprint Illustration */}
          <div className="lg:col-span-6 xl:col-span-7 flex items-center justify-center lg:justify-end relative mt-6 lg:mt-0">
            {/* Ambient emerald backlight behind character graphic */}
            <div className="absolute w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] lg:w-[680px] lg:h-[680px] rounded-full bg-[#078765]/15 blur-3xl pointer-events-none -z-10" />

            <div className="relative w-full max-w-[550px] sm:max-w-[680px] lg:max-w-[780px] xl:max-w-[860px] lg:-mr-8 xl:-mr-14 flex items-center justify-center lg:justify-end">
              <Image
                src={IMAGE_ASSETS.heroBlueprint}
                alt="Marketing Growth Blueprint - Alife Stable Partner Program"
                width={1354}
                height={1162}
                priority
                sizes="(min-width: 1280px) 860px, (min-width: 1024px) 65vw, (min-width: 640px) 680px, 95vw"
                className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(7,135,101,0.22)] hover:scale-[1.015] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
