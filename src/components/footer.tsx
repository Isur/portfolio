import { FC } from "react";

export const Footer: FC = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center justify-center h-16 shadow-xd">
      <p>© {date} Artur Bednarczyk</p>
    </footer>
  );
};
