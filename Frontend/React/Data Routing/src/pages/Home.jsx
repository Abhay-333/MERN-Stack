import React from "react";
import { ProductApi } from "../api/ProductApi";
import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const products = useLoaderData();
  return (
    <div className="w-full grid grid-cols-4 gap-5 p-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
