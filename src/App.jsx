import React from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./About";
import Overview from "./Overview";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Thank from "./Thank";

;
//import Cube from "./Cube";
//import Cube from "./components/Cube";

function App() {
  //const location = useLocation();

  //const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-black text-white">
      
      <Navbar />

      <div className="w-full p-4">
        <Routes>
        <Route path="/" element={<About />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank" element={<Thank />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
