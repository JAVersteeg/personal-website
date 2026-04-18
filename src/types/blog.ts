export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  readingTime: string;
  content: string;
  isConcept: boolean;
}
