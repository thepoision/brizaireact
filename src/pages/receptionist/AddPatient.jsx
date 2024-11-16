// src/pages/receptionist/AddPatient.jsx
import React, { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const AddPatient = () => {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    chronicDiseases: "",
    consultationDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleNext = () => {
    console.log("Patient Details:", patient);
    window.location.href = "/receptionist/reason-for-visit";
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Patient</h2>
      <InputField
        label="Name"
        name="name"
        value={patient.name}
        onChange={handleChange}
        placeholder="Enter patient's name"
      />
      <InputField
        label="Age"
        name="age"
        value={patient.age}
        onChange={handleChange}
        type="number"
        placeholder="Enter patient's age"
      />
      <InputField
        label="Gender"
        name="gender"
        value={patient.gender}
        onChange={handleChange}
        placeholder="Enter patient's gender"
      />
      <InputField
        label="Phone"
        name="phone"
        value={patient.phone}
        onChange={handleChange}
        placeholder="Enter patient's phone number"
      />
      <InputField
        label="Chronic Diseases"
        name="chronicDiseases"
        value={patient.chronicDiseases}
        onChange={handleChange}
        placeholder="Enter any chronic diseases"
      />
      <InputField
        label="Consultation Date"
        name="consultationDate"
        value={patient.consultationDate}
        onChange={handleChange}
        type="date"
        placeholder="Select consultation date"
      />
      <Button text="Next" onClick={handleNext} className="mt-4 w-full" />
    </div>
  );
};

export default AddPatient;
