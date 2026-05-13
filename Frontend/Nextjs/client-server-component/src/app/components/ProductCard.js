import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white w-90 text-black rounded-2xl shadow-lg p-5 hover:scale-105 transition duration-300">
      {/* Product Image */}
      <div className="h-52 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-44 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>

          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;