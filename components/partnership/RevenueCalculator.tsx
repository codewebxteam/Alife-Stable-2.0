"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface RevenueCalculatorProps {
  onOpenPartner: () => void;
  onOpenDemo: () => void;
}

export function RevenueCalculator({
  onOpenPartner,
  onOpenDemo,
}: RevenueCalculatorProps) {
  const [students, setStudents] = useState<number>(25);
  const [price, setPrice] = useState<number>(999);

  const monthlyProfit = students * price;
  const annualProfit = monthlyProfit * 12;

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#FBF7EF] relative overflow-hidden border-y border-[#078765]/15">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#078765]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8F4EC] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-xs font-bold uppercase tracking-wider mb-2 border border-[#078765]/20 shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5 text-[#078765]" />
            PROFIT SIMULATOR
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B2B] tracking-tight">
            Calculate Your Monthly Academy Earnings
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#102B2B] font-medium leading-relaxed">
            Unlike Udemy or Skillshare that take 30%–50% cuts, you keep <span className="text-[#078765] font-bold">100% of student fee collections</span> directly in your bank account.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="bg-white rounded-3xl border-2 border-[#078765]/30 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Controls Column (Sliders & Presets) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              {/* Slider 1: Students per Month */}
              <div className="space-y-3 bg-[#FBF7EF] p-5 rounded-2xl border border-[#078765]/15">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-extrabold text-[#102B2B] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#078765]" />
                    Estimated Course Sales / Month
                  </label>
                  <span className="text-base sm:text-lg font-black text-[#078765] bg-white px-3 py-0.5 rounded-lg border border-[#078765]/20 shadow-2xs">
                    {students} Students
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={students}
                  onChange={(e) => setStudents(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E8F4EC] rounded-lg appearance-none cursor-pointer accent-[#078765]"
                />
                <div className="flex justify-between items-center text-[10px] sm:text-xs font-bold text-[#102B2B] pt-0.5 whitespace-nowrap">
                  <span>5 Sales</span>
                  <span className="hidden sm:inline">50 Sales</span>
                  <span>100 Sales</span>
                  <span>150+ Sales</span>
                </div>
              </div>

              {/* Slider 2: Average Course Price */}
              <div className="space-y-3 bg-[#FBF7EF] p-5 rounded-2xl border border-[#078765]/15">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-extrabold text-[#102B2B] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#078765]" />
                    Average Selling Price Per Course
                  </label>
                  <span className="text-base sm:text-lg font-black text-[#078765] bg-white px-3 py-0.5 rounded-lg border border-[#078765]/20 shadow-2xs">
                    ₹{price.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="3999"
                  step="50"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E8F4EC] rounded-lg appearance-none cursor-pointer accent-[#078765]"
                />
                <div className="flex justify-between items-center text-[10px] sm:text-xs font-bold text-[#102B2B] pt-0.5 whitespace-nowrap">
                  <span>₹100 <span className="hidden sm:inline font-medium text-[#102B2B]/60">(Min)</span></span>
                  <span className="hidden sm:inline">₹499</span>
                  <span>₹999 <span className="hidden sm:inline font-medium text-[#102B2B]/60">(Avg)</span></span>
                  <span>₹3,999+ <span className="hidden sm:inline font-medium text-[#102B2B]/60">(Max)</span></span>
                </div>
              </div>
            </div>

            {/* Right Summary Card (The Big ROI Punch) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#102B2B] to-[#064E43] text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-5 border border-[#078765]/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                    Your Monthly Direct Profit
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold bg-[#078765] px-2.5 py-0.5 rounded-full text-white">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    100% Yours
                  </span>
                </div>

                {/* Big Profit Display */}
                <div className="mt-4 mb-2">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                    ₹{monthlyProfit.toLocaleString("en-IN")}
                  </div>
                  <div className="text-xs text-white/90 font-medium mt-1">
                    Direct bank settlement (₹0 platform cut)
                  </div>
                </div>

                {/* Annual Run-Rate */}
                <div className="mt-4 p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-white/75 font-bold">
                      Projected Annual Run-Rate
                    </div>
                    <div className="text-lg font-black text-white">
                      ₹{annualProfit.toLocaleString("en-IN")} / year
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold bg-amber-400 text-[#102B2B] px-2 py-0.5 rounded">
                      High Margin
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={onOpenPartner}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-[#102B2B] bg-[#FBF7EF] hover:bg-white shadow-md hover:shadow-lg transition-all duration-200 text-sm cursor-pointer active:scale-98"
                >
                  Start Your Academy for ₹1,999/yr
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white/90 bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
                >
                  Book 1-on-1 Walkthrough Call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Earning Guarantee beneath calculator */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6">
          <div className="bg-white rounded-2xl p-4 border border-[#078765]/15 flex items-center gap-3 shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-[#E8F4EC] text-[#078765] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-[#102B2B]">
                Direct Payout Gateways
              </h4>
              <p className="text-[11px] text-[#102B2B] font-medium mt-0.5">
                Razorpay, UPI, cards straight to your bank.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-[#078765]/15 flex items-center gap-3 shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-[#E8F4EC] text-[#078765] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-[#102B2B]">
                Zero Royalty Deductions
              </h4>
              <p className="text-[11px] text-[#102B2B] font-medium mt-0.5">
                We never take commission on your course sales.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-[#078765]/15 flex items-center gap-3 shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-[#E8F4EC] text-[#078765] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-[#102B2B]">
                Set Your Own Course Pricing
              </h4>
              <p className="text-[11px] text-[#102B2B] font-medium mt-0.5">
                Full freedom to charge ₹499, ₹1,999, or ₹9,999.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
