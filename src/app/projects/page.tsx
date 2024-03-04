import { FolderGit2 } from "lucide-react";
import { Projects } from "@/components/panels/projects";
import { Section } from "@/components/section";

export default function ProjectsPage() {
  return (
    <Section id="projects" title="Projects" icon={<FolderGit2 size={32} />}>
      <Projects />
    </Section>
  );
}
