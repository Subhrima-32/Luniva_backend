const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ DB Connection Error:", err));

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://luniva-frontend.vercel.app"],
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);
