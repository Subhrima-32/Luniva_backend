// routes/auth.js
const express = require("express");
const router = express.Router();

// ✅ Fake login route - accepts ANY email + password
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: "Login successful",
    user: {
      id: "demo123",
      fullName: "Demo User",
      email: email || "demo@example.com"
    }
  });
});

// ✅ Fake register route - always "creates" a user
router.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;

  res.json({
    message: "Registration successful",
    user: {
      id: "newUser123",
      fullName: fullName || "Demo User",
      email: email || "demo@example.com"
    }
  });
});

module.exports = router;
