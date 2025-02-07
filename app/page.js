import About from "@/components/About";
import { Contact } from "@/components/Contact";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import ProjectsCopy from "@/components/ProjectsCopy";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Main() {
  return (
    <div className="">
      <Home />
      <About />
      <Services />
      <ProjectsCopy />
      {/* <Projects /> */}
      <Testimonials />
      <Contact />
    </div>
  );
}
