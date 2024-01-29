"use client";
import { FC } from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Github } from "lucide-react";

const Link: FC<{ name: string; href: string }> = ({ href, name }) => (
  <a
    className="hover:shadow-xd text-xl underline flex flex-row gap-5"
    href={href}
  >
    <Github />
    {name}
  </a>
);

const SomethingPersonal: FC<{
  name: string;
  url: string;
  description: string;
}> = ({ name, url, description }) => (
  <Card className="flex flex-col grow gap-5 justify-center items-center">
    <CardTitle className="w-full">
      <Link href={url} name={name} />
    </CardTitle>
    <CardContent> {description} </CardContent>
  </Card>
);

export const Personal: FC = () => {
  return (
    <div className="flex flex-col grow gap-5 p-10 justify-center items-center min-w-[300px] max-w-[900px]">
      <SomethingPersonal
        name="Dotfiles"
        url="https://github.com/Isur/dotfiles"
        description="My dotfiles with install script that should work on debian and arch based linux distros, and on mac os. For debian based there is also server install with configs useful on servers that I connect via ssh. Installation script that prepares configs, install apps, setup ssh keys and prepare directory structures."
      />
      <Image
        src="/dotfiles.png"
        alt="dotfiles"
        className="rounded-md object-cover"
        width={3440}
        height={1440}
      />
      <SomethingPersonal
        name="Web App Setup"
        url="https://github.com/Isur/web-app-setup"
        description="Web application server starter - nginx, certbot, letsencrypt, postgres, example apps and github workflows for testing and deploying. Easy to use and modify for new projects that are deployed on linux server."
      />
      <SomethingPersonal
        name="TS Start"
        url="https://github.com/Isur/ts-start"
        description="Starter for Typescript app with scripts, swc, jest, eslint, prettier, dockerfile, docker compose and all configs. Great start for PoC or some testing without need to setup everything from scratch."
      />
    </div>
  );
};
