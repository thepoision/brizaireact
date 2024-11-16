// src/pages/receptionist/Dashboard.jsx
import React, { useState } from "react";
import Button from "../../components/Button";

const Dashboard = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", time: "10:00 AM", status: "Pending" },
    { id: 2, name: "Jane Smith", time: "11:30 AM", status: "Completed" },
  ]);

  const handleAddPatient = () => {
    window.location.href = "/receptionist/add-patient";
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Receptionist Dashboard</h2>
      <Button
        text="Add New Patient"
        onClick={handleAddPatient}
        className="mb-4"
      />
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 border-b">Name</th>
              <th className="p-4 border-b">Time</th>
              <th className="p-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="p-4 border-b">{patient.name}</td>
                <td className="p-4 border-b">{patient.time}</td>
                <td className="p-4 border-b">{patient.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
