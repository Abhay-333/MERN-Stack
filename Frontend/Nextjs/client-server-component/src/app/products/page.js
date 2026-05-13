// "use client";
import React from "react";
import ProductCard from "../components/ProductCard";

const Products = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  console.log(data);
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
