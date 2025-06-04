import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-black">
      <Link to="/">About</Link>
      <Link to="/overview">Overview</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/project">Project</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/thank">Thank You</Link>
    </nav>
  );
}

export default Navbar;
