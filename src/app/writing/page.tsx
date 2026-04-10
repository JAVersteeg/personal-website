"use client";

import Container from "@/components/container";
import { useTranslation } from "@/hooks/useTranslation";

export default function Writing() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("pages.writing.title")}</h1>
      {t("pages.wip")}
    </Container>
  );
}
