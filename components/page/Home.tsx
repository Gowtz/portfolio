import ScrollObserver from "@/hooks/ScrollObserver";
import Footer from "../Footer";
import Header from "../Header";
import About from "./About";
import Experience from "./Experience";
import Hero from "./Hero";
import Projects from "./Projects";
import Repository from "./Repository";

export default function Home() {
  return (
    <>
      <ScrollObserver>
        <Header />
        <Hero />

        <About />
        <Experience />
        <Projects />
        <Repository />
        <Footer />
      </ScrollObserver>
    </>
  );
}
