import Image from "next/image"

export default function Intro() {
  return (
  <>
  {/*  First Page */}
  <div className="h-lvh md:px-24 flex items-center justify-center ">
        <div className="w-3/5">
          <div className="hidden md:block text-5xl leading-relaxed mb-10 ">
            As an aspiring developer, I'm on a journey to transform lines of
            code into meaningful and impactful creations.
          </div>
          <div className="block md:hidden text-3xl leading-relaxed mb-10 ">
            As an aspiring developer, I'm on a journey to transform lines of
            code into meaningful and impactful creations.
          </div>
          <a href="#tools">
            {" "}
            <span className="bg-slate-100 font-semibold px-5 py-2 rounded-md text-2xl text-gray-900">
              {" "}
              Know More
            </span>
          </a>
        </div>
        <div className=" hidden md:block m-auto">
          {" "}
          <Image src="./github-mark.svg" alt="Image" width="600" height="760" />{" "}
        </div>
      </div>
  </>
  )
}
