import { FC } from "react";
import Image from "next/image";

export const About: FC = () => {
  return (
    <div className="flex flex-col flex-wrap gap-10 justify-center items-center p-10">
      <div className="border-2">
        <Image alt="me" src="/me.jpeg" width={300} height={400} />
      </div>
      <div className="text-xl min-w-[300px] max-w-[600px] p-5">
        <p>Hi! My name is Artur Bednarczyk. Internet knows me as Isur.</p>
        <br />
        <p>
          I am a software developer with almost six years of hands-on experience
          in the business world. With a decade-long coding journey, I have
          actively contributed to numerous projects, demonstrating versatility
          and leadership in various roles.
        </p>
        <br />
        <p>
          I have finished my master degree at the Silesian University of
          Technology.
        </p>
        <br />
        <p>
          Beyond being a profession, software development is my passion, fueling
          my commitment to continuous learning and skill enhancement.
        </p>
        <br />
        <p>
          Sharing knowledge with my team is not just a duty; it is a source of
          joy for me. My goal is to bring this enthusiasm, expertise, and
          collaborative spirit to a team.
        </p>
        <br />
        <p>
          Right now I am working as a Senior Software Developer and Team Leader
          at Estimity. Mostly working with TypeScript and Python on backend
          stuff and creating new aweseome startups.
        </p>
      </div>
    </div>
  );
};
