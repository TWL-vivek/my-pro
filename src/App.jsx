import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
