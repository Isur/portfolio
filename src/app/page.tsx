"use client";
import { About, Contact, Navbar, Project, Skills, Footer, Section } from "@/components";

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
        <Section id="projects" title="Projects" prev="#skills" next="#contact">
          <Project />
        </Section>
        <Section id="contact" title="Contact" prev="#projects">
          <Contact />
        </Section>
      </div>
      <Footer />
    </main>
  )
}
