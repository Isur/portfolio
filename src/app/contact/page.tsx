import { ContactIcon } from "lucide-react";
import { Section } from "@/components/section";
import { Contact } from "@/components/panels/contact";

export default function ContactPage() {
  return (
    <Section id="contact" title="Contact" icon={<ContactIcon size={32} />}>
      <Contact />
    </Section>
  );
}
