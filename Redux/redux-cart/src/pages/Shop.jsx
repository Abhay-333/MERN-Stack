import React, { useEffect, useState } from "react";
import { axiosBaseUrl } from "../app/config/axiosInstance";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

const Shop = () => {
  const { products } = useProducts();
  console.log(products)
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      {products.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
