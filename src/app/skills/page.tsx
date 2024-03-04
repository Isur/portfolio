import { Cpu } from "lucide-react";
import { Section } from "@/components/section";
import { Skills } from "@/components/panels/skills";

export default function SkillsPage() {
  return (
    <Section id="skills" title="Skills" icon={<Cpu size={32} />}>
      <Skills />
    </Section>
  );
}
