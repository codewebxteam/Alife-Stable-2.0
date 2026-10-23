"use client";

import React from "react";
import {
  UserCheck,
  Globe,
  CreditCard,
  Rocket,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface LaunchInStepsProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

export function LaunchInSteps({ onOpenDemo, onOpenPartner }: LaunchInStepsProps) {
  const steps = [
    {
      step: "01",
      icon: UserCheck,
      title: "Partner Registration",
      subtitle: "Instant Onboarding",
      points: [
        "Select your partnership plan in under 2 minutes",
        "Secure 100% commercial distribution rights",
        "Instant partner admin dashboard access",
      ],
    },
    {
      step: "02",
      icon: Globe,
      title: "Brand & Domain Setup",
      subtitle: "White-Label Deployment",
      points: [
        "Custom web domain configured by our team",
        "Personalized with your academy logo & branding",
        "Dedicated student learning portal deployed",
      ],
    },
    {
      step: "03",
      icon: CreditCard,
      title: "Connect Payments",
      subtitle: "Direct Bank Settlements",
      points: [
        "Connect Razorpay, UPI, or Stripe gateway",
        "100% of student course fees deposit directly into your bank",
        "Zero commission deductions or hidden cuts",
      ],
    },
    {
      step: "04",
      icon: Rocket,
      title: "Start Selling & Scaling",
      subtitle: "100% Profit Retention",
      points: [
        "Academy goes live with 16+ pre-loaded AI mastercourses",
        "Full cloud hosting, CDN, & server maintenance included",
        "Keep 100% of your course sales and profits",
      ],
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E8F4EC]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#078765]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-xs font-bold tracking-wider uppercase mb-2 border border-[#078765]/20 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#078765]" />
            FAST-TRACK ONBOARDING
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B2B] tracking-tight">
            Launch Your Academy in 4 Simple Steps
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#102B2B] font-medium leading-relaxed max-w-xl mx-auto">
            From registration to your first paying student in 12 to 24 hrs. Zero coding or course production required.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8 sm:mb-10">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="group relative rounded-3xl p-6 bg-[#FBF7EF] border-2 border-[#078765]/20 hover:border-[#078765] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Step Number */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#078765]/15">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-white border border-[#078765]/20 text-[#078765] group-hover:bg-[#078765] group-hover:text-white flex items-center justify-center font-black text-xs transition-colors duration-300 shadow-2xs">
                        {item.step}
                      </div>
                      <span className="text-xs font-extrabold text-[#078765] uppercase tracking-wider">
                        Step {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Icon & Title (Parallel / Side-by-side) */}
                  <div className="pt-4 pb-2">
                    <div className="flex items-start gap-3.5 mb-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#E8F4EC] text-[#078765] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-2xs border border-[#078765]/20 mt-0.5">
                        <Icon className="w-5 h-5 text-[#078765]" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] font-bold text-[#078765] uppercase tracking-wider mb-0.5">
                          {item.subtitle}
                        </div>
                        <h3 className="text-base sm:text-lg font-extrabold text-[#102B2B] leading-snug">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Dark, crisp bullet points */}
                    <ul className="space-y-2 pt-3 border-t border-[#078765]/15">
                      {item.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2 text-xs font-semibold text-[#102B2B] leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#078765] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Flow Arrow: Desktop Right Arrow between cards */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#078765] text-white items-center justify-center shadow-md border-2 border-white pointer-events-none group-hover:scale-110 group-hover:bg-[#064E43] transition-all">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                )}

                {/* Flow Arrow: Mobile/Tablet Down Arrow between cards */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex absolute -bottom-3.5 left-1/2 -translate-x-1/2 z-20 w-7 h-7 rounded-full bg-[#078765] text-white items-center justify-center shadow-md border-2 border-white pointer-events-none">
                    <ArrowDown className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mid-Page Call to Action Strip beneath Steps */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#064E43] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg border border-[#078765]">
          <div className="text-center sm:text-left space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Turnkey Setup in 12 to 24 Hrs
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-white">
              Want our technical team to set up your academy for you?
            </h3>
            <p className="text-xs text-white/90 font-medium">
              Join today at ₹1,999/yr and our onboarding engineers will configure everything for you.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenDemo}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl font-bold text-xs text-[#064E43] bg-white hover:bg-[#E8F4EC] transition-all cursor-pointer shadow-xs active:scale-98"
            >
              Book Free Walkthrough
            </button>
            <button
              type="button"
              onClick={onOpenPartner}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-[#078765] hover:bg-[#05694f] border border-white/20 transition-all cursor-pointer shadow-md active:scale-98"
            >
              Start Registration
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
