"use client";

import React from "react";
import { TESTIMONIALS } from "./constants";
import { StarIcon } from "./Icons";

export function Testimonials() {
  return (
    <section className="pt-8 pb-12 sm:py-10 lg:py-14 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-2 border border-[#078765]/20 shadow-2xs">
            TESTIMONIALS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B2B] tracking-tight mb-2">
            What Our Partners Say
          </h2>
          <p className="text-xs sm:text-sm text-[#102B2B] font-medium leading-relaxed">
            Real stories from our growing community of aspiring education entrepreneurs.
          </p>
        </div>

        {/* Testimonials Grid: 2 columns on phone in 1 single row, 3 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.id}
              className={`p-3.5 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-[#FBF7EF] border-2 border-[#078765]/15 hover:border-[#078765] shadow-xs hover:shadow-md transition-all duration-200 flex-col justify-between min-h-[220px] sm:min-h-0 ${
                idx >= 2 ? "hidden md:flex" : "flex"
              }`}
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-[#078765] mb-2 sm:mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#078765]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[11px] sm:text-xs md:text-sm text-[#102B2B] leading-relaxed italic mb-3 sm:mb-4 line-clamp-4 sm:line-clamp-none font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Illustrative Avatar */}
              <div className="flex items-center gap-2 sm:gap-3 pt-2.5 sm:pt-3 border-t border-[#078765]/15">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#078765] text-white flex items-center justify-center font-bold text-[10px] sm:text-xs shrink-0 shadow-2xs">
                  {item.avatarInitial}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-extrabold text-[11px] sm:text-xs md:text-sm text-[#102B2B] truncate">
                    {item.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-[#102B2B]/80 font-medium truncate">
                    {item.role} • {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
