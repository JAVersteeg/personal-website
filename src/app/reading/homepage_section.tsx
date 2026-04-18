import { useTranslation } from "@/hooks/useTranslation";
import ReadingListItem from "@/components/reading-list-item";
import { podiumSort, readingList } from "./reading-list";
import Separator from "@/components/separator";
import Clickthrough from "@/components/clickthrough";


export default function ReadingSection() {
    const { t } = useTranslation();
    const sortedReadingList = readingList.sort(podiumSort);

    return (
        <>
            <Separator className="mb-8"/>
            <h2>{t("pages.reading.title")}</h2>
            <div className="flex items-center justify-center columns-3 gap-2 p-2 sm:gap-4 sm:p-4 md:gap-6 md:p-6 lg:gap-8 lg:p-8">
                {sortedReadingList.map((item) => (
                    <ReadingListItem key={item.title} item={item} />
                ))}
            </div>
            <Clickthrough href="/reading">{t("pages.reading.clickthrough")}</Clickthrough>
            <Separator className="mb-8"/>
        </>
    );
}