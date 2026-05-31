import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://girish.ladestack.in";

  // Static routes
  const routes = ["", "/projects", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  // Dynamic blog routes
  const posts = getAllPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
  }));

  return [...routes, ...blogRoutes];
}
