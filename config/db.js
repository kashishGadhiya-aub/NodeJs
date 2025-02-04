const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URL;

    if (!mongoURI) {
      throw new Error("MongoDB URI is not defined");
    }

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
