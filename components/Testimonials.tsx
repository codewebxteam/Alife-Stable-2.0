"use client";

import React from "react";
import { TESTIMONIALS } from "./constants";
import { StarIcon } from "./Icons";

export function Testimonials() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-2">
            TESTIMONIALS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B2B] tracking-tight mb-2">
            What Our Partners Say
          </h2>
          <p className="text-xs sm:text-sm text-[#65736F] leading-relaxed">
            Real stories from our growing community of aspiring education entrepreneurs.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#FBF7EF] border border-[#078765]/10 shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-[#078765] mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-[#078765]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[#102B2B] leading-relaxed italic mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Illustrative Avatar */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#078765]/10">
                <div className="w-9 h-9 rounded-full bg-[#078765] text-white flex items-center justify-center font-bold text-xs">
                  {item.avatarInitial}
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-[#102B2B]">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-[#65736F]">
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
