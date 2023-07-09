import { FC } from 'react';

export const Skills: FC = () => {
    return (
        <div className="flex flex-col gap-10 p-10">
            <div className="flex flex-wrap grid-cols-2 gap-5">
                <SkillsSet title="Technologies" skills={["TypeScript", "Python", "Bash", "SQL", "React", "Next.js", "PostgreSQL"]} />
                <SkillsSet title="Tools" skills={["Docker", "VsCode", "Git", "Linux", "Neovim", "Nginx", "and more..."]} />
                <SkillsSet title="Languages" skills={["English", "Polish"]} />
            </div>
        </div>
    )
};

interface SkillsSetProps {
    title: string;
    skills: string[];
}
const SkillsSet: FC<SkillsSetProps> = ({ skills, title }) => {
    return (
        <div className="flex flex-col gap-5 border-2 p-5 w-[300px] bg-background hover:outline">
            <h1 className="text-3xl"> {title} </h1>
            <ul className="list-disc">
                {skills.map(skill => <li key={skill}> {skill} </li>)}
            </ul>
        </div>
    )
}
