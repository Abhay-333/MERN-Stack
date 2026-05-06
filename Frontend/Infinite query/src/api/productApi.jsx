import axios from "axios";

export const fetchProducts = async ({ pageParam = 1 }) => {
  let limit = 10;
  let skip = (pageParam - 1) * limit;
  const products = await axios.get(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  );
  return products.data.products;
};
