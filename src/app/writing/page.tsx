"use client";

import Card from "@/components/card";
import ContainerFullWidth from "@/components/container-full";
import BackHome from "@/components/back-button";
import { useTranslation } from "@/hooks/useTranslation";
import { BlogPost } from "@/types/blog";
import { StrideLogo } from "@/components/stride-logo";

export default function WritingContent() {
  const { t } = useTranslation();

  return (
    <ContainerFullWidth>
      <BackHome href="/">{`home`}</BackHome>
      <h1 className="header mb-8">{t("pages.writing.title")}</h1>
      <div className="flex flex-wrap gap-4">
        <Card
          category="App"
          eyebrowKey="nav.projects"
          title="Stride"
          content="Stride is een trainingsapp voor hardloopcoaches en hun lopers. Het geeft een gedeeld overzicht van het trainingsschema. Zo heb je geen gedoe met spreadsheets, en geen heen-en-weer via WhatsApp."
          href="/stride"
          image={<StrideLogo width={250} className="text-[var(--text-color)]" />}
        />
      </div>
    </ContainerFullWidth>
  );
}
