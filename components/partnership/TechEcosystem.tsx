"use client";

import React from "react";
import {
  Globe,
  Layout,
  Sliders,
  BookOpen,
  Sparkles,
  TrendingUp,
  CreditCard,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { DEMO_CALENDAR_URL } from "../constants";

interface TechEcosystemProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

export function TechEcosystem({ onOpenDemo, onOpenPartner }: TechEcosystemProps) {
  const pillars = [
    {
      icon: Globe,
      title: "Professional website (Fully functional)",
      subtitle: "Turnkey Deployment",
      description:
        "Modern, high-converting branded website ready to welcome visitors and convert them into paying students.",
      highlight: "100% Functional",
    },
    {
      icon: Layout,
      title: "Student LMS",
      subtitle: "Web & Mobile Friendly",
      description:
        "Fast-loading learning management portal for students with smooth playback, course progress, and resources.",
      highlight: "Custom White-Label",
    },
    {
      icon: Sliders,
      title: "Admin Panel",
      subtitle: "Total Business Control",
      description:
        "Comprehensive dashboard to manage learners, assign courses, track enrollments, and oversee operations.",
      highlight: "Full Admin Access",
    },
    {
      icon: BookOpen,
      title: "Ready to sell high demand courses",
      subtitle: "Pre-Loaded Content",
      description:
        "Curated library of high-converting AI and tech courses ready to market immediately with zero filming required.",
      highlight: "Zero Course Creation",
    },
    {
      icon: Sparkles,
      title: "Your brand, Your pricing",
      subtitle: "Complete Freedom",
      description:
        "Operate under your own academy name and identity with full freedom to set course prices that suit your market.",
      highlight: "Your Own Brand",
    },
    {
      icon: TrendingUp,
      title: "Keep 100% Profits",
      subtitle: "Zero Profit Sharing",
      description:
        "No platform royalty cuts or commission splits. Every rupee generated from your course sales is 100% yours.",
      highlight: "0% Commission Cut",
    },
    {
      icon: CreditCard,
      title: "Direct Payment integration",
      subtitle: "Instant Bank Payouts",
      description:
        "Direct checkout via Razorpay, UPI, & cards so student payments deposit straight into your personal bank account.",
      highlight: "Direct Settlements",
    },
    {
      icon: Headphones,
      title: "Training & supports",
      subtitle: "Dedicated Guidance",
      description:
        "Step-by-step onboarding, platform walkthroughs, and priority advisory support whenever you need assistance.",
      highlight: "Priority Assistance",
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#FBF7EF] relative overflow-hidden border-t border-[#078765]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-xs font-bold tracking-wider uppercase mb-2 border border-[#078765]/20 shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-[#078765]" />
            CLOUD INFRASTRUCTURE
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B2B] tracking-tight">
            The Complete Technology Ecosystem
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#102B2B] font-medium leading-relaxed max-w-xl mx-auto">
            Everything engineered so you never have to write code, configure servers, or hire software developers.
          </p>
        </div>

        {/* 8 Technology Pillars Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10">
          {pillars.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="group p-3.5 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-[#078765]/15 hover:border-[#078765] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon + Highlight Badge */}
                  <div className="flex items-center justify-between gap-1.5 mb-2.5 sm:mb-4">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-[#E8F4EC] text-[#078765] group-hover:bg-[#078765] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-2xs border border-[#078765]/20 shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#FBF7EF] border border-[#078765]/20 text-[#078765] truncate">
                      {item.highlight}
                    </span>
                  </div>

                  <div className="text-[10px] sm:text-[11px] font-bold text-[#078765] uppercase tracking-wider mb-0.5 sm:mb-1 truncate">
                    {item.subtitle}
                  </div>

                  <h3 className="text-xs sm:text-base lg:text-lg font-extrabold text-[#102B2B] group-hover:text-[#078765] transition-colors leading-snug mb-1.5 sm:mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Dark high-contrast concise description */}
                  <p className="text-[11px] sm:text-xs text-[#102B2B] font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-Page Call to Action Strip beneath Ecosystem */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#078765]/25 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-2xl bg-[#078765] text-white flex items-center justify-center shrink-0 shadow-xs">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#102B2B]">
                Zero Technical Knowledge Required
              </h3>
              <p className="text-xs text-[#102B2B] font-medium mt-0.5">
                Our cloud engineers manage 100% of servers, updates, and video streaming infrastructure.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={DEMO_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#078765] hover:bg-[#064E43] transition-all cursor-pointer shadow-md active:scale-98"
            >
              Book your free demo slot
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
