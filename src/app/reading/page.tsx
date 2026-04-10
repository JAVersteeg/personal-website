"use client";

import Container from "@/components/container";
import { useTranslation } from "@/hooks/useTranslation";

export default function Reading() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("pages.reading.title")}</h1>
      {t("pages.wip")}
    </Container>
  );
}
