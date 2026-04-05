import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ProductCard from "../ProductCard";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return cart.length < 1 ? <h1>No products in Cart</h1> :(
    <div className="grid grid-cols-4 items-center gap-5">
      {cart.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Cart;
