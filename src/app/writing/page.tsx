import { getAllBlogPosts } from "@/lib/blog";
import WritingContent from "./writing-content";

export default function Writing() {
  const posts = getAllBlogPosts();

  return <WritingContent posts={posts} />;
}
