import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    category: "MEN",
    amount: "",
    currency: "INR",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      productName: formData.productName,
      description: formData.description,
      category: formData.category,
      price: {
        amount: Number(formData.amount),
        currency: formData.currency,
      },
      stock: Number(formData.stock),
    };

    console.log(finalData);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl space-y-5"
      >
        <h1 className="text-3xl font-bold text-center text-white">
          Create Product
        </h1>

        {/* Product Name */}
        <div>
          <label className="block mb-2 font-medium text-zinc-300">
            Product Name
          </label>

          <input
            type="text"
            name="productName"
            placeholder="Enter product name"
            value={formData.productName}
            onChange={handleChange}
            className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white placeholder:text-zinc-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium text-zinc-300">
            Description
          </label>

          <textarea
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white placeholder:text-zinc-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 font-medium text-zinc-300">
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white"
          >
            <option value="MEN">MEN</option>
            <option value="WOMEN">WOMEN</option>
            <option value="KIDS">KIDS</option>
          </select>
        </div>

        {/* Price */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium text-zinc-300">
              Price Amount
            </label>

            <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white placeholder:text-zinc-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-zinc-300">
              Currency
            </label>

            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>

        {/* Stock */}
        <div>
          <label className="block mb-2 font-medium text-zinc-300">
            Stock
          </label>

          <input
            type="number"
            name="stock"
            placeholder="Enter stock quantity"
            value={formData.stock}
            onChange={handleChange}
            className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white placeholder:text-zinc-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-zinc-300 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Form;