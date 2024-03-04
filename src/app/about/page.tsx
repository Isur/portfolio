import { SearchCheck } from "lucide-react";
import { About } from "@/components/panels/about";
import { Section } from "@/components/section";

export default function AboutPage() {
  return (
    <Section id="about" title="About" icon={<SearchCheck size={32} />}>
      <About />
    </Section>
  );
}
