"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { DemoModal } from "../../components/DemoModal";
import { MobileStickyCta } from "../../components/MobileStickyCta";
import {
  FileText,
  ShieldCheck,
  AlertCircle,
  Clock,
  Mail,
  Phone,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  RefreshCw,
  CreditCard,
  Ban,
  Scale,
} from "lucide-react";

export default function RefundPolicyPage() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "partner";
  }>({
    isOpen: false,
    type: "demo",
  });

  const handleOpenDemo = () => {
    window.open("https://calendar.app.google/w8U4onynW6fhNAvo7", "_blank", "noopener,noreferrer");
  };

  const handleOpenPartner = () => {
    setModalState({ isOpen: true, type: "partner" });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const sections = [
    { id: "intro", title: "1. Introduction" },
    { id: "digital-products", title: "2. Digital Products & AI Courses" },
    { id: "partnership-plan", title: "3. Partnership Plan Policy" },
    { id: "duplicate-payment", title: "4. Duplicate Payment" },
    { id: "failed-transactions", title: "5. Failed Transactions" },
    { id: "refund-process", title: "6. Refund Request Process" },
    { id: "processing-time", title: "7. Processing Time" },
    { id: "cancellation", title: "8. Cancellation Policy" },
    { id: "policy-exceptions", title: "9. Policy Exceptions" },
    { id: "contact-us", title: "10. Contact Us" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7EF] text-[#102B2B] antialiased selection:bg-[#078765]/20 selection:text-[#064E43]">
      {/* Header */}
      <Header onOpenDemo={handleOpenDemo} onOpenPartner={handleOpenPartner} />

      <main className="flex-1">
        {/* Hero Header Section */}
        <section className="relative pt-6 sm:pt-10 pb-8 sm:pb-12 bg-gradient-to-b from-[#E8F4EC]/70 via-[#FBF7EF] to-[#FBF7EF] border-b border-[#078765]/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#078765]/10 border border-[#078765]/20 text-[#078765] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-[#078765]" />
              <span>OFFICIAL CONSUMER & PARTNER POLICY</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#102B2B] tracking-tight leading-tight">
              Refund & Cancellation Policy
            </h1>

            <p className="mt-2 text-sm sm:text-base text-[#078765] font-bold">
              Alife Stable – A Reliable Place to Grow
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-[#65736F]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-gray-200 shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-[#078765]" />
                <strong>Effective Date:</strong> November 2, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-gray-200 shadow-2xs">
                <ExternalLink className="w-3.5 h-3.5 text-[#078765]" />
                <strong>Website:</strong>{" "}
                <a
                  href="https://alifestable.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#078765] underline"
                >
                  https://alifestable.com
                </a>
              </span>
            </div>
          </div>
        </section>

        {/* Content Container */}
        <section className="py-8 sm:py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Quick Table of Contents (Sticky) */}
              <aside className="hidden lg:block lg:col-span-4 sticky top-24">
                <div className="bg-white rounded-2xl p-5 border border-[#078765]/15 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#078765]">
                    <FileText className="w-4 h-4" />
                    <span>Table of Contents</span>
                  </div>
                  <nav className="space-y-1">
                    {sections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="block text-xs text-[#65736F] hover:text-[#078765] hover:bg-[#E8F4EC]/50 px-2.5 py-1.5 rounded-lg transition-all font-medium"
                      >
                        {sec.title}
                      </a>
                    ))}
                  </nav>

                  {/* Need Help Box */}
                  <div className="pt-3 border-t border-gray-100 space-y-2">
                    <p className="text-[11px] text-[#65736F]">
                      Have questions regarding a recent transaction?
                    </p>
                    <a
                      href="mailto:alifestableofficial@gmail.com"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#078765] hover:text-[#064E43]"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      alifestableofficial@gmail.com
                    </a>
                  </div>
                </div>
              </aside>

              {/* Right Column: Policy Document Body */}
              <div className="lg:col-span-8 space-y-8">
                {/* 1. Introduction */}
                <article
                  id="intro"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Section 1</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    1. Introduction
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Welcome to <strong>Alife Stable</strong>. We aim to provide
                    quality digital products, AI courses, and partnership
                    services to our customers.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    This Refund &amp; Cancellation Policy explains the terms and
                    conditions regarding payments, cancellations, refunds, and
                    service-related issues for purchases made through our
                    website.
                  </p>
                  <div className="p-3.5 rounded-xl bg-[#E8F4EC]/60 border border-[#078765]/20 text-xs text-[#064E43] font-semibold">
                    By purchasing any product or service from Alife Stable, you
                    agree to the terms outlined in this policy.
                  </div>
                </article>

                {/* 2. Digital Products and AI Courses */}
                <article
                  id="digital-products"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-4 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <FileText className="w-4 h-4" />
                    <span>Section 2</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    2. Digital Products and AI Courses
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Alife Stable provides digital products, online AI courses,
                    educational content, and other digital learning resources.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Since digital products and course access may be provided
                    immediately after successful payment,{" "}
                    <strong>
                      all purchases are generally considered final and
                      non-refundable once access has been granted or the digital
                      content has been delivered.
                    </strong>
                  </p>

                  <div className="p-4 rounded-xl bg-[#FBF7EF] border border-[#078765]/15 space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#102B2B]">
                      Exceptional Circumstances for Refund Review:
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#4A5568]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#078765] shrink-0 mt-0.5" />
                        <span>
                          Duplicate payments for the same product or service.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#078765] shrink-0 mt-0.5" />
                        <span>
                          Successful payment without receiving the purchased
                          course or service.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#078765] shrink-0 mt-0.5" />
                        <span>
                          Technical issues that prevent access to the purchased
                          digital product and cannot be resolved by our support
                          team.
                        </span>
                      </li>
                    </ul>
                  </div>
                </article>

                {/* 3. Partnership Plan Refund Policy */}
                <article
                  id="partnership-plan"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-4 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <CreditCard className="w-4 h-4" />
                    <span>Section 3</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    3. Partnership Plan Refund Policy
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Alife Stable offers a comprehensive partnership program that
                    may include:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#102B2B] font-medium">
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#E8F4EC]/40 border border-[#078765]/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#078765]" />
                      White-label branded website
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#E8F4EC]/40 border border-[#078765]/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#078765]" />
                      Ready-to-sell AI courses
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#E8F4EC]/40 border border-[#078765]/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#078765]" />
                      Partner dashboard access
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#E8F4EC]/40 border border-[#078765]/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#078765]" />
                      Training and support
                    </div>
                    <div className="sm:col-span-2 flex items-center gap-2 p-2.5 rounded-lg bg-[#E8F4EC]/40 border border-[#078765]/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#078765]" />
                      Marketing assistance and related digital resources
                    </div>
                  </div>

                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Once a partnership plan has been successfully activated and
                    the partner has received access to the services, the payment
                    is generally <strong>non-refundable</strong>.
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#FBF7EF] border border-amber-200/80 text-xs text-[#65736F] leading-relaxed">
                    <strong className="text-[#102B2B]">Operational Note:</strong>{" "}
                    However, if a payment is successfully completed but the
                    partnership service cannot be activated due to a technical
                    or operational issue on our side, customers may contact our
                    support team for assistance and a refund review.
                  </div>
                </article>

                {/* 4. Duplicate Payment */}
                <article
                  id="duplicate-payment"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <RefreshCw className="w-4 h-4" />
                    <span>Section 4</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    4. Duplicate Payment
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    If a customer accidentally makes multiple payments for the
                    same order or service, the duplicate transaction will be
                    promptly verified.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    After successful verification, the extra payment will be{" "}
                    <strong>
                      refunded directly to the original payment method
                    </strong>
                    .
                  </p>
                </article>

                {/* 5. Failed Transactions */}
                <article
                  id="failed-transactions"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4" />
                    <span>Section 5</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    5. Failed Transactions
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    If money has been deducted from your bank account but the
                    order or service has not been confirmed, please contact our
                    support team with the transaction details.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    We will verify the payment status and coordinate with the
                    payment gateway or bank wherever necessary.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    If the transaction is confirmed as unsuccessful, the
                    reversal will be handled according to the standard payment
                    gateway and banking process.
                  </p>
                </article>

                {/* 6. Refund Request Process */}
                <article
                  id="refund-process"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-4 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <FileText className="w-4 h-4" />
                    <span>Section 6</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    6. Refund Request Process
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    To request a refund review, customers must contact our
                    support team and provide the following information:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {[
                      "Full Name",
                      "Registered Email Address",
                      "Registered Mobile Number",
                      "Order ID or Transaction ID",
                      "Payment Date",
                      "Reason for the refund request",
                      "Relevant payment proof, if required",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FBF7EF] border border-[#078765]/15 text-xs text-[#102B2B] font-semibold"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#078765] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-[#4A5568] leading-relaxed pt-2">
                    Our support team will review the request and communicate the
                    decision through the registered email address or contact
                    number.
                  </p>
                </article>

                {/* 7. Refund Processing Time */}
                <article
                  id="processing-time"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <Clock className="w-4 h-4" />
                    <span>Section 7</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    7. Refund Processing Time
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Once a refund is approved, it will be initiated through the{" "}
                    <strong>
                      original payment method wherever possible
                    </strong>
                    .
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    The actual time required for the amount to appear in the
                    customer&apos;s account may depend on the bank, card issuer,
                    UPI provider, or payment gateway.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Customers may contact their respective payment provider if the
                    refund is not reflected within the communicated timeframe.
                  </p>
                </article>

                {/* 8. Cancellation Policy */}
                <article
                  id="cancellation"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <Ban className="w-4 h-4" />
                    <span>Section 8</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    8. Cancellation Policy
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Customers may contact us to request cancellation{" "}
                    <strong>
                      before the purchased digital service or partnership access
                      has been activated
                    </strong>
                    .
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Cancellation requests submitted after activation or delivery
                    may not be eligible for cancellation or refund, except where
                    required by applicable law or approved under exceptional
                    circumstances.
                  </p>
                </article>

                {/* 9. Policy Exceptions */}
                <article
                  id="policy-exceptions"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <Scale className="w-4 h-4" />
                    <span>Section 9</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    9. Policy Exceptions
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Alife Stable reserves the right to review individual cases
                    based on the circumstances of the transaction.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Nothing in this policy is intended to restrict any consumer
                    rights or remedies available under applicable Indian laws.
                  </p>
                </article>

                {/* 10. Contact Us */}
                <article
                  id="contact-us"
                  className="bg-gradient-to-br from-[#102B2B] to-[#064E43] text-white rounded-2xl p-6 sm:p-8 shadow-md space-y-5 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E8F4EC] uppercase tracking-wider">
                    <Mail className="w-4 h-4 text-[#078765]" />
                    <span>Section 10</span>
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      10. Contact Us
                    </h2>
                    <p className="text-xs sm:text-sm text-[#E8F4EC]/85 mt-1 leading-relaxed">
                      For refund requests, payment-related questions, or
                      cancellation assistance, please contact our dedicated
                      support desk:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
                      <div className="text-[10px] font-bold text-[#E8F4EC]/70 uppercase tracking-wider">
                        Business Name
                      </div>
                      <div className="text-sm font-bold text-white">
                        Alife Stable
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
                      <div className="text-[10px] font-bold text-[#E8F4EC]/70 uppercase tracking-wider">
                        Official Website
                      </div>
                      <a
                        href="https://alifestable.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold text-white hover:text-[#078765] transition-colors inline-flex items-center gap-1"
                      >
                        https://alifestable.com
                        <ExternalLink className="w-3 h-3 text-[#E8F4EC]/60" />
                      </a>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
                      <div className="text-[10px] font-bold text-[#E8F4EC]/70 uppercase tracking-wider">
                        Support Email
                      </div>
                      <a
                        href="mailto:alifestableofficial@gmail.com"
                        className="text-xs sm:text-sm font-bold text-white hover:text-[#078765] transition-colors break-all"
                      >
                        alifestableofficial@gmail.com
                      </a>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1">
                      <div className="text-[10px] font-bold text-[#E8F4EC]/70 uppercase tracking-wider">
                        Support Number
                      </div>
                      <a
                        href="tel:+917481896182"
                        className="text-sm font-bold text-white hover:text-[#078765] transition-colors"
                      >
                        +91 7481896182
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 text-xs text-[#E8F4EC]/70">
                    <strong>Support Hours:</strong> Monday to Saturday, during
                    business hours.
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#E8F4EC]/90">
                    <div>
                      <strong className="text-white block font-extrabold text-sm">
                        Alife Stable
                      </strong>
                      <span className="italic text-[#E8F4EC]/70">
                        A Reliable Place to Grow
                      </span>
                    </div>
                    <p className="text-[11px] text-[#E8F4EC]/70 sm:text-right">
                      We are committed to transparent transactions, responsible
                      customer support, and reliable digital services.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
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
