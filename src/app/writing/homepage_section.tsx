"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Separator from "@/components/separator";
import Clickthrough from "@/components/clickthrough";
import Card from "@/components/card";
import { BlogPost } from "@/types/blog";

interface WritingSectionProps {
    posts: BlogPost[];
}

export default function WritingSection({ posts }: WritingSectionProps) {
    const { t } = useTranslation();

    return (
        <>
            <h2 className="mb-8">{t("pages.writing.title")}</h2>
            <div className="flex flex-wrap items-center justify-center columns-2 gap-8">
                {posts.map((post) => ( 
                    !post.isConcept && (
                        <Card
                            key={post.slug}
                            category="Blog"
                            title={post.title}
                            subtitle={post.date}
                            content={post.content}
                            href={`/writing/${post.slug}`}
                        />
                    )
                ))}
            </div>
            <Clickthrough href="/writing" className="mt-4">{t("pages.writing.clickthrough")}</Clickthrough>
            <Separator className="mb-8"/>
        </>
    );
}