"use client";
import Link from "next/link";
import { useState } from "react";
import {
  CircleUserRound,
  Contact,
  Cpu,
  FolderGit2,
  MenuIcon,
  SearchCheck,
  RssIcon,
} from "lucide-react";
import { ModeToggle } from "@/components/toggleMode";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="z-50 flex sm:flex-row flex-col flex-wrap w-full justify-center sm:justify-between items-center p-4 top-0 border-b-0 outline outline-primary-foreground gap-5">
      <div className="w-full sm:w-[250px] flex flex-row justify-between items-center gap-5">
        <p className="text-4xl font-bold p-2 outline outline-primary-foreground">
          isur.dev
        </p>
        <Button
          variant="ghost"
          className="sm:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <MenuIcon />
        </Button>
      </div>
      <div
        className={cn(
          "sm:flex-row flex-wrap justify-center gap-1 items-center",
          open ? "flex flex-col" : "hidden",
          "sm:flex",
        )}
      >
        <Button
          onClick={close}
          variant="outline"
          asChild
          className="w-[160px] sm:w-auto flex flex-row justify-between gap-3"
        >
          <Link href="https://blog.isur.dev" target="_blank">
            <RssIcon /> Blog
          </Link>
        </Button>
        <Button
          onClick={close}
          variant="outline"
          asChild
          className="w-[160px] sm:w-auto flex flex-row justify-between gap-3"
        >
          <Link href="#about">
            <SearchCheck /> About Me
          </Link>
        </Button>
        <Button
          onClick={close}
          variant="outline"
          asChild
          className="w-[160px] sm:w-auto flex flex-row justify-between gap-3"
        >
          <Link href="#skills">
            <Cpu /> Skills
          </Link>
        </Button>
        <Button
          onClick={close}
          variant="outline"
          asChild
          className="w-[160px] sm:w-auto flex flex-row justify-between gap-3"
        >
          <Link href="#career">
            <FolderGit2 /> Career
          </Link>
        </Button>
        <Button
          onClick={close}
          variant="outline"
          asChild
          className="w-[160px] sm:w-auto flex flex-row justify-between gap-3"
        >
          <Link href="#personal">
            <CircleUserRound /> Personal
          </Link>
        </Button>
        <Button
          onClick={close}
          variant="outline"
          asChild
          className="w-[160px] sm:w-auto flex flex-row justify-between gap-3"
        >
          <Link href="#contact">
            <Contact />
            Contact
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};
