import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ProductCard from "../ProductCard";

const Home = () => {
  const { cart, setCart, mergedProducts, setProducts, product } = useContext(CartContext);
 

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(`https://dummyjson.com/products`);
        const data = await result.json();
        setProducts(data.products.map((item) => ({ ...item, quantity: 0 })));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);


  return (
    <div className="grid grid-cols-4 items-center gap-5">
      {mergedProducts.map((product) => {
        // console.log(product.quantity);
        return (
          <ProductCard
            product={product}
            key={product.id}
          ></ProductCard>
        );
      })}
    </div>
  );
};

export default Home;
