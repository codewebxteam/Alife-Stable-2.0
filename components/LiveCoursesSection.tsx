"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import {
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Video,
  X,
  Clock,
} from "lucide-react";

interface CourseItem {
  id: string;
  title?: string;
  instructor?: string;
  category?: string;
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
  priority?: number | string;
  createdAt?: { toDate?: () => Date } | string | number;
  timestamp?: { toDate?: () => Date } | string | number;
  isComingSoon?: boolean | string;
  status?: string;
}

interface LiveCoursesSectionProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

// Categorization helper for intelligent topic filtering
function getTopicCategory(title: string, rawCategory?: string): string {
  const t = (title || "").toLowerCase();
  const c = (rawCategory || "").toLowerCase();

  if (t.includes("avatar") || t.includes("influencer") || t.includes("ugc") || c.includes("influencer")) {
    return "AI Avatars & Influencers";
  }
  if (t.includes("animation") || t.includes("anime") || t.includes("stickman") || c.includes("animation")) {
    return "2D & 3D Animation";
  }
  if (t.includes("documentary") || t.includes("vlogging") || t.includes("image to video") || t.includes("food ai") || t.includes("dance")) {
    return "AI Video & Storytelling";
  }
  if (t.includes("business") || t.includes("promotional") || t.includes("podcast") || t.includes("marketing")) {
    return "Business & Monetization";
  }
  return rawCategory || "AI Mastery";
}

