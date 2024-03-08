import Tools from "./components/Tools";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Githubrecords from "./components/Githubrecords";

export default function page() {
  return (
    <>
      {/* First page */}
      <Intro />
      {/* Second Page */}
      <Tools />
      {/* Third Page */}
      <Skills />
      {/* Footer */}
      <Githubrecords />
      <Footer />
    </>

  )
}
