import ProjectContent from "./project-content";

// Server Component
export async function generateStaticParams() {
  return [{ slug: "project-1" }, { slug: "project-2" }, { slug: "project-3" }];
}

export default function ProjectPage() {
  return <ProjectContent />;
}
