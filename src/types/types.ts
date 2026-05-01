export interface ReadingListItem {
    importance: number,
    title: string,
    author: string,
    description: string,
    cover: string,
}

export interface CardProps {
  category: string;
  title: string;
  subtitle: string;
  content: string;
  href?: string;
}

export interface InfoSectionProps {
  className?: string;
  title: string;
  children: React.ReactNode;
  borderColor?: string;
  backgroundColour?: string;
}