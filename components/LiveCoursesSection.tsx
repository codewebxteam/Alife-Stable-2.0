"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import {
  Search,
  Star,
  Clock,
  Play,
  Loader2,
  BookOpen,
  ArrowRight,
  Sparkles,
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
  isComingSoon?: boolean;
}

interface LiveCoursesSectionProps {
  onOpenDemo: () => void;
  onOpenPartner: () => void;
}

export function LiveCoursesSection({ onOpenPartner }: LiveCoursesSectionProps) {
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function fetchCourseCatalog() {
      try {
        const querySnapshot = await getDocs(collection(db, "courseVideos"));
        const list: CourseItem[] = querySnapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...(docSnap.data() as Omit<CourseItem, "id">),
        }));

        // Sort courses to show highest priority first, then oldest/created first
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

  // Filter categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    courses.forEach((c) => {
      if (c.category) set.add(c.category);
    });
    return ["All", ...Array.from(set)];
  }, [courses]);

  // Filtered courses based on search & category
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const title = (course.title || "").toLowerCase();
      const instructor = (course.instructor || "").toLowerCase();
      const query = searchQuery.toLowerCase();

      const matchesSearch = title.includes(query) || instructor.includes(query);
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [courses, searchQuery, selectedCategory]);

  return (
    <section id="courses" className="py-4 sm:py-6 lg:py-8 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 sm:mb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-[10px] sm:text-xs font-bold tracking-wider uppercase">
              READY-TO-SELL COURSE CATALOG
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B2B] tracking-tight">
              Explore Available{" "}
              <span className="text-[#078765]">AI Courses</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#65736F] leading-relaxed">
              Browse our ready-made, high-demand courses. Click on any course to review the curriculum, introduction, and demo lessons.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#65736F]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search courses or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 bg-[#FBF7EF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#078765] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* --- STYLISH ALIFE STABLE CATALOG SHOWCASE BANNER --- */}
        <div className="mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#064E43] via-[#078765] to-[#04342d] p-4 sm:p-7 text-white shadow-lg relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E8F4EC]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-[#E8F4EC] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-amber-300" /> Complete Ready-to-Sell Library
              </div>
              <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight">
                Turnkey AI & Digital Skills Curriculum
              </h3>
              <p className="text-xs text-[#E8F4EC]/90 max-w-xl">
                All listed courses are included with full white-label distribution rights in the Alife Stable partnership.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenPartner}
              className="shrink-0 px-5 py-2.5 rounded-xl font-bold text-[#064E43] bg-white hover:bg-[#E8F4EC] shadow-sm hover:shadow-md transition-all text-xs sm:text-sm cursor-pointer"
            >
              Get Partner License
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        {categories.length > 2 && (
          <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#078765] text-white shadow-sm"
                    : "bg-[#FBF7EF] text-[#65736F] hover:text-[#102B2B] hover:bg-[#E8F4EC]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Course Cards Grid (No Price, No Buy Now, Direct Link to Full Page) */}
        {loading ? (
          <div className="py-24 flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-10 h-10 text-[#078765] animate-spin" />
            <p className="text-sm font-semibold text-[#65736F]">
              Loading courses from platform...
            </p>
          </div>
        ) : filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => {
              const thumbnail =
                course.image ||
                (course.videoId
                  ? `https://img.youtube.com/vi/${course.videoId}/maxresdefault.jpg`
                  : "https://placehold.co/600x380?text=Course+Thumbnail");

              const rating = course.rating || 4.8;
              const reviews = course.reviews || 140;

              return (
                <div
                  key={course.id}
                  className="group rounded-3xl bg-white border border-[#078765]/15 hover:border-[#078765]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail Container (Clicking opens full page) */}
                    <Link
                      href={`/course/${course.id}`}
                      className="relative aspect-video w-full bg-[#102B2B] overflow-hidden block"
                    >
                      <img
                        src={thumbnail}
                        alt={course.title || "Course Thumbnail"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                      {/* Play Preview Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 text-[#078765] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>

                      {/* Category Pill */}
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
                        {course.category || "AI Course"}
                      </span>
                    </Link>

                    {/* Card Content (Clean: No Rating, No Instructor, No Duration) */}
                    <div className="p-5 sm:p-6 space-y-2">
                      {/* Title */}
                      <Link href={`/course/${course.id}`}>
                        <h3 className="text-base sm:text-lg font-bold text-[#102B2B] group-hover:text-[#078765] transition-colors line-clamp-2 leading-snug">
                          {course.title}
                        </h3>
                      </Link>
                    </div>
                  </div>

                  {/* Card Bottom: Direct Link to Course Page */}
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#078765] flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      Full Syllabus Included
                    </span>

                    <Link
                      href={`/course/${course.id}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#078765] hover:bg-[#064E43] shadow-xs hover:shadow-md transition-all active:scale-95"
                    >
                      View Course
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FBF7EF] rounded-3xl p-8 border border-[#078765]/10">
            <Search className="w-10 h-10 text-[#65736F] mx-auto mb-3" />
            <h4 className="text-lg font-bold text-[#102B2B]">No courses found</h4>
            <p className="text-xs text-[#65736F] mt-1">
              Try adjusting your search query or select &quot;All&quot; categories.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
