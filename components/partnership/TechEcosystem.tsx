"use client";

import React from "react";
import {
  Globe,
  Layout,
  ShieldCheck,
  CreditCard,
  BarChart3,
  Server,
  ArrowRightIcon,
  CheckCircle2,
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
      description:
        "A responsive, fast-loading learning platform branded with your logo, domain, and colors for seamless mobile & desktop learning.",
    },
    {
      icon: Globe,
      title: "Partner Admin Dashboard",
      description:
        "Full control over student accounts, orders, batch assignments, and course catalogs with comprehensive reporting.",
    },
    {
      icon: ShieldCheck,
      title: "Protected Video Infrastructure",
      description:
        "High-definition video playback with suppressed external controls and link protection to safeguard course materials.",
    },
    {
      icon: CreditCard,
      title: "Integrated Payment Processing",
      description:
        "Direct payment gateway integration ensuring 100% of student fee collections transfer directly to your designated bank account.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Progress Tracking",
      description:
        "Real-time visibility into student lecture completion, assessment benchmarks, course popularity, and revenue generation.",
    },
    {
      icon: Server,
      title: "Fully Managed Cloud Hosting",
      description:
        "Zero server management or dev-ops. We manage cloud hosting, SSL certificates, uptime monitoring, and security patches.",
    },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-2">
            TECHNICAL INFRASTRUCTURE
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B2B] tracking-tight mb-2">
            The Complete Technology Ecosystem
          </h2>
          <p className="text-xs sm:text-sm text-[#65736F] leading-relaxed">
            Everything engineered so you never have to hire developers, configure servers, or maintain complex software.
          </p>
        </div>

        {/* 6 Technology Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 mb-4 sm:mb-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="group p-4 sm:p-5 rounded-2xl bg-[#FBF7EF] border border-[#078765]/15 hover:border-[#078765]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white text-[#078765] group-hover:bg-[#078765] group-hover:text-white flex items-center justify-center transition-colors duration-200 mb-3 shadow-2xs border border-[#078765]/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#102B2B] group-hover:text-[#078765] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#65736F] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-Page Call to Action Strip beneath Ecosystem */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#E8F4EC] border border-[#078765]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <div className="w-8 h-8 rounded-full bg-[#078765] text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-extrabold text-[#064E43]">
                Zero Technical Knowledge Required
              </h3>
              <p className="text-[11px] sm:text-xs text-[#65736F]">
                Our cloud engineers manage 100% of updates, security, and video infrastructure.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenDemo}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl font-bold text-xs text-[#064E43] bg-white border border-[#078765]/30 hover:border-[#078765] transition-all cursor-pointer"
            >
              Request Walkthrough
            </button>
            <button
              type="button"
              onClick={onOpenPartner}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-xs text-white bg-[#078765] hover:bg-[#064E43] transition-all cursor-pointer"
            >
              Become Partner
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
