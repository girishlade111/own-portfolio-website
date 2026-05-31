import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: `${post.title} — Girish Lade`,
    description: post.description,
  };
}

const components = {
  h1: (props: any) => <h1 className="font-display text-4xl lg:text-5xl mt-12 mb-6 font-light text-primary" {...props} />,
  h2: (props: any) => <h2 className="font-display text-3xl mt-10 mb-4 font-light text-primary" {...props} />,
  h3: (props: any) => <h3 className="font-display text-2xl mt-8 mb-4 font-light text-primary" {...props} />,
  p: (props: any) => <p className="font-body text-secondary text-[1.05rem] leading-[1.8] mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc list-outside pl-6 mb-6 font-body text-secondary space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-outside pl-6 mb-6 font-body text-secondary space-y-2" {...props} />,
  li: (props: any) => <li className="pl-2" {...props} />,
  a: (props: any) => <a className="text-gold hover:underline underline-offset-4" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gold pl-6 py-1 my-8 italic font-display text-xl text-primary/80 bg-surface/30 rounded-r-sm" {...props} />
  ),
  code: (props: any) => <code className="font-mono text-[0.85em] bg-card text-gold px-1.5 py-0.5 rounded-sm" {...props} />,
  pre: (props: any) => (
    <pre className="bg-card border border-border rounded-sm p-4 overflow-x-auto mb-8 font-mono text-sm leading-relaxed" {...props} />
  ),
  strong: (props: any) => <strong className="font-medium text-primary" {...props} />,
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const dateObj = new Date(post.date);
  const formattedDate = dateObj.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 font-body text-muted hover:text-gold transition-colors text-sm mb-16"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Writing
        </Link>

        <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <header className="mb-16">
            <h1 className="font-display font-light text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-foreground mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 font-mono text-sm text-muted">
              <span>{formattedDate}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>{post.readTime}</span>
              
              {post.tags && post.tags.length > 0 && (
                <>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-gold">#{tag}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          <div className="prose-custom max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>
        </article>
      </div>
    </main>
  );
}
