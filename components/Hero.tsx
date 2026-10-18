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
    <section id="home" className="relative w-full overflow-hidden min-h-[540px] sm:min-h-[640px] lg:min-h-[720px] flex items-start md:items-center bg-transparent">
      {/* Background Image Container (100% Transparent Overlays - Pure Background Image) */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image: Professional Handshake by the Window */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <Image
            src={IMAGE_ASSETS.desktopHeroBg}
            alt="Professionals shaking hands in modern conference room"
            fill
            priority
            sizes="(min-width: 768px) 100vw, 1px"
            className="object-cover object-right lg:object-[80%_center]"
          />
        </div>

        {/* Mobile Image: Golden Handshake Above the City */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <Image
            src={IMAGE_ASSETS.mobileHeroBg}
            alt="Business partners handshake overlooking city"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 1px"
            className="object-cover object-bottom"
          />
        </div>
      </div>

      {/* Hero Content Layer - 100% Transparent, No Background Overlays */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-80 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-8 xl:col-span-7 bg-transparent">
            {/* Eyebrow Badge - Transparent */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-transparent border border-[#078765]/40 text-[#078765] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#078765] animate-pulse" />
              {BRAND_INFO.eyebrow}
            </div>

            {/* Main Headline with Line Break after 'Build Your AI Course' */}
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#102B2B] tracking-tight leading-snug mb-2 sm:mb-3">
              Build Your AI Course <br />
              Business{" "}
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

            {/* Ultra-Short & Minimal Supporting Description */}
            <p className="text-xs sm:text-base md:text-lg text-[#102B2B] leading-relaxed max-w-xl mb-4 sm:mb-8 font-medium md:font-normal bg-transparent">
              Launch your branded academy with ready-to-sell courses and turnkey technology.
            </p>

            {/* CTA Buttons - Hidden on phone view, visible on desktop/tablet */}
            <div className="hidden sm:flex flex-row items-center gap-4 mb-6 sm:mb-8 bg-transparent">
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
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-[#064E43] bg-white/90 border-2 border-[#078765]/50 hover:border-[#078765] hover:bg-[#E8F4EC] transition-all duration-200 text-sm sm:text-base shadow-xs cursor-pointer active:scale-98"
              >
                Book Your Free Demo
              </button>
            </div>

            {/* Floating Benefit Badges - Hidden on phone view, visible on desktop/tablet */}
            <div className="hidden sm:flex flex-wrap gap-2 bg-transparent">
              {HERO_FLOATING_BENEFITS.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/80 border border-[#078765]/20 text-[#064E43] text-[11px] sm:text-xs font-semibold shadow-2xs backdrop-blur-xs"
                >
                  <CheckIcon className="w-3.5 h-3.5 text-[#078765]" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop Right Spacing Column */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
