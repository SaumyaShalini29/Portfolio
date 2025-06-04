// components/Cube.jsx
import React from "react";
import About from "./About";
import Overview from "./Overview";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Thank from "./thank";
import "./Cube.css"; // External CSS for 3D transforms

const Cube = () => {
  return (
    <div className="cube-scene">
      <div className="cube-box">
      <div className="cube-face cube-top"><About /></div>
      <div className="cube-face cube-left"><Overview /></div>
        <div className="cube-face cube-front"><Skills /></div>
        <div className="cube-face cube-back"><Project /></div>
        <div className="cube-face cube-right"><Contact /></div>
        <div className="cube-face cube-bottom"><Thank /></div>
      </div>
    </div>
  );
};

export default Cube;