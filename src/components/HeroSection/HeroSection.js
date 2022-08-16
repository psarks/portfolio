import React from "react";
import "./HeroSection.css";
import Typical from "react-typical";

const  HeroSection = () => {
  return (
    <div className="hero-container">
      <h5>May the force be with me</h5>
      <video src="./videos/beach.mp4" autoPlay loop muted />      
      
      <p6>
        I love to {""}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "write a book 📖",
            3000,
            "go to a Champions league game⚽",
            3000,
            "go to a World Cup game⚽",
            3000,
            "travel cross country by car or by train 🚙",
            3000,
            "go on a safari 🦁",
            6000,
            "swim with sea turtles 🐢",
          ]}
        />
        
      </p6>
    </div>
  );
}

export default HeroSection;