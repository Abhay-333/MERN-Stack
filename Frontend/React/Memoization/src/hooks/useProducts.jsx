import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/ProductApi";

export const useProducts = () =>{
    return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts, //api call wala func
    staleTime: 1000, // kitne der(delay) baad api fetch kr ni hai, agar Infinite diya toh ek hi baar api call krega component jab render hoga tab
  });
}