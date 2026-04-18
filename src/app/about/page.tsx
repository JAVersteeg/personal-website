"use client";

import BackHome from "@/components/back-button";
import Container from "@/components/container";
import ContainerFullWidth from "@/components/container-full";
import { useTranslation } from "@/hooks/useTranslation";

export default function About() {
  const { t } = useTranslation();

  return (
    <ContainerFullWidth>
      <BackHome href="/">{`home`}</BackHome>
      <h1>{t("pages.about.title")}</h1>
      {t("pages.wip")}
    </ContainerFullWidth>
  );
}
