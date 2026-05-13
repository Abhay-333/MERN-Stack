// "use client";
import React, { Suspense } from "react";
import ProductCard from "../components/ProductCard";

const Products = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = res.json();
  // console.log(data);
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center">
      {/* {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <ProductCard products={data} />
      </Suspense>
    </div>
  );
};

export default Products;
