"use client";

import { useState } from "react";

export function CoursesDropdown({ courses }: { courses: string[] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!courses || courses.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-col gap-3">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 rounded-lg border border-black/5 bg-white/50 px-3 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-[1px] hover:bg-white/70 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
      >
        <span>Courses</span>
        <span
          className={`inline-block transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {isExpanded && (
        <div className="animate-in fade-in slide-in-from-top-2 rounded-lg border border-black/5 bg-white/40 p-3 dark:border-white/10 dark:bg-black/10">
          <ul className="flex flex-col gap-2">
            {courses.map((course) => (
              <li
                key={course}
                className="text-sm text-foreground/80 before:mr-2 before:content-['•']"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
