const mongoose = require("mongoose");

const productSchema = new mongoose.Schema( // use to create models
  {
    productName: {
      type: String,
      required: true,
    },
    descrition: {
      type: String,
      default: "Description",
    },
    category: {
      type: String,
      enum: ["MEN", "WOMEN", "KIDS"], //This is used to give different options
      default: "MEN",
    },
    price: {
      amount: { type: Number, required: true },
      currency: { type: String, enum: ["INR", "USD"], default: "INR" },
    },
    stock: { type: Number, required: true },
  },
  { timestamps: true },
);

const ProductModel = mongoose.model("products", productSchema); // use to create collections in db

module.exports = ProductModel;
