import Image from 'next/image'
import React from 'react'
const size = 200

export default function Skills() {
  return (
    <>
      <div className=" min-h-lvh mt-20  w-full pt-28" id='skills'>
        <h1 className="text-center text-6xl mb-32 font font-semibold" >Skills</h1>
        <div className="skills">
          <h3 className='text-center text-4xl mb-10'>Framework I use for frontend</h3>
          <div className="frameworks">
            <div className="framework m-auto grid w-8/12 grid-cols-1 mb-10 md:mb-20 md:grid-cols-3 gap-12 justify-items-center justify-center items-center text-center">
              <div className="react">
                <Image src="/skills/ReactJs.png" alt="react" width={size} height={size} />
                <h3 className='text-3xl pt-5'>React Js</h3>
              </div>
              <div className="Next Js">
                <Image src="/skills/NextJs.svg" className="my-10" alt="Next Js" width={size} height={size + 200} />
                <h3 className='text-3xl pt-5'>Next Js</h3>
              </div>
              <div className="sveltkit">
                <Image src="/skills/Svelte.png" alt="Svelte" width={size - 50} height={size - 50} />
                <h3 className='text-3xl pt-10'>SvelteKit</h3>
              </div>
            </div>
            <div className="m-auto grid w-6/12  grid-cols-1 md:grid-cols-2 gap-12 justify-items-center justify-center items-center text-center">
              <div className="sveltkit">
                <Image src="/skills/Django.png" alt="Django" width={size} height={size - 50} />
                {/* <h3 className='text-3xl '>Django</h3> */}
              </div>
              <div className="Express">
                <Image src="/skills/ExpressJs.svg" alt="Express" width={size} height={size} />
                {/* <h3 className='text-3xl pt-10'>SvelteKit</h3> */}
              </div>
            </div>
          </div>
          <div className="database">
            <h3 className='text-center text-4xl mt-28 mb-10'>Database</h3>
            <div className="m-auto grid w-6/12  grid-cols-1 md:grid-cols-2 gap-12 justify-items-center justify-center items-center text-center">
              <div className="MongoDB flex flex-col justify-center items-center">
                <Image src={"/skills/MongoDB.svg"} alt='MongoDB' width={100} height={100} />
                <h3 className='text-3xl '> MongoDB</h3>
              </div>
              <div className="MongoDB flex flex-col justify-center items-center">
                <Image src={"/skills/Mysql.svg"} alt='Mysql' width={size} height={size} />
                <h3 className='text-3xl '> Mysql</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
