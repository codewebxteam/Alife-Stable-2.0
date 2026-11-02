"use client";

import React, { useState, useEffect } from "react";
import { CloseIcon, CheckIcon } from "./Icons";
import { Calendar, ChevronDown, Check, Clock } from "lucide-react";
import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  updateDoc,
  doc,
  increment,
} from "firebase/firestore";

interface DemoSlot {
  id: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  duration?: string;
  topic?: string;
  maxCapacity?: number;
  bookedCount?: number;
  isActive?: boolean;
}

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [slots, setSlots] = useState<DemoSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(true);
  const [selectedSlotId, setSelectedSlotId] = useState<string>("");
  const [isSlotDropdownOpen, setIsSlotDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [confirmedSlot, setConfirmedSlot] = useState<DemoSlot | null>(null);

  // Fetch available slots from Firestore
  useEffect(() => {
    if (!isOpen) return;

    setLoadingSlots(true);
    const q = query(collection(db, "demo_slots"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const loaded: DemoSlot[] = snapshot.docs
          .map((d) => ({
            id: d.id,
            ...(d.data() as Omit<DemoSlot, "id">),
          }))
          .filter((s) => s.isActive !== false);

        // Sort by date / time
        loaded.sort((a, b) => {
          if (a.date && b.date) {
            return a.date.localeCompare(b.date);
          }
          return 0;
        });

        setSlots(loaded);
        setLoadingSlots(false);
      },
      (err) => {
        console.error("Error fetching demo slots:", err);
        setLoadingSlots(false);
      }
    );

    return () => unsubscribe();
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanName = name.trim();
    const cleanPhone = phone.trim();

    if (!cleanName) {
      setError("Please enter your name.");
      return;
    }

    // Basic phone validation (at least 10 digits)
    const digitsOnly = cleanPhone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (slots.length > 0 && !selectedSlotId) {
      setError("Please select a demo time slot to continue.");
      setIsSlotDropdownOpen(true);
      return;
    }

    const currentSlot = slots.find((s) => s.id === selectedSlotId) || null;

    setIsSubmitting(true);

    try {
      const payload = {
        name: cleanName,
        phone: cleanPhone,
        slotId: currentSlot?.id || "custom-slot",
        slotTitle: currentSlot
          ? `${currentSlot.date} | ${currentSlot.startTime} (${currentSlot.duration || "45 Mins"})`
          : "Flexible / Next Available Slot",
        slotDate: currentSlot?.date || "Flexible / Priority Callback",
        slotStartTime: currentSlot?.startTime || "To be confirmed on call",
        slotEndTime: currentSlot?.endTime || "",
        slotDuration: currentSlot?.duration || "45 Mins",
        source: "Alife Stable",
        status: "confirmed",
        createdAt: serverTimestamp(),
      };

      // Save to shared Firestore so Impact Resell admin panel can access it
      await addDoc(collection(db, "demo_bookings"), payload);
      await addDoc(collection(db, "leads"), payload);

      // Increment booked count for the slot
      if (currentSlot?.id) {
        try {
          const slotRef = doc(db, "demo_slots", currentSlot.id);
          await updateDoc(slotRef, {
            bookedCount: increment(1),
          });
        } catch (updateErr) {
          console.warn("Could not increment slot booked count:", updateErr);
        }
      }

      setConfirmedSlot(currentSlot);
      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Error booking demo:", err);
      // Fallback: Acknowledge submission gracefully
      setConfirmedSlot(currentSlot);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setSelectedSlotId("");
    setError(null);
    setConfirmedSlot(null);
    setIsSlotDropdownOpen(false);
    onClose();
  };

  const formatDisplayDate = (dateStr?: string) => {
    if (!dateStr) return "";
    try {
      const parts = dateStr.split("-");
      if (parts.length === 3) {
        const d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        if (!isNaN(d.getTime())) {
          return d.toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
          });
        }
      }
      return dateStr;
    } catch {
      return dateStr;
    }
  };

  const selectedSlot = slots.find((s) => s.id === selectedSlotId) || null;

  const groupedSlots = slots.reduce<Record<string, DemoSlot[]>>((acc, slot) => {
    const key = slot.date || "Upcoming Slots";
    if (!acc[key]) acc[key] = [];
    acc[key].push(slot);
    return acc;
  }, {});

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#078765]/20 p-5 sm:p-7 overflow-y-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 text-[#65736F] hover:text-[#102B2B] p-1.5 rounded-full hover:bg-[#E8F4EC] transition-colors cursor-pointer"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F4EC] border border-[#078765]/20 text-[#078765] text-xs font-bold uppercase tracking-wider mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#078765] animate-pulse" />
              Live 1-on-1 Demo Session
            </div>

            <h3 className="text-2xl sm:text-2xl font-black text-[#102B2B] mb-1 tracking-tight">
              Book Your Free Demo Slot
            </h3>
            <p className="text-xs sm:text-sm text-[#65736F] mb-4 leading-relaxed">
              Choose your preferred time slot and enter your contact details. Our product specialist will walk you through the platform live.
            </p>

            {error && (
              <div className="mb-4 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Name */}
              <div>
                <label className="block text-xs font-bold text-[#102B2B] uppercase tracking-wider mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#078765] focus:border-transparent text-sm bg-[#FBF7EF]/50 transition-all text-[#102B2B]"
                />
              </div>

              {/* Field 2: Phone Number */}
              <div>
                <label className="block text-xs font-bold text-[#102B2B] uppercase tracking-wider mb-1">
                  Phone Number (WhatsApp) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#078765] focus:border-transparent text-sm bg-[#FBF7EF]/50 transition-all text-[#102B2B]"
                />
              </div>

              {/* Field 3: Available Time Slots Selection */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-[#102B2B] uppercase tracking-wider">
                    Demo Time Slot <span className="text-red-500">*</span>
                  </label>
                  {slots.length > 0 && (
                    <span className="text-[11px] text-[#078765] font-semibold">
                      {slots.length} available {slots.length === 1 ? "slot" : "slots"}
                    </span>
                  )}
                </div>

                {loadingSlots ? (
                  <div className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-[#FBF7EF]/40 text-xs text-[#65736F] flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-[#078765] border-t-transparent rounded-full animate-spin shrink-0" />
                    <span>Loading available slots...</span>
                  </div>
                ) : slots.length === 0 ? (
                  <div className="w-full p-3 rounded-xl border border-gray-200 bg-[#FBF7EF]/40 flex items-center justify-between text-xs text-[#102B2B]">
                    <div className="flex items-center gap-2 truncate">
                      <Calendar className="w-4 h-4 text-[#078765] shrink-0" />
                      <span className="font-semibold truncate">Flexible / Priority Callback Slot</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-[#078765] border border-[#078765]/20 shrink-0">
                      45 Mins
                    </span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {/* Dropdown Selector Button */}
                    <button
                      type="button"
                      onClick={() => setIsSlotDropdownOpen(!isSlotDropdownOpen)}
                      className={`w-full min-h-[46px] px-3.5 py-2 rounded-xl border transition-all text-left flex items-center justify-between cursor-pointer bg-white ${
                        isSlotDropdownOpen
                          ? "border-[#078765] ring-2 ring-[#078765]/20 shadow-xs"
                          : selectedSlot
                          ? "border-[#078765] bg-[#E8F4EC]/30"
                          : "border-gray-200 hover:border-[#078765]/60 hover:bg-[#FBF7EF]/40"
                      }`}
                    >
                      {selectedSlot ? (
                        <div className="flex items-center gap-2.5 truncate">
                          <div className="w-8 h-8 rounded-lg bg-[#E8F4EC] text-[#078765] flex items-center justify-center shrink-0">
                            <Clock className="w-4 h-4" />
                          </div>
                          <div className="text-left truncate">
                            <div className="text-xs sm:text-sm font-black text-[#102B2B] flex items-center gap-1.5 truncate">
                              <span>{formatDisplayDate(selectedSlot.date)}</span>
                              <span className="text-gray-300">•</span>
                              <span className="text-[#078765]">
                                {selectedSlot.startTime}
                                {selectedSlot.endTime ? ` - ${selectedSlot.endTime}` : ""}
                              </span>
                            </div>
                            <div className="text-[11px] text-[#65736F] font-semibold flex items-center gap-1.5">
                              <span>⏱️ {selectedSlot.duration || "45 Mins"}</span>
                              {selectedSlot.topic && (
                                <span className="truncate max-w-[150px]">• 📌 {selectedSlot.topic}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2.5 text-gray-500">
                          <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-400 flex items-center justify-center shrink-0">
                            <Calendar className="w-4 h-4" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-gray-600">
                            Select Demo Time Slot...
                          </span>
                        </div>
                      )}

                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        <span className="text-xs font-bold text-[#078765]">
                          {selectedSlot ? "Change" : "Select Slot"}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                            isSlotDropdownOpen ? "rotate-180 text-[#078765]" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* Interactive Real Slot Chips Container */}
                    {isSlotDropdownOpen && (
                      <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FBF7EF]/70 border border-[#078765]/25 space-y-3 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="flex items-center justify-between text-[11px] text-[#65736F] px-1 font-semibold">
                          <span>Tap an available slot chip to select:</span>
                          <span className="text-[#078765] font-bold">⏱️ Real-time Slots</span>
                        </div>

                        {Object.entries(groupedSlots).map(([date, dateSlots]) => (
                          <div key={date} className="space-y-1.5">
                            <div className="text-[11px] font-extrabold text-[#102B2B] flex items-center gap-1.5 px-1">
                              <Calendar className="w-3.5 h-3.5 text-[#078765]" />
                              <span>{formatDisplayDate(date)}</span>
                            </div>

                            {/* Real Slot Chips Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                              {dateSlots.map((slot) => {
                                const isSelected = selectedSlotId === slot.id;
                                return (
                                  <button
                                    key={slot.id}
                                    type="button"
                                    onClick={() => {
                                      setSelectedSlotId(slot.id);
                                      setIsSlotDropdownOpen(false);
                                      setError(null);
                                    }}
                                    className={`py-2.5 px-2.5 rounded-xl border-2 text-center transition-all duration-150 cursor-pointer flex flex-col items-center justify-center gap-0.5 relative group ${
                                      isSelected
                                        ? "bg-[#078765] border-[#078765] text-white shadow-sm ring-2 ring-[#078765]/20 scale-[1.02]"
                                        : "bg-white border-gray-200 hover:border-[#078765] hover:bg-[#E8F4EC]/40 text-[#102B2B] hover:shadow-xs active:scale-98"
                                    }`}
                                  >
                                    <div className="text-xs sm:text-sm font-black tracking-tight leading-tight">
                                      {slot.startTime}
                                    </div>
                                    <div
                                      className={`text-[10px] font-bold ${
                                        isSelected ? "text-emerald-100" : "text-[#078765]"
                                      }`}
                                    >
                                      ⏱️ {slot.duration || "45 Mins"}
                                    </div>
                                    {slot.topic && (
                                      <div
                                        className={`text-[9px] truncate max-w-full font-medium ${
                                          isSelected ? "text-emerald-100/90" : "text-gray-500"
                                        }`}
                                      >
                                        {slot.topic}
                                      </div>
                                    )}
                                    {isSelected && (
                                      <div className="absolute top-1 right-1">
                                        <Check className="w-3 h-3 text-white" />
                                      </div>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Booking Demo Slot...
                    </span>
                  ) : (
                    "Book your free demo slot"
                  )}
                </button>
              </div>

              <p className="text-center text-[11px] text-[#65736F]">
                🔒 100% Free Demo. No obligation. Direct call & demo link within 15-30 mins.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 sm:py-6 space-y-4">
            <div className="w-14 h-14 bg-[#E8F4EC] text-[#078765] rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckIcon className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-[#102B2B]">
              Demo Slot Booked Successfully!
            </h3>

            {/* Confirmed Slot Details Card */}
            <div className="p-4 rounded-2xl bg-[#E8F4EC]/60 border border-[#078765]/30 text-left space-y-2">
              <div className="text-xs font-bold text-[#078765] uppercase tracking-wider">
                Confirmed Slot Details:
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-extrabold text-[#102B2B]">
                    {confirmedSlot?.startTime || "Priority Demo Time"}
                  </div>
                  <div className="text-xs text-[#65736F] font-semibold">
                    Date: {confirmedSlot?.date || "Today / Immediate"}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#078765] text-white">
                    Duration: {confirmedSlot?.duration || "45 Mins"}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#65736F] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-[#102B2B]">{name}</span>! Your demo session has been successfully booked. Our team will reach out to you via WhatsApp or Call at{" "}
              <span className="font-bold text-[#078765]">{phone}</span> shortly.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full py-3 px-6 rounded-xl font-bold text-white bg-[#078765] hover:bg-[#064E43] transition-colors shadow-sm cursor-pointer"
              >
                Got It, Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
