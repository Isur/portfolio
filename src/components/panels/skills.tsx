import { FC } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Cpu, Languages, Workflow, Wrench } from "lucide-react";

const technologies = [
  "TypeScript",
  "Python",
  "SQL",
  "Node",
  "React",
  "and more...",
];
const tools = ["Docker", "Git", "Github", "Linux", "Nginx", "and more..."];
const languages = ["Polish - native", "English - C1"];
const development = ["Agile", "CI/CD", "REST", "TDD", "and more..."];

export const Skills: FC = () => {
  return (
    <div className="flex flex-col gap-10 p-10">
      <div className="flex flex-wrap grid-cols-2 gap-5 justify-center">
        <SkillCard title="Technologies" skills={technologies} icon={<Cpu />} />
        <SkillCard title="Tools" skills={tools} icon={<Wrench />} />
        <SkillCard
          title="Development"
          skills={development}
          icon={<Workflow />}
        />
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
