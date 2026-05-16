const express = require("express");
const ProductModel = require("./models/product.model");

const app = express();
app.use(express.json());

app.post("/create-product", async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      price: { amount, currency },
      stock,
    } = req.body;

    if (!name || !amount || !stock) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newProduct = await ProductModel.create({
      productName: name,
      description,
      category,
      price: { amount, currency },
      stock,
    });

    return res
      .status(200)
      .json({ message: "Internal Server Error", product: newProduct });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = app;
