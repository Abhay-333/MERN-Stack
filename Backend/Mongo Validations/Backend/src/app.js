const express = require("express");
const ProductModel = require("./models/product.model");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));   // middleware for cors policy
app.use(express.json());

app.post("/create-product", async (req, res) => {
  try {
    const { productName, description, category, price, stock } = req.body;
    const { amount, currency } = price || {};

    if (!productName || amount == null || stock == null) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newProduct = await ProductModel.create({
      productName,
      description,
      category,
      price: { amount, currency },
      stock,
    });

    return res
      .status(200)
      .json({ message: "Product created Successfully", product: newProduct });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = app;
