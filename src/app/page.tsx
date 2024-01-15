"use client";
import {
  About,
  Contact,
  Navbar,
  Project,
  Skills,
  Footer,
  Section,
  Personal,
} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <div className="grow overflow-auto scroll-smooth">
        <Section id="about" title="About Me" next="#skills">
          <About />
        </Section>
        <Section id="skills" title="Skills" prev="#about" next="#projects">
          <Skills />
        </Section>
        <Section
          id="projects"
          title="Work Projects"
          prev="#skills"
          next="#contact"
        >
          <Project />
        </Section>
        <Section
          id="personal"
          title="Personal"
          prev="#projects"
          next="#contact"
        >
          <Personal />
        </Section>
        <Section id="contact" title="Contact" prev="#personal">
          <Contact />
        </Section>
      </div>
      <Footer />
    </main>
  );
}
