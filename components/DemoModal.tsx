"use client";

import React from "react";
import { CloseIcon } from "./Icons";
import { DemoBookingExperience } from "./DemoBookingExperience";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#102B2B]/65 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white rounded-3xl p-5 sm:p-7 shadow-2xl relative border border-[#078765]/20 my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer z-10"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        <DemoBookingExperience compact onSuccessClose={onClose} />
      </div>
    </div>
  );
}
