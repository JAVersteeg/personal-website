"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Separator from "@/components/separator";
import Clickthrough from "@/components/clickthrough";
import Card from "@/components/card";
import { PROJECTS } from "./projects-content";

export default function ProjectsSection() {
    const { t } = useTranslation();

    return (
        <>
            <h2 className="mb-8">{t("pages.projects.title")}</h2>
            <div className="flex flex-wrap items-center justify-center columns-2 gap-8">
                {PROJECTS.map((project) => (
                    <Card key={project.title} {...project} />
                ))}
            </div>
            <Clickthrough href="/projects" className="mt-4">{t("pages.projects.clickthrough")}</Clickthrough>
            <Separator className="mb-8"/>
        </>
    );
}