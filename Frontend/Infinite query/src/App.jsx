import React, { useEffect } from "react";
import { fetchProducts } from "./api/productApi";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import ProductCard from "./components/ProductCard";

const App = () => {
  // Lazy Query = API call tab hoti hai jab tum manually trigger karte ho
  //   Infinite Query: Control karta hai “data kaise load hoga (chunks/pages me)”
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage.total;
      const loaded = pages.length * 10; // pages.length * limit

      if (loaded >= total) return undefined;
      return pages.length + 1;
    },
  });

  console.log(data);

  useEffect(() => {
    const handleFetchToScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };
    window.addEventListener("scroll", handleFetchToScroll);
    return () => {
      window.removeEventListener("scroll", handleFetchToScroll);
    };
  }, [fetchNextPage,hasNextPage, isFetchingNextPage]);

  if (isLoading)
    return <h1 className="bg-zinc-800 text-white h-screen"> Loading...</h1>;
  return (
    <div className="bg-zinc-800 text-white flex flex-wrap gap-5 items-center justify-center">
      {data.pages.map((page) =>
        page.map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        )),
      )}

      {/* {hasNextPage ? (
        <button
          onClick={fetchNextPage}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 rounded-xl font-semibold shadow-lg"
        >
          Load More
        </button>
      ) : (
        null
      )} */}
    </div>
  );
};

export default App;
