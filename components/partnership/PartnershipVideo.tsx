"use client";

import React from "react";
import { ArrowRightIcon } from "../Icons";

interface PartnershipVideoProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

export function PartnershipVideo({ onOpenDemo, onOpenPartner }: PartnershipVideoProps) {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-2">
            PARTNERSHIP PRESENTATION
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B2B] tracking-tight mb-2">
            Watch How the Partnership Model Works
          </h2>
          <p className="text-xs sm:text-sm text-[#65736F] leading-relaxed">
            Take a 5-minute visual tour of the platform, admin controls, and monetization opportunities available to our education partners.
          </p>
        </div>

        {/* Video Presentation Embed Container */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-xl border-2 border-[#078765]/20 aspect-video w-full group">
          <iframe
            src="https://www.youtube.com/embed/HPW3iaE_0RE?rel=0&modestbranding=1&controls=1"
            title="Alife Stable Partnership Presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mid-Page Call to Action Strip beneath video */}
        <div className="mt-4 sm:mt-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FBF7EF] border border-[#078765]/15 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-[#102B2B]">
              Ready to see the live admin dashboard?
            </h3>
            <p className="text-xs sm:text-sm text-[#65736F]">
              Book a live 1-on-1 walkthrough with an education advisor today.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenDemo}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#064E43] bg-white border border-[#078765]/30 hover:border-[#078765] hover:bg-[#E8F4EC] transition-all cursor-pointer"
            >
              Book Free Demo
            </button>
            <button
              type="button"
              onClick={onOpenPartner}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#078765] hover:bg-[#064E43] transition-all cursor-pointer"
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
