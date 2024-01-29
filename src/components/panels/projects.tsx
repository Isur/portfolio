import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { FolderIcon } from "lucide-react";

interface ProjectItemProps {
  title: string;
  description: string;
  image?: string;
  dateRange: string;
  techStack: string[];
  roleInProject: string;
  company?: string;
}

const PROJECTS: ProjectItemProps[] = [
  {
    title: "AtMyDesk",
    description:
      "Application that allows you to checkin at your office and see who is currently working there. Managing teams, roles, offices. With addon of automatic checkin based on your location. Application was created for internal use in company. Financial module was implemented to track working hours and generate invoices for clients.",
    dateRange: "2018 - 2019",
    techStack: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    roleInProject: "Junior Fullstack Developer",
    company: "ALM Services Technology Group",
  },
  {
    title: "Overwrite.ai",
    description:
      "Web application that utilizes AI to automatically generate descriptions for real estate properties. User interface let user upload images of the property, fill out a dynamic questionnaire, and provide profile details. Based on that data a unique property description is created. Subscription system, image enhancing, image size optimization, organization management, and more features were implemented.",
    dateRange: "2019 - 2021",
    techStack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Python"],
    roleInProject: "Tech Leader, Fullstack Developer",
    company: "ALM Services Technology Group",
  },
  {
    title: "Pharmaspectre",
    description:
      "Dashboards, colleting data from multiple sources. Data analysis and visualization. Medical documents search, preview and processing.",
    dateRange: "2021",
    techStack: ["React", "Node.js", "PostgreSQL"],
    roleInProject: "Fullstack Developer",
    company: "ALM Services Technology Group",
  },
  {
    title: "Flux",
    description:
      "Synchronization of LED strips with sound and video coming from different sources. Controlling the player and LED system was available via mobile app and whole system can be monitored from app with live stream from the camera connected to the control unit. Sensors were used to have information about temerature, humidity and oxygen. The system was designed to be used in medical facilities to work in faradays cage. Managing themes, music, videos, licences and users was accessible via web application.",
    dateRange: "2021 - ongoing",
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
    company: "Estimity",
  },
  {
    title: "LegalSpot",
    description:
      "Web application for lawyers to manage their tasks, documents, events, registers and more. The architecture of system was designed to be safe and secure. Each company has its own database and instance of services, all data is separated. App supports workflow of lawyers helping with task tracking and generating documents based on templates created in custom editor.",
    dateRange: "2022 - ongoing",
    techStack: ["Python", "TypeScript", "Next.js", "PostgreSQL"],
    roleInProject: "Architect, Team Leader, Backend Developer",
    company: "Estimity",
  },
];

export const Projects: FC = () => {
  return (
    <div className="flex flex-col grow gap-5 p-10 justify-center items-center w-full">
      {PROJECTS.map((project) => (
        <ProjectItemCard key={project.title} {...project} />
      ))}
      <p>
        I have been involved in more projects where my role was to support less
        experienced developers.
      </p>
    </div>
  );
};

const ProjectItemCard: FC<ProjectItemProps> = (props) => {
  return (
    <Card className="w-full min-w-[300px] max-w-[900px] min-h-[200px]">
      <CardHeader>
        <CardTitle>
          <FolderIcon /> {props.title}
        </CardTitle>
        <CardDescription>
          {props.dateRange} - <b>{props.roleInProject}</b> at{" "}
          <b>
            <i>{props.company}</i>
          </b>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <p> {props.description} </p>
        <div className="flex gap-3 flex-wrap">
          {props.techStack.map((item) => (
            <Badge variant="outline" key={item}>
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
