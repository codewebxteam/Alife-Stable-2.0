"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

interface WhatYouGetProps {
  onOpenPartner?: () => void;
  onOpenDemo?: () => void;
}

export const comparisonRows = [
  {
    feature: "Course Content & Curriculum",
    traditional: "6–12 months spent filming, editing, and designing syllabus from scratch",
    alife: "Instant access to 1000+ pre-built, high-demand AI and tech courses ready to sell",
  },
  {
    feature: "Capital Investment Required",
    traditional: "₹3,00,000 to ₹5,00,000+ for custom development, LMS licenses, and studio gear",
    alife: "All-inclusive turnkey partnership license at just ₹1,999/year",
  },
  {
    feature: "Revenue & Profit Retention",
    traditional: "Marketplaces deduct 30% to 50% commission plus listing charges on every sale",
    alife: "100% of your course fees deposited directly into your payment gateway",
  },
  {
    feature: "Hosting, Servers & Maintenance",
    traditional: "Recurring server bills, CDN charges, bandwidth limits, and technical bug fixes",
    alife: "Fully managed, scalable cloud hosting and student web app included",
  },
  {
    feature: "Brand Identity & Student Data",
    traditional: "Students stay loyal to third-party marketplaces; zero brand recognition for you",
    alife: "Complete white-label solution with your domain, logo, and private student community",
  },
  {
    feature: "Go-to-Market Speed",
    traditional: "Months of delays before welcoming your first paying student",
    alife: "Turnkey delivery within 12 to 24 hrs, fully configured and operational",
  },
];

export function WhatYouGet({ onOpenPartner, onOpenDemo }: WhatYouGetProps) {
  return (
    <section id="comparison" className="py-6 sm:py-8 lg:py-10 bg-white border-y border-[#078765]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#078765] uppercase">
            STRATEGIC COMPARISON
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B2B] tracking-tight mt-1">
            Starting Alone vs. Partnering with Alife Stable
          </h2>
          <p className="mt-2 text-[#102B2B] text-xs sm:text-sm font-medium">
            Why hundreds of educators choose our turnkey franchise ecosystem over cumbersome, expensive traditional development.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-[#078765]/20 shadow-xs bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#078765]/20 bg-[#102B2B] text-white">
                <th className="py-3.5 px-5 text-xs font-bold uppercase tracking-wider w-1/4">
                  Key Dimension
                </th>
                <th className="py-3.5 px-5 text-xs font-bold uppercase tracking-wider w-[37.5%] text-[#E8F4EC]/75">
                  Starting Independently / Marketplaces
                </th>
                <th className="py-3.5 px-5 text-xs font-bold uppercase tracking-wider w-[37.5%] bg-[#078765] text-white">
                  The Alife Stable Partnership
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#078765]/10 text-xs sm:text-sm">
              {comparisonRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-[#FBF7EF]/50"}
                >
                  <td className="py-3 px-5 font-bold text-[#102B2B]">
                    {row.feature}
                  </td>
                  <td className="py-3 px-5 text-[#102B2B] leading-relaxed">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="py-3 px-5 font-medium text-[#064E43] bg-[#E8F4EC]/40 leading-relaxed">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#078765] shrink-0 mt-0.5" />
                      <span className="font-semibold">{row.alife}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {comparisonRows.map((row, idx) => (
            <div
              key={idx}
              className="rounded-2xl border-2 border-[#078765]/20 bg-white p-4 sm:p-5 shadow-xs space-y-3"
            >
              {/* Key Dimension Header with Sequence & Larger Text */}
              <div className="space-y-1.5 pb-2.5 border-b border-[#078765]/15">
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#078765] bg-[#E8F4EC] px-2 py-0.5 rounded-md border border-[#078765]/20">
                  KEY DIMENSION #{idx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-black text-[#102B2B] leading-snug">
                  {row.feature}
                </h3>
              </div>

              {/* Traditional / Starting Independently */}
              <div className="p-3 rounded-xl bg-red-50/80 border border-red-200 text-xs text-red-950 flex items-start gap-2 shadow-2xs">
                <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-extrabold text-[11px] uppercase tracking-wider text-red-700 block">
                    The Hard Way (Solo / Marketplace):
                  </span>
                  <p className="font-medium text-xs leading-relaxed text-[#102B2B]">
                    {row.traditional}
                  </p>
                </div>
              </div>

              {/* Alife Stable Partnership */}
              <div className="p-3 rounded-xl bg-[#E8F4EC] border border-[#078765]/30 text-xs text-[#064E43] flex items-start gap-2 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#078765] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-extrabold text-[11px] uppercase tracking-wider text-[#078765] block">
                    The Alife Stable Advantage:
                  </span>
                  <p className="font-bold text-xs leading-relaxed text-[#064E43]">
                    {row.alife}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-Page Call to Action */}
        <div className="mt-5 sm:mt-6 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenPartner}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-xs transition-all cursor-pointer text-xs sm:text-sm"
            >
              Start Your Branded Academy at ₹1,999/yr
            </button>
            <button
              type="button"
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-[#064E43] bg-white border border-[#078765]/30 hover:border-[#078765] transition-all cursor-pointer text-xs sm:text-sm"
            >
              Request a Quick Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
