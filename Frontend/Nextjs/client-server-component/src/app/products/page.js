"use client";
import React, { useEffect, useState } from "react";

const Products = async () => {
  const [products, setProducts] = useState([]);
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  //   useEffect(() => {
  //     setProducts(data);
  //   }, []);
  return <div>Products</div>;
};

export default Products;
