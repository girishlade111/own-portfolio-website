export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  screenshot?: string;
  status: "live" | "development" | "archived";
  featured: boolean;
  category: "tool" | "app" | "saas" | "ai";
};

export const PROJECTS: Project[] = [
  {
    id: "ladestack-code-editor",
    title: "LadeStack Code Editor", // PERSONAL DATA — replace with real projects
    description: "Browser-based code editor with syntax highlighting and live preview.",
    longDescription: "A fully-featured browser IDE built to test code snippets quickly without leaving the LadeStack ecosystem.",
    techStack: ["Next.js", "Monaco Editor", "Tailwind"],
    githubUrl: "https://github.com/yourusername/ladestack-editor",
    liveUrl: "https://ladestack.in/editor",
    status: "live",
    featured: true,
    category: "tool",
  },
  {
    id: "melody-ai",
    title: "Melody AI Composer",
    description: "Generative AI tool that creates cinematic music scores based on text prompts.",
    longDescription: "Bridges the gap between hustle and momentum by generating procedural cinematic soundscapes for focus.",
    techStack: ["React", "Python", "DeepSeek", "Audio API"],
    githubUrl: "https://github.com/yourusername/melody-ai",
    status: "development",
    featured: true,
    category: "ai",
  },
  {
    id: "workflow-automation",
    title: "Automated Deployments",
    description: "A custom CI/CD pipeline visualizer that plugs into GitHub Actions and n8n.",
    longDescription: "Streamlines deployment visibility for solo founders. Tracks commits, build times, and server health.",
    techStack: ["TypeScript", "n8n", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/yourusername/workflow-automation",
    status: "archived",
    featured: true,
    category: "saas",
  },
  {
    id: "portfolio-v1",
    title: "Old Portfolio",
    description: "Previous iteration of my personal website.",
    longDescription: "A simpler time. Built with raw HTML, CSS, and vanilla JavaScript.",
    techStack: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/yourusername/portfolio-v1",
    liveUrl: "https://v1.yourdomain.com",
    status: "archived",
    featured: false,
    category: "app",
  }
];

export const FEATURED_PROJECTS = PROJECTS.filter(p => p.featured).slice(0, 3);
