// src/pages/Register.jsx
import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import AuthLayout from "../layouts/AuthLayout";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Registering user:", { name, email, password });
    // Add logic to register the user
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <InputField
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Create a password"
      />
      <Button
        text="Register"
        onClick={handleRegister}
        className="mt-4 w-full"
      />
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500">
          Login
        </a>
      </p>
    </AuthLayout>
  );
};

export default Register;
