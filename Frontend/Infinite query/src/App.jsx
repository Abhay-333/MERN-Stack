import React from "react";
import { fetchProducts } from "./api/productApi";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./components/ProductCard";

const App = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  console.log(data);

  if (isPending)
    return <h1 className="bg-zinc-800 text-white h-screen"> Loading...</h1>;
  return (
    <div className="bg-zinc-800 text-white flex flex-wrap gap-5 items-center justify-center">
      {data.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </div>
  );
};

export default App;
