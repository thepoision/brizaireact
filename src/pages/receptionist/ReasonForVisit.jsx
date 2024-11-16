// src/pages/receptionist/ReasonForVisit.jsx
import React, { useState } from "react";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

const ReasonForVisit = () => {
  const [reason, setReason] = useState("");

  const handleNext = () => {
    console.log("Reason for Visit:", reason);
    window.location.href = "/receptionist/symptom-details";
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Reason for Visit</h2>
      <TextArea
        label="Reason for Visit"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Describe the reason for the visit (e.g., headache, fever)"
      />
      <Button text="Next" onClick={handleNext} className="mt-4 w-full" />
    </div>
  );
};

export default ReasonForVisit;
