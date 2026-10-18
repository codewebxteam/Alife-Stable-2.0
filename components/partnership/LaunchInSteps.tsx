"use client";

import React from "react";
import { ArrowRightIcon } from "../Icons";

interface LaunchInStepsProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

export function LaunchInSteps({ onOpenDemo, onOpenPartner }: LaunchInStepsProps) {
  const steps = [
    {
      step: "01",
      title: "Partner Registration",
      subtitle: "Quick Onboarding",
      description:
        "Select your partnership plan and secure your 100% commercial distribution license with a straightforward onboarding process.",
      tag: "Day 1",
    },
    {
      step: "02",
      title: "Brand & Domain Setup",
      subtitle: "Turnkey White-Labeling",
      description:
        "Our team configures your custom academy domain, brand logo, color palette, and deploys your personalized student web portal.",
      tag: "Day 2",
    },
    {
      step: "03",
      title: "Payment Gateway Connection",
      subtitle: "Direct Payouts",
      description:
        "Connect your preferred payment gateway (Razorpay, UPI, Cards) so that every student enrollment pays directly into your bank account.",
      tag: "Day 3",
    },
    {
      step: "04",
      title: "Start Selling & Scaling",
      subtitle: "Keep 100% of Profits",
      description:
        "Your academy goes live with full course catalogs pre-loaded. Focus on student outreach while we maintain all server and video tech.",
      tag: "Live",
    },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-2">
            EASY 4-STEP ONBOARDING
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B2B] tracking-tight mb-2">
            Launch Your Academy in 4 Simple Steps
          </h2>
          <p className="text-xs sm:text-sm text-[#65736F] leading-relaxed">
            Go from idea to a fully functional, branded online course business with zero technical hurdles.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mb-4 sm:mb-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-2xl p-4 sm:p-5 bg-[#FBF7EF] border border-[#078765]/15 hover:border-[#078765]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-black text-[#078765] opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-white border border-[#078765]/20 text-[#078765]">
                    {item.tag}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-[#078765] uppercase tracking-wider mb-0.5">
                  {item.subtitle}
                </div>
                <h3 className="text-base font-extrabold text-[#102B2B] mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-[#65736F] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-Page Call to Action Strip beneath Steps */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#064E43] text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-base font-extrabold">
              Want a personalized walkthrough of the onboarding process?
            </h3>
            <p className="text-xs text-[#E8F4EC]/80 mt-0.5">
              Speak with a partnership onboarding specialist today.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenDemo}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl font-bold text-xs text-[#064E43] bg-white hover:bg-[#E8F4EC] transition-all cursor-pointer"
            >
              Book Walkthrough
            </button>
            <button
              type="button"
              onClick={onOpenPartner}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-white bg-[#078765] hover:bg-[#05694f] border border-white/20 transition-all cursor-pointer"
            >
              Start Registration
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
