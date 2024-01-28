export default function Header() {
    return (
        <>
            <header className=" navbar w-full h-28 m-auto fixed top-0 ">
                <nav className="w-4/5 m-auto h-full  flex justify-between items-center ">
                    <div className="Logo text-3xl"><a href="#">Gowtham </a> </div>
                    <ul className="flex justify-evenly items-center gap-5 text-xl text-slate-400">
                        <li className="hidden md:block hover:text-blue-50 ease-in duration-100">
                            <a href="#tools">Tools</a>
                        </li>
                        <li className="hidden md:block hover:text-blue-50 ease-in duration-100">
                            <a href="#skills">Skills</a>
                        </li>
                        <li className="hidden md:block hover:text-blue-50 ease-in duration-100">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className=" bg-slate-100 font-semibold text-gray-800 py-3 px-4 rounded-md">
                            <a href="/Resume.pdf" download="Resume">
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    )
}
