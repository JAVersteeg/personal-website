"use client";

import { useContext } from "react";
import { ThemeContext } from "@/features/theme/theme-context";

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return { theme, setTheme, toggle };
}
