const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo Connected");
  } catch (error) {
    console.log("Error in db connection", error);
  }
};

module.exports = connectDb;
