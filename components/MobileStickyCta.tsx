"use client";

import React from "react";

interface MobileStickyCtaProps {
  onOpenDemo: () => void;
  onOpenPartner?: () => void;
}

export function MobileStickyCta({ onOpenDemo }: MobileStickyCtaProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-[#078765]/20 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-md mx-auto">
        <button
          type="button"
          onClick={onOpenDemo}
          className="w-full py-3 px-4 rounded-xl text-sm font-extrabold text-white bg-[#078765] hover:bg-[#064E43] shadow-md active:scale-98 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Book your free demo slot</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white">Free</span>
        </button>
      </div>
    </div>
  );
}
