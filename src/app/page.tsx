import { Navbar } from "@/components/navbar";
import { About } from "@/components/panels/about";
import { Projects } from "@/components/panels/projects";
import { Section } from "@/components/section";
import { Skills } from "@/components/panels/skills";
import { Personal } from "@/components/panels/personal";
import { Contact } from "@/components/panels/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center scroll-smooth">
      <Navbar />
      <div className="flex-col grow overflow-auto scroll-smooth gap-16 w-screen">
        <Section id="about" title="About">
          <About />
        </Section>
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
        <Section id="projects" title="Projects">
          <Projects />
        </Section>
        <Section id="personal" title="Personal">
          <Personal />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </div>
      <Footer />
    </main>
  );
}
