import Image from "next/image"
import Repose from "./Repose"
type repo = {
    id:number,
    full_name: string,
    private: boolean,
    html_url: string,
    fork: boolean,
    stargazers_count: number,
    watchers_count: number,
    languages_url: string
}

export default async function Repos() {
    const repository: repo[] = await fetch('https://api.github.com/users/gowtz/repos').then(res => res.json())
    return (

        <>
            <h1 className="text-4xl pb-5 mx-10 mt-10 text-center">REPOSITORIES</h1>
            <div className="repos grid grid-cols-1 xl:grid-cols-2 ">
                {repository.map(repo => {
                    if (!repo.fork) {
                        return (
                            <>
                                <div  key={repo.id} className="rep flex flex-col text-blue-300 bg-blue-950 m-2 py-2 px-10 rounded-md overflow-hidden">
                                    <a href={repo.html_url} target="_blank">
                                        <h1 className="py-2 text-3xl hover:text-white hover:underline ease-in"> {repo.full_name.slice(15)}</h1>
                                    </ a>
                                    <div className="second-line flex justify-between">

                                    <Repose lang={repo.languages_url}/>
                                    <div className="start flex items-center">Start
                                        <Image src={"/image.png"} alt="start" height={15} width={15} className="ml-2" />  <h3 className="text-xl pl-1">{repo.stargazers_count}</h3>
                                    </div>
                                    </div>

                                </div>
                            </>
                        )
                    }
                })}
            </div>
        </>
    )
}