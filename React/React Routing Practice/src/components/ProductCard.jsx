import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { handleAdd, handleRemove, handleDecrement } = useContext(CartContext);

  return (
    <div className="bg-gray-800 text-white w-72 p-5 rounded-2xl shadow-lg hover:scale-105 transition">
      {/* Image */}
      <img
        src={product.images[0]}
        alt={product.title}
        className="rounded-xl mb-4 h-40 w-full object-cover"
      />

      {/* Title */}
      <h2 className="text-lg font-semibold mb-1">{product.title}</h2>

      {/* Brand + Category */}
      <p className="text-sm text-gray-400 mb-1">
        {product.brand} • {product.category}
      </p>

      {/* Price */}
      <p className="text-red-400 font-bold mb-2">${product.price}</p>

      {/* Rating */}
      <p className="text-yellow-400 mb-3">⭐ {product.rating}</p>

      {/* Buttons */}
      <div className="flex gap-3">
        {product.quantity > 0 ? (
          <div className="flex gap-2 items-center">
            <span
              onClick={() => {
                handleDecrement(product);
              }}
              className="p-3 rounded cursor-pointer bg-red-700"
            >
              -
            </span>
            {product.quantity}
            <span
              onClick={() => {
                handleAdd(product);
              }}
              className="p-3 rounded cursor-pointer bg-green-700"
            >
              +
            </span>
          </div>
        ) : (
          <button
            onClick={() => {
              handleAdd(product);
            }}
            className="w-full cursor-pointer py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
          >
            Add to Cart
          </button>
        )}

        <button
          onClick={() => {
            handleRemove(product.id);
          }}
          className="w-full cursor-pointer py-2 border border-gray-500 rounded-lg hover:bg-gray-700 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
