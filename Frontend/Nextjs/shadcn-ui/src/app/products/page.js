import { ProductCard } from "@/components/local/ProductCard";
import { SpinnerSize } from "@/components/local/SpinnerSize";
import React, { Suspense } from "react";

const Products = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = res.json();
  return (
    <div className="flex flex-wrap items-center justify-center h-screen">
      <Suspense fallback={<SpinnerSize />}>
        <ProductCard products={data}></ProductCard>
      </Suspense>
    </div>
  );
};

export default Products;
