// src/pages/receptionist/SymptomDetails.jsx
import React, { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const SymptomDetails = () => {
  const [symptoms, setSymptoms] = useState({
    severity: "",
    timeline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSymptoms({ ...symptoms, [name]: value });
  };

  const handleNext = () => {
    console.log("Symptom Details:", symptoms);
    window.location.href = "/receptionist/additional-questions";
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Symptom Details</h2>
      <InputField
        label="Severity (e.g., mild, moderate, severe)"
        name="severity"
        value={symptoms.severity}
        onChange={handleChange}
        placeholder="Enter symptom severity"
      />
      <InputField
        label="Timeline (e.g., 2 days, 1 week)"
        name="timeline"
        value={symptoms.timeline}
        onChange={handleChange}
        placeholder="Enter symptom timeline"
      />
      <Button text="Next" onClick={handleNext} className="mt-4 w-full" />
    </div>
  );
};

export default SymptomDetails;
