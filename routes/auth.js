// src/components/AuthPage.js
import React, { useState } from "react";
import axios from "axios";

// ✅ API URL comes from env var (Vercel compatible)
// If not set, fallback to localhost for local dev
const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Login API call
  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, {
        email: formData.email,
        password: formData.password,
      });
      setMessage(`✅ Login successful! Welcome ${res.data.fullName}`);
    } catch (err) {
      setMessage("❌ Login failed. Check credentials.");
    }
  };

  // Register API call
  const handleRegister = async () => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/register`, {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
      setMessage(`✅ Registered successfully! Welcome ${res.data.fullName}`);
    } catch (err) {
      setMessage("❌ Registration failed. Try again.");
    }
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Register" : "Login"}
        </button>
      </p>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AuthPage;
