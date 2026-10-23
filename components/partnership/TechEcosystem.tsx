"use client";

import React from "react";
import {
  Globe,
  Layout,
  ShieldCheck,
  CreditCard,
  BarChart3,
  Server,
  ArrowRight,
  CheckCircle2,
  Cpu,
} from "lucide-react";

interface TechEcosystemProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

export function TechEcosystem({ onOpenDemo, onOpenPartner }: TechEcosystemProps) {
  const pillars = [
    {
      icon: Layout,
      title: "Student LMS Portal",
      subtitle: "Web & Mobile Friendly",
      description:
        "Fast-loading learning portal branded with your custom domain, logo, and academy theme.",
      highlight: "Custom White-Label",
    },
    {
      icon: Globe,
      title: "Partner Admin Dashboard",
      subtitle: "Total Business Control",
      description:
        "Manage students, assign course batches, track orders, and issue custom certificates.",
      highlight: "Full Admin Access",
    },
    {
      icon: ShieldCheck,
      title: "Anti-Piracy Video Player",
      subtitle: "HD Secure Streaming",
      description:
        "Encrypted video player with disabled external sharing to protect your proprietary course assets.",
      highlight: "100% DRM Protected",
    },
    {
      icon: CreditCard,
      title: "Direct Payment Integration",
      subtitle: "Instant Bank Payouts",
      description:
        "Razorpay, UPI, & credit card checkout. 100% of student fee goes straight into your bank account.",
      highlight: "0% Commission Cut",
    },
    {
      icon: BarChart3,
      title: "Real-Time Sales Analytics",
      subtitle: "Live Revenue Tracking",
      description:
        "Track student completion rates, top-performing courses, and daily revenue growth in real time.",
      highlight: "Live Data Insights",
    },
    {
      icon: Server,
      title: "Managed Cloud Hosting",
      subtitle: "Zero Maintenance",
      description:
        "Zero server headaches. We handle high-speed CDN hosting, SSL certificates, and 24/7 uptime.",
      highlight: "99.9% Uptime SLA",
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

        {/* 6 Technology Pillars Grid: 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 mb-8 sm:mb-10">
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
            <button
              type="button"
              onClick={onOpenDemo}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-bold text-xs text-[#064E43] bg-[#E8F4EC] hover:bg-[#078765] hover:text-white transition-all cursor-pointer shadow-2xs active:scale-98"
            >
              Request Walkthrough
            </button>
            <button
              type="button"
              onClick={onOpenPartner}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#078765] hover:bg-[#064E43] transition-all cursor-pointer shadow-md active:scale-98"
            >
              Become Partner
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
