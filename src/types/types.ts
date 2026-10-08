export interface ReadingListItem {
    importance: number,
    title: string,
    author: string,
    description: string,
    cover: string,
}

import type { ReactNode } from "react";
import type { TranslationKey } from "@/lib/translations";

export interface CardProps {
  category: string;
  title: string;
  subtitle?: string;
  content: string;
  href?: string;
  image?: ReactNode;
  eyebrowKey?: TranslationKey;
}

export interface InfoSectionProps {
  className?: string;
  title: string;
  children: React.ReactNode;
  borderColor?: string;
  backgroundColour?: string;
}