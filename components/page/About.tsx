import { AboutData } from "@/sample";
import FullSection from "../FullSection";
import Link from "next/link";

export default function About() {
  return (
    <>
      <FullSection>
        <div className=" lg:w-8/12 mx-auto">
          <Link href="#about" className="hover:underline">
            <h2
              id="about"
              className="text-center text-5xl lg:text-6xl pt-12 mb-10"
            >
              About me
            </h2>
          </Link>
          <div className="text-2xl lg:text-3xl lg:leading-relaxed">
            <p>
              I am a recent graduate with a strong passion for full-stack
              development and DevOps. Over the course of my academic journey, I
              have gained hands-on experience by building a diverse range of
              projects using various popular technologies. My technical
              expertise spans multiple frameworks and languages, including the
              MERN stack, Next.js, SvelteKit, Django, and FastAPI.
            </p>
            <br />
            <p>
              Beyond coding, I am deeply enthusiastic about exploring and
              mastering new technologies, always aiming to stay at the forefront
              of the ever-evolving tech landscape. My adaptability and eagerness
              to learn allow me to quickly integrate innovative solutions into
              my work.
            </p>
          </div>
          <Link href="#skills" className="hover:underline">
            <h3 id="skills" className="text-4xl pt-14 mb-16">
              Skills
            </h3>
          </Link>
          <div className="cards w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {AboutData.map((ele) => (
              <AboutCard
                key={ele.title}
                title={ele.title}
                content={ele.content}
                tools={ele.tools}
              />
            ))}
          </div>
        </div>
      </FullSection>
    </>
  );
}

export type AboutCard = {
  title: string;
  content: string;
  tools: string;
};
export function AboutCard({ title, content, tools }: AboutCard) {
  return (
    <>
      <div className="card border-thrice rounded-md border border-borderColor hover:border-borderColorHover p-5 hover:bg-white hover:bg-opacity-5 transition-all duration-75 flex flex-col hover:scale-[1.02]">
        <div className="cardTitle  text-2xl mb-4 ">{title}</div>
        <div className="cardbody mb-3 text-textSecondary ">{content}</div>
        <div className="mt-auto text-textThird">{tools} </div>
      </div>
    </>
  );
}
