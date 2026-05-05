import { axiosInstance } from "./axiosInstance";

// Bhai iss terike se tu unnecessary useState create krne se bach sakte ho
export const ProductApi = async () => {
  const result = await fetch(`https://dummyjson.com/products`);
  const data = await result.json();
  return data.products;
};

// Interceptors ye ek gaurd ki terah hote hai jo data aaane jane ke liye allow krte hai
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },

  (error) => {
    console.log(error);
  },
);
