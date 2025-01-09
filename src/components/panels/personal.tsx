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
    target="_blank"
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
  return (
    <div className="flex flex-col grow gap-5 p-10 justify-center items-center min-w-[300px] max-w-[900px]">
      <SomethingPersonal
        name="Blog"
        skills={["Writing", "Development"]}
        url="https://blog.isur.dev"
        description="My blog where I write about software development, packages I created."
      />
      <SomethingPersonal
        name="file-json-validator"
        skills={["Translations", "i18n", "TypeScript", "npm package"]}
        url="https://www.npmjs.com/package/file-json-validator"
        description="Npm package to validate json files and directory structure. It will help you with keeping translations or other files in correct shape."
      />
      <SomethingPersonal
        name="Video Chat Bubbles"
        skills={["React", "TypeScript", "Tailwind", "Vite"]}
        url="https://chat-bubbles.isur.dev"
        description="App that allows to create video chat bubbles that might be used on videos/streams. App has green background and typing creates bubbles like in chat. There is also possibility to change some settings like font size or padding, position of bubbles. Notes is also available to write some notes. All settings and notes are saved in local storage."
      />
      <Dialog>
        <DialogTrigger asChild>
          <Image
            src="/video-chat-bubble.jpeg"
            alt="chat-bubbles"
            className="rounded-md object-cover hover:cursor-pointer"
            width={211 * 3}
            height={142 * 3}
          />
        </DialogTrigger>
        <DialogOverlay />
        <DialogContent className="">
          <DialogTitle> Video Chat Bubbles </DialogTitle>
          <Image
            src="/video-chat-bubble.jpeg"
            alt="chat-bubbles"
            className="rounded-md object-cover"
            width={2117}
            height={1420}
          />
          <DialogClose> Close </DialogClose>
        </DialogContent>
      </Dialog>
      <SomethingPersonal
        name="Dotfiles"
        skills={["Bash", "Lua", "Linux", "Ansible"]}
        url="https://github.com/Isur/dotfiles"
        description="My dotfiles with install script that should work arch based linux distros, and on mac os. There is also server (debian based) install with configs useful on servers that I connect via ssh. Installation ansbile playbook that prepares configs, install apps, setup ssh keys and prepare directory structures."
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
    </div>
  );
};