export function LiveCoursesSection({ onOpenDemo, onOpenPartner }: LiveCoursesSectionProps) {
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchCourseCatalog() {
      try {
        const querySnapshot = await getDocs(collection(db, "courseVideos"));
        const list: CourseItem[] = querySnapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...(docSnap.data() as Omit<CourseItem, "id">),
        }));

        // Sort courses to show highest priority first, then creation order
        list.sort((a, b) => {
          const priorityA = parseInt(String(a.priority || 0), 10) || 0;
          const priorityB = parseInt(String(b.priority || 0), 10) || 0;

          if (priorityB !== priorityA) {
            return priorityB - priorityA;
          }

          const getTimestamp = (item: CourseItem) => {
            if (item.createdAt && typeof item.createdAt === "object" && item.createdAt.toDate)
              return item.createdAt.toDate().getTime();
            if (item.createdAt) return new Date(item.createdAt as string).getTime();
            if (item.timestamp && typeof item.timestamp === "object" && item.timestamp.toDate)
              return item.timestamp.toDate().getTime();
            if (item.timestamp) return new Date(item.timestamp as string).getTime();
            return 0;
          };
          return getTimestamp(a) - getTimestamp(b);
        });

        setCourses(list);
      } catch (err) {
        console.error("Error fetching courses from Firebase:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCourseCatalog();
  }, []);

  // Filtered courses based on search query
  const filteredCourses = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return courses;

    return courses.filter((course) => {
      const title = (course.title || "").toLowerCase();
      const instructor = (course.instructor || "").toLowerCase();
      const category = (course.category || "").toLowerCase();

      return (
        title.includes(query) ||
        instructor.includes(query) ||
        category.includes(query)
      );
    });
  }, [courses, searchQuery]);

  return (
    <div className="w-full bg-[#FBF7EF] text-[#102B2B]">
      {/* CLEAN, PROFESSIONAL HEADER */}
      <section className="pt-8 sm:pt-12 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#078765]/15">
          <div className="space-y-1.5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B2B] tracking-tight">
              Explore Our <span className="text-[#078765]">AI Courses</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#102B2B]/75 font-medium">
              Browse ready-to-sell courses included with full white-label rights in your partnership.
            </p>
          </div>

          {/* Clean Search Input & Count */}
          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-72 md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#078765]">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 rounded-xl border border-[#078765]/20 bg-white text-xs sm:text-sm text-[#102B2B] placeholder:text-[#102B2B]/50 focus:outline-none focus:ring-2 focus:ring-[#078765] shadow-2xs transition-all font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#102B2B]/50 hover:text-[#102B2B] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {searchQuery && (
              <span className="text-xs font-bold text-[#078765] whitespace-nowrap">
                {filteredCourses.length} found
              </span>
            )}
          </div>
        </div>
      </section>

      {/* 4. PREMIUM COURSES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {loading ? (
          /* SKELETON LOADING GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-[#078765]/15 overflow-hidden p-0 animate-pulse shadow-xs"
              >
                <div className="aspect-video w-full bg-[#E8F4EC]/60" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-1/3" />
                  <div className="h-6 bg-gray-200 rounded w-4/5" />
                  <div className="h-4 bg-gray-100 rounded w-full" />
                </div>
                <div className="p-5 pt-0 flex justify-between">
                  <div className="h-8 bg-gray-200 rounded w-24" />
                  <div className="h-8 bg-[#078765]/20 rounded w-28" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredCourses.map((course) => {
              const videoId = course.videoId || course.mainVideoId;
              const thumbnail =
                course.image ||
                (videoId
                  ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                  : "https://placehold.co/600x380?text=Course+Thumbnail");

              const topicCategory = getTopicCategory(course.title || "", course.category);
              const isComingSoon =
                course.isComingSoon === true ||
                String(course.isComingSoon).toLowerCase() === "true" ||
                course.status === "coming_soon" ||
                course.status === "Coming Soon";

              return (
                <div
                  key={course.id}
                  className={`group rounded-2xl bg-white border shadow-xs transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                    isComingSoon
                      ? "border-amber-200/80 hover:border-amber-300"
                      : "border-[#078765]/15 hover:border-[#078765] hover:shadow-xl hover:-translate-y-1.5"
                  }`}
                >
                  <div>
                    {/* Course Thumbnail */}
                    {isComingSoon ? (
                      <div className="relative aspect-video w-full bg-[#102B2B] overflow-hidden block">
                        <img
                          src={thumbnail}
                          alt={course.title || "Course Thumbnail"}
                          className="w-full h-full object-cover opacity-90"
                          onError={(e) => {
                            const img = e.currentTarget;
                            if (videoId && !img.src.includes("hqdefault")) {
                              img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                            }
                          }}
                        />

                        {/* Subtle Dark Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-75" />

                        {/* Top-Left Category Badge */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                          {topicCategory}
                        </div>

                        {/* Top-Right Coming Soon badge */}
                        <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-amber-500 text-white text-[10px] font-extrabold tracking-wider uppercase shadow-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Coming Soon
                        </div>

                        {/* Centered Coming Soon Stamp */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="bg-amber-500/90 backdrop-blur-md text-white border border-white/30 px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl flex items-center gap-1.5 transform -rotate-3">
                            <Clock className="w-3.5 h-3.5" />
                            Coming Soon
                          </span>
                        </div>

                        {/* Bottom Info bar */}
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white/90 text-[11px] font-medium">
                          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-amber-200">
                            <Clock className="w-3 h-3 text-amber-400" />
                            Curriculum In Production
                          </span>
                          <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-white/80">
                            Releasing Soon
                          </span>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={`/course/${course.id}`}
                        className="relative aspect-video w-full bg-[#102B2B] overflow-hidden block"
                      >
                        <img
                          src={thumbnail}
                          alt={course.title || "Course Thumbnail"}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const img = e.currentTarget;
                            if (videoId && !img.src.includes("hqdefault")) {
                              img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                            }
                          }}
                        />

                        {/* Subtle Dark Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        {/* Top-Left Category Badge */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#078765] animate-pulse" />
                          {topicCategory}
                        </div>

                        {/* Top-Right Ready to Sell badge */}
                        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-[#078765] text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                          Ready To Sell
                        </div>

                        {/* Bottom Info bar inside image */}
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white/90 text-[11px] font-medium">
                          <span className="flex items-center gap-1 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded">
                            <Video className="w-3 h-3 text-[#E8F4EC]" />
                            Full HD Video Lessons
                          </span>
                          <span className="bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded text-[#E8F4EC]">
                            Click to preview
                          </span>
                        </div>
                      </Link>
                    )}

                    {/* Card Content Area */}
                    <div className="p-5 sm:p-6 space-y-3">
                      {/* Course Title */}
                      {isComingSoon ? (
                        <h3 className="text-base sm:text-lg font-extrabold text-[#102B2B] line-clamp-2 leading-snug">
                          {course.title}
                        </h3>
                      ) : (
                        <Link href={`/course/${course.id}`}>
                          <h3 className="text-base sm:text-lg font-extrabold text-[#102B2B] group-hover:text-[#078765] transition-colors line-clamp-2 leading-snug">
                            {course.title}
                          </h3>
                        </Link>
                      )}

                      {/* Key Value Feature Badges */}
                      <div className="space-y-1.5 pt-1">
                        {isComingSoon ? (
                          <>
                            <div className="flex items-center gap-2 text-xs text-[#102B2B] font-semibold">
                              <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                              <span>Curriculum in Final Production Stage</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-[#102B2B] font-semibold">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#078765] shrink-0" />
                              <span>Will Be Auto-Added to Your Academy</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center gap-2 text-xs text-[#102B2B] font-semibold">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#078765] shrink-0" />
                              <span>Includes Complete Syllabus & Lesson Plans</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-[#102B2B] font-semibold">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#078765] shrink-0" />
                              <span>100% White-Label Franchise Rights</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-[#078765]/10 bg-[#FBF7EF]/30">
                    {isComingSoon ? (
                      <div className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-500/10 text-amber-800 border border-amber-300/80 shadow-2xs select-none">
                        <Clock className="w-4 h-4 text-amber-600" />
                        Coming Soon • Releasing Soon
                      </div>
                    ) : (
                      <Link
                        href={`/course/${course.id}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-xs hover:shadow-md transition-all active:scale-98 group-hover:bg-[#064E43]"
                      >
                        View Curriculum & Demo
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* NO COURSES FOUND EMPTY STATE */
          <div className="text-center py-16 bg-white rounded-3xl p-8 border border-[#078765]/15 shadow-xs max-w-xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-[#E8F4EC] text-[#078765] flex items-center justify-center mx-auto mb-3">
              <Search className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-[#102B2B]">
              No courses matched your search
            </h4>
            <p className="text-xs text-[#102B2B]/75 mt-1 font-medium max-w-sm mx-auto">
              Try searching with another keyword or reset the category filter to view all available courses.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#078765] hover:bg-[#064E43] transition-all cursor-pointer"
            >
              Show All Courses
            </button>
          </div>
        )}
      </section>

      {/* 5. BOTTOM HIGH-CONVERTING PARTNERSHIP CTA */}
      <section className="bg-white border-t border-[#078765]/15 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-xs font-bold uppercase tracking-wider">
            START YOUR ACADEMY TODAY
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102B2B] tracking-tight">
            Ready to Launch Your Own Branded AI Academy?
          </h2>

          <p className="text-sm sm:text-base text-[#102B2B] max-w-2xl mx-auto font-medium leading-relaxed">
            Get instant access to this entire curriculum library, a custom branded platform with your domain & logo, secure video streaming, and zero technical hassles for just ₹1,999/yr.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={onOpenPartner}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-md hover:shadow-lg transition-all text-sm cursor-pointer active:scale-98"
            >
              Become an Alife Stable Partner
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-[#064E43] bg-white border-2 border-[#078765]/30 hover:border-[#078765] hover:bg-[#E8F4EC] transition-all text-sm shadow-xs cursor-pointer active:scale-98"
            >
              Request a Free Live Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
