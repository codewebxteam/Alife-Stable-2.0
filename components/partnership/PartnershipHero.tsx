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
    <section className="relative w-full overflow-hidden min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] flex items-start sm:items-center bg-[#FBF7EF]">
      {/* Background Graphic Handshake Image */}
      <div className="absolute inset-0 z-0">
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <Image
            src={IMAGE_ASSETS.desktopHeroBg}
            alt="Business partners shaking hands in modern conference room"
            fill
            priority
            sizes="(min-width: 768px) 100vw, 1px"
            className="object-cover object-right lg:object-[80%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FBF7EF] via-[#FBF7EF]/90 to-transparent w-full lg:w-[65%]" />
          <div className="absolute inset-0 bg-[#FBF7EF]/20" />
        </div>

        <div className="block md:hidden absolute inset-0 w-full h-full">
          <Image
            src={IMAGE_ASSETS.mobileHeroBg}
            alt="Partnership handshake overlooking city"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 1px"
            className="object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FBF7EF]/90 via-[#FBF7EF]/40 to-transparent h-80" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-72 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] border border-[#078765]/20 text-[#078765] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#078765] animate-pulse" />
              OFFICIAL PARTNERSHIP PROGRAM
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold text-[#102B2B] tracking-tight leading-[1.15]">
              Build & Scale Your Branded Course Business{" "}
              <span className="text-[#078765] inline-block relative">
                with Alife Stable
                <svg
                  className="absolute -bottom-1 left-0 w-full text-[#078765]/25 h-2"
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

            {/* Subheading - Hidden on mobile/phone view */}
            <p className="hidden sm:block text-base sm:text-lg text-[#65736F] leading-relaxed max-w-2xl">
              Launch your own branded academy with ready-to-sell AI & digital courses, a personal domain, full admin controls, and complete tech support. You focus on learners — we handle the technology.
            </p>

            {/* Dual CTAs in Hero - Hidden on mobile/phone view, user has fixed MobileStickyCta */}
            <div className="hidden sm:flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenPartner}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-md hover:shadow-lg transition-all duration-200 text-base cursor-pointer active:scale-98"
              >
                Become a Partner
                <ArrowRightIcon className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-[#064E43] bg-white border-2 border-[#078765]/40 hover:border-[#078765] hover:bg-[#E8F4EC] transition-all duration-200 text-base shadow-xs cursor-pointer active:scale-98"
              >
                Book Your Free Demo
              </button>
            </div>

            {/* Trust Highlights - Hidden on mobile/phone view */}
            <div className="hidden sm:flex flex-wrap gap-2.5 pt-2">
              {[
                "100% White-Label Platform",
                "Zero Course Creation Required",
                "Keep 100% Course Profits",
                "Turnkey Technical Support",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 border border-[#078765]/20 text-[#064E43] text-xs font-semibold shadow-2xs"
                >
                  <CheckIcon className="w-3.5 h-3.5 text-[#078765]" />
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
