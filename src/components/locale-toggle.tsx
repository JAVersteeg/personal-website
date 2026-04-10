"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function LocaleToggle() {
  const { locale, setLocale } = useTranslation();

  function toggle() {
    setLocale(locale === "en" ? "nl" : "en");
  }

  return (
    <button
      onClick={toggle}
      className="text-2xl leading-none cursor-pointer hover:scale-110 transition-transform"
      aria-label={locale === "en" ? "Switch to Dutch" : "Schakel naar Engels"}
      title={locale === "en" ? "Nederlands" : "English"}
    >
      {locale === "en" ? "🇳🇱" : "🇬🇧"}
    </button>
  );
}
