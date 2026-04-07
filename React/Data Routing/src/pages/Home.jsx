import React from "react";
import { ProductApi } from "../api/ProductApi";
import { useLoaderData } from "react-router";

const Home = () => {
  const products = useLoaderData()
  console.log(products)
  return (
    <div>
      Home
      
    </div>
  );
};

export default Home;
