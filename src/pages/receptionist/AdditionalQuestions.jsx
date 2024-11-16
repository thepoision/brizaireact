// src/pages/receptionist/AdditionalQuestions.jsx
import React, { useState } from "react";
import Button from "../../components/Button";

const AdditionalQuestions = () => {
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: 1, question: "Do you have a fever?", options: ["Yes", "No"] },
    { id: 2, question: "Have you traveled recently?", options: ["Yes", "No"] },
    {
      id: 3,
      question: "Are you experiencing fatigue?",
      options: ["Yes", "No"],
    },
  ];

  const handleAnswerChange = (id, answer) => {
    setAnswers({ ...answers, [id]: answer });
  };

  const handleNext = () => {
    console.log("Additional Questions Answers:", answers);
    window.location.href = "/receptionist/confirmation";
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Additional Questions</h2>
      {questions.map((q) => (
        <div key={q.id} className="mb-4">
          <p className="font-semibold">{q.question}</p>
          {q.options.map((option) => (
            <label key={option} className="block">
              <input
                type="radio"
                name={`question-${q.id}`}
                value={option}
                onChange={() => handleAnswerChange(q.id, option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <Button text="Next" onClick={handleNext} className="mt-4 w-full" />
    </div>
  );
};

export default AdditionalQuestions;
