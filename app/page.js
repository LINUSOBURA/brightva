import About from "@/components/About";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Main() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Projects />
      <Testimonials />
    </>
  );
}
