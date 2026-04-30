import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlices";
import { useLocation } from "react-router";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <div className="bg-white w-70 text-black rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300 flex flex-col">
      {/* IMAGE */}
      <div className="h-48 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="mt-4 flex flex-col flex-grow">
        {/* TITLE */}
        <h2 className="text-sm font-semibold line-clamp-2">{product.title}</h2>

        {/* CATEGORY */}
        <p className="text-xs text-gray-500 mt-1 capitalize">
          {product.category}
        </p>

        {/* PRICE */}
        <p className="text-lg font-bold mt-2 text-green-600">
          ₹{product.price}
        </p>

        {/* RATING */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500">⭐</span>
          <span className="text-sm">
            {product.rating?.rate} ({product.rating?.count})
          </span>
        </div>

        {/* BUTTON */}
        {pathname === "/cart" ? (
          <div className="">
            <button
              // onClick={() => dispatch(addItem(product))}
              className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              -
            </button>
            {product.quantity}
            <button
              // onClick={() => dispatch(addItem(product))}
              className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              +
            </button>
          </div>
        ) : product.quantity >= 1 ? (
          <div className="">
            <button
              // onClick={() => dispatch(addItem(product))}
              className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              -
            </button>
            {product.quantity}
            <button
              // onClick={() => dispatch(addItem(product))}
              className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => dispatch(addItem(product))}
            className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
