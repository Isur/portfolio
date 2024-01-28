import { CopyrightIcon } from "lucide-react";
import { FC } from "react";

export const Footer: FC = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="flex flex-row gap-5 p-1 items-center justify-center h-16 outline outline-primary-foreground w-screen">
      <CopyrightIcon /> {date} Artur Bednarczyk
    </footer>
  );
};
