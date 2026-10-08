import { getAllBlogPosts } from '@/lib/blog';
import WritingContent from './writing-content';

const posts = getAllBlogPosts().slice(0, 2);

export default function Writing() {
  return <WritingContent posts={posts} />;
}
