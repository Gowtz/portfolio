export const revalidate = 3600
import { Project } from "@/utils/types";
import FullSection from "../FullSection";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, MoveUpRight } from "lucide-react";
import Heading from "../ui/Heading";
import { getProject } from "@/utils/actions";

export default async function Projects() {
  const projects = await getProject()
  return (
    <>
      <FullSection>
        <div className="div mt-20" id="project">
            <Heading id="projects"> Projects</Heading>
          <div className="projectsCards mt-10 mx-auto grid gap-8 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {projects.map((project:Project) => (
              <ProjetcCard key={project.id} props={project} />
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
    <div className="card flex flex-col border border-borderColor hover:border-borderColorHover rounded-xl group p-6 hover:bg-[#ffffff07] transition-all duration-150 w-full">
      <div className="projectImage relative  aspect-video">
        {props.projectUrl && (
          <Link href={props.projectUrl} target="_blank">
            <div className="flex py-1.5 px-3 rounded-full absolute z-10 right-3 top-3 bg-white bg-opacity-90 text-black gap-2 text-xs items-center transition-all duration-150 opacity-0 group-hover:opacity-100">
              <MoveUpRight size={15} />
              <span>Open</span>{" "}
            </div>
          </Link>
        )}
        <Image
          src={`https://gowtz.s3.ap-south-1.amazonaws.com/${props.thumbnailURL}`}
          alt={props.title}
          fill
          sizes="100vw"
          className="h-auto w-full rounded-lg object-cover"
        />
      </div>
      <h3 className="text-2xl lg:text-xl font-bold mt-5 text-foreground">{props.title}</h3>
      <div className="cardBody flex flex-col h-full">
        <p className="mb-5 text-sm text-textThird">{props.desc}</p>
        <div className="cardBottom flex justify-between mt-auto">
        <div className="relative flex ">
          <span className="github relative flex cursor-pointer items-center gap-2 bg-blue-800 text-white rounded-lg px-2 py-1.5 text-xs bg-opacity-80 hover:bg-opacity-100 transition-all duration-100">
            <GithubIcon size={15} />
            <Link href={props.gitHubUrl}> {getRepoName(props.gitHubUrl)}</Link>
          </span>
        </div>
        </div>
      </div>
    </div>
  );
}
