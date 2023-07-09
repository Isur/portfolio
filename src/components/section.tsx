import { FC, PropsWithChildren } from "react";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";

interface SectionProps {
    id: string;
    title: string;
    next?: string;
    prev?: string;
}

export const Section: FC<PropsWithChildren<SectionProps>> = (props) => {
    return (
        <section className="mt-5 pt-5">
            <a id={props.id} />
            <div className="flex justify-center">
                <p className="text-4xl font-bold">{props.title}</p>
            </div>
            <div className="flex flex-col items-center justify-between w-full">
                {props.children}
            </div>
        </section>
    )
};
