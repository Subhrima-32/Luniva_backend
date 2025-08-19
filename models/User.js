const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  followers: { type: Number, default: 0 },
  following: { type: Number, default: 0 },
  posts: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
