import axios from "axios";
import React, { useState } from "react";

const API = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

function AuthPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${API}/api/auth/register`, {
        fullName,
        email,
        password,
      });
      console.log("✅ Register success:", res.data);
    } catch (err) {
      console.error("❌ Register error:", err.response?.data || err.message);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API}/api/auth/login`, {
        email,
        password,
      });
      console.log("✅ Login success:", res.data);
    } catch (err) {
      console.error("❌ Login error:", err.response?.data || err.message);
    }
  };

  return (
    <div>
      <h2>Auth Page</h2>
      <input
        type="text"
        placeholder="Full Name (for register)"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default AuthPage;
