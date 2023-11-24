import { FC } from "react";

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
    description:
      "Developed AtMyDesk, an interactive web application utilizing Javascript, React, Node, and PostgreSQL to efficiently manage teams and organize people locations.",
    dateRange: "2018-2019",
    techStack: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    roleInProject: "Junior Fullstack Developer",
  },
  {
    title: "myFinance",
    description:
      "Developed myFinance, a comprehensive financial tracking application using JavaScript, Node, React, and PostgreSQL. Implemented time logging functionality to accurately record billable hours and generate invoices for clients.",
    dateRange: "2019",
    techStack: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    roleInProject: "Fullstack Developer",
  },
  {
    title: "Overwrite.ai",
    description:
      "Developed Overwrite.ai, an innovative web application that utilizes AI to automatically generate compelling descriptions for real estate properties. Leveraged Typescript, React, Node, PostgreSQL, and Python to create a seamless user experience. Implemented an intuitive user interface that allows users to upload property images, fill out a dynamic questionnaire, and provide profile details. Utilized advanced machine learning algorithms to enhance images, analyze images, answers, and profile information, generating personalized property descriptions that captivate potential buyers. Resulted in increased efficiency and accuracy in creating property listings, saving users valuable time and effort.",
    dateRange: "2019-2021",
    techStack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Python"],
    roleInProject: "Tech Leader, Fullstack Developer",
  },
  {
    title: "Flux",
    description:
      "Developed Flux, a synchronized LED strip with sound and video themes, along with a web application for managing licenses, users, available themes, and configurations. Utilized Python, TypeScript, React, Node, PostgreSQL, SQLite, and Arduino. Improved efficiency by implementing a server-client architecture, allowing control units to download themes, settings, and check licenses from the server. Controlling the sound, video and LED system was available via mobile app and whole system can be monitored from app with live stream from the camera connected to the control unit.",
    dateRange: "2021-ongoing",
    techStack: [
      "Python",
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "SQLite",
      "Arduino",
    ],
    roleInProject: "Tech Leader",
  },
  {
    title: "LegalSpot",
    description:
      "Developed LegalSpot, a comprehensive web application tailored for lawyers, utilizing Python, Typescript, Next.js, and PostgreSQL. Implemented advanced task tracking and document management functionalities, providing lawyers with a streamlined workflow and improved efficiency. Utilized a unique architecture that allows each client to have their own instance of the application and database, ensuring data privacy and security.",
    dateRange: "2022-ongoing",
    techStack: ["Python", "TypeScript", "Next.js", "PostgreSQL"],
    roleInProject: "Architect, Team Leader, Backend Developer",
  },
];

export const Project: FC = () => {
  return (
    <div className="flex flex-col grow gap-5 p-10 justify-center items-center">
      {PROJECTS.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </div>
  );
};

const ProjectItem: FC<ProjectItemProps> = (props) => {
  return (
    <div className="flex flex-col w-full min-w-[300px] max-w-[900px] border-2 min-h-[200px] hover:outline">
      <div className="p-5">
        <h1 className="text-2xl"> {props.title} </h1>
        <p className="text-xs">
          {props.dateRange} - <b>{props.roleInProject}</b>
        </p>
      </div>
      <div className="flex flex-row justify-between p-5 gap-5">
        <div className="flex flex-col gap-5">
          <p> {props.description} </p>
          <p>
            <b>Tech stack used in project:</b> {props.techStack.join(", ")}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
