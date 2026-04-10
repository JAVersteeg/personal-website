"use client";

import LocaleToggle from "@/components/locale-toggle";
import ThemeToggle from "@/components/theme-toggle";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative max-w-2xl mx-auto my-8 mb-16 px-4 w-full">
      <div className="absolute top-0 right-0 flex items-center gap-4">
        <ThemeToggle />
        <LocaleToggle />
      </div>
      {children}
    </div>
  );
}
