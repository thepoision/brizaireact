// src/routes/AppRoutes.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Import pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import RoleSelection from "../pages/RoleSelection";
import Dashboard from "../pages/receptionist/Dashboard";
import AddPatient from "../pages/receptionist/AddPatient";
import ReasonForVisit from "../pages/receptionist/ReasonForVisit";
import SymptomDetails from "../pages/receptionist/SymptomDetails";
import AdditionalQuestions from "../pages/receptionist/AdditionalQuestions";
import Confirmation from "../pages/receptionist/Confirmation";

const AppRoutes = () => {
  // Mock user state (to be replaced with actual login logic)
  const isLoggedIn = true; // Set to true for testing, replace with actual login check
  const selectedRole = "receptionist"; // Set to "receptionist" for testing

  return (
    <Router>
      <Routes>
        {/* Default route redirects to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Role Selection Route */}
        <Route
          path="/role-selection"
          element={isLoggedIn ? <RoleSelection /> : <Navigate to="/login" />}
        />

        {/* Receptionist Routes */}
        <Route
          path="/receptionist/dashboard"
          element={
            isLoggedIn && selectedRole === "receptionist" ? (
              <Dashboard />
            ) : (
              <Navigate to="/role-selection" />
            )
          }
        />
        <Route
          path="/receptionist/add-patient"
          element={
            isLoggedIn && selectedRole === "receptionist" ? (
              <AddPatient />
            ) : (
              <Navigate to="/role-selection" />
            )
          }
        />
        <Route
          path="/receptionist/reason-for-visit"
          element={
            isLoggedIn && selectedRole === "receptionist" ? (
              <ReasonForVisit />
            ) : (
              <Navigate to="/role-selection" />
            )
          }
        />
        <Route
          path="/receptionist/symptom-details"
          element={
            isLoggedIn && selectedRole === "receptionist" ? (
              <SymptomDetails />
            ) : (
              <Navigate to="/role-selection" />
            )
          }
        />
        <Route
          path="/receptionist/additional-questions"
          element={
            isLoggedIn && selectedRole === "receptionist" ? (
              <AdditionalQuestions />
            ) : (
              <Navigate to="/role-selection" />
            )
          }
        />
        <Route
          path="/receptionist/confirmation"
          element={
            isLoggedIn && selectedRole === "receptionist" ? (
              <Confirmation />
            ) : (
              <Navigate to="/role-selection" />
            )
          }
        />

        {/* Add doctor-specific routes as needed */}
        {/* Example: */}
        {/* <Route path="/doctor/dashboard" element={<DoctorDashboard />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
