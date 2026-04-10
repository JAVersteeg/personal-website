"use client";

import Container from "@/components/container";
import { useTranslation } from "@/hooks/useTranslation";

export default function About() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("pages.about.title")}</h1>
      {t("pages.wip")}
    </Container>
  );
}
