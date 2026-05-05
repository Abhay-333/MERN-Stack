import axios from "axios";

export const fetchProducts = async () => {
  const products = await axios.get(`https://dummyjson.com/products`);
  return products;
};
