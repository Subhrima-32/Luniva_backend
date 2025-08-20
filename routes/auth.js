import React, { useState } from "react";
import axios from "axios";

// Use environment variable first, fallback to localhost
const API = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await axios.post(`${API}/api/auth/login`, { email, password });
        setMessage(`Login successful: ${res.data.message}`);
      } else {
        const res = await axios.post(`${API}/api/auth/register`, { fullName, email, password });
        setMessage(`Register successful: ${res.data.message}`);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer" }}>
        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
      </p>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AuthPage;
