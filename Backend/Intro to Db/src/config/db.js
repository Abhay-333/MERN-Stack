const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://abhayd0331_db_user:BTIu3L4s0GQxvlMm@cluster0.cscdsk6.mongodb.net/`,
    );
    console.log("MongoDb Connected");
  } catch (error) {
    console.log("db connection error", error);
  }
};

module.exports = connectDb;
