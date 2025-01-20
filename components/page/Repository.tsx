export const revalidate = 3600
import { getRepo } from "@/utils/actions"
import { Repo } from "@/utils/types"
import Link from "next/link"
import { Star } from "lucide-react"
import Heading from "../ui/Heading"
export default async function Repository() {


  const repos: Repo[] = await getRepo()
  return (
    <div className="container mx-auto">
      <Heading id="repos">Repository</Heading>
    <div className="container mx-auto grid grid-cols-5 listCount gap-5 px-5">
      {
        repos?.map(repo => repo.description && <Reposo key={repo.id} data={repo} />)
      }
    </div>
    </div>
  )
}

function Reposo({ data }: { data: Repo }) {
  return (

    <Link href={data.html_url}>
      <div className="card h-full group rounded-lg border border-borderColor hover:border-borderColorHover px-4 py-3 hover:bg-[#ffffff07] transition-all duration-200 hover:scale-[1.01] flex flex-col">

        <h1 className="text-2xl font-bold mb-2 group-hover:underline">{data.name}</h1>

        <p className=" line-clamp-3 text-xs mb-5">{data.description}</p>
        <div className="flex mt-auto justify-between items-center  ">
          <div className="start flex gap-2 items-center">
            <Star absoluteStrokeWidth size={18} />
            <span>{data.stargazers_count}</span>
          </div>
          <span className="px-1.5 py-0.5 text-xs rounded-full text-background bg-white group-hover:bg-blue-900 transition-all duration-200 group-hover:text-white">{data.full_name}</span>
        </div>
      </div>
    </Link>
  )
}

