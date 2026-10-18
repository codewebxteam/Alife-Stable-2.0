"use client";

import React, { useState } from "react";
import { CloseIcon, CheckIcon } from "./Icons";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: "demo" | "partner";
}

export function DemoModal({ isOpen, onClose, initialType = "demo" }: DemoModalProps) {
  const [formType, setFormType] = useState<"demo" | "partner">(initialType);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "AI & EdTech Course Business",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#078765]/20 p-6 md:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 text-[#65736F] hover:text-[#102B2B] p-1 rounded-full hover:bg-[#E8F4EC] transition-colors"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex gap-2 p-1 bg-[#FBF7EF] rounded-xl border border-[#078765]/10 mb-6 max-w-xs">
              <button
                type="button"
                onClick={() => setFormType("demo")}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                  formType === "demo"
                    ? "bg-[#078765] text-white shadow-sm"
                    : "text-[#65736F] hover:text-[#102B2B]"
                }`}
              >
                Book Free Demo
              </button>
              <button
                type="button"
                onClick={() => setFormType("partner")}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                  formType === "partner"
                    ? "bg-[#078765] text-white shadow-sm"
                    : "text-[#65736F] hover:text-[#102B2B]"
                }`}
              >
                Become a Partner
              </button>
            </div>

            <h3 className="text-2xl font-bold text-[#102B2B] mb-2 tracking-tight">
              {formType === "demo" ? "Schedule Your Free Guided Demo" : "Apply for Partnership"}
            </h3>
            <p className="text-sm text-[#65736F] mb-6">
              Connect with our EdTech partnership specialists. Discover how to launch your branded academy with ready-made courses.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#102B2B] uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#078765] focus:border-transparent text-sm bg-[#FBF7EF]/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#102B2B] uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#078765] focus:border-transparent text-sm bg-[#FBF7EF]/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#102B2B] uppercase tracking-wider mb-1.5">
                  Mobile Number (WhatsApp Preferred)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#078765] focus:border-transparent text-sm bg-[#FBF7EF]/50"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-[#078765] hover:bg-[#064E43] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {formType === "demo" ? "Confirm Free Demo Slot" : "Submit Partner Application"}
                </button>
              </div>

              <p className="text-center text-[11px] text-[#65736F]">
                Guaranteed 100% privacy. Zero spam. Our team will get in touch within 24 business hours.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-[#E8F4EC] text-[#078765] rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckIcon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#102B2B]">
              Thank You, {formData.name || "Partner"}!
            </h3>
            <p className="text-sm text-[#65736F] max-w-sm mx-auto">
              Your inquiry has been received. An Alife Stable advisor will contact you at{" "}
              <span className="font-semibold text-[#102B2B]">{formData.phone || formData.email || "your contact"}</span>{" "}
              with complete demo and partnership access.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl font-semibold text-white bg-[#078765] hover:bg-[#064E43] transition-colors"
              >
                Back to Alife Stable
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
