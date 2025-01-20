'use client'
import { AboutData } from "@/sample";
import FullSection from "../FullSection";
import Link from "next/link";
import { useContext, useRef } from "react";
import { ScrollContext } from "@/hooks/ScrollObserver";
import Heading from "../ui/Heading";

const opacityForBlock = (sectionProgress:number,blockNumber:number)=>{
  const progress = sectionProgress - blockNumber
  if(progress >=0 && progress <1) return 1
return 0.3

}
export default function About() {
  const {scrollY}= useContext(ScrollContext)
  const refContainer  = useRef<HTMLDivElement>(null)
  const noOfPages = 3
  let progress = 0 
  const { current :elContainer } = refContainer
if (elContainer){
const {clientHeight,offsetTop}= elContainer
    const screenH = window.innerHeight 
    const HalfH = screenH/2 
    const percentY = Math.min(clientHeight + HalfH , Math.max(-screenH, scrollY - offsetTop)+HalfH)/clientHeight
    progress = Math.min(noOfPages -0.5 ,Math.max(0.5,percentY * noOfPages))
  }
  return (
    <>
      <FullSection>
        <div className="w-full max-5xl mx-auto " ref={refContainer}>
            <Heading id="abouts"><span id="about" className="pt-72">About</span></Heading>
          <div className="text-2xl lg:text-4xl lg:leading-relaxed">
            <div className="text-white transition-all duration-200" style={{
              opacity:opacityForBlock(progress,0) 
            }}>
              I am a recent graduate with a strong passion for full-stack
              development and DevOps. Over the course of my academic journey, I
              have gained hands-on experience by building a diverse range of
              projects using various popular technologies. My technical
              expertise spans multiple frameworks and languages, including the
              MERN stack, Next.js, SvelteKit, Django, and FastAPI.
            </div>
            <br />
            <div  className="text-white transition-all duration-200" style={{
              opacity:opacityForBlock(progress,1)
            }}>
              Beyond coding, I am deeply enthusiastic about exploring and
              mastering new technologies, always aiming to stay at the forefront
              of the ever-evolving tech landscape. My adaptability and eagerness
              to learn allow me to quickly integrate innovative solutions into
              my work.
            </div>
          </div>
          <div className="w-full max-w-5xl mx-auto mt-20">

          <Link href="#skills" className="hover:underline">
            <h3 id="skills" className="text-4xl pt-14 mb-16 text-center">
              Skills
            </h3>
          </Link>
          <div className="cards w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {AboutData.map((ele:any) => (
              <AboutCard
                key={ele.title}
                title={ele.title}
                content={ele.content}
                tools={ele.tools}
              />
            ))}
          </div>
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
