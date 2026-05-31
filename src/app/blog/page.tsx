import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Writing — Girish Lade",
  description: "Thoughts on building, shipping, and the founder mindset.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 font-body text-muted hover:text-gold transition-colors text-sm mb-12"
          >
            ← Back to Home
          </Link>
          <h1 className="font-display font-light text-[3.5rem] leading-none mb-4 text-foreground">
            Writing
          </h1>
          <p className="font-body text-muted text-[1.1rem]">
            Thoughts on building, shipping, and the founder mindset.
          </p>
        </div>

        {/* Editorial List */}
        <div className="flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both">
          {posts.map((post) => {
            const dateObj = new Date(post.date);
            const formattedDate = dateObj.toLocaleDateString("en-US", { month: "short", year: "numeric" });

            return (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group block border-b border-border py-8 transition-all duration-300 hover:bg-surface/30 hover:pl-4 border-l-4 border-l-transparent hover:border-l-gold"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-2">
                  <span className="font-mono text-muted text-xs md:w-24 shrink-0 uppercase tracking-wider">
                    {formattedDate}
                  </span>
                  <h2 className="font-body font-medium text-primary text-xl group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                  <div className="hidden md:block md:w-24 shrink-0" />
                  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <p className="font-body text-muted text-sm line-clamp-1">
                      {post.description}
                    </p>
                    {post.readTime && (
                      <span className="font-mono text-[0.7rem] text-muted whitespace-nowrap px-2 py-1 bg-surface rounded-sm">
                        {post.readTime}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
          {posts.length === 0 && (
            <p className="font-body text-muted py-8 border-t border-border">No posts found.</p>
          )}
        </div>
      </div>
    </main>
  );
}
