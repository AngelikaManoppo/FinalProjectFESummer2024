import React from "react";
import Header from "../../partial/header";
import Profile from "../../partial/profile";
import About from "../../partial/about";
import Experience from "../../partial/experience";
import Projects from "../../partial/projects";
import Contact from "../../partial/contact";
import Footer from "../../partial/footer";

const Homepage = () => {
  return (
<div>
    <Header />
    <Profile />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
</div>
  );
};

export default Homepage;
