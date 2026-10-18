"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { DemoModal } from "../../components/DemoModal";
import { MobileStickyCta } from "../../components/MobileStickyCta";
import { CtaBanner } from "../../components/CtaBanner";
import {
  BrandLogoMark,
  ArrowRightIcon,
  CheckIcon,
} from "../../components/Icons";
import {
  ShieldCheck,
  Rocket,
  Globe,
  Award,
  Users,
  Layers,
  Sparkles,
  TrendingUp,
  Headphones,
  CheckCircle2,
  XCircle,
  Clock,
  BookOpen,
} from "lucide-react";

export default function AboutPage() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "partner";
  }>({
    isOpen: false,
    type: "demo",
  });

  const handleOpenDemo = () => {
    setModalState({ isOpen: true, type: "demo" });
  };

  const handleOpenPartner = () => {
    setModalState({ isOpen: true, type: "partner" });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const stats = [
    { value: "1000+", label: "Ready-to-Sell Courses", highlight: "AI & Emerging Tech Catalog" },
    { value: "500+", label: "Active Partners", highlight: "Educators & Institutes Pan-India" },
    { value: "100%", label: "Direct Profit Retention", highlight: "Zero Marketplace Royalty Cuts" },
    { value: "48-72h", label: "Turnkey Go-Live", highlight: "Domain & Platform Handover" },
  ];

  const corePillars = [
    {
      icon: ShieldCheck,
      title: "100% Brand Sovereignty",
      desc: "Your academy belongs entirely to you. You operate under your own registered domain name, display your logo, cultivate your student base, and build lasting equity without third-party interference.",
    },
    {
      icon: Rocket,
      title: "Zero Technical Friction",
      desc: "We engineer and maintain the cloud servers, video streaming infrastructure, responsive student web applications, and admin dashboard so you can focus 100% on marketing and mentoring.",
    },
    {
      icon: BookOpen,
      title: "High-Demand AI Curriculum",
      desc: "Course content creation is time-consuming and expensive. We supply a continuously updated catalogue of industry-relevant courses covering Artificial Intelligence, Technology, and Professional Skills.",
    },
    {
      icon: Award,
      title: "Uncompromising Transparency",
      desc: "No hidden percentage cuts or revenue sharing traps. Through our nominal annual partnership license of ₹1,999/year, you keep all revenues generated from your course sales directly.",
    },
  ];

  const comparisonRows = [
    {
      feature: "Course Content & Curriculum",
      traditional: "6–12 months spent filming, editing, and designing syllabus from scratch",
      alife: "Instant access to 1000+ pre-built, high-demand AI and tech courses ready to sell",
    },
    {
      feature: "Capital Investment Required",
      traditional: "₹3,00,000 to ₹5,00,000+ for custom development, LMS licenses, and studio gear",
      alife: "All-inclusive turnkey partnership license at just ₹1,999/year",
    },
    {
      feature: "Revenue & Profit Retention",
      traditional: "Marketplaces deduct 30% to 50% commission plus listing charges on every sale",
      alife: "100% of your course fees deposited directly into your payment gateway",
    },
    {
      feature: "Hosting, Servers & Maintenance",
      traditional: "Recurring server bills, CDN charges, bandwidth limits, and technical bug fixes",
      alife: "Fully managed, scalable cloud hosting and student web app included",
    },
    {
      feature: "Brand Identity & Student Data",
      traditional: "Students stay loyal to third-party marketplaces; zero brand recognition for you",
      alife: "Complete white-label solution with your domain, logo, and private student community",
    },
    {
      feature: "Go-to-Market Speed",
      traditional: "Months of delays before welcoming your first paying student",
      alife: "Turnkey delivery within 48 to 72 hours, fully configured and operational",
    },
  ];

  const journeyMilestones = [
    {
      phase: "Phase 1: The Challenge Identified",
      title: "Recognizing the Educator's Dilemma",
      desc: "Across India, thousands of skilled educators, coaching founders, and content creators wanted to establish an online academy. However, prohibitive software development costs and content creation bottlenecks stopped most before they started.",
    },
    {
      phase: "Phase 2: The Infrastructure Blueprint",
      title: "Developing the Turnkey Ecosystem",
      desc: "We designed a full-stack solution combining enterprise-grade cloud LMS technology, a commercial licensing model, and a curated library of high-demand AI courses that could be deployed instantaneously.",
    },
    {
      phase: "Phase 3: Nationwide Expansion",
      title: "Empowering 500+ Regional Academies",
      desc: "Today, Alife Stable powers education entrepreneurs across Tier-1 metros and regional towns alike, enabling partners to generate sustainable educational income while retaining total brand independence.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7EF] text-[#102B2B] antialiased selection:bg-[#078765]/20 selection:text-[#064E43]">
      {/* 1. Header with Fixed Top-Right Dual CTAs */}
      <Header onOpenDemo={handleOpenDemo} onOpenPartner={handleOpenPartner} />

      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <section className="relative pt-3 sm:pt-5 md:pt-8 pb-5 sm:pb-8 md:pb-10 overflow-hidden bg-gradient-to-b from-[#E8F4EC]/60 via-[#FBF7EF] to-[#FBF7EF]">
          {/* Subtle Organic Background Accents */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#078765]/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#078765]/10 border border-[#078765]/20 text-[#078765] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#078765]" />
              <span>ABOUT ALIFE STABLE • EMPOWERING EDUCATION ENTREPRENEURS</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#102B2B] tracking-tight leading-[1.15] max-w-4xl mx-auto">
              Democratizing EdTech Ownership Across India
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#65736F] max-w-3xl mx-auto leading-relaxed">
              Alife Stable is India&apos;s premier turnkey EdTech partnership platform. We provide passionate educators, training institutes, and aspiring entrepreneurs with ready-to-sell AI courses, personalized branded web platforms, and complete business infrastructure — enabling you to launch fast and keep 100% of your earnings.
            </p>

            {/* Dual CTAs */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5">
              <button
                type="button"
                onClick={handleOpenDemo}
                className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-xl font-bold text-[#064E43] bg-white hover:bg-[#E8F4EC] border border-[#078765]/30 hover:border-[#078765] shadow-xs hover:shadow-sm transition-all duration-200 text-xs sm:text-sm cursor-pointer active:scale-98"
              >
                Book Your Free Demo
              </button>

              <button
                type="button"
                onClick={handleOpenPartner}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 sm:py-3 rounded-xl font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-md shadow-[#078765]/25 hover:shadow-lg transition-all duration-200 text-xs sm:text-sm cursor-pointer active:scale-98"
              >
                <span>Become a Partner</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Key Performance Stats Grid */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-5xl mx-auto">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#078765]/15 shadow-xs text-center hover:border-[#078765]/40 transition-all"
                >
                  <div className="text-xl sm:text-3xl font-black text-[#078765] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#102B2B] mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#65736F] mt-0.5 font-medium">
                    {stat.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Mission & Vision Cards */}
        <section className="py-6 sm:py-8 lg:py-10 bg-white border-y border-[#078765]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Mission Card */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#E8F4EC] to-white p-5 sm:p-7 border border-[#078765]/20 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#078765] text-white flex items-center justify-center mb-4 shadow-sm shadow-[#078765]/20">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#078765] mb-1">
                    OUR PURPOSE
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B2B] tracking-tight">
                    Our Mission
                  </h2>
                  <p className="mt-2.5 text-[#65736F] leading-relaxed text-xs sm:text-sm">
                    To eliminate the technological, financial, and content obstacles that hold back prospective educators. We provide turnkey access to world-class learning technology and high-demand courses at an accessible annual partnership rate, ensuring educators can build a profitable, reputable digital venture with confidence.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#078765]/15 flex items-center gap-2 text-[11px] font-semibold text-[#064E43]">
                  <CheckIcon className="w-3.5 h-3.5 text-[#078765]" />
                  <span>Accessible • Turnkey • 100% Partner Profitable</span>
                </div>
              </div>

              {/* Vision Card */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#102B2B] to-[#064E43] text-white p-5 sm:p-7 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#078765] text-white flex items-center justify-center mb-4 shadow-md shadow-black/20">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#E8F4EC]/80 mb-1">
                    OUR HORIZON
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    Our Vision
                  </h2>
                  <p className="mt-2.5 text-[#E8F4EC]/90 leading-relaxed text-xs sm:text-sm">
                    To establish India&apos;s most reliable partner-first EdTech ecosystem, empowering over 10,000+ independent educators, institutes, and creators to run thriving digital academies that educate millions of students under their own respected identity.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] font-semibold text-[#E8F4EC]">
                  <CheckIcon className="w-3.5 h-3.5 text-[#078765]" />
                  <span>Sovereign Academies • Pan-India Impact • Lifelong Learning</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Four Core Pillars */}
        <section className="py-6 sm:py-8 lg:py-10 bg-[#FBF7EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#078765] uppercase">
                THE FOUNDATION OF TRUST
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B2B] tracking-tight mt-1">
                Our Core Operational Pillars
              </h2>
              <p className="mt-2 text-[#65736F] text-xs sm:text-sm">
                Everything we build is engineered to maximize your business freedom, ensure predictable growth, and safeguard your brand sovereignty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4.5">
              {corePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-[#078765]/15 shadow-2xs hover:shadow-sm hover:border-[#078765]/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-[#E8F4EC] text-[#078765] flex items-center justify-center mb-3">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#102B2B] tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-[#65736F] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Traditional Course Business vs. Alife Stable Partnership */}
        <section className="py-6 sm:py-8 lg:py-10 bg-white border-y border-[#078765]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#078765] uppercase">
                STRATEGIC COMPARISON
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B2B] tracking-tight mt-1">
                Starting Alone vs. Partnering with Alife Stable
              </h2>
              <p className="mt-2 text-[#65736F] text-xs sm:text-sm">
                Why hundreds of educators choose our turnkey franchise ecosystem over cumbersome, expensive traditional development.
              </p>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-[#078765]/20 shadow-xs bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#078765]/20 bg-[#102B2B] text-white">
                    <th className="py-3.5 px-5 text-xs font-bold uppercase tracking-wider w-1/4">
                      Key Dimension
                    </th>
                    <th className="py-3.5 px-5 text-xs font-bold uppercase tracking-wider w-[37.5%] text-[#E8F4EC]/75">
                      Starting Independently / Marketplaces
                    </th>
                    <th className="py-3.5 px-5 text-xs font-bold uppercase tracking-wider w-[37.5%] bg-[#078765] text-white">
                      The Alife Stable Partnership
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#078765]/10 text-xs sm:text-sm">
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-[#FBF7EF]/50"}
                    >
                      <td className="py-3 px-5 font-bold text-[#102B2B]">
                        {row.feature}
                      </td>
                      <td className="py-3 px-5 text-[#65736F] leading-relaxed">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                      <td className="py-3 px-5 font-medium text-[#064E43] bg-[#E8F4EC]/40 leading-relaxed">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#078765] shrink-0 mt-0.5" />
                          <span className="font-semibold">{row.alife}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-3">
              {comparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#078765]/20 bg-white p-3.5 shadow-2xs space-y-2"
                >
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#102B2B]">
                    {row.feature}
                  </h3>
                  <div className="p-2.5 rounded-lg bg-red-50/70 border border-red-200 text-[11px] text-red-800 flex items-start gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">The Hard Way:</span>
                      {row.traditional}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#E8F4EC] border border-[#078765]/30 text-[11px] text-[#064E43] flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#078765] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">With Alife Stable:</span>
                      {row.alife}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mid-Page Call to Action */}
            <div className="mt-5 sm:mt-6 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleOpenPartner}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-xs transition-all cursor-pointer text-xs sm:text-sm"
                >
                  Start Your Branded Academy at ₹1,999/yr
                </button>
                <button
                  type="button"
                  onClick={handleOpenDemo}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-[#064E43] bg-white border border-[#078765]/30 hover:border-[#078765] transition-all cursor-pointer text-xs sm:text-sm"
                >
                  Request a Quick Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: The Alife Stable Journey */}
        <section className="py-6 sm:py-8 lg:py-10 bg-[#FBF7EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#078765] uppercase">
                OUR JOURNEY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B2B] tracking-tight mt-1">
                Engineered for Sustainable Education Impact
              </h2>
              <p className="mt-2 text-[#65736F] text-xs sm:text-sm">
                From a bold idea to a nationwide EdTech enablement ecosystem, our focus has always been the educator&apos;s independence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5 max-w-5xl mx-auto">
              {journeyMilestones.map((item, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl bg-white p-4 sm:p-5 border border-[#078765]/15 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#078765] bg-[#E8F4EC] px-2.5 py-0.5 rounded-full mb-2">
                      {item.phase}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#102B2B] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#65736F] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3.5 pt-2.5 border-t border-[#078765]/10 text-[11px] font-semibold text-[#078765] flex items-center gap-1">
                    <CheckIcon className="w-3.5 h-3.5" />
                    <span>Verified Milestone</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Comprehensive CTA Banner */}
        <CtaBanner
          onOpenDemo={handleOpenDemo}
          onOpenPartner={handleOpenPartner}
        />
      </main>

      {/* Footer */}
      <Footer onOpenDemo={handleOpenDemo} onOpenPartner={handleOpenPartner} />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyCta
        onOpenDemo={handleOpenDemo}
        onOpenPartner={handleOpenPartner}
      />

      {/* Demo / Partnership Interactive Modal */}
      <DemoModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        initialType={modalState.type}
      />
    </div>
  );
}
