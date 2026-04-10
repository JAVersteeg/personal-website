"use client";

import { useContext } from "react";
import { LocaleContext } from "@/features/i18n/locale-context";
import { translations } from "@/lib/translations";
import type { TranslationKey } from "@/lib/translations";

export function useTranslation() {
  const { locale, setLocale } = useContext(LocaleContext);

  function t(key: TranslationKey): string {
    return translations[locale][key];
  }

  return { t, locale, setLocale };
}
