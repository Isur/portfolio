import { FC } from 'react';
import Image from "next/image";

export const About: FC = () => {
    return (
        <div className="flex flex-wrap gap-10 justify-center items-center p-10">
            <div className="border-2">
                <Image alt="me" src="/me.jpeg" width={300} height={800} />
            </div>
            <div className="text-xl min-w-[300px] max-w-[600px] p-5">
                <p>
                    Hi! My name is Artur Bednarczyk. Internet knows me as Isur.
                </p>
                <p>
                    I have finished my master degree at the Silesian University of Technology.
                </p>
                <br />
                <p>
                    My professional carreer started {new Date().getFullYear() - 2018} years ago.
                </p>
                <p>
                    Now I am Senior Software Developer and Team Leader at Estimity. Mostly working with TypeScript and Python on backend stuff and creating new aweseome startups.
                </p>
                <br />
                <p>
                    Extending my knowledge in the field of programming is not only my work but also my passion. I am eager to learn new things and always ready for new challenges.
                </p>
            </div>
        </div>
    )
}
