import Heading from "../ui/Heading";

export default function Experience() {
  return (
    <section className="container mx-auto my-24 px-10 lg:w-7/12" id="experience">

        <Heading id="expreience">Experience</Heading>
      <h3 className="text-2xl mb-2">AI Robosoft</h3>
      <div className="flex w-full justify-between mb-5 text-thrice text-textThird">
        <h3>Full stack developer intern</h3>
        <span>mar-24/apr-24</span>
      </div>
      <p className="description text-xl text-textSecondary">
        Work as a Full stack developer intern managing the user and develping
        the profile section of the socila media appilication with the help of
        mentor.
      </p>
    </section>
  );
}
