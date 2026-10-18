"use client";

import React from "react";
import { BrandLogoMark } from "./Icons";
import { BRAND_INFO } from "./constants";

interface FooterProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

export function Footer({ onOpenDemo, onOpenPartner }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#102B2B] text-white pt-8 sm:pt-10 pb-20 md:pb-10 border-t border-[#078765]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pb-8 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogoMark className="w-10 h-10" />
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block">
                  {BRAND_INFO.name}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#078765]">
                  {BRAND_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#E8F4EC]/75 leading-relaxed max-w-sm">
              Empowering educators, institutes, and entrepreneurs to launch their own branded online learning business with ready-to-sell courses and comprehensive infrastructure.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenDemo}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#078765] text-[#E8F4EC] hover:bg-[#078765] hover:text-white transition-colors"
              >
                Book Demo
              </button>
              <button
                type="button"
                onClick={onOpenPartner}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#078765] text-white hover:bg-[#064E43] transition-colors"
              >
                Become Partner
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#078765]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#E8F4EC]/80">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-white transition-colors">
                  Courses & Curriculum
                </a>
              </li>
              <li>
                <a href="/partnership" className="hover:text-white transition-colors">
                  Partnership Plans
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact & FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#078765]">
              Compliance & Legal
            </h4>
            <p className="text-xs text-[#E8F4EC]/70 leading-relaxed">
              All partnership licensing rights and profit-sharing terms are strictly governed by our commercial agreement.
            </p>
            <ul className="space-y-2 text-sm text-[#E8F4EC]/80 pt-1">
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#partner-agreement" className="hover:text-white transition-colors">
                  Partnership Agreement Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8F4EC]/60">
          <p>© {currentYear} Alife Stable. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed for excellence in education entrepreneurship.
          </p>
        </div>
      </div>
    </footer>
  );
}
