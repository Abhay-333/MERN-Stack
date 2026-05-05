import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const ProductList = ({ products,setProducts }) => {
  // const data = useContext(MyContext)
  // console.log(data)
  console.log(products);

  return (
    <div>
      <button name="products" onClick={(e) => setProducts(e.target.name)}>
        ProductList
      </button>
    </div>
  );
};

export default ProductList;
