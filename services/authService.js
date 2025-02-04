const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const registerUser = async (username, email, password) => {
  if (!username || !email || !password) {
    return { success: false, message: "Please fill in all fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Invalid email format." };
  }

  const IfUsername = await User.findOne({ username });
  if (IfUsername) {
    return { success: false, message: "Username already taken"};
  }

  const IfEmail = await User.findOne({ email });
  if (IfEmail) {
    return { success: false, message: "Email already registered" };
  }

  const hashedPass = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPass });
  await newUser.save();

  return { success: true, message: "User successfully registered" };
};

const loginUser = async (username, email) => {
  if (!username || !email) {
    return { success: false, message: "Both username and email are required." };
  }

  const user = await User.findOne({ username, email });
  if (!user) {
    return { success: false, message: "Invalid username or email." };
  }

  return { success: true, message: "Login successful!" };
};

const getAllUsers = async () => {
  return await User.find({}).select("-password");
};

module.exports = { registerUser, loginUser, getAllUsers };
