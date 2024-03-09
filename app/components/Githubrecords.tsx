import Image from "next/image"
import Repos from "./Repos"
type user = {
    login: string,
    avatar_url: string,
    url: string,
    name: string,
    bio: string,
    followers: number,
    following: number
}

export default async function Githubrecords() {
    const response = await fetch('https://api.github.com/users/gowtham-dev369')
    const data: user = await response.json()
    return (
        <div className="mt-36  " id="profile" >
            <div className="card w-10/12 m-auto flex justify-between items-center flex-col xl:flex-row">
                <div className="profile w-2/6 flex flex-col justify-center items-center">
                    <Image src={data.avatar_url} alt="avatar" height={400} width={400} className="rounded-2xl my-5" />
                    <a href={data.url} className="text-4xl mb-2 hover:underline ">{data.name}</a>
                    <div className=" text-xl">{data.bio}</div>
                </div>
                <div className="Repository  mx-10 w-4/6">
                    <Repos />
                </div>
            </div>
        </div>
    )
}
