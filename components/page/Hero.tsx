import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center font-semibold container mx-auto text-foreground">
      <div className="flex flex-col justify-center items-center mx-auto px-11 text-center ">
        <h1 className="text-6xl lg:text-7xl mb-8 animation">
          Hi! i am Gowtham
        </h1>
        <h3 className="text-4xl font-medium lg:text-5xl animation hover:scale-x-[1.01] transition-all duration-500 ">
          I&apos;m on a journey to transform lines of code into meaningful and
          impactful creations.
        </h3>
        <Link href={'#about'} className="my-20">
          <div className="px-5 py-2 rounded-lg bg-white text-background animation  text-2xl font-light transition-all duration-500 ">Know more</div>
        </Link>
      </div>
    </div>
  );
}
