import { Navbar } from "@/components/navbar";
import { About } from "@/components/panels/about";
import { Projects } from "@/components/panels/projects";
import { Section } from "@/components/section";
import { Skills } from "@/components/panels/skills";
import { Personal } from "@/components/panels/personal";
import { Footer } from "@/components/footer";
import {
  CircleUserRound,
  Cpu,
  FolderGit2,
  SearchCheck,
  ContactIcon,
} from "lucide-react";
import { Contact } from "@/components/panels/contact";

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center scroll-smooth">
      <Navbar />
      <div className="flex-col grow overflow-auto scroll-smooth gap-16 w-screen">
        <Section id="about" title="About" icon={<SearchCheck size={32} />}>
          <About />
        </Section>
        <Section id="skills" title="Skills" icon={<Cpu size={32} />}>
          <Skills />
        </Section>
        <Section id="projects" title="Projects" icon={<FolderGit2 size={32} />}>
          <Projects />
        </Section>
        <Section
          id="personal"
          title="Personal"
          icon={<CircleUserRound size={32} />}
        >
          <Personal />
        </Section>
        <Section id="contact" title="Contact" icon={<ContactIcon size={32} />}>
          <Contact />
        </Section>
      </div>
      <Footer />
    </main>
  );
}
