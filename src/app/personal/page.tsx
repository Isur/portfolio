import { CircleUserRound } from "lucide-react";
import { Section } from "@/components/section";
import { Personal } from "@/components/panels/personal";

export default function PersonalPage() {
  return (
    <Section
      id="personal"
      title="Personal"
      icon={<CircleUserRound size={32} />}
    >
      <Personal />
    </Section>
  );
}
