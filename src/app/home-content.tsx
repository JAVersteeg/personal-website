"use client";

import Container from "@/components/container";
import Quote from "@/components/quote";
import Sidebar from "@/components/sidebar";
import { useTranslation } from "@/hooks/useTranslation";
import ReadingSection from "./reading/homepage_section";
import WritingSection from "./writing/homepage_section";
import { BlogPost } from "@/types/blog";

interface HomeContentProps {
  posts: BlogPost[];
}

export default function HomeContent({ posts }: HomeContentProps) {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 relative">
      <Sidebar />
      <Container>
        <Quote className="mx-auto py-16"></Quote>

        <h1 className="header mb-4">{t("home.title")}</h1>
        <p className="mb-4">{t("home.welcome")}</p>
        <p className="mb-4">{t("home.bio")}</p>
        <p className="mb-4">{t("home.corner")}</p>
        <p className="mb-4">{t("home.guestbook")}</p>
        <p className="mb-4">{t("home.great-time")}</p>
        <p className="mb-16">{t("home.cheers")}</p>

        <ReadingSection />

        <WritingSection posts={posts} />
      </Container>
    </div>
  );
}
