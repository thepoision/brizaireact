import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RoleSelection from "./pages/RoleSelection";
import ReceptionistDashboard from "./pages/receptionist/Dashboard";
import AddPatient from "./pages/receptionist/AddPatient";
import PatientDetails from "./pages/receptionist/PatientDetails";
import DoctorDashboard from "./pages/doctor/Dashboard";
import PatientSummary from "./pages/doctor/PatientSummary";
import Prescription from "./pages/doctor/Prescription";
import NotFound from "./pages/NotFound";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<RoleSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Receptionist Routes */}
        <Route
          path="/receptionist/dashboard"
          element={<ReceptionistDashboard />}
        />
        <Route path="/receptionist/add-patient" element={<AddPatient />} />
        <Route path="/receptionist/patient/:id" element={<PatientDetails />} />

        {/* Doctor Routes */}
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route
          path="/doctor/patient-summary/:id"
          element={<PatientSummary />}
        />
        <Route path="/doctor/prescription/:id" element={<Prescription />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
