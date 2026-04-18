"use client";

import BackHome from "@/components/back-button";
import ContainerFullWidth from "@/components/container-full";
import { useTranslation } from "@/hooks/useTranslation";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <ContainerFullWidth>
      <BackHome href="/">{`home`}</BackHome>
      <h1>{t("pages.projects.title")}</h1>
      {t("pages.wip")}
    </ContainerFullWidth>
  );
}
