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
  role?: string;
  image?: string;
  dateRange: string;
  techStack: string[];
  roleInProject?: string;
  company?: string;
}

const PROJECTS_ALM: ProjectItemProps[] = [
  {
    title: "AtMyDesk",
    description:
      "Application that allows you to checkin at your office and see who is currently working there. Managing teams, roles, offices. With addon of automatic checkin based on your location. Application was created for internal use in company. Financial module was implemented to track working hours and generate invoices for clients.",
    role: "It was my first project as a developer. I was part of a team and was responsible for small tasks. Bugfixing, changing little things. I was learning a lot about React, Node.js, PostgreSQL. I was also responsible for creating some features.",
    dateRange: "2018 - 2019",
    techStack: ["Javascript", "React", "Node.js", "PostgreSQL"],
    roleInProject: "Junior Fullstack Developer",
    company: "ALM Services Technology Group",
  },
  {
    title: "Overwrite.ai",
    description:
      "A web application that harnesses AI to automatically generate descriptions for real estate properties. The user interface allows users to upload property images, complete a dynamic questionnaire, and provide profile details. Using this data, a unique property description is generated. Additionally, the application includes a subscription system, image enhancement, image size optimization, organization management, and more features.",
    role: "We started as a team. Soon I was promoted to Tech Leader. I was responsible for whole application, frontend, backend, database, deployments. Most of the features were created by me. I was also responsible for mentoring less experienced developers.",
    dateRange: "2019 - 2021",
    techStack: ["Typescript", "React", "Node.js", "PostgreSQL", "Python"],
    roleInProject: "Tech Leader, Fullstack Developer",
    company: "ALM Services Technology Group",
  },
  {
    title: "Pharmaspectre",
    description:
      "A platform that features dashboards that collect data from various sources, facilitating comprehensive data analysis and visualization. Additionally, it enables medical document search, preview, and processing functionalities.",
    role: "I have created proof of concept for RBAC system that was later used in this project. I've been also involved in creating some features.",
    dateRange: "2021",
    techStack: ["Typescript", "React", "Node.js", "PostgreSQL"],
    roleInProject: "Fullstack Developer",
    company: "ALM Services Technology Group",
  },
];

const PROJECTS_ESTIMITY: ProjectItemProps[] = [
  {
    title: "Flux",
    description:
      "The system synchronizes LED strips with audio and video streams from various sources. Control over the player and LED system is facilitated through a mobile app, with the entire system monitorable via the app's live stream from a camera connected to the control unit. Sensors provide real-time data on temperature, humidity, and oxygen levels. Designed for medical facilities, the system operates within Faraday cages. Management of themes, music, videos, licenses, and users is accessible through a web application.",
    role: "I was responsible for creating whole IoT software - arduino app to controll sensors, teensy app to control LED strips - usinc C++, API to communicate with the system and live view via webcam, and synchronization between audio/video and LEDs - using python. Also created admin panel to manage all data, users, licenses, etc. using React and Node.js.",
    dateRange: "2021 - ongoing",
    techStack: [
      "Python",
      "Typescript",
      "React",
      "Node.js",
      "PostgreSQL",
      "SQLite",
      "Arduino",
      "C++",
    ],
    roleInProject: "Senior Software Developer",
    company: "Estimity",
  },
  {
    title: "LegalSpot",
    description:
      "This web application is tailored for lawyers, offering comprehensive task, document, event, and register management, among other features. The system architecture prioritizes safety and security, with each company allocated its own database and instance of services, ensuring complete data separation. The application supports lawyers' workflows by facilitating task tracking and document generation based on templates created within a custom editor.",
    role: "While leading the project, I was responsible for the architecture, deployments and backend development. I also mentored less experienced developers and helping them with frontend tasks when needed.",
    dateRange: "2022 - 2024",
    techStack: [
      "Python",
      "Typescript",
      "Next.js",
      "PostgreSQL",
      "GCP",
      "Docker",
    ],
    roleInProject: "Architect, Team Leader, Backend Developer",
    company: "Estimity",
  },
  {
    title: "Growi - Virtual Offices",
    description:
      "A virtual office platform that helps you to create your company with virtual adress. You can run your business from anywhere in the world. Cloud powered document platform that will securely handle all mails and packages delivered to the address and digitize them.",
    role: "I contribute to the team by leveraging my expertise in backend/frontend development and Typescript. Additionally, I independently handle the setup of CI/CD pipelines and environments.",
    dateRange: "2022 - ongoing",
    techStack: [
      "Typescript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    company: "Estimity",
  },
  {
    title: "Energy Charts",
    description:
      "A web application that provides a comprehensive overview of energy production and prices (also with forecasts) in Poland. The system collects data and presents it in a user-friendly format. The application features a variety of charts and graphs and list of current capacities.",
    role: "I was responsible for creating whole application.",
    dateRange: "2024 - ongoing",
    techStack: ["Node.js", "Nestjs", "React", "Docker"],
    roleInProject: "Senior Fullstack Developer",
    company: "Estimity",
  },
];

export const Career: FC = () => {
  return (
    <div className="flex flex-col grow gap-5 p-10 justify-center items-center w-full">
      <p>
        Right now I am working as Senior Software Developer at Estimity and here
        is my history.
      </p>
      <p className="min-w-[300px] max-w-[900px]">
        In 2018 I have landed my first job as software developer at ALM Services
        Technology Group. I have been there for 3 years. Beside my main projects
        I was working on, I have also been involved in supporting new coming
        developers and helping them with React, Node.
      </p>

      <h1 className="text-xl"> ALM Services Technology Group </h1>

      {PROJECTS_ALM.map((project) => (
        <ProjectItemCard key={project.title} {...project} />
      ))}

      <p className="min-w-[300px] max-w-[900px]">
        Few years later, in 2021 I started working with Estimity, where I am
        today being Senior Software Developer. I have been working here on
        multiple projects, some of them are still ongoing. Those are mostly web
        apps but also some IoT. I have been also involved in mentoring less
        experienced developers.
      </p>

      <h1 className="text-xl"> Estimity </h1>

      {PROJECTS_ESTIMITY.map((project) => (
        <ProjectItemCard key={project.title} {...project} />
      ))}
      <p className="min-w-[300px] max-w-[900px]">
        I have been actively involved in more projects where my primary role was
        to support and mentor less experienced developers or creating a small
        proof of concept.
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
          {props.dateRange}{" "}
          {props.roleInProject && (
            <>
              - <b>{props.roleInProject}</b>
            </>
          )}{" "}
          at{" "}
          <b>
            <i>{props.company}</i>
          </b>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <p className="text-pretty">
          {" "}
          <p className="underline">About:</p> {props.description}{" "}
        </p>
        {props.role && (
          <p className="text-pretty">
            <p className="underline">My Role:</p> {props.role}
          </p>
        )}
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
