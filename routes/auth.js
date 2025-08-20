const express = require("express");
const router = express.Router();

// ✅ Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Fake demo login
    res.json({
      message: "Login successful",
      user: {
        id: "demo123",
        fullName: "Demo User",
        email
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// ✅ Register route
router.post("/register", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Fake demo registration
    res.json({
      message: "Registration successful",
      user: {
        id: "newUser123",
        fullName,
        email
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
