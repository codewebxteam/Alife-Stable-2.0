"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogoMark, MenuIcon, CloseIcon } from "./Icons";
import { BECOME_PARTNER_URL } from "./constants";

interface HeaderProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

export function Header({ onOpenDemo, onOpenPartner }: HeaderProps) {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const updateHash = () => {
      if (typeof window !== "undefined") {
        setCurrentHash(window.location.hash);
      }
    };

    updateHash();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", updateHash);
    };
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Partnership", href: "/partnership" },
    { label: "Contact", href: "/contact" },
  ];

  const checkIsActive = (href: string) => {
    if (href === "/") {
      return (
        pathname === "/" &&
        (!currentHash || currentHash === "#home" || currentHash === "")
      );
    }
    if (href === "/courses") {
      return pathname === "/courses" || pathname?.startsWith("/course");
    }
    if (href === "/partnership") {
      return pathname === "/partnership";
    }
    if (href === "/contact") {
      return pathname === "/contact";
    }
    if (href.startsWith("/#")) {
      const targetHash = href.replace("/", "");
      return pathname === "/" && currentHash === targetHash;
    }
    return pathname === href;
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FBF7EF]/95 backdrop-blur-md shadow-sm border-b border-[#078765]/10 py-2 sm:py-2.5"
          : "bg-[#FBF7EF] py-2.5 sm:py-3 md:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#078765] rounded-lg"
          >
            <img
              src="https://ik.imagekit.io/0s0fb4b2b/AlifeLogo.png"
              alt="Alife Stable Logo"
              className="h-11 sm:h-13 md:h-15 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Center Navigation with Active State Indicator */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-2 lg:gap-3 text-sm font-semibold"
          >
            {navLinks.map((link) => {
              const active = checkIsActive(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all duration-200 ${
                    active
                      ? "bg-[#E8F4EC] text-[#078765] font-bold shadow-2xs border border-[#078765]/20"
                      : "text-[#102B2B] hover:text-[#078765] hover:bg-[#E8F4EC]/50 font-medium"
                  }`}
                >
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#078765] animate-pulse" />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Link
              href="/book-demo"
              className="px-4 py-2 text-sm font-bold text-[#078765] bg-[#E8F4EC] hover:bg-[#078765]/15 border border-[#078765]/20 rounded-xl transition-all duration-200 cursor-pointer active:scale-95 inline-flex items-center"
            >
              Book Demo
            </Link>
            <a
              href={BECOME_PARTNER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4.5 py-2 text-sm font-bold text-white bg-[#078765] hover:bg-[#064E43] rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-95 inline-flex items-center"
            >
              Become Partner
            </a>
          </div>

          {/* Mobile CTAs & Hamburger Button */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            <Link
              href="/book-demo"
              className="hidden sm:inline-flex text-xs font-bold text-[#078765] bg-[#E8F4EC] border border-[#078765]/20 px-2.5 py-1.5 rounded-lg hover:bg-[#078765]/15 cursor-pointer"
            >
              Book Demo
            </Link>
            <a
              href={BECOME_PARTNER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-white bg-[#078765] px-2.5 py-1.5 rounded-lg hover:bg-[#064E43] shadow-xs cursor-pointer inline-flex items-center"
            >
              Become Partner
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-1.5 sm:p-2 rounded-lg text-[#102B2B] hover:bg-[#E8F4EC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#078765]"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Active State Highlighting */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-[#078765]/10 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const active = checkIsActive(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-colors ${
                      active
                        ? "bg-[#E8F4EC] text-[#078765] font-bold border-l-4 border-[#078765]"
                        : "text-[#102B2B] hover:text-[#078765] hover:bg-[#E8F4EC]/60 font-medium"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="w-2 h-2 rounded-full bg-[#078765]" />
                    )}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={BECOME_PARTNER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-sm font-bold text-white bg-[#078765] hover:bg-[#064E43] rounded-xl shadow-sm cursor-pointer block"
              >
                Become Partner
              </a>
              <Link
                href="/book-demo"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-sm font-bold text-[#078765] bg-[#E8F4EC] hover:bg-[#078765]/15 border border-[#078765]/20 rounded-xl cursor-pointer block"
              >
                Book Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
