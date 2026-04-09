"use client";

import { useState } from "react";
import NavLinks from "@/components/nav-links";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:hidden fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          <line
            x1={isOpen ? 18 : 3}
            y1="6"
            x2={isOpen ? 6 : 21}
            y2={isOpen ? 18 : 6}
            className="transition-all duration-300 origin-center"
          />
          <line
            x1={isOpen ? 6 : 3}
            y1={isOpen ? 6 : 12}
            x2={isOpen ? 18 : 21}
            y2={isOpen ? 18 : 12}
            className="transition-all duration-300 origin-center"
          />
          <line
            x1="3"
            y1="18"
            x2="21"
            y2="18"
            className="transition-all duration-300 origin-center"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
        </svg>
      </button>

      <nav
        className={`absolute top-full right-0 mt-2 w-48 p-6 flex flex-col gap-4 bg-[var(--background)] border border-gray-200 rounded-lg shadow-lg transition-all duration-300 origin-top-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <NavLinks onClick={() => setIsOpen(false)} />
      </nav>
    </div>
  );
}
