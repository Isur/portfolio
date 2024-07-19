import Image from "next/image";

export const About = () => {
  return (
    <div className="flex flex-col flex-wrap gap-10 justify-center items-center">
      <div className="border outline">
        <Image alt="me" src="/me.jpeg" width={300} height={400} />
      </div>
      <div className="text-xl min-w-[300px] max-w-[800px] p-5 text-pretty">
        <p>
          Hi! My name is Artur Bednarczyk. On the Internet, I use the nickname
          Isur.
        </p>
        <br />
        <p>
          My first lines of code were written over a decade ago. Professionally,
          my career started {new Date().getFullYear() - 2018} years ago. I am
          currently a Fullstack Developer at Ivy.ai, where I primarily work with
          TypeScript.
        </p>
        <br />
        <p>
          Personally, I am the author of a small{" "}
          <a href="https://blog.isur.dev" target="_blank" className="underline">
            Blog
          </a>
          , an npm package called{" "}
          <a
            href="https://www.npmjs.com/package/file-json-validator"
            target="_blank"
            className="underline"
          >
            file-json-validator
          </a>
          , and a tool for creating nice typing effects in videos:{" "}
          <a
            href="https://chat-bubbles.isur.dev"
            className="underline"
            target="_blank"
          >
            Chat Bubbles
          </a>
        </p>
        <br />
        <p>
          Education-wise, I completed my master&apos;s degree at the Silesian
          University of Technology.
        </p>
        <br />
        <p>
          Throughout my time with code, I have participated in many
          projects—mostly related to the web, but not exclusively. You can read
          more about my career and other personal projects below.
        </p>
      </div>
    </div>
  );
};
