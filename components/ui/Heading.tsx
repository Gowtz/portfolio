import Link from "next/link"
import { ReactNode } from "react"
export default function Heading({children,id}:{children:ReactNode,id:string}) {
  return (
    <Link href={`#${id}`} className="hover:underline hover:underline-offset-2">
      <h2 className='text-center text-5xl lg:text-6xl pt-32 my-10' id={id}>{children}</h2>
    </Link>
  )
}

