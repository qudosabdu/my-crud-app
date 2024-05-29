// Require dotenv and load the environment variables from .env.local file
require("dotenv").config({ path: "../../.env.local" });
const mongoose = require("mongoose");

// Here you can continue with your MongoDB connection logic
// For example, using mongoose to connect to MongoDB

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectMongoDB;
