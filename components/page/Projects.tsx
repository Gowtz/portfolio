import { Project } from "@/utils/types";
import FullSection from "../FullSection";
import { SampleProjects } from "@/sample";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, MoveUpRight } from "lucide-react";

export default function Projects() {
  return (
    <>
      <FullSection>
        <div className="div mt-20" id="project">
          <Link href="#projects" className="hover:underline">

          <h2 id="projects" className="text-5xl lg:text-7xl pt-12 mb-28 text-center font-bold tracking-tighter">Projects</h2>
          </Link>
          <div className="projectsCards  mx-auto grid gap-8 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {SampleProjects.map((ele) => (
              <ProjetcCard key={ele.id} props={ele} />
            ))}
          </div>
        </div>
      </FullSection>
    </>
  );
}

function getRepoName(name: string) {
  const data = name.split("/");
  return `${data.at(-2)}/${data.at(-1)}`;
}

function ProjetcCard({ props }: { props: Project }) {
  return (
    <div className="card flex flex-col border border-borderColor hover:border-borderColorHover rounded-xl group p-6 hover:bg-[#ffffff07] transition-all duration-150">
      <div className="projectImage relative  aspect-video">
        {props.liveURL && (
          <Link href={props.liveURL}>
            <div className="flex py-1.5 px-3 rounded-full absolute z-10 right-3 top-3 bg-white bg-opacity-90 text-black gap-2 text-xs items-center transition-all duration-150 opacity-0 group-hover:opacity-100">
              <MoveUpRight size={15} />
              <span>Open</span>{" "}
            </div>
          </Link>
        )}
        <Image
          src={props.imageURL}
          alt={props.title}
          fill
          sizes="100vw"
          className="h-auto w-full rounded-lg object-cover"
        />
      </div>
      <h3 className="text-2xl lg:text-xl font-bold mt-5 text-foreground">{props.title}</h3>
      <div className="cardBody ">
        <p className="mb-5 text-sm text-textThird">{props.content}</p>
        <div className="cardBottom flex justify-between">

        <span className="mt-2">{props.time}</span>
        <div className="relative flex ">
          <span className="github relative flex cursor-pointer items-center gap-2 bg-blue-800 text-white rounded-lg px-2 py-1.5 text-xs bg-opacity-80 hover:bg-opacity-100 transition-all duration-100">
            <GithubIcon size={15} />
            <Link href={props.githubURL}> {getRepoName(props.githubURL)}</Link>
          </span>
        </div>
        </div>
      </div>
    </div>
  );
}
