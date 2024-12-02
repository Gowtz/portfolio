import FullSection from "../FullSection";

export default function About() {
  return (
    <>
      <FullSection>
        <h1 id="about" className="text-5xl lg:text-6xl pt-12 mb-10">About me</h1>
        <div className="text-2xl lg:text-3xl lg:leading-relaxed">

        <p>I am a recent graduate with a strong passion for full-stack development and DevOps. Over the course of my academic journey, I have gained hands-on experience by building a diverse range of projects using various popular technologies. My technical expertise spans multiple frameworks and languages, including the MERN stack, Next.js, SvelteKit, Django, and FastAPI.</p>
          <br />
        <p>Beyond coding, I am deeply enthusiastic about exploring and mastering new technologies, always aiming to stay at the forefront of the ever-evolving tech landscape. My adaptability and eagerness to learn allow me to quickly integrate innovative solutions into my work.</p>
        </div>
        <h3 className="text-4xl mt-14 mb-16">Skills</h3>
        <div className="cards w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="card border-thrice rounded-lg cursor-pointer border p-5 hover:bg-white hover:bg-opacity-5 transition-all duration-150 flex flex-col hover:scale-[1.02]">
            <div className="cardTitle  text-2xl mb-4 " >
              Frontend 
            </div>
            <div className="cardbody mb-3">
              Creating dynamic, user-friendly, and visually appealing web experiences. I excel at writing clean, efficient code to build responsive and accessible interfaces.            </div>
            <div className="mt-auto">
             ReactJs, NextJs, Tailwindcss, SveltKit. 
            </div>
          </div>
          <div className="card border-thrice rounded-md border p-5 hover:bg-white hover:bg-opacity-5 transition-all duration-75 flex flex-col hover:scale-[1.02]">
            <div className="cardTitle  text-2xl mb-4 " >
              Backend
            </div>
            <div className="cardbody mb-3">
                Build robust, scalable, and efficient server-side applications. I specialize in creating secure APIs, managing databases, and optimizing performance to support seamless functionality.            </div>
            <div className="mt-auto">
             ExpressJs, Django, Serverless.
            </div>
          </div>
          <div className="card border-thrice rounded-md border p-5 hover:bg-white hover:bg-opacity-5 transition-all duration-75 flex flex-col hover:scale-[1.02]">
            <div className="cardTitle  text-2xl mb-4 " >
              Devops
            </div>
            <div className="cardbody mb-3">
              Passionate about streamlining workflows and ensuring efficient, scalable deployments. I specialize in automation, CI/CD pipelines, and infrastructure management to enhance development and operations
            </div>
            <div className="mt-auto">
             Docker, Kubenetes , GithubAction.
            </div>
          </div>
        </div>
      </FullSection>
    </>
  );
}
