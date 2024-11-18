import Header from "@/components/Header";
import Hero from "@/components/hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>

  );
}
 