import * as types from "@/types/types";

export default function ReadingListItem({ item }: { item: types.ReadingListItem }) {

    const height = item.importance == 1
        ? "h-40 sm:h-56 md:h-72 lg:h-90"
        : "h-32 sm:h-48 md:h-60 lg:h-75";

    return (
        <div className="items-center justify-center flex">
            <img src={`${item.cover}`} alt={`${item.title} cover`} className={`${height} w-auto max-w-none rounded`} />
        </div>
    );
}