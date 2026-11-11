"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { DemoModal } from "../../components/DemoModal";
import { MobileStickyCta } from "../../components/MobileStickyCta";
import {
  ShieldCheck,
  FileText,
  Clock,
  Mail,
  Phone,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Lock,
  Eye,
  Database,
  Cookie,
  UserCheck,
  Globe,
  Baby,
  RefreshCw,
  CreditCard,
  Building,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const router = useRouter();
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "partner";
  }>({
    isOpen: false,
    type: "demo",
  });

  const handleOpenDemo = () => {
    router.push("/book-demo");
  };

  const handleOpenPartner = () => {
    setModalState({ isOpen: true, type: "partner" });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const sections = [
    { id: "intro", title: "1. Introduction" },
    { id: "info-collected", title: "2. Information We Collect" },
    { id: "how-we-use", title: "3. How We Use Your Info" },
    { id: "payment-security", title: "4. Payment & Security" },
    { id: "info-sharing", title: "5. Information Sharing" },
    { id: "data-protection", title: "6. Data Protection" },
    { id: "cookies", title: "7. Cookies & Tracking" },
    { id: "retention", title: "8. Data Retention" },
    { id: "privacy-rights", title: "9. Your Privacy Rights" },
    { id: "third-party", title: "10. Third-Party Websites" },
    { id: "children", title: "11. Children's Privacy" },
    { id: "changes", title: "12. Policy Changes" },
    { id: "contact-us", title: "13. Contact Information" },
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
              <Lock className="w-4 h-4 text-[#078765]" />
              <span>DATA PRIVACY & SECURITY STATEMENT</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#102B2B] tracking-tight leading-tight">
              Privacy Policy
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
                      Questions about your privacy or data rights?
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
                    Welcome to <strong>Alife Stable</strong>. We respect your
                    privacy and are committed to protecting your personal
                    information.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    This Privacy Policy explains how Alife Stable collects, uses,
                    stores, and protects your information when you visit our
                    website, purchase our products, enroll in our courses, or
                    participate in our partnership program.
                  </p>
                  <div className="p-3.5 rounded-xl bg-[#E8F4EC]/60 border border-[#078765]/20 text-xs text-[#064E43] font-semibold">
                    By using our website and services, you agree to the
                    practices described in this Privacy Policy.
                  </div>
                </article>

                {/* 2. Information We Collect */}
                <article
                  id="info-collected"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-4 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <Database className="w-4 h-4" />
                    <span>Section 2</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    2. Information We Collect
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    We may collect the following information when you use our
                    services:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {[
                      "Full Name",
                      "Email Address",
                      "Mobile Number",
                      "Billing and transaction details",
                      "Account login information",
                      "Partnership registration information",
                      "Course enrollment and purchase details",
                      "Information submitted through contact forms",
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

                  <p className="text-xs text-[#65736F] leading-relaxed pt-1">
                    We only collect information that is reasonably necessary to
                    provide and improve our services.
                  </p>
                </article>

                {/* 3. How We Use Your Information */}
                <article
                  id="how-we-use"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-4 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <Eye className="w-4 h-4" />
                    <span>Section 3</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Alife Stable may use your information for the following
                    purposes:
                  </p>

                  <ul className="space-y-2 text-xs text-[#4A5568]">
                    {[
                      "To provide access to our AI courses and digital products.",
                      "To register and manage partnership accounts.",
                      "To create and manage white-label branded websites.",
                      "To process payments and confirm transactions.",
                      "To provide customer support and technical assistance.",
                      "To send important service updates and notifications.",
                      "To improve our website, products, and services.",
                      "To prevent fraudulent transactions and unauthorized activities.",
                    ].map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#078765] shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                {/* 4. Payment Information and Security */}
                <article
                  id="payment-security"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-4 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <CreditCard className="w-4 h-4" />
                    <span>Section 4</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    4. Payment Information and Security
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Alife Stable uses secure third-party payment gateway
                    services, including <strong>Razorpay</strong>, to process
                    online payments.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    When you make a payment through our website, your payment
                    information is securely processed directly by the payment
                    gateway.
                  </p>

                  <div className="p-4 rounded-xl bg-[#E8F4EC]/60 border border-[#078765]/20 space-y-1.5 text-xs text-[#064E43]">
                    <div className="font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#078765]" />
                      Zero Sensitive Data Storage
                    </div>
                    <p className="leading-relaxed">
                      We <strong>do not store or directly collect</strong> your
                      complete debit card numbers, credit card numbers, CVV, UPI
                      PIN, or banking passwords on our servers.
                    </p>
                  </div>

                  <p className="text-xs text-[#65736F] leading-relaxed">
                    Payment processing is subject to the respective payment
                    gateway&apos;s terms, conditions, and privacy policy.
                  </p>

                  <div className="pt-1">
                    <a
                      href="https://razorpay.com/privacy/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#078765] hover:underline"
                    >
                      Razorpay Privacy Policy
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>

                {/* 5. Information Sharing */}
                <article
                  id="info-sharing"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-4 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <Globe className="w-4 h-4" />
                    <span>Section 5</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    5. Information Sharing
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed font-semibold text-[#102B2B]">
                    We do not sell, rent, or trade your personal information to
                    third parties.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    However, we may share necessary information with trusted
                    third-party service providers for:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#102B2B] font-medium">
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FBF7EF] border border-[#078765]/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#078765]" />
                      Payment processing
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FBF7EF] border border-[#078765]/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#078765]" />
                      Website hosting &amp; infrastructure
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FBF7EF] border border-[#078765]/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#078765]" />
                      Email &amp; communication services
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FBF7EF] border border-[#078765]/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#078765]" />
                      Customer support &amp; technical services
                    </div>
                    <div className="sm:col-span-2 flex items-center gap-2 p-2.5 rounded-lg bg-[#FBF7EF] border border-[#078765]/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#078765]" />
                      Legal and regulatory compliance
                    </div>
                  </div>

                  <p className="text-xs text-[#65736F] leading-relaxed">
                    These service providers are expected to handle information
                    responsibly and only for the purposes for which it is
                    shared.
                  </p>
                </article>

                {/* 6. Data Protection and Security */}
                <article
                  id="data-protection"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section 6</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    6. Data Protection and Security
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    We take reasonable technical and organizational measures to
                    protect your personal information against unauthorized
                    access, misuse, alteration, disclosure, or loss.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Access to personal information is restricted to authorized
                    personnel who need it to provide our services.
                  </p>
                  <p className="text-xs text-[#65736F] leading-relaxed">
                    However, no online platform or electronic transmission can
                    be guaranteed to be completely secure.
                  </p>
                </article>

                {/* 7. Cookies and Website Tracking */}
                <article
                  id="cookies"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <Cookie className="w-4 h-4" />
                    <span>Section 7</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    7. Cookies and Website Tracking
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Our website may use cookies and similar technologies to
                    improve website functionality, understand visitor activity,
                    remember user preferences, and analyze website performance.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    You can manage or disable cookies through your browser
                    settings. Some website features may not function properly if
                    cookies are disabled.
                  </p>
                </article>

                {/* 8. Data Retention */}
                <article
                  id="retention"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <Clock className="w-4 h-4" />
                    <span>Section 8</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    8. Data Retention
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    We retain personal information only for as long as
                    reasonably necessary to provide our services, maintain
                    business records, resolve disputes, comply with applicable
                    legal requirements, and prevent fraud.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    When information is no longer required, we take reasonable
                    steps to delete or securely dispose of it, subject to
                    applicable legal obligations.
                  </p>
                </article>

                {/* 9. Your Privacy Rights */}
                <article
                  id="privacy-rights"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-4 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <UserCheck className="w-4 h-4" />
                    <span>Section 9</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    9. Your Privacy Rights
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    You may contact us at any time to:
                  </p>

                  <div className="space-y-2 text-xs text-[#102B2B] font-semibold">
                    {[
                      "Request access to your personal information.",
                      "Request correction of inaccurate information.",
                      "Request deletion of personal information, subject to applicable legal requirements.",
                      "Withdraw consent where processing is based on consent.",
                      "Raise concerns regarding the use of your personal information.",
                    ].map((right, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FBF7EF] border border-[#078765]/15"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#078765] shrink-0" />
                        <span>{right}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-[#65736F] leading-relaxed pt-1">
                    We will review and respond to valid requests in accordance
                    with applicable laws.
                  </p>
                </article>

                {/* 10. Third-Party Websites */}
                <article
                  id="third-party"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <ExternalLink className="w-4 h-4" />
                    <span>Section 10</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    10. Third-Party Websites
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Our website may contain links to third-party websites or
                    services. Alife Stable is not responsible for the privacy
                    practices, content, or security of external websites.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    We encourage users to review the privacy policies of those
                    websites before sharing personal information.
                  </p>
                </article>

                {/* 11. Children's Privacy */}
                <article
                  id="children"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <Baby className="w-4 h-4" />
                    <span>Section 11</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    11. Children&apos;s Privacy
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Our services are not knowingly directed toward children under
                    the age of 18. We do not knowingly collect personal
                    information from children without appropriate consent where
                    required by law.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    If we become aware that such information has been collected
                    improperly, we will take reasonable steps to address the
                    matter.
                  </p>
                </article>

                {/* 12. Changes to This Privacy Policy */}
                <article
                  id="changes"
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#078765]/15 shadow-xs space-y-3 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078765] uppercase tracking-wider">
                    <RefreshCw className="w-4 h-4" />
                    <span>Section 12</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#102B2B] tracking-tight">
                    12. Changes to This Privacy Policy
                  </h2>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Alife Stable reserves the right to update or modify this
                    Privacy Policy whenever necessary.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Any changes will be published on this page along with the
                    updated effective date.
                  </p>
                  <p className="text-xs text-[#65736F] leading-relaxed">
                    We encourage users to review this page periodically.
                  </p>
                </article>

                {/* 13. Contact Information */}
                <article
                  id="contact-us"
                  className="bg-gradient-to-br from-[#102B2B] to-[#064E43] text-white rounded-2xl p-6 sm:p-8 shadow-md space-y-5 scroll-mt-24"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E8F4EC] uppercase tracking-wider">
                    <Mail className="w-4 h-4 text-[#078765]" />
                    <span>Section 13</span>
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      13. Contact Information
                    </h2>
                    <p className="text-xs sm:text-sm text-[#E8F4EC]/85 mt-1 leading-relaxed">
                      If you have any questions, concerns, or requests regarding
                      this Privacy Policy, please contact us:
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
                        Support Contact Number
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
                    <strong>Customer Support:</strong> Monday to Saturday,
                    during business hours.
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
                      We are committed to protecting your privacy and providing a
                      safe, transparent, and reliable digital experience.
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
