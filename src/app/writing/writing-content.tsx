"use client";

import Card from "@/components/card";
import ContainerFullWidth from "@/components/container-full";
import BackHome from "@/components/back-button";
import { useTranslation } from "@/hooks/useTranslation";
import { BlogPost } from "@/types/blog";

interface WritingContentProps {
  posts: BlogPost[];
}

export default function WritingContent({ posts }: WritingContentProps) {
  const { t } = useTranslation();

  return (
    <ContainerFullWidth>
      <BackHome href="/">{`home`}</BackHome>
      <h1 className="header mb-8">{t("pages.writing.title")}</h1>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => {
          return !post.isConcept && (
          <Card
            key={post.slug}
            title={post.title}
            category="Blog"
            subtitle={post.date}
            content={post.content}
            href={`/writing/${post.slug}`}
          />
        );})}
      </div>
    </ContainerFullWidth>
  );
}
