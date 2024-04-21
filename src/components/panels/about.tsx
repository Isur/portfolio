import Image from "next/image";

export const About = () => {
  return (
    <div className="flex flex-col flex-wrap gap-10 justify-center items-center">
      <div className="border outline">
        <Image alt="me" src="/me.jpeg" width={300} height={400} />
      </div>
      <div className="text-xl min-w-[300px] max-w-[800px] p-5 text-pretty">
        <p>Hi! My name is Artur Bednarczyk. Internet knows me as Isur.</p>
        <br />
        <p>
          My professional career started {new Date().getFullYear() - 2018} years
          ago. Now I am Senior Software Developer at Estimity. Mostly working
          with TypeScript and Python on backend stuff and creating new awesome
          startups. Author of{" "}
          <a className="underline" href="https://blog.isur.dev">
            https://blog.isur.dev
          </a>{" "}
          and npm package{" "}
          <a
            className="underline"
            href="https://www.npmjs.com/package/file-json-validator"
            target="_blank"
          >
            file-json-validator
          </a>
          .
        </p>
        <br />
        <p>
          I have finished my master degree at the Silesian University of
          Technology.
        </p>
        <br />
        <p>
          Throughout my career I have participated in many projects - mostly,
          but not only, related to the web. Currently my focus resolves around
          backend side of applications.
        </p>
      </div>
    </div>
  );
};
