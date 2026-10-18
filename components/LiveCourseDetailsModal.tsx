"use client";

import React, { useState } from "react";
import {
  X,
  PlayCircle,
  FileText,
  Download,
  Lock,
  Sparkles,
  BookOpen,
  Clock,
  Star,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

interface CourseData {
  id: string;
  title?: string;
  instructor?: string;
  category?: string;
  price?: number | string;
  originalPrice?: number | string;
  duration?: string;
  rating?: number;
  reviews?: number;
  lectures?: string | number | unknown[];
  image?: string;
  videoId?: string;
  mainVideoId?: string;
  demoVideos?: Array<{ title: string; videoId: string }>;
  syllabus?: string;
  syllabusContent?: string;
  driveLink?: string;
  paymentLink?: string;
  description?: string;
}

interface LiveCourseDetailsModalProps {
  course: CourseData | null;
  isOpen: boolean;
  onClose: () => void;
  onBuy: (course: CourseData) => void;
}

export function LiveCourseDetailsModal({
  course,
  isOpen,
  onClose,
  onBuy,
}: LiveCourseDetailsModalProps) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  if (!isOpen || !course) return null;

  const thumbnail =
    course.image ||
    (course.videoId
      ? `https://img.youtube.com/vi/${course.videoId}/maxresdefault.jpg`
      : "https://placehold.co/800x400?text=Course+Preview");

  const demoVideos = Array.isArray(course.demoVideos) ? course.demoVideos : [];
  const syllabus = course.syllabus || course.syllabusContent || "";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-[#078765]/20 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#078765]/10 bg-[#FBF7EF]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#E8F4EC] text-[#078765] text-xs font-bold uppercase tracking-wider">
              {course.category || "Online Course"}
            </span>
            <span className="text-xs text-[#65736F]">• Complete Syllabus & Preview</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full text-[#65736F] hover:text-[#102B2B] hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Hero Banner inside Modal */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-gradient-to-br from-[#064E43] to-[#078765] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg">
            <div className="md:col-span-8 space-y-3 relative z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                {course.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#E8F4EC]">
                <span className="flex items-center gap-1 font-semibold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  {course.rating || 4.8} ({course.reviews || 120}+ reviews)
                </span>
                <span>•</span>
                <span>Instructor: {course.instructor || "Alife Mentor"}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {course.duration || "Flexible"}
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center relative z-10 pt-2 md:pt-0">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-black text-white">
                  ₹{course.price || 499}
                </span>
                {course.originalPrice && (
                  <span className="text-sm line-through text-[#E8F4EC]/70">
                    ₹{course.originalPrice}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => onBuy(course)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-[#064E43] bg-white hover:bg-[#E8F4EC] shadow-md transition-all text-sm cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                Enroll & Get Full Access
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Video Player or Course Introduction */}
          {(activeVideoId || course.mainVideoId || course.videoId) && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#102B2B] flex items-center gap-2">
                  <PlayCircle className="w-5 h-5 text-[#078765]" />
                  Video Preview & Introduction
                </h3>
                {activeVideoId && (
                  <button
                    onClick={() => setActiveVideoId(null)}
                    className="text-xs font-semibold text-[#078765] hover:underline"
                  >
                    Reset to Main Intro
                  </button>
                )}
              </div>
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-md border border-[#078765]/20">
                <iframe
                  src={`https://www.youtube.com/embed/${
                    activeVideoId || course.mainVideoId || course.videoId
                  }?rel=0&modestbranding=1&autoplay=1`}
                  title="Course Video Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Free Starter Lessons if Available */}
          {demoVideos.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#102B2B] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#078765]" />
                Free Starter Lessons
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {demoVideos.map((video, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveVideoId(video.videoId)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                      activeVideoId === video.videoId
                        ? "bg-[#E8F4EC] border-[#078765] shadow-xs"
                        : "bg-white border-gray-200 hover:border-[#078765]/40 hover:bg-[#FBF7EF]"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#064E43] text-white flex items-center justify-center shrink-0">
                      <PlayCircle className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-[#102B2B] truncate">
                        {video.title || `Lesson ${idx + 1}`}
                      </h4>
                      <p className="text-[11px] text-[#078765] font-semibold mt-0.5">
                        Lesson {idx + 1} • Click to Watch Free
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Study Materials Download Section */}
          {course.driveLink && (
            <div className="p-5 rounded-2xl bg-[#E8F4EC]/60 border border-[#078765]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#078765] text-white flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#102B2B]">
                    Included Study Materials & Course Files
                  </h4>
                  <p className="text-xs text-[#65736F]">
                    Download prompts, cheat sheets, and resource links.
                  </p>
                </div>
              </div>
              <a
                href={course.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-sm transition-all"
              >
                <Download className="w-4 h-4" /> Download Resources
              </a>
            </div>
          )}

          {/* Syllabus / Curriculum */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#102B2B] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#078765]" />
              Curriculum & Topics Covered
            </h3>
            <div className="p-5 rounded-2xl bg-[#FBF7EF] border border-[#078765]/15 text-sm text-[#102B2B]/90 leading-relaxed whitespace-pre-line">
              {syllabus ||
                "This course offers a structured, step-by-step masterclass covering everything from setup, prompts, practical workflows, and real-world monetization strategies."}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#078765]/10 bg-[#FBF7EF] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#65736F]">
            <CheckCircle2 className="w-4 h-4 text-[#078765]" />
            <span>Instant LMS Access & Lifetime Updates</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold text-[#65736F] hover:text-[#102B2B] hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => onBuy(course)}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-md transition-all flex items-center justify-center gap-2"
            >
              Buy Course for ₹{course.price || 499}
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
