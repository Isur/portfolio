import { FC } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Contact: FC = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-10 max-w-full">
        <a
          href="https://github.com/Isur"
          className="flex flex-row text-xl gap-4"
        >
          <FaGithub /> Isur
        </a>
        <a
          href="https://www.linkedin.com/in/isur/"
          className="flex flex-row text-xl gap-4"
        >
          <FaLinkedin /> Artur Bednarczyk
        </a>
        <a
          href="mailto:bednarczykartur96@gmail.com"
          className="flex flex-row text-xl gap-4"
        >
          <FaEnvelope /> bednarczykartur96@gmail.com
        </a>
      </div>
    </div>
  );
};
