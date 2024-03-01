import { FC } from "react";
import { FolderIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

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
      "A web application that harnesses AI to automatically generate descriptions for real estate properties. The user interface allows users to upload property images, complete a dynamic questionnaire, and provide profile details. Using this data, a unique property description is generated. Additionally, the application includes a subscription system, image enhancement, image size optimization, organization management, and more features.",
    dateRange: "2019 - 2021",
    techStack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Python"],
    roleInProject: "Tech Leader, Fullstack Developer",
    company: "ALM Services Technology Group",
  },
  {
    title: "Pharmaspectre",
    description:
      "A platform that features dashboards that collect data from various sources, facilitating comprehensive data analysis and visualization. Additionally, it enables medical document search, preview, and processing functionalities.",
    dateRange: "2021",
    techStack: ["React", "Node.js", "PostgreSQL"],
    roleInProject: "Fullstack Developer",
    company: "ALM Services Technology Group",
  },
  {
    title: "LegalSpot",
    description:
      "This web application is tailored for lawyers, offering comprehensive task, document, event, and register management, among other features. The system architecture prioritizes safety and security, with each company allocated its own database and instance of services, ensuring complete data separation. The application supports lawyers' workflows by facilitating task tracking and document generation based on templates created within a custom editor.",
    dateRange: "2022 - 2024",
    techStack: ["Python", "TypeScript", "Next.js", "PostgreSQL"],
    roleInProject: "Architect, Team Leader, Backend Developer",
    company: "Estimity",
  },
  {
    title: "Flux",
    description:
      "The system synchronizes LED strips with audio and video streams from various sources. Control over the player and LED system is facilitated through a mobile app, with the entire system monitorable via the app's live stream from a camera connected to the control unit. Sensors provide real-time data on temperature, humidity, and oxygen levels. Designed for medical facilities, the system operates within Faraday cages. Management of themes, music, videos, licenses, and users is accessible through a web application.",
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
];

export const Projects: FC = () => {
  return (
    <div className="flex flex-col grow gap-5 p-10 justify-center items-center w-full">
      {PROJECTS.map((project) => (
        <ProjectItemCard key={project.title} {...project} />
      ))}
      <p className="min-w-[300px] max-w-[900px]">
        I have been actively involved in multiple projects where my primary role
        was to support and mentor less experienced developers.
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
        <p className="text-pretty"> {props.description} </p>
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
