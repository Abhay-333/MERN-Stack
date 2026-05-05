export const fetchProducts = async () => {
  console.log("api call trigged");
  const result = await fetch(`https://dummyjson.com/products`);
  const data = await result.json();
  //   console.log(data);
  return data;
};
