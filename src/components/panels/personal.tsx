"use client";
import { FC } from "react";
import Image from "next/image";
import { Github } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";
import {
  DialogContent,
  DialogOverlay,
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogClose,
} from "../ui/dialog";
import { Badge } from "../ui/badge";

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
  skills?: string[];
}> = ({ name, url, description, skills }) => (
  <Card className="w-full flex flex-col grow justify-center items-center">
    <CardTitle className="w-full">
      <Link href={url} name={name} />
    </CardTitle>
    <CardContent className="w-full text-pretty">{description}</CardContent>
    <div className="flex gap-3 flex-wrap w-full p-4 pt-0">
      {skills &&
        skills.map((skill) => (
          <Badge key={skill} variant="outline">
            {skill}
          </Badge>
        ))}
    </div>
  </Card>
);

export const Personal: FC = () => {
  const videoId = "HqAlHG1nJRE";
  return (
    <div className="flex flex-col grow gap-5 p-10 justify-center items-center min-w-[300px] max-w-[900px]">
      <SomethingPersonal
        name="Video Chat Bubbles"
        skills={["React", "TypeScript", "Tailwind", "Vite"]}
        url="https://chat-bubbles.isur.dev"
        description="App that allows to create video chat bubbles that might be used on videos/streams. App has green background and typing creates bubbles like in chat. There is also possibility to change some settings like font size or padding, position of bubbles. Notes is also available to write some notes. All settings and notes are saved in local storage."
      />
      <SomethingPersonal
        name="YouTube @IsurTyping"
        skills={["Typing", "Keyboard"]}
        url="https://youtube.com/@IsurTyping"
        description="My YouTube channel where I upload typing videos. Daily short and weekly full video. I utilize here my other project - video chat bubbles."
      />
      <iframe
        width="100%"
        className="aspect-video"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <SomethingPersonal
        name="Dotfiles"
        skills={["Bash", "Lua", "Linux"]}
        url="https://github.com/Isur/dotfiles"
        description="My dotfiles with install script that should work on debian and arch based linux distros, and on mac os. For debian based there is also server install with configs useful on servers that I connect via ssh. Installation script that prepares configs, install apps, setup ssh keys and prepare directory structures."
      />
      <Dialog>
        <DialogTrigger asChild>
          <Image
            src="/i3wm.png"
            alt="dotfiles"
            className="rounded-md object-cover hover:cursor-pointer"
            width={344 * 3}
            height={144 * 3}
          />
        </DialogTrigger>
        <DialogOverlay />
        <DialogContent className="">
          <DialogTitle> Linux - i3wm </DialogTitle>
          <Image
            src="/i3wm.png"
            alt="dotfiles"
            className="rounded-md object-cover"
            width={3440}
            height={1440}
          />
          <DialogClose> Close </DialogClose>
        </DialogContent>
      </Dialog>
      <SomethingPersonal
        name="Web App Setup"
        skills={["nginx", "docker", "CI/CD"]}
        url="https://github.com/Isur/web-app-setup"
        description="Web application server starter - nginx, certbot, letsencrypt, postgres, example apps and github workflows for testing and deploying. Easy to use and modify for new projects that are deployed on linux server."
      />
      <SomethingPersonal
        name="TS Start"
        skills={["TypeScript", "Docker", "jest"]}
        url="https://github.com/Isur/ts-start"
        description="Starter for Typescript app with scripts, swc, jest, eslint, prettier, dockerfile, docker compose and all configs. Great start for PoC or some testing without need to setup everything from scratch."
      />
    </div>
  );
};
