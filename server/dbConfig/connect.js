const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      tls: true,
      serverSelectionTimeoutMS: 5000,
    })
    console.log("Connected to database!");
  } catch (error) {
    console.log("Connection failed!", error.message);
  }
};

module.exports = connectDB;