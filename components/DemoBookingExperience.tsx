"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { CheckIcon } from "./Icons";
import {
  Calendar,
  Clock,
  CheckCircle2,
  User,
  Mail,
  Phone,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  updateDoc,
  setDoc,
  doc,
  increment,
} from "firebase/firestore";
import {
  DEFAULT_SCHEDULE_CONFIG,
  ScheduleConfig,
  GeneratedSlot,
  generateSlotsForDate,
  getLocalDateString,
} from "../lib/demoSchedule";

interface ManualSlot {
  id: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  duration?: string;
  maxCapacity?: number;
  bookedCount?: number;
  isActive?: boolean;
  type?: string;
}

interface DemoBookingExperienceProps {
  onSuccessClose?: () => void;
  compact?: boolean;
}

export function DemoBookingExperience({
  onSuccessClose,
  compact = false,
}: DemoBookingExperienceProps) {
  const [scheduleConfig, setScheduleConfig] = useState<ScheduleConfig>(DEFAULT_SCHEDULE_CONFIG);
  const [slotCounters, setSlotCounters] = useState<Record<string, number>>({});
  const [manualSlots, setManualSlots] = useState<ManualSlot[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedDate, setSelectedDate] = useState<string>(() => getLocalDateString());
  const [selectedSlot, setSelectedSlot] = useState<
    (GeneratedSlot & { bookedCount: number; isManual?: boolean }) | null
  >(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [confirmedSlot, setConfirmedSlot] = useState<
    (GeneratedSlot & { bookedCount: number }) | null
  >(null);

  const dateScrollRef = useRef<HTMLDivElement>(null);

  // Real-time listener on demo_slots for schedule_config, slot_counters & manual slots
  useEffect(() => {
    const q = query(collection(db, "demo_slots"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        let loadedSchedule: ScheduleConfig | null = null;
        const counters: Record<string, number> = {};
        const customSlots: ManualSlot[] = [];

        snapshot.docs.forEach((d) => {
          const data = d.data();
          if (d.id === "schedule_config" || data.type === "schedule_config") {
            loadedSchedule = {
              ...DEFAULT_SCHEDULE_CONFIG,
              ...(data as Partial<ScheduleConfig>),
              availability: {
                ...DEFAULT_SCHEDULE_CONFIG.availability,
                ...(data.availability || {}),
              },
            };
          } else if (data.type === "slot_counter" && data.slotKey) {
            counters[data.slotKey] = Number(data.bookedCount) || 0;
          } else if (data.isActive !== false) {
            customSlots.push({
              id: d.id,
              ...(data as Omit<ManualSlot, "id">),
            });
          }
        });

        if (loadedSchedule) setScheduleConfig(loadedSchedule);
        setSlotCounters(counters);
        setManualSlots(customSlots);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching schedule & slots:", err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Generate date strip for bookingWindowDays
  const dateCards = useMemo(() => {
    const days = Number(scheduleConfig.bookingWindowDays) || 14;
    const now = new Date();
    const list: {
      dateStr: string;
      dayName: string;
      dayNum: number;
      monthName: string;
      slotsCount: number;
      isToday: boolean;
    }[] = [];

    for (let i = 0; i < days; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);
      const dateStr = getLocalDateString(d);
      const autoCount = generateSlotsForDate(scheduleConfig, dateStr, now).length;
      const manualCount = manualSlots.filter((m) => m.date === dateStr).length;

      list.push({
        dateStr,
        dayName: d.toLocaleDateString("en-US", { weekday: "short" }),
        dayNum: d.getDate(),
        monthName: d.toLocaleDateString("en-US", { month: "short" }),
        slotsCount: autoCount + manualCount,
        isToday: i === 0,
      });
    }
    return list;
  }, [scheduleConfig, manualSlots]);

  // Derive activeDate automatically if selectedDate has 0 slots
  const activeDate = useMemo(() => {
    const currentCard = dateCards.find((c) => c.dateStr === selectedDate);
    if (currentCard && currentCard.slotsCount > 0) return selectedDate;
    return dateCards.find((c) => c.slotsCount > 0)?.dateStr || selectedDate;
  }, [dateCards, selectedDate]);

  // Available slots for currently activeDate
  const availableSlotsForDay = useMemo(() => {
    const now = new Date();
    const generated = generateSlotsForDate(scheduleConfig, activeDate, now).map((s) => ({
      ...s,
      bookedCount: slotCounters[s.slotKey] || 0,
      isManual: false,
    }));

    const manualForDay = manualSlots
      .filter((m) => m.date === activeDate)
      .map((m) => ({
        id: m.id,
        slotKey: m.id,
        date: m.date || activeDate,
        startHHMM: m.startTime || "",
        endHHMM: m.endTime || "",
        startTime: m.startTime || "Custom Slot",
        endTime: m.endTime || "",
        duration: m.duration || `${scheduleConfig.durationMinutes} Mins`,
        durationMinutes: scheduleConfig.durationMinutes,
        maxCapacity: Number(m.maxCapacity) || 10,
        bookedCount: Number(m.bookedCount) || 0,
        isManual: true,
      }));

    return [...generated, ...manualForDay];
  }, [scheduleConfig, activeDate, slotCounters, manualSlots]);

  const scrollDates = (offset: number) => {
    if (dateScrollRef.current) {
      dateScrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanEmail = email.trim();

    if (!cleanName) {
      setError("Please enter your full name.");
      return;
    }

    const digitsOnly = cleanPhone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      setError("Please enter a valid 10-digit mobile/WhatsApp number.");
      return;
    }

    if (!selectedSlot) {
      setError("Please choose a date and available time slot below.");
      return;
    }

    if (selectedSlot.bookedCount >= selectedSlot.maxCapacity) {
      setError("This time slot is now full. Please select another slot.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: cleanName,
        phone: cleanPhone,
        email: cleanEmail,
        slotId: selectedSlot.id,
        slotKey: selectedSlot.slotKey,
        slotTitle: `${selectedSlot.date} | ${selectedSlot.startTime} (${selectedSlot.duration})`,
        slotDate: selectedSlot.date,
        slotStartTime: selectedSlot.startTime,
        slotEndTime: selectedSlot.endTime || "",
        slotDuration: selectedSlot.duration,
        source: "Alife Stable",
        status: "confirmed",
        remark: "Pending",
        staffName: "",
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "demo_bookings"), payload);
      await addDoc(collection(db, "leads"), payload);

      try {
        if (selectedSlot.isManual) {
          await updateDoc(doc(db, "demo_slots", selectedSlot.id), {
            bookedCount: increment(1),
          });
        } else {
          await setDoc(
            doc(db, "demo_slots", `count_${selectedSlot.slotKey}`),
            {
              type: "slot_counter",
              slotKey: selectedSlot.slotKey,
              date: selectedSlot.date,
              bookedCount: increment(1),
            },
            { merge: true }
          );
        }
      } catch (counterErr) {
        console.warn("Could not increment counter:", counterErr);
      }

      setConfirmedSlot(selectedSlot);
      setSubmitted(true);
    } catch (err) {
      console.error("Error booking demo slot:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPrettyDate = (dateStr: string) => {
    const parts = dateStr.split("-").map(Number);
    if (parts.length !== 3) return dateStr;
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  if (submitted) {
    return (
      <div className="text-center py-8 sm:py-10 space-y-5 max-w-md mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-[#E8F4EC] text-[#078765] flex items-center justify-center mx-auto shadow-sm border border-[#078765]/20">
          <CheckIcon className="w-9 h-9" />
        </div>

        <div className="space-y-1.5">
          <span className="inline-block px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-[11px] font-extrabold uppercase tracking-wider">
            Booking Confirmed
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#102B2B] tracking-tight">
            Meeting Slot Reserved!
          </h3>
        </div>

        <div className="bg-[#FBF7EF] border border-[#078765]/20 rounded-2xl p-4 sm:p-5 text-left space-y-3 shadow-2xs">
          <div className="flex items-center justify-between text-xs sm:text-sm text-[#65736F]">
            <span>Meeting</span>
            <span className="font-bold text-[#102B2B]">
              {scheduleConfig.title || "Alife Stable - Partnership Meeting"}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm text-[#65736F]">
            <span>Scheduled Date</span>
            <span className="font-bold text-[#102B2B]">
              {confirmedSlot?.date ? formatPrettyDate(confirmedSlot.date) : "Confirmed"}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm text-[#65736F]">
            <span>Time Slot</span>
            <span className="font-extrabold text-[#078765]">
              {confirmedSlot?.startTime}
              {confirmedSlot?.endTime ? ` – ${confirmedSlot.endTime}` : ""}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm text-[#65736F]">
            <span>Duration</span>
            <span className="font-bold text-[#102B2B]">
              {confirmedSlot?.duration || `${scheduleConfig.durationMinutes} Mins`}
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#4A5D59] leading-relaxed">
          Thank you, <strong className="text-[#102B2B]">{name}</strong>! Our partnership specialist will reach out on{" "}
          <strong className="text-[#102B2B]">{phone}</strong> with your live session link.
        </p>

        {onSuccessClose ? (
          <button
            type="button"
            onClick={onSuccessClose}
            className="w-full py-3.5 rounded-xl font-extrabold text-white bg-[#078765] hover:bg-[#064E43] transition-colors cursor-pointer shadow-md"
          >
            Done
          </button>
        ) : (
          <Link
            href="/"
            className="w-full py-3.5 rounded-xl font-extrabold text-white bg-[#078765] hover:bg-[#064E43] transition-colors cursor-pointer shadow-md block text-center"
          >
            Back to Home
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Top Brand Header: Alife Stable Logo + Partnership Meeting */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <img
            src="https://ik.imagekit.io/0s0fb4b2b/AlifeLogo.png"
            alt="Alife Stable Logo"
            className="h-9 sm:h-11 w-auto object-contain shrink-0"
          />
          <div className="hidden sm:block h-7 w-px bg-slate-200" />
          <div>
            <h1 className="text-lg sm:text-2xl font-black text-[#102B2B] tracking-tight leading-snug">
              {scheduleConfig.title || "Alife Stable - Partnership Meeting"}
            </h1>
            <div className="flex flex-wrap items-center gap-2.5 mt-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#078765] bg-[#E8F4EC] px-2.5 py-0.5 rounded-full">
                <Clock className="w-3 h-3" />
                {scheduleConfig.durationMinutes} Mins
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FBF7EF] border border-[#078765]/15 text-[11px] font-bold text-[#078765] shrink-0">
          <ShieldCheck className="w-4 h-4" />
          <span>100% Free Consultation</span>
        </div>
      </div>

      {/* Description About Partnership Meeting */}
      <p className="text-xs sm:text-sm text-[#4A5D59] leading-relaxed font-medium bg-[#FBF7EF] px-4 py-3 rounded-2xl border border-[#078765]/15">
        {scheduleConfig.subtitle && !scheduleConfig.subtitle.includes("1-on-1") && !scheduleConfig.subtitle.includes("convenient date")
          ? scheduleConfig.subtitle
          : "Book your free demo and explore Alife Stable's AI Courses Partnership Program. Choose your preferred date and time!"}
      </p>

      {error && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
          {error}
        </div>
      )}

      {loading ? (
        <div className="py-14 flex flex-col items-center justify-center gap-2.5 text-xs text-[#65736F]">
          <span className="w-7 h-7 border-2 border-[#078765] border-t-transparent rounded-full animate-spin" />
          <span className="font-semibold">Loading live available slots...</span>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={
            compact
              ? "space-y-4"
              : "grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start"
          }
        >
          {/* LEFT / TOP: Lead Contact Form (Full Name -> Email -> Mobile Number) */}
          <div
            className={
              compact
                ? "space-y-3"
                : "lg:col-span-5 space-y-4 bg-[#FBF7EF]/60 border border-[#078765]/15 rounded-2xl p-4 sm:p-5"
            }
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold text-[#078765] uppercase tracking-wider">
                Your Contact Details
              </span>
              <span className="text-[10px] font-semibold text-slate-400">
                Required *
              </span>
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-extrabold text-[#102B2B] uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-3 sm:py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#078765] text-base sm:text-sm bg-white text-[#102B2B] transition-colors shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-extrabold text-[#102B2B] uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-3 sm:py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#078765] text-base sm:text-sm bg-white text-[#102B2B] transition-colors shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-extrabold text-[#102B2B] uppercase tracking-wider mb-1.5">
                  Mobile Number (WhatsApp Preferred) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit WhatsApp number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-3 sm:py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#078765] text-base sm:text-sm bg-white text-[#102B2B] transition-colors shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {!compact && (
              <div className="hidden lg:block pt-3 border-t border-[#078765]/15 space-y-2">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#102B2B]">
                  What you&apos;ll discover in this meeting:
                </p>
                <ul className="space-y-1.5 text-xs text-[#4A5D59] font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#078765] shrink-0" />
                    Live Partner Dashboard & Student Portal Tour
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#078765] shrink-0" />
                    Your Own Branded Website & Custom Domain Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#078765] shrink-0" />
                    Direct Payout & 100% Profit Margin Breakdown
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT / BOTTOM: Green Section — Date, Time & Available Slots */}
          <div
            className={
              compact
                ? "space-y-4"
                : "lg:col-span-7 space-y-4"
            }
          >
            <div className="p-4 sm:p-5 rounded-2xl bg-[#E8F4EC]/75 border border-[#078765]/25 space-y-4">
              {/* Date Selection */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <label className="text-[11px] font-extrabold text-[#102B2B] uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#078765]" />
                    Select Date
                  </label>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold text-[#078765]">
                      {formatPrettyDate(activeDate)}
                    </span>
                    <div className="hidden sm:flex items-center gap-1 ml-1">
                      <button
                        type="button"
                        onClick={() => scrollDates(-200)}
                        aria-label="Scroll dates left"
                        className="p-1 rounded-md bg-white border border-[#078765]/20 text-[#078765] hover:bg-[#078765] hover:text-white transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => scrollDates(200)}
                        aria-label="Scroll dates right"
                        className="p-1 rounded-md bg-white border border-[#078765]/20 text-[#078765] hover:bg-[#078765] hover:text-white transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  ref={dateScrollRef}
                  className="flex gap-2 overflow-x-auto pb-1.5 scroll-smooth snap-x snap-mandatory"
                >
                  {dateCards.map((c) => {
                    const isSelected = c.dateStr === activeDate;
                    const disabled = c.slotsCount === 0;
                    return (
                      <button
                        key={c.dateStr}
                        type="button"
                        disabled={disabled}
                        onClick={() => {
                          setSelectedDate(c.dateStr);
                          setSelectedSlot(null);
                          setError(null);
                        }}
                        className={`min-w-[64px] sm:min-w-[68px] py-2.5 px-2 rounded-xl border text-center transition-all shrink-0 snap-start ${
                          isSelected
                            ? "bg-[#078765] text-white border-[#078765] shadow-md cursor-pointer"
                            : disabled
                            ? "bg-white/40 text-slate-300 border-slate-200/50 cursor-not-allowed"
                            : "bg-white hover:bg-[#078765]/10 text-[#102B2B] border-emerald-200/80 cursor-pointer"
                        }`}
                      >
                        <div
                          className={`text-[10px] font-bold uppercase ${
                            isSelected ? "text-[#E8F4EC]" : "text-[#65736F]"
                          }`}
                        >
                          {c.isToday ? "Today" : c.dayName}
                        </div>
                        <div className="text-base font-black leading-tight my-0.5">
                          {c.dayNum}
                        </div>
                        <div
                          className={`text-[10px] font-semibold ${
                            isSelected ? "text-white/90" : "text-slate-400"
                          }`}
                        >
                          {c.monthName}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Available Time Slots */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-extrabold text-[#102B2B] uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#078765]" />
                    Available Time Slots
                  </label>
                  <span className="text-[11px] font-bold text-[#078765] bg-white px-2.5 py-0.5 rounded-full border border-[#078765]/20">
                    {availableSlotsForDay.filter((s) => s.bookedCount < s.maxCapacity).length} slots open
                  </span>
                </div>

                {availableSlotsForDay.length === 0 ? (
                  <div className="p-5 rounded-xl border border-dashed border-[#078765]/30 bg-white/75 text-center text-xs text-slate-600 font-medium">
                    No available slots for this date. Please select another date above.
                  </div>
                ) : (
                  <div
                    className={`grid ${
                      compact
                        ? "grid-cols-2 sm:grid-cols-3"
                        : "grid-cols-2 sm:grid-cols-3"
                    } gap-2 sm:gap-2.5 max-h-56 sm:max-h-64 overflow-y-auto pr-1`}
                  >
                    {availableSlotsForDay.map((slot) => {
                      const isFull = slot.bookedCount >= slot.maxCapacity;
                      const isSelected = selectedSlot?.id === slot.id;

                      return (
                        <button
                          key={slot.id}
                          type="button"
                          disabled={isFull}
                          onClick={() => {
                            setSelectedSlot(slot);
                            setError(null);
                          }}
                          className={`px-3 py-3 rounded-xl border text-center transition-all relative ${
                            isFull
                              ? "bg-white/50 border-slate-200 text-slate-400 cursor-not-allowed opacity-60"
                              : isSelected
                              ? "bg-[#078765] text-white border-[#078765] shadow-md cursor-pointer ring-2 ring-[#078765]/30"
                              : "bg-white hover:bg-emerald-50 border-emerald-200/80 hover:border-[#078765] text-[#102B2B] cursor-pointer"
                          }`}
                        >
                          <div className="flex items-center justify-center gap-1.5">
                            <span className="text-xs sm:text-sm font-extrabold">
                              {slot.startTime}
                            </span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-white shrink-0" />}
                          </div>
                          {isFull && (
                            <div className="text-[10px] font-semibold mt-0.5 text-rose-500">
                              Slot Full
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {selectedSlot && (
              <div className="px-4 py-2.5 rounded-xl bg-[#FBF7EF] border border-[#078765]/25 text-xs font-bold text-[#078765] flex flex-wrap items-center justify-between gap-2">
                <span>Selected: {formatPrettyDate(selectedSlot.date)}</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-[#078765]/10">
                  {selectedSlot.startTime} ({selectedSlot.duration})
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !selectedSlot}
              className="w-full py-3.5 sm:py-4 rounded-xl font-extrabold text-white bg-[#078765] hover:bg-[#064E43] shadow-lg shadow-[#078765]/20 hover:shadow-xl transition-all duration-200 cursor-pointer disabled:opacity-50 active:scale-98 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Confirming Partnership Meeting...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Confirm Partnership Meeting
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-[#65736F]">
              🔒 100% Free Partnership Walkthrough. Meeting details will be shared on WhatsApp.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
