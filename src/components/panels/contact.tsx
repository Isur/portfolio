import { Github, Linkedin, Mail } from "lucide-react";
import { FC } from "react";
import { Card } from "../ui/card";

export const Contact: FC = () => {
  return (
    <div className="p-5 w-screen flex flex-col items-center">
      <div className="flex flex-col gap-10 max-w-full">
        <a
          href="https://github.com/Isur"
          className="flex flex-row text-l gap-4"
        >
          <Card className="flex gap-4 p-4 w-[400px]">
            <Github /> Isur
          </Card>
        </a>
        <a
          href="https://www.linkedin.com/in/isur/"
          className="flex flex-row text-l gap-4"
        >
          <Card className="flex gap-4 p-4 w-[400px]">
            <Linkedin /> Artur Bednarczyk
          </Card>
        </a>
        <a
          href="mailto:bednarczykartur96@gmail.com"
          className="flex flex-row text-l gap-4"
        >
          <Card className="flex gap-4 p-4 w-[400px]">
            <Mail /> bednarczykartur96@gmail.com
          </Card>
        </a>
      </div>
    </div>
  );
};
