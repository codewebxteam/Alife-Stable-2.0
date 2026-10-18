"use client";

import React from "react";
import Image from "next/image";
import { IMAGE_ASSETS, WHAT_IS_BENEFITS } from "./constants";
import { ArrowRightIcon, CheckIcon } from "./Icons";

interface WhatIsAlifeProps {
  onOpenDemo: () => void;
}

export function WhatIsAlife({ onOpenDemo }: WhatIsAlifeProps) {
  return (
    <section id="about" className="py-6 sm:py-8 lg:py-10 bg-[#FFFFFF] relative overflow-hidden">
      {/* Decorative subtle ambient blur */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#E8F4EC]/40 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
          {/* Left Column: Text & Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-xs font-bold tracking-wider uppercase">
              WHAT IS ALIFE STABLE?
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B2B] tracking-tight leading-tight">
              A Complete Solution to Launch Your Own Online Course Business
            </h2>

            <p className="text-base sm:text-lg text-[#65736F] leading-relaxed">
              Alife Stable helps individuals, educators, institutes, and entrepreneurs start their own branded online learning platform with high-quality, ready-made courses. You get the platform, courses, support, and everything you need — without creating content or managing complicated technology.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                Book Your Free Demo
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Free Floating Sticker Mockup & Benefit Badges */}
          <div className="lg:col-span-6 relative">
            {/* Free Floating Mockup (No outer box frame) */}
            <div className="relative w-full aspect-[16/10] drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={IMAGE_ASSETS.partnerDashboardMockup}
                alt="Alife Stable Partner Education Dashboard Mockup showing courses, earnings, and admin controls"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>

            {/* 4 Benefit Indicators placed cleanly below the mockup */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-6">
              {WHAT_IS_BENEFITS.map((item) => (
                <div
                  key={item.title}
                  className="p-3 sm:p-3.5 rounded-xl bg-[#FBF7EF] border border-[#078765]/15 shadow-2xs flex items-start gap-2.5"
                >
                  <div className="p-1 rounded-full bg-[#E8F4EC] text-[#078765] shrink-0 mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#102B2B] leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#65736F] mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
