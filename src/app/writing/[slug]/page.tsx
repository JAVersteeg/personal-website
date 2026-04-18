import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";
import Container from "@/components/container";
import ContainerFullWidth from "@/components/container-full";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return (
    <ContainerFullWidth>
      <article className="prose dark:prose-invert mx-auto max-w-2xl">
        <h2>{post.title}</h2>
        <p className="text-sm opacity-60 mb-4">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readingTime}
        </p>
        <MDXRemote source={post.content} />
      </article>
    </ContainerFullWidth>
  );
}
