import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readTime: string;
  published: boolean;
  content: string;
};

export function getAllPosts(): Omit<BlogPost, "content">[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);

  const posts = files
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(contentDir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags || [],
        readTime: data.readTime,
        published: data.published === true,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPathMDX = path.join(contentDir, `${slug}.mdx`);
    const fullPathMD = path.join(contentDir, `${slug}.md`);
    
    let fileContents = "";
    if (fs.existsSync(fullPathMDX)) {
      fileContents = fs.readFileSync(fullPathMDX, "utf8");
    } else if (fs.existsSync(fullPathMD)) {
      fileContents = fs.readFileSync(fullPathMD, "utf8");
    } else {
      return null;
    }

    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags || [],
      readTime: data.readTime,
      published: data.published === true,
      content,
    };
  } catch {
    return null;
  }
}
