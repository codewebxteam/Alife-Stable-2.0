"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FAQ_ITEMS, IMAGE_ASSETS } from "./constants";
import { PlusIcon, MinusIcon } from "./Icons";

interface FaqSectionProps {
  onOpenDemo: () => void;
}

export function FaqSection({ onOpenDemo }: FaqSectionProps) {
  // Open the first item by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-6 sm:py-8 lg:py-10 bg-[#FBF7EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
          {/* Left Column: Support Illustration & Information */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-[10px] sm:text-xs font-bold tracking-wider uppercase">
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B2B] tracking-tight leading-tight">
              Got Questions? We&apos;ve Got Answers.
            </h2>

            <p className="text-xs sm:text-sm text-[#1C3B37] font-medium leading-relaxed">
              Find answers to common questions about our partnership program. Still need clarity? Our advisory team is always happy to assist.
            </p>

            {/* Free Floating Customer Support Illustration */}
            <div className="relative max-w-[200px] sm:max-w-xs pt-1 hidden sm:block">
              <div className="relative aspect-[4/3] w-full drop-shadow-md">
                <Image
                  src={IMAGE_ASSETS.customerSupportIllustration}
                  alt="Friendly Customer Support Assistant illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Help Callout */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#078765]/20 shadow-xs">
              <h3 className="text-xs sm:text-sm font-bold text-[#102B2B] mb-0.5">
                Have a specific question?
              </h3>
              <p className="text-xs text-[#1C3B37] mb-2.5">
                Our support team is ready to assist you directly.
              </p>
              <button
                type="button"
                onClick={onOpenDemo}
                className="w-full text-center py-2 px-3 rounded-xl bg-[#078765] text-white hover:bg-[#064E43] text-xs font-bold transition-colors cursor-pointer"
              >
                Connect with Support
              </button>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 space-y-2 sm:space-y-2.5">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="rounded-xl sm:rounded-2xl border border-[#078765]/15 bg-white overflow-hidden transition-colors duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-[#102B2B] hover:text-[#078765] transition-colors cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <span className="shrink-0 text-[#078765]">
                      {isOpen ? (
                        <MinusIcon className="w-4 h-4" />
                      ) : (
                        <PlusIcon className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 pt-0 text-xs sm:text-sm text-[#1C3B37] leading-relaxed border-t border-[#078765]/10 mt-1">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
