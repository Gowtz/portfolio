import Footer from "../Footer";
import Header from "../Header";
import About from "./About";
import Experience from "./Experience";
import Hero from "./Hero";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
