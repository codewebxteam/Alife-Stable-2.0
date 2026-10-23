"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { DemoModal } from "../../../components/DemoModal";
import CourseHero from "../../../components/course-details/CourseHero";
import Curriculum from "../../../components/course-details/Curriculum";
import CourseVideoPlayer from "../../../components/CourseVideoPlayer";
import {
  Loader2,
  FileText,
  Download,
  PlayCircle,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface CourseData {
  id: string;
  courseId?: string;
  title?: string;
  category?: string;
  description?: string;
  image?: string;
  videoId?: string;
  mainVideoId?: string;
  demoVideos?: Array<{ title: string; videoId: string }>;
  syllabus?: string;
  syllabusContent?: string;
  driveLink?: string;
  lectures?: unknown[];
}

export default function CourseDetailsPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : (params?.id as string);

  const [course, setCourse] = useState<CourseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Video Player state using the exact CourseVideoPlayer component
  const [activeVideoPlaylist, setActiveVideoPlaylist] = useState<Array<{ title: string; videoId?: string; url?: string }> | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"demo" | "partner">("demo");

  useEffect(() => {
    if (!id) return;

    async function fetchCourseDetails() {
      try {
        const docRef = doc(db, "courseVideos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const loadedCourse: CourseData = {
            id: docSnap.id,
            courseId: docSnap.id,
            ...data,
            category: data.category || "General",
            image:
              data.image ||
              (data.videoId
                ? `https://img.youtube.com/vi/${data.videoId}/maxresdefault.jpg`
                : "https://placehold.co/800x400"),
            syllabusContent: data.syllabus || data.syllabusContent || "Comprehensive masterclass covering foundational setup, core workflows, and monetization.",
            driveLink: data.driveLink || "",
            mainVideoId: data.mainVideoId || data.videoId || null,
          };
          setCourse(loadedCourse);
        } else {
          setError("Course not found in catalog.");
        }
      } catch (err) {
        console.error("Error fetching course:", err);
        setError("Failed to load course details.");
      } finally {
        setLoading(false);
      }
    }

    fetchCourseDetails();
  }, [id]);

  const demoVideos = useMemo(() => {
    if (course?.demoVideos && Array.isArray(course.demoVideos)) {
      return course.demoVideos;
    }
    return [];
  }, [course?.demoVideos]);

  const courseThumbnail = useMemo(() => {
    if (course?.image && !course.image.includes("placehold.co")) {
      return course.image;
    }
    const vid = course?.mainVideoId || course?.videoId;
    if (vid) {
      return `https://img.youtube.com/vi/${vid}/hqdefault.jpg`;
    }
    return course?.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80";
  }, [course?.image, course?.mainVideoId, course?.videoId]);

  const handleOpenDemo = () => {
    setModalType("demo");
    setIsDemoModalOpen(true);
  };

  const handleOpenPartner = () => {
    setModalType("partner");
    setIsDemoModalOpen(true);
  };

  const openPlayer = (playlist: Array<{ title: string; videoId?: string; url?: string }>, index = 0) => {
    setActiveVideoPlaylist(playlist);
    setStartIndex(index);
  };

  const handleClosePlayer = () => {
    setActiveVideoPlaylist(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FBF7EF]">
        <Header onOpenDemo={handleOpenDemo} onOpenPartner={handleOpenPartner} />
        <div className="flex-1 flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-10 h-10 text-[#078765] animate-spin" />
          <p className="text-sm font-semibold text-[#65736F]">
            Loading course details...
          </p>
        </div>
        <Footer onOpenDemo={handleOpenDemo} onOpenPartner={handleOpenPartner} />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FBF7EF]">
        <Header onOpenDemo={handleOpenDemo} onOpenPartner={handleOpenPartner} />
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-2xl font-bold text-[#102B2B] mb-2">
            {error || "Course data is unavailable."}
          </h2>
          <p className="text-sm text-[#65736F] mb-6">
            The course you are looking for might have been updated or moved.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white bg-[#078765] hover:bg-[#064E43] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Courses
          </Link>
        </div>
        <Footer onOpenDemo={handleOpenDemo} onOpenPartner={handleOpenPartner} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7EF] text-[#102B2B] antialiased selection:bg-[#078765]/20 selection:text-[#064E43]">
      {/* 1. Header Navigation */}
      <Header onOpenDemo={handleOpenDemo} onOpenPartner={handleOpenPartner} />

      <main className="flex-1 pb-20">
        {/* Breadcrumb Bar */}
        <div className="bg-[#FFFFFF] border-b border-[#078765]/10 py-3.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#65736F]">
            <Link href="/" className="hover:text-[#078765] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-[#078765] transition-colors">
              Courses
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#102B2B] truncate max-w-xs sm:max-w-md">
              {course.title}
            </span>
          </div>
        </div>

        {/* 2. Course Hero Component (Cleaned: No Rating, No Instructor, No Duration) */}
        <CourseHero course={course} />

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Video Introduction, Demos, Resources & Curriculum */}
            <div className="lg:col-span-8 space-y-10">
              {/* Course Introduction Video (Protected - Launches Custom Player) */}
              {course.mainVideoId && (
                <div className="bg-white rounded-3xl overflow-hidden border border-[#078765]/15 shadow-sm">
                  <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <PlayCircle className="text-[#078765]" size={24} />
                      <h2 className="text-xl font-bold text-[#102B2B]">
                        Course Introduction
                      </h2>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#E8F4EC] text-[#078765]">
                      Click to Play (Protected Player)
                    </span>
                  </div>

                  <div
                    className="relative aspect-video bg-black group cursor-pointer overflow-hidden"
                    onClick={() =>
                      openPlayer([
                        {
                          videoId: course.mainVideoId,
                          title: course.title || "Course Introduction",
                        },
                      ])
                    }
                  >
                    <img
                      src={`https://img.youtube.com/vi/${course.mainVideoId}/maxresdefault.jpg`}
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-70 transition-opacity"
                      alt="Course Intro Preview"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform shadow-xl">
                        <PlayCircle className="text-white w-10 h-10 sm:w-12 sm:h-12" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Free Starter Lessons Grid (Demo Videos from Admin) */}
              {demoVideos.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#102B2B] flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#078765]" />
                      Free Starter Lessons
                    </h2>
                    <span className="text-xs text-[#65736F]">
                      {demoVideos.length} Sample Modules Available
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {demoVideos.map((video, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl overflow-hidden border border-[#078765]/15 shadow-sm group cursor-pointer hover:shadow-md transition-all"
                        onClick={() => openPlayer(demoVideos, idx)}
                      >
                        <div className="aspect-video relative bg-[#102B2B]">
                          <img
                            src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-all"
                            alt={video.title}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <PlayCircle className="text-white w-12 h-12 opacity-85 group-hover:scale-110 transition-transform" />
                          </div>
                        </div>
                        <div className="p-4 bg-white border-t border-gray-100">
                          <h3 className="font-bold text-[#102B2B] text-sm line-clamp-1 group-hover:text-[#078765] transition-colors">
                            {video.title}
                          </h3>
                          <p className="text-[10px] text-[#078765] mt-1 uppercase font-bold">
                            Lesson {idx + 1} • Click to Watch in Protected Player
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Study Material & Downloadable Resources */}
              {course.driveLink && (
                <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#078765]/15 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#E8F4EC] text-[#078765] flex items-center justify-center shrink-0 shadow-xs">
                      <FileText className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#102B2B]">
                        Study Materials & Notes
                      </h3>
                      <p className="text-xs text-[#65736F]">
                        Download cheat sheets, prompt guides, and project files for this course.
                      </p>
                    </div>
                  </div>

                  <a
                    href={course.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#078765] hover:bg-[#064E43] shadow-sm transition-all"
                  >
                    <Download className="w-4 h-4" /> Download Resources
                  </a>
                </div>
              )}

              {/* Curriculum Component */}
              <Curriculum syllabus={course.syllabusContent || course.syllabus} />
            </div>

            {/* Right Column: Sticky Partner Access & Curriculum Info (No Price, No Buy Now) */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#078765]/20 shadow-md space-y-5">
                  {/* Course Thumbnail Preview */}
                  <div
                    className={`relative aspect-video w-full rounded-2xl overflow-hidden bg-[#102B2B] border border-[#078765]/20 shadow-xs group ${
                      course.mainVideoId || course.videoId ? "cursor-pointer" : ""
                    }`}
                    onClick={() => {
                      const vid = course.mainVideoId || course.videoId;
                      if (vid) {
                        openPlayer([{ videoId: vid, title: course.title || "Course Preview" }]);
                      }
                    }}
                  >
                    <img
                      src={courseThumbnail}
                      alt={course.title || "Course Thumbnail"}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const vid = course.mainVideoId || course.videoId;
                        if (vid && !target.src.includes("hqdefault.jpg")) {
                          target.src = `https://img.youtube.com/vi/${vid}/hqdefault.jpg`;
                        } else {
                          target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80";
                        }
                      }}
                    />
                    {(course.mainVideoId || course.videoId) && (
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-[#078765] shadow-lg group-hover:scale-110 transition-transform">
                          <PlayCircle className="w-7 h-7 text-[#078765]" />
                        </div>
                      </div>
                    )}
                    {course.category && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#102B2B]/85 backdrop-blur-xs text-[10px] font-bold text-white tracking-wide uppercase border border-white/10 shadow-xs">
                        {course.category}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <span className="px-3 py-1 rounded-full bg-[#E8F4EC] text-[#078765] text-xs font-bold uppercase tracking-wider inline-block">
                      Partner Curriculum
                    </span>
                    <h3 className="text-xl font-bold text-[#102B2B]">
                      Ready-to-Sell Academy Course
                    </h3>
                    <p className="text-xs text-[#65736F] leading-relaxed">
                      This course comes fully integrated into your branded academy platform under the Alife Stable partnership license.
                    </p>
                  </div>

                  {/* Included Highlights */}
                  <div className="space-y-2.5 pt-2 border-t border-gray-100 text-xs">
                    <div className="flex items-center gap-2 text-[#102B2B] font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#078765] shrink-0" />
                      <span>Full White-Label Commercial License</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#102B2B] font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#078765] shrink-0" />
                      <span>Sell Under Your Own Brand & Domain</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#102B2B] font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#078765] shrink-0" />
                      <span>Retain 100% of Course Profits</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#102B2B] font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#078765] shrink-0" />
                      <span>Regular Curriculum & Video Updates</span>
                    </div>
                  </div>

                  {/* Actions (No Price, No Buy Now) */}
                  <div className="pt-2 space-y-2.5">
                    <button
                      type="button"
                      onClick={handleOpenPartner}
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-[#078765] hover:bg-[#064E43] shadow-md transition-all cursor-pointer text-center"
                    >
                      Get Partner License
                    </button>
                    <button
                      type="button"
                      onClick={handleOpenDemo}
                      className="w-full py-3 px-4 rounded-xl font-bold text-xs text-[#064E43] bg-[#E8F4EC] hover:bg-[#078765] hover:text-white border border-[#078765]/20 transition-all cursor-pointer text-center"
                    >
                      Book Free Guided Demo
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#65736F] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#078765]" />
                    <span>Protected video delivery & copyright managed</span>
                  </div>
                </div>

                {/* Back to Catalog Link */}
                <Link
                  href="/courses"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white border border-gray-200 text-xs font-bold text-[#65736F] hover:text-[#102B2B] hover:border-[#078765] transition-all"
                >
                  <ArrowLeft className="w-4 h-4" /> View All Available Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Protected Custom Video Player Component (No share button, no link copying, full custom controls) */}
      {activeVideoPlaylist && (
        <CourseVideoPlayer
          course={course as any}
          playlist={activeVideoPlaylist as any}
          initialIndex={startIndex}
          onClose={handleClosePlayer}
        />
      )}

      {/* Footer */}
      <Footer onOpenDemo={handleOpenDemo} onOpenPartner={handleOpenPartner} />

      {/* Modal Dialog */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialType={modalType}
      />
    </div>
  );
}
