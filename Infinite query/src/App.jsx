import React from "react";
import { fetchProducts } from "./api/productApi";
import { useQuery } from "@tanstack/react-query";
const App = () => {
  const data = fetchProducts();
  const {data, isPending, error} = useQuery({
    queryKey:["products"],
    queryFn:fetchProducts,
  })
  console.log(data);
  return <div>App</div>;
};

export default App;
