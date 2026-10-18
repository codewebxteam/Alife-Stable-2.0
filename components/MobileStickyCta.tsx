"use client";

import React from "react";

interface MobileStickyCtaProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

export function MobileStickyCta({ onOpenDemo, onOpenPartner }: MobileStickyCtaProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-[#078765]/20 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <button
          type="button"
          onClick={onOpenDemo}
          className="py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-[#064E43] bg-[#E8F4EC] border border-[#078765]/30 active:scale-98 transition-transform text-center truncate"
        >
          Book Free Demo
        </button>
        <button
          type="button"
          onClick={onOpenPartner}
          className="py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-sm active:scale-98 transition-transform text-center truncate"
        >
          Become a Partner
        </button>
      </div>
    </div>
  );
}
