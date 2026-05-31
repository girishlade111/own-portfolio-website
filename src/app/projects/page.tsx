import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects — Girish Lade",
  description: "All projects by Girish Lade",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ProjectsClient />
    </main>
  );
}
