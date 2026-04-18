"use client";

import LocaleToggle from "@/components/locale-toggle";
import ThemeToggle from "@/components/theme-toggle";
import MobileMenu from "@/components/mobile-menu";

export default function ContainerFullWidth({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative m-4 mb-8 sm:m-8 sm:mb-16">
      <div className="absolute top-0 right-0 flex items-center gap-4">
        <ThemeToggle />
        <LocaleToggle />
        <MobileMenu />
      </div>
      {children}
    </div>
  );
}
