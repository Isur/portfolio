import { FC } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { WrenchIcon } from "lucide-react";

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
        <SkillCard title="Technologies" skills={technologies} />
        <SkillCard title="Tools" skills={tools} />
        <SkillCard title="Development" skills={development} />
        <SkillCard title="Languages" skills={languages} />
      </div>
    </div>
  );
};

interface SkillsSetProps {
  title: string;
  skills: string[];
}

const SkillCard: FC<SkillsSetProps> = ({ skills, title }) => {
  return (
    <Card className="w-[300px]">
      <CardTitle className="flex flex-row gap-5">
        <WrenchIcon />
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
