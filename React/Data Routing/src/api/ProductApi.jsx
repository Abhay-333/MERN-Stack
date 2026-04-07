// Bhai iss terike se tu unnecessary useState create krne se bach sakte ho
export const ProductApi = async () => {
  const result = await fetch(`https://dummyjson.com/products`);
  const data = await result.json()
  return data.products;
};
