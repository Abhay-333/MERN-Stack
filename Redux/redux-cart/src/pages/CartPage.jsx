import React from "react";
import { useSelector } from "react-redux";
import { store } from "../app/store";
import ProductCard from "../components/ProductCard";

const CartPage = () => {
  const { cartItems } = useSelector((store) => store.cart); //store se data lane ke liye
  console.log(cartItems);

  return (
    <div>
      {cartItems.length < 1 ? (
        <h1>No Items in Cart</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cartItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
