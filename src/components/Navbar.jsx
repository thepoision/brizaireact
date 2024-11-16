// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">Co Doctor</h1>
        <div>{/* Links can be added here later */}</div>
      </div>
    </nav>
  );
};

export default Navbar;
