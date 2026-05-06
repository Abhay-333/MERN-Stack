import React from "react";
import { fetchProducts } from "./api/productApi";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import ProductCard from "./components/ProductCard";

const App = () => {
  // Lazy Query = API call tab hoti hai jab tum manually trigger karte ho
  //   Infinite Query: Control karta hai “data kaise load hoga (chunks/pages me)”
  const { data, isPending, error } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    getNextPageParam: (lastPage, pages) => {
      console.log(lastPage);
      console.log(pages);
      return pages + 1;
    },
  });
  console.log(data);

  if (isPending)
    return <h1 className="bg-zinc-800 text-white h-screen"> Loading...</h1>;
  return (
    <div className="bg-zinc-800 text-white flex flex-wrap gap-5 items-center justify-center">
      {data?.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </div>
  );
};

export default App;
