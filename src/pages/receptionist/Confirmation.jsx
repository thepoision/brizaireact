// src/pages/receptionist/Confirmation.jsx
import React from "react";
import Button from "../../components/Button";

const Confirmation = () => {
  const patientDetails = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    phone: "1234567890",
    chronicDiseases: "None",
    consultationDate: "2024-11-17",
  };

  const suggestedVitals = ["Blood Pressure", "Temperature", "Heart Rate"];

  const handleConfirm = () => {
    console.log("Patient Details Confirmed:", patientDetails);
    window.location.href = "/receptionist/dashboard";
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Patient Details</h3>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(patientDetails, null, 2)}
        </pre>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Suggested Vitals</h3>
        <ul className="list-disc pl-6">
          {suggestedVitals.map((vital, index) => (
            <li key={index}>{vital}</li>
          ))}
        </ul>
      </div>
      <Button text="Confirm" onClick={handleConfirm} className="mt-4 w-full" />
    </div>
  );
};

export default Confirmation;
