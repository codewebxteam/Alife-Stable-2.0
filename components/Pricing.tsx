"use client";

import React from "react";
import { PRICING_PLANS } from "./constants";
import { CheckIcon, ArrowRightIcon } from "./Icons";

interface PricingProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

export function Pricing({ onOpenDemo, onOpenPartner }: PricingProps) {
  const plan = PRICING_PLANS[0];

  return (
    <section id="pricing" className="py-6 sm:py-8 lg:py-10 bg-[#FBF7EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-2">
            PARTNERSHIP PRICE DETAILS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B2B] tracking-tight mb-2">
            Simple & Transparent Partnership Plan
          </h2>
          <p className="text-xs sm:text-sm text-[#65736F] leading-relaxed">
            One comprehensive plan. Everything included to start, run, and scale your online course business.
          </p>
        </div>

        {/* Single Centered High-Value Pricing Card */}
        <div className="max-w-3xl mx-auto mb-4 sm:mb-6">
          <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-white border-2 border-[#078765] shadow-lg shadow-[#078765]/10 overflow-hidden">
            {/* Top Badge */}
            <div className="absolute top-0 right-0 bg-[#078765] text-white text-[10px] sm:text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider shadow-xs">
              {plan.badge}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
              {/* Left Column: Plan Info & Price */}
              <div className="md:col-span-5 space-y-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102B2B] mb-0.5">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#65736F] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="pt-1 pb-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#078765]">
                      {plan.price}
                    </span>
                    <span className="text-xs font-semibold text-[#65736F]">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#078765] font-semibold mt-0.5">
                    100% Commercial Licence Included
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    onClick={onOpenPartner}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-md hover:shadow-lg transition-all duration-200 text-sm cursor-pointer active:scale-98"
                  >
                    {plan.ctaText}
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-[#064E43] bg-[#E8F4EC] hover:bg-[#078765] hover:text-white transition-all cursor-pointer"
                  >
                    Request a Demo First
                  </button>
                </div>
              </div>

              {/* Right Column: Included Features */}
              <div className="md:col-span-7 bg-[#FBF7EF] rounded-2xl p-4 sm:p-5 border border-[#078765]/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#102B2B] mb-3">
                  Included Features:
                </h4>
                <div className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#078765] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <CheckIcon className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#102B2B] leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Trust Note */}
        <p className="text-center text-[11px] text-[#65736F]">
          Commercial partnership terms governed by official platform agreement. Direct payouts with no course-sale royalties.
        </p>
      </div>
    </section>
  );
}
