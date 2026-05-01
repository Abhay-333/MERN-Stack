import React, { useEffect, useState } from "react";
import { axiosBaseUrl } from "../app/config/axiosInstance";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";
import { useSelector } from "react-redux";

const Shop = () => {
  const { products } = useProducts();
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      {products.map((product) => {
        const cartItem = cartItems.find((item) => item.id === product.id);

        return (
          <ProductCard
            product={product}
            key={product.id}
            cartItem={cartItem}
          ></ProductCard>
        );
      })}
    </div>
  );
};

export default Shop;
