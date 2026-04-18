import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { CardProps } from "@/types/types";

export default function Card({ category, title, subtitle, content, href }: CardProps) {
  const { t } = useTranslation();

  const inner = (
    <>
      <h4>{t("nav.writing")} • {category}</h4>
      <div className="mt-auto">
        <h3 className="card-title">{title}</h3>
        <h4 className="text-m opacity-75">{subtitle}</h4>
        <p className="card-content line-clamp-4">{content}</p>
      </div>
    </>
  );

  const className = "card flex flex-col justify-between";

  if (href) {
    return <Link href={href} className={className}>{inner}</Link>;
  }

  return <div className={className}>{inner}</div>;
}
