// routes/auth.js
import express from "express";
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // ✅ Always return success, no matter what
  res.json({
    message: "Login successful",
    user: {
      id: "demo123",
      fullName: "Demo User",
      email: email || "demo@example.com"
    }
  });
});

export default router;
