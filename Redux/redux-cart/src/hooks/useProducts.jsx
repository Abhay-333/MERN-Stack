import { useEffect, useState } from "react";
import { axiosBaseUrl } from "../app/config/axiosInstance";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const result = await axiosBaseUrl.get("/products");
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return { products, setProducts };
};

export default useProducts;
