import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <nav className=" z-50 flex flex-wrap w-full justify-center sm:justify-between items-center p-4 top-0 border-b-0">
      <p className="text-4xl font-bold border-2 p-2">isur.dev</p>
      <div className="flex flex-wrap justify-center">
        <NavbarItem title="About Me" href="#about" />
        <NavbarItem title="Skills" href="#skills" />
        <NavbarItem title="Projects" href="#projects" />
        <NavbarItem title="Personal" href="#personal" />
        <NavbarItem title="Contact" href="#contact" />
      </div>
    </nav>
  );
};

interface NavbarItemProps {
  title: string;
  href: string;
}

const NavbarItem: FC<NavbarItemProps> = ({ title, href }) => {
  return (
    <a
      href={href}
      className="hover:shadow-xd px-4 border-2 m-1 p-1 hover:underline"
    >
      {title}
    </a>
  );
};
