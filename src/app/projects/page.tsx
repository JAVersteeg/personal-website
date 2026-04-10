"use client";

import Container from "@/components/container";
import { useTranslation } from "@/hooks/useTranslation";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("pages.projects.title")}</h1>
      {t("pages.wip")}
    </Container>
  );
}
