import { getAllBlogPosts } from "@/lib/blog";
import HomeContent from "./home-content";

export default function Home() {
  const posts = getAllBlogPosts().slice(0, 2);

  return <HomeContent posts={posts} />;
}
