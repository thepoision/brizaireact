// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-500 text-white p-6">
      <h2 className="text-2xl font-semibold mb-8">Co Doctor</h2>
      <ul>
        <li className="mb-4">
          <Link to="/receptionist/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/receptionist/add-patient" className="hover:text-gray-200">
            Add Patient
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/doctor/dashboard" className="hover:text-gray-200">
            Doctor Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
