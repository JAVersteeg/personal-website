import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { CardProps } from "@/types/types";
import { stripMarkdown } from "@/lib/markdown";

export default function Card({ category, title, subtitle, content, href, image, eyebrowKey = "nav.writing" }: CardProps) {
  const { t } = useTranslation();
  const IMAGE_CONTAINER_HEIGHT = 150;

  const inner = (
    <>
      <h4 className="truncate">{t(eyebrowKey)} • {category}</h4>
      <div className="">
        {image ? (
          <div className="flex items-center justify-center mb-2 bg-green-100" style={{ height: IMAGE_CONTAINER_HEIGHT, background: "linear-gradient(135deg, #d9f99d 0%, #ecfccb 50%, #f0fdf4 100%)" }}>
            {image}
            <span className="sr-only">{title}</span>
          </div>
        ) : (
          <h3 className="card-title truncate">{title}</h3>
        )}
        {subtitle && <h4 className="text-m opacity-75 truncate">{subtitle}</h4>}
        <p className="card-content line-clamp-4">{stripMarkdown(content)}</p>
      </div>
    </>
  );

  const className = "card flex flex-col justify-between";

  if (href) {
    return <Link href={href} className={className}>{inner}</Link>;
  }

  return <div className={className}>{inner}</div>;
}
