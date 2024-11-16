// src/pages/RoleSelection.jsx
import React from "react";
import Button from "../components/Button";
import AuthLayout from "../layouts/AuthLayout";

const RoleSelection = () => {
  const handleRoleSelection = (role) => {
    console.log("Selected role:", role);
    // Redirect to the appropriate dashboard based on the role
    if (role === "receptionist") {
      window.location.href = "/receptionist/dashboard";
    } else if (role === "doctor") {
      window.location.href = "/doctor/dashboard";
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-6">Select Your Role</h2>
      <div className="space-y-4">
        <Button
          text="Receptionist"
          onClick={() => handleRoleSelection("receptionist")}
          className="w-full"
        />
        <Button
          text="Doctor"
          onClick={() => handleRoleSelection("doctor")}
          className="w-full"
        />
      </div>
    </AuthLayout>
  );
};

export default RoleSelection;
