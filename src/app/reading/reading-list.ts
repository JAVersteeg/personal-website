import { ReadingListItem } from "@/types/types"

export const readingList: ReadingListItem[] = [
    {
        importance: 1,
        title: "Thrive",
        author: "Brandan Brazier",
        description: "",
        cover: "cover_thrive.jpg",
    },
    {
        importance: 2,
        title: "Born to Run",
        author: "Christopher McDougall",
        description: "",
        cover: "cover_born_to_run.jpg",
    },
    {
        importance: 3,
        title: "Dune",
        author: "Frank Herbert",
        description: "",
        cover: "cover_dune.jpg",
    }
]

function podiumPosition(importance: number): number {
    switch (importance) {
        case 2: return 1;
        case 1: return 2;
        case 3: return 3;
        default: return importance;
    }
}

export function podiumSort(a: ReadingListItem, b: ReadingListItem) {
    return podiumPosition(a.importance) - podiumPosition(b.importance);
}