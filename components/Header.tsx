"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogoMark, MenuIcon, CloseIcon } from "./Icons";

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
    { label: "About Us", href: "/about" },
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
    if (href === "/about") {
      return pathname === "/about";
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
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#078765] rounded-lg"
          >
            <BrandLogoMark className="w-10 h-10 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#102B2B]">
                Alife Stable
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#078765]">
                Partner • Grow • Succeed
              </span>
            </div>
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
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenDemo}
              className="px-4 py-2 text-sm font-semibold text-[#064E43] border border-[#078765] rounded-xl hover:bg-[#E8F4EC] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              Book Your Free Demo
            </button>
            <button
              type="button"
              onClick={onOpenPartner}
              className="px-5 py-2 text-sm font-semibold text-white bg-[#078765] hover:bg-[#064E43] rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-95"
            >
              Become a Partner
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenDemo}
              className="hidden sm:inline-flex text-xs font-semibold text-[#064E43] border border-[#078765] px-3 py-1.5 rounded-lg hover:bg-[#E8F4EC]"
            >
              Free Demo
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2 rounded-lg text-[#102B2B] hover:bg-[#E8F4EC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#078765]"
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
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-[#064E43] border border-[#078765] rounded-xl hover:bg-[#E8F4EC]"
              >
                Book Your Free Demo
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPartner();
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#078765] hover:bg-[#064E43] rounded-xl shadow-sm"
              >
                Become a Partner
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
