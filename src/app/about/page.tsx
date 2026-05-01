"use client";
import BackHome from "@/components/back-button";
import ContainerFullWidth from "@/components/container-full";
import InfoSection from "@/components/info-section";
import { useTranslation } from "@/hooks/useTranslation";

export default function About() {
  const { t } = useTranslation();

  return (
    <ContainerFullWidth>
      <BackHome href="/">{`home`}</BackHome>
      <h1>{t("pages.about.title")}</h1>
      {t("pages.wip")}
      <InfoSection title={t("pages.about.sports.title")} borderColor="#00CC00" backgroundColour="rgb(0, 150, 0, 0.1)">
        <p className="mb-2">{t("pages.about.sports.description1")}</p>
        <p className="mb-2">{t("pages.about.sports.description2")}</p>
        <p className="mb-2">{t("pages.about.sports.description3")}</p>
      </InfoSection>
    </ContainerFullWidth>
  );
}
