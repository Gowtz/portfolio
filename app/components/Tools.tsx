import Image from "next/image"
export default function Tools() {
  return (
    <>
      <div className="w-full min-h-lvh text-center pt-28 " id="tools">
        <h1 className="text-6xl font-semibold pb-20">Tools & Technologies</h1>
        <div className=" w-3/5 tools grid grid-cols-1 md:grid-cols-2 gap-16  m-auto text-center items-center justify-items-center">
          <div className="w-96 tool">
            <Image src="/tools/vscode.png" alt="VScodePNG" width="150" height="150" />
            <div className="">
              <span className="text-4xl font-semibold ">Visual Studio Code</span><br /><br />
              <span> a code editor redefined and optimized for building  modern web app</span>
            </div>
          </div>
          <div className="w-96 tool">
            <Image src="/tools/Git.png" alt="GitPNG" width="150" height="150" />
            <div className="">
              <span className="text-4xl font-semibold ">Git</span><br /><br />
              <span> Git is a distributed version control system that tracks changes in any set of computer files</span>
            </div>
          </div>
          <div className="w-96 tool">
            <Image src="/tools/Github.png" alt="vscodePNG" width="150" height="150" />
            <div className="">
              <span className="text-4xl font-semibold ">GitHub</span><br /><br />
              <span> developer platform that allows developers to create, store, manage and share their code</span>
            </div>
          </div>
          <div className="w-96 tool">
            <Image src="/tools/Ubuntu.png" alt="vscodePNG" width="150" height="150" />
            <div className="">
              <span className="text-4xl font-semibold ">Ubuntu</span><br /><br />
              <span>Ubuntu is a Linux distribution based on Debian and composed mostly of free and open-source software. </span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
