"use client";

import Container from "@/components/container";
import Quote from "@/components/quote";
import Sidebar from "@/components/sidebar";
import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <Sidebar />
      <h1 className="header mb-4 mt-32">{t("home.title")}</h1>
      <p className="mb-4">{t("home.welcome")}</p>
      <p>{t("home.wip")}</p>
      <Quote className="mx-auto my-12"></Quote>
    </Container>
  );
}
