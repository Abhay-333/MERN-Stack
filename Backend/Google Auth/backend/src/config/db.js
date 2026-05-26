const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDb connected")
  } catch (error) {
    console.log("Error in db connection", error);
  }
};

module.exports = connectDB