"use client";
import React, { use } from "react";

const ProductCard = ({ products }) => {
  let product = use(products); // wait karo jabtak promise resolve ya reject nahi ho jata
  console.log(product);

  return product.map((item) => (
    <div key={item.id} className="bg-white w-90 text-black rounded-2xl shadow-lg p-5 hover:scale-105 transition duration-300">
      {/* Product Image */}
      <div className="h-52 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="h-44 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold line-clamp-2">{item.title}</h2>

        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-green-600">
            ${item.price}
          </span>

          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  ));
};

export default ProductCard;
