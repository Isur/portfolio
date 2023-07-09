import { FC } from 'react';

interface ProjectItemProps {
    title: string;
    description: string;
    image?: string;
    dateRange: string;
    techStack: string[];
    roleInProject: string;
}

const PROJECTS: ProjectItemProps[] = [
    {
        title: "AtMyDesk",
        description: "Interactive web application that let you manage teams, people locations and tracking their time logs. ", 
        dateRange: "2018-2019",
        techStack: ["JavaScript", "React", "Node.js", "PostgreSQL"],
        roleInProject: "Fullstack Developer",
    },
    {
        title: "Overwrite.ai",
        description: "Interactive web application with AI to automatically generate descriptions on real estate properties. As a user you could upload images of your property, fill dynamic questionnairy and as a result you would receive generated description based on your images, answers and profile details.",
        dateRange: "2019-2021",
        techStack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Python"],
        roleInProject: "Tech Leader, Fullstack Developer",
    },
    {
        title: "Flux",
        description: "Synchronization system for LEDs with the theme (sound and video), and the web application to manage licenses, users, themes, and configurations. Each controll unit is connected with the server to download themes, settings and check licences.",
        dateRange: "2021-ongoing",
        techStack: ["Python", "TypeScript", "React", "Node.js", "PostgreSQL", "SQLite", "Arduino"],
        roleInProject: "Tech Leader",
    },
    {
        title: "LegalSpot",
        description: "Interactive web application to manage work of lawyers, task tracking, documents management and many other functionalities usefull for lawyers. Each client get it's own instance of application and database.",
        dateRange: "2022-ongoing",
        techStack: ["Python", "TypeScript", "Next.js", "PostgreSQL"],
        roleInProject: "Architect, Team Leader",
    }
];

export const Project: FC = () => {
    return (
            <div className="flex flex-col grow gap-5 p-10 justify-center items-center">
                {PROJECTS.map((project) => (
                    <ProjectItem key={project.title} {...project} />
                ))}
            </div>
    )
}

const ProjectItem: FC<ProjectItemProps> = (props) => {
    return (
        <div className="flex flex-col w-full min-w-[300px] border-2 min-h-[200px] hover:outline">
            <div className="p-5">
                <h1 className="text-2xl"> {props.title} </h1>
                <p className="text-xs"> {props.dateRange} - <b>{props.roleInProject}</b></p>
            </div>
            <div className="flex flex-row justify-between p-5 gap-5">
                <div className="flex flex-col gap-5">
                    <p> {props.description} </p>
                    <p><b>Tech stack used in project:</b> {props.techStack.join(", ")} </p>
                </div>
            </div>
        </div>
    )
}
