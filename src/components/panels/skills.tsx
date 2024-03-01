import { FC } from "react";
import {
  Cpu,
  Languages,
  Workflow,
  Wrench,
  MemoryStick,
  PieChart,
} from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";

const programming = ["TypeScript", "Python", "JavaScript", "SQL", "Bash"];
const technologies = [
  "Node.js",
  "Express.js",
  "Nest.js",
  "Next.js",
  "FastAPI",
  "React",
  "Jest",
  "Pytest",
];
const development = ["Agile", "Scrum", "TDD", "REST", "CI/CD"];
const tools = ["Git", "GitHub", "Docker", "Linux", "nginx"];
const others = ["Microservices", "AWS", "GCP"];
const languages = ["Polish - native", "English - C1"];

export const Skills: FC = () => {
  return (
    <div className="flex flex-col gap-10 p-10">
      <div className="flex flex-wrap grid-cols-2 gap-5 justify-center">
        <SkillCard title="Programming" skills={programming} icon={<Cpu />} />
        <SkillCard
          title="Technologies"
          skills={technologies}
          icon={<MemoryStick />}
        />
        <SkillCard
          title="Development"
          skills={development}
          icon={<Workflow />}
        />
        <SkillCard title="Tools" skills={tools} icon={<Wrench />} />
        <SkillCard title="Other" skills={others} icon={<PieChart />} />
        <SkillCard title="Languages" skills={languages} icon={<Languages />} />
      </div>
    </div>
  );
};

interface SkillsSetProps {
  title: string;
  skills: string[];
  icon?: JSX.Element;
}

const SkillCard: FC<SkillsSetProps> = ({ skills, title, icon }) => {
  return (
    <Card className="w-[300px]">
      <CardTitle className="flex flex-row gap-5">
        {icon}
        {title}
      </CardTitle>
      <CardContent>
        <ul className="list-disc p-2">
          {skills.map((skill) => (
            <li key={skill}> {skill} </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
