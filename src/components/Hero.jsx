import React from "react";
import "./Hero.css";
import profilePic from "../assets/vivek.jpg"; // Ensure your image is inside src/assets/

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Vivek.</h1>
          <p>
          Vivek | Full-Stack Developer | MERN Enthusiast


          </p>
        </div>
        <div className="hero-image">
          <img src={profilePic} alt="Vivek" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
