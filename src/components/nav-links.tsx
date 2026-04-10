"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import type { TranslationKey } from "@/lib/translations";

interface NavLinksProps {
  onClick?: () => void;
}

const links: { href: string; labelKey: TranslationKey }[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/reading", labelKey: "nav.reading" },
  { href: "/writing", labelKey: "nav.writing" },
  { href: "/projects", labelKey: "nav.projects" },
  { href: "/about", labelKey: "nav.about" },
];

export default function NavLinks({ onClick }: NavLinksProps) {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className={`text-lg font-light ${isActive ? "text-[#000000] dark:text-[#ffffff] underline underline-offset-4" : "text-[var(--text-color)]"}`}
          >
            {t(link.labelKey)}
          </Link>
        );
      })}
    </>
  );
}
