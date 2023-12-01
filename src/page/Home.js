import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Skill from "../components/Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      {/* <Blog /> */}
      <Skill/>
      <Contact />
    </>
  );
};

export default Home;
