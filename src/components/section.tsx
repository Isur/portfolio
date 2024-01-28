import { FC, PropsWithChildren } from "react";

interface SectionProps {
  id: string;
  title: string;
  icon: JSX.Element;
  next?: string;
  prev?: string;
}

export const Section: FC<PropsWithChildren<SectionProps>> = (props) => {
  return (
    <section id={props.id} className="flex flex-col w-screen">
      <h1 className="flex justify-center items-center text-5xl p-5 gap-5">
        {props.icon}
        {props.title}
      </h1>
      <div className="p-5 flex justify-center">{props.children}</div>
    </section>
  );
};
