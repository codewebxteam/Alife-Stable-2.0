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
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
  Send,
  HelpCircle,
  CheckCircle2,
  Headphones,
  Calendar,
  Building,
} from "lucide-react";

export default function ContactPage() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "partner";
  }>({
    isOpen: false,
    type: "demo",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    role: "Coaching Institute / Teacher",
    interest: "Complete Partnership Plan (₹1,999/year)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenDemo = () => {
    setModalState({ isOpen: true, type: "demo" });
  };

  const handleOpenPartner = () => {
    setModalState({ isOpen: true, type: "partner" });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const contactFaqs = [
    {
      q: "How soon will a partnership specialist contact me?",
      a: "Our dedicated onboarding team contacts prospective partners within 2 to 4 business hours during working days.",
    },
    {
      q: "Can I schedule a live 1-on-1 demo via Google Meet?",
      a: "Yes. Simply submit your contact details or click 'Book Your Free Demo' to pick a suitable time slot for a personalized screen-sharing walkthrough.",
    },
    {
      q: "What do I need to prepare before the walkthrough?",
      a: "No prior technical preparation is required. Having your desired brand name, logo, or student target audience in mind is helpful.",
    },
    {
      q: "Can educational institutions request an invoice?",
      a: "Yes. We issue formal GST commercial invoices and partnership agreements for registered businesses, training academies, and colleges.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7EF] text-[#102B2B] antialiased selection:bg-[#078765]/20 selection:text-[#064E43]">
      {/* 1. Header with Fixed Top-Right Dual CTAs */}
      <Header onOpenDemo={handleOpenDemo} onOpenPartner={handleOpenPartner} />

      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <section className="relative pt-3 sm:pt-5 md:pt-7 pb-3 sm:pb-5 overflow-hidden bg-gradient-to-b from-[#E8F4EC]/60 via-[#FBF7EF] to-[#FBF7EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#078765]/10 border border-[#078765]/20 text-[#078765] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
              <Headphones className="w-3.5 h-3.5 text-[#078765]" />
              <span>DIRECT PARTNERSHIP & SUPPORT DESK</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#102B2B] tracking-tight leading-[1.15] max-w-4xl mx-auto">
              Get in Touch with Our Team
            </h1>

            {/* Subtitle */}
            <p className="mt-2 text-xs sm:text-base text-[#65736F] max-w-2xl mx-auto leading-relaxed">
              Have questions about our ₹1,999/yr partnership program, want a personalized platform demonstration, or need support? We are always here to guide you.
            </p>
          </div>
        </section>

        {/* Section 2: Contact Info & Inquiry Form Grid */}
        <section className="py-4 sm:py-6 pb-6 sm:pb-10 bg-[#FBF7EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
              {/* Left Column: Direct Contact Info (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                {/* Contact Channels Card */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#078765]/20 shadow-xs space-y-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B2B] tracking-tight">
                    Direct Channels
                  </h2>
                  <p className="text-xs sm:text-sm text-[#65736F] leading-relaxed">
                    Connect directly with our education advisory team. We prioritize fast turnaround times for all inquiries.
                  </p>

                  <div className="space-y-3.5 pt-1">
                    {/* Partnership Desk */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#E8F4EC] text-[#078765] flex items-center justify-center shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#65736F]">
                          Partnership & Licensing Desk
                        </div>
                        <a
                          href="mailto:partners@alifestable.com"
                          className="text-xs sm:text-sm font-bold text-[#102B2B] hover:text-[#078765] transition-colors"
                        >
                          partners@alifestable.com
                        </a>
                        <div className="text-[10px] text-[#078765] font-semibold">
                          Average response: Under 2 hours
                        </div>
                      </div>
                    </div>

                    {/* Phone & WhatsApp */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#E8F4EC] text-[#078765] flex items-center justify-center shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#65736F]">
                          Phone & WhatsApp Helpline
                        </div>
                        <a
                          href="tel:+919876543210"
                          className="text-xs sm:text-sm font-bold text-[#102B2B] hover:text-[#078765] transition-colors"
                        >
                          +91 98765 43210
                        </a>
                        <div className="text-[10px] text-[#65736F]">
                          Mon – Sat • 9:30 AM to 7:00 PM IST
                        </div>
                      </div>
                    </div>

                    {/* Office Location */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#E8F4EC] text-[#078765] flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#65736F]">
                          Corporate Operations
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-[#102B2B] leading-snug">
                          Alife Stable Technologies
                        </p>
                        <p className="text-[10px] text-[#65736F] leading-relaxed">
                          Sector 62, Institutional Area, Noida, Delhi NCR, India — 201309
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fast Action Buttons */}
                  <div className="pt-2 border-t border-[#078765]/15 flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      onClick={handleOpenDemo}
                      className="flex-1 py-2 px-3 rounded-xl font-bold text-xs text-center text-[#064E43] bg-[#E8F4EC] hover:bg-[#078765] hover:text-white transition-all cursor-pointer"
                    >
                      Schedule Screen Demo
                    </button>
                    <button
                      type="button"
                      onClick={handleOpenPartner}
                      className="flex-1 py-2 px-3 rounded-xl font-bold text-xs text-center text-white bg-[#078765] hover:bg-[#064E43] transition-all cursor-pointer"
                    >
                      Join as Partner
                    </button>
                  </div>
                </div>

                {/* Assurance Card */}
                <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#102B2B] to-[#064E43] text-white p-5 sm:p-6 shadow-md space-y-2">
                  <div className="flex items-center gap-1.5 text-[#078765]">
                    <Sparkles className="w-4 h-4 text-[#E8F4EC]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8F4EC]">
                      THE PARTNER GUARANTEE
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white">
                    Zero Sales Pressure. Pure Value.
                  </h3>
                  <p className="text-xs text-[#E8F4EC]/85 leading-relaxed">
                    Our team doesn&apos;t practice aggressive sales calls. We walk you through the live admin platform, answer technical queries honestly, and let you decide if Alife Stable is the right fit for your goals.
                  </p>
                </div>
              </div>

              {/* Right Column: Inquiry Form (7 cols) */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#078765]/20 shadow-xs">
                  {isSubmitted ? (
                    <div className="py-8 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-[#E8F4EC] text-[#078765] flex items-center justify-center mx-auto shadow-xs">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-black text-[#102B2B] tracking-tight">
                        Thank You for Reaching Out!
                      </h3>
                      <p className="text-xs sm:text-sm text-[#65736F] max-w-md mx-auto leading-relaxed">
                        We have successfully received your inquiry. A dedicated Alife Stable partnership manager will review your details and contact you within 2 business hours.
                      </p>
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({
                              name: "",
                              email: "",
                              phone: "",
                              city: "",
                              role: "Coaching Institute / Teacher",
                              interest: "Complete Partnership Plan (₹1,999/year)",
                              message: "",
                            });
                          }}
                          className="px-4 py-2 rounded-xl text-xs font-bold text-[#064E43] bg-[#E8F4EC] hover:bg-[#078765] hover:text-white transition-all cursor-pointer"
                        >
                          Send Another Message
                        </button>
                        <Link
                          href="/partnership"
                          className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#078765] hover:bg-[#064E43] transition-all"
                        >
                          View Partnership Details
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#078765] mb-0.5">
                          DIRECT INQUIRY
                        </div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B2B] tracking-tight">
                          Send Us a Message
                        </h2>
                        <p className="text-xs text-[#65736F]">
                          Fill in your details below and our partnership team will connect with you promptly.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {/* Name */}
                        <div>
                          <label className="block text-[10px] font-bold text-[#102B2B] uppercase tracking-wider mb-1">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="e.g. Ramesh Kumar"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm text-[#102B2B] bg-[#FBF7EF]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#078765] focus:border-transparent transition-all"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-[10px] font-bold text-[#102B2B] uppercase tracking-wider mb-1">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="e.g. ramesh@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm text-[#102B2B] bg-[#FBF7EF]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#078765] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Mobile Number */}
                        <div>
                          <label className="block text-[10px] font-bold text-[#102B2B] uppercase tracking-wider mb-1">
                            WhatsApp / Mobile <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="e.g. +91 98765 43210"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm text-[#102B2B] bg-[#FBF7EF]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#078765] focus:border-transparent transition-all"
                          />
                        </div>

                        {/* City / State */}
                        <div>
                          <label className="block text-[10px] font-bold text-[#102B2B] uppercase tracking-wider mb-1">
                            City & State <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="city"
                            required
                            placeholder="e.g. Jaipur, Rajasthan"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm text-[#102B2B] bg-[#FBF7EF]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#078765] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Current Role */}
                        <div>
                          <label className="block text-[10px] font-bold text-[#102B2B] uppercase tracking-wider mb-1">
                            Your Current Profile
                          </label>
                          <select
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm text-[#102B2B] bg-[#FBF7EF]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#078765] focus:border-transparent transition-all cursor-pointer"
                          >
                            <option value="Coaching Institute / Teacher">
                              Coaching Institute Owner / Teacher
                            </option>
                            <option value="College Professor / Educator">
                              College Professor / Academician
                            </option>
                            <option value="Content Creator / Influencer">
                              Content Creator / YouTuber
                            </option>
                            <option value="Aspiring EdTech Entrepreneur">
                              Aspiring EdTech Entrepreneur
                            </option>
                            <option value="Corporate Trainer">
                              Corporate Trainer / Consultant
                            </option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        {/* Interest Category */}
                        <div>
                          <label className="block text-[10px] font-bold text-[#102B2B] uppercase tracking-wider mb-1">
                            Primary Inquiry
                          </label>
                          <select
                            name="interest"
                            value={formData.interest}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm text-[#102B2B] bg-[#FBF7EF]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#078765] focus:border-transparent transition-all cursor-pointer"
                          >
                            <option value="Complete Partnership Plan (₹1,999/year)">
                              Complete Partnership Plan (₹1,999/year)
                            </option>
                            <option value="Request a Live Platform Demo">
                              Request a Live Platform Demo
                            </option>
                            <option value="Institutional Custom Academy">
                              Institutional Custom Academy
                            </option>
                            <option value="Technical or Existing Account Support">
                              Technical / Existing Account Support
                            </option>
                            <option value="General Query">General Query</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[10px] font-bold text-[#102B2B] uppercase tracking-wider mb-1">
                          How can we help you? <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <textarea
                          rows={3}
                          name="message"
                          placeholder="Tell us about your academy goals, preferred courses, or any questions you have..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm text-[#102B2B] bg-[#FBF7EF]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#078765] focus:border-transparent transition-all resize-none"
                        />
                      </div>

                      {/* Submit CTA */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-5 rounded-xl font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-md shadow-[#078765]/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-70 text-xs sm:text-sm"
                      >
                        {isSubmitting ? (
                          <span>Sending your inquiry...</span>
                        ) : (
                          <>
                            <span>Submit Partnership Inquiry</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      <p className="text-[10px] text-center text-[#65736F]">
                        We respect your privacy. Your information is never shared or spammed.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Contact FAQ Highlights */}
        <section className="py-5 sm:py-8 bg-white border-y border-[#078765]/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#078765] uppercase">
                COMMUNICATION CLARITY
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B2B] tracking-tight mt-1">
                Frequently Asked Inquiries
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {contactFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FBF7EF] border border-[#078765]/15 space-y-1 hover:border-[#078765]/35 transition-all"
                >
                  <div className="flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#078765] shrink-0 mt-0.5" />
                    <h3 className="font-bold text-[#102B2B] text-xs sm:text-sm">
                      {faq.q}
                    </h3>
                  </div>
                  <p className="text-xs text-[#65736F] leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Comprehensive CTA Banner */}
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
