import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchProducts } from "../api/ProductApi";
import { useProducts } from "../hooks/useProducts";

const Home = () => {
  const { data } = useProducts();
  console.log(data);
  return <div>Home</div>;
};

export default Home;
