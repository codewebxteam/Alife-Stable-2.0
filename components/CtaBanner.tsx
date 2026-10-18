"use client";

import React from "react";
import { ArrowRightIcon } from "./Icons";

interface CtaBannerProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

export function CtaBanner({ onOpenDemo, onOpenPartner }: CtaBannerProps) {
  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-[#FBF7EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#064E43] text-white p-5 sm:p-8 lg:p-10 overflow-hidden shadow-xl">
          {/* Subtle Organic Background Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#078765]/40 rounded-full blur-3xl -z-0 translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E8F4EC]/10 rounded-full blur-2xl -z-0 -translate-x-1/4 translate-y-1/4" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#E8F4EC] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              YOUR TIME TO SCALE IS NOW
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Ready to Start Your Own AI Course Business?
            </h2>

            <p className="text-xs sm:text-sm text-[#E8F4EC]/90 leading-relaxed max-w-xl mx-auto">
              Book a free demo today and discover how Alife Stable can help you build, grow, and succeed with ready-made courses and turnkey infrastructure.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5">
              <button
                type="button"
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-[#064E43] bg-white hover:bg-[#E8F4EC] shadow-sm hover:shadow-md transition-all duration-200 text-xs sm:text-sm cursor-pointer active:scale-98"
              >
                Book Your Free Demo
              </button>

              <button
                type="button"
                onClick={onOpenPartner}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl font-bold text-white bg-[#078765] hover:bg-[#05694f] border border-white/20 shadow-sm hover:shadow-md transition-all duration-200 text-xs sm:text-sm cursor-pointer active:scale-98"
              >
                Become a Partner
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
