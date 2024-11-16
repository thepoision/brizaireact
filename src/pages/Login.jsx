// src/pages/Login.jsx
import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import AuthLayout from "../layouts/AuthLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", { email, password });
    // Add logic to validate and log in the user
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-6">Login</h2>
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
        placeholder="Enter your password"
      />
      <Button text="Login" onClick={handleLogin} className="mt-4 w-full" />
      <p className="mt-4 text-sm text-gray-600">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-500">
          Register
        </a>
      </p>
    </AuthLayout>
  );
};

export default Login;
