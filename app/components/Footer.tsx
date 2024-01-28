import Image from "next/image"
const size = 50
export default function Footer() {
    return (
        <header>
            <nav className="h-20 w-10/12 m-auto flex justify-between items-center mt-52 ">
                <div className="">@Created By Gowtham</div>
                <div className="social__media flex items-center">
                    <ul className="flex gap-4 items-center ">
                        <li className="hover:bg-blue-900 p-2 rounded-2xl ease-in duration-200"><a href="https://www.instagram.com/mr.code.gamer"><Image src="/social/Instagram.png" alt="Instagram" width={size} height={size} /></a></li>
                        <li className="hover:bg-blue-900 p-2 rounded-2xl ease-in duration-200"><a href="https://github.com/gowtham-dev369"><Image src="/social/Github.png" alt="GitHub" width={size} height={size} /></a></li>
                        <li className="hover:bg-blue-900 p-2 rounded-2xl ease-in duration-200"><a href="https://www.linkedin.com/in/gowtham-v-702b781aa/"><Image src={"/social/LinkedIn.png"} alt="LinkedIn" width={size} height={size} /></a></li>
                        <li className="hover:bg-blue-900 p-2 rounded-2xl ease-in duration-200"><a href="https://twitter.com/GowthamVijay162"><Image src={"/social/Twitter.png"} alt="Twitter" width={size} height={size} /></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
