"use client";

import React from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

interface PartnershipVideoProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

export function PartnershipVideo({ onOpenDemo, onOpenPartner }: PartnershipVideoProps) {
  return (
    <section className="py-10 sm:py-14 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-xs font-bold tracking-wider uppercase mb-2 border border-[#078765]/20 shadow-2xs">
            <Play className="w-3.5 h-3.5 text-[#078765]" />
            PARTNERSHIP PRESENTATION
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B2B] tracking-tight">
            Watch How the Partnership Model Works
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#102B2B] font-medium leading-relaxed">
            Take a 5-minute visual tour of the platform, admin controls, and direct monetization opportunities for education partners.
          </p>
        </div>

        {/* Video Presentation Embed Container */}
        <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl border-2 border-[#078765]/30 aspect-video w-full group">
          <iframe
            src="https://www.youtube.com/embed/HPW3iaE_0RE?rel=0&modestbranding=1&controls=1"
            title="Alife Stable Partnership Presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mid-Page Call to Action Strip beneath video */}
        <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-3xl bg-[#FBF7EF] border-2 border-[#078765]/20 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#078765] uppercase tracking-wider mb-0.5">
              <Sparkles className="w-3 h-3" />
              Live Interactive Walkthrough
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#102B2B]">
              Ready to see the live admin dashboard?
            </h3>
            <p className="text-xs text-[#102B2B] font-medium mt-0.5">
              Book a live 1-on-1 walkthrough with an education advisor today.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenDemo}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#064E43] bg-white border border-[#078765]/30 hover:border-[#078765] hover:bg-[#E8F4EC] transition-all cursor-pointer shadow-2xs active:scale-98"
            >
              Book Free Demo
            </button>
            <button
              type="button"
              onClick={onOpenPartner}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#078765] hover:bg-[#064E43] transition-all cursor-pointer shadow-md active:scale-98"
            >
              Become Partner
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
