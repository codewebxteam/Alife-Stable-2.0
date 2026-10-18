"use client";

import React from "react";
import { WHAT_YOU_GET_ITEMS } from "./constants";
import { FeatureIcon } from "./Icons";

export function WhatYouGet() {
  const benefitStrip = [
    "No Course Creation",
    "No Technical Skills Required",
    "Ready-to-Sell Courses",
    "Your Brand, Your Business",
  ];

  return (
    <section id="what-you-get" className="py-6 sm:py-8 lg:py-10 bg-[#FBF7EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-2">
            WHAT YOU GET
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B2B] tracking-tight mb-2">
            Everything You Need to Start, Grow and Succeed
          </h2>
          <p className="text-xs sm:text-sm text-[#65736F] leading-relaxed">
            We provide the platform, content, and support — so you can focus on marketing and growing your business.
          </p>
        </div>

        {/* 12 Benefit Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4.5">
          {WHAT_YOU_GET_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group p-4 sm:p-5 rounded-2xl bg-white border border-[#078765]/10 hover:border-[#078765]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E8F4EC] group-hover:bg-[#078765] text-[#078765] group-hover:text-white flex items-center justify-center transition-colors duration-200 mb-3 shadow-2xs">
                  <FeatureIcon name={item.icon} className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#102B2B] group-hover:text-[#078765] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#65736F] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Horizontal Benefit Strip */}
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#078765]/10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center">
          {benefitStrip.map((benefit, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-[11px] sm:text-xs font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#078765]" />
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
