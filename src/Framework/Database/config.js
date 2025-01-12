const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/EcommerceProductservice");
    console.log("Connected to the DB");
  } catch (error) {
    console.error("Database not connect due to;", error);
  }
};

module.exports = connectDB;
