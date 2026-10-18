import React, { useState } from "react";
import { ChevronDown, PlayCircle, Lock, BookOpen } from "lucide-react";

const Curriculum = ({ syllabus }) => {
  // 1. Handle String Syllabus (From Admin Panel)
  if (typeof syllabus === "string") {
    const lines = syllabus.split("\n").filter((line) => line.trim() !== "");

    return (
      <div className="bg-white rounded-3xl border border-[#078765]/15 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-gray-100 bg-[#FBF7EF]">
          <h3 className="text-xl font-bold text-[#102B2B] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#078765]" />
            Course Syllabus & Topics
          </h3>
          <p className="text-xs text-[#65736F] mt-1">Overview & Key Modules</p>
        </div>
        <div className="p-6">
          {lines.length > 0 ? (
            <ul className="space-y-3">
              {lines.map((line, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#102B2B]/90 text-sm leading-relaxed"
                >
                  <div className="mt-2 size-2 rounded-full bg-[#078765] shrink-0" />
                  <span>{line.replace(/^[•-]\s*/, "")}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[#65736F] italic text-sm">
              No syllabus details available.
            </p>
          )}
        </div>
      </div>
    );
  }

  // 2. Handle Array Syllabus (Structured Data)
  if (Array.isArray(syllabus)) {
    return (
      <div className="bg-white rounded-3xl border border-[#078765]/15 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-gray-100 bg-[#FBF7EF]">
          <h3 className="text-xl font-bold text-[#102B2B] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#078765]" />
            Course Content
          </h3>
          <p className="text-xs text-[#65736F] mt-1">
            {syllabus.length} sections •{" "}
            {syllabus.reduce(
              (acc, curr) => acc + (curr.lessons?.length || 0),
              0
            )}{" "}
            lectures
          </p>
        </div>

        <div>
          {syllabus.map((section, idx) => (
            <AccordionSection
              key={idx}
              section={section}
              isOpenDefault={idx === 0}
            />
          ))}
        </div>
      </div>
    );
  }

  // 3. Fallback for Null/Undefined
  return null;
};

const AccordionSection = ({ section, isOpenDefault }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 hover:bg-[#FBF7EF]/50 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <ChevronDown
            className={`size-5 text-[#65736F] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
          <span className="font-bold text-[#102B2B]">{section.title}</span>
        </div>
        <span className="text-xs text-[#65736F] font-medium">
          {section.lessons?.length || 0} lectures
        </span>
      </button>

      {isOpen && (
        <div className="bg-[#FBF7EF]/50 px-5 pb-5 pt-2 space-y-2">
          {section.lessons?.map((lesson, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-2 text-sm pl-9"
            >
              <div className="flex items-center gap-3 text-[#102B2B]/85">
                <PlayCircle className="size-4 text-[#078765]" />
                <span>{lesson.title}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-[#65736F]">
                  {lesson.time || "Module"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Curriculum;
