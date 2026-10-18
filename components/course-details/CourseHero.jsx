import React from "react";
import { BookOpen, Sparkles } from "lucide-react";

const CourseHero = ({ course }) => {
  return (
    <div className="bg-gradient-to-br from-[#064E43] via-[#078765] to-[#04342d] text-white pt-10 sm:pt-14 pb-14 px-6 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 p-24 bg-[#E8F4EC]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-4">
        {/* Category Pill */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#E8F4EC] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            {course.category || "AI Course"}
          </span>
          <span className="text-xs text-[#E8F4EC]/70">
            • Ready-to-Sell Partner Curriculum
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight max-w-4xl">
          {course.title}
        </h1>

        {/* Description */}
        {course.description && (
          <p className="text-sm sm:text-base text-[#E8F4EC]/90 leading-relaxed max-w-3xl">
            {course.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseHero;
