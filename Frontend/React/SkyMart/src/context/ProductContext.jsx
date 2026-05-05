import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const PRODUCTS_URL = import.meta.env.VITE_DATA_URL;
const FALLBACK_PRODUCTS_URL = "/products.json";

const fetchProducts = async () => {
  if (PRODUCTS_URL) {
    const primaryResponse = await fetch(PRODUCTS_URL);

    if (primaryResponse.ok) {
      return primaryResponse.json();
    }
  }

  const fallbackResponse = await fetch(FALLBACK_PRODUCTS_URL);

  if (!fallbackResponse.ok) {
    throw new Error("Unable to load products");
  }

  return fallbackResponse.json();
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });
  const [isLoadingProducts, setIsLoadingProducts] = useState(products.length === 0);
  const [productsError, setProductsError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoadingProducts(true);

      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        localStorage.setItem("products", JSON.stringify(fetchedProducts));
        setProductsError("");
      } catch (error) {
        setProductsError("Products could not be loaded");
      } finally {
        setIsLoadingProducts(false);
      }
    };

    loadProducts();
  }, []);

  const getProduct = (id) => {
    return products.find((item) => item.id === id);
  };

  const getAdjacentProductId = (currentId, direction = "next") => {
    if (!products || products.length === 0) return null;

    const currentIndex = products.findIndex((product) => product.id === currentId);

    if (currentIndex === -1) return products[0].id;

    if (direction === "prev") {
      return products[(currentIndex - 1 + products.length) % products.length].id;
    }

    return products[(currentIndex + 1) % products.length].id;
  };

  const getRelatedProducts = (id, category = "home") => {
    if (!products || products.length === 0) return [];

    const relatedProducts = products.filter((item) => {
      return item.category === category && item.id !== id;
    });

    return relatedProducts.slice(0, 5);
  };

  const getTopRatedProducts = () => {
    if (!products || products.length === 0) return [];

    const sorted = [...products].sort((a, b) => b.rating.rate - a.rating.rate);
    return sorted.slice(0, 5);
  };

  const getLatestArrivals = () => {
    if (!products || products.length === 0) return [];

    return [...products].slice(-5).reverse();
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        isLoadingProducts,
        productsError,
        getProduct,
        getAdjacentProductId,
        getRelatedProducts,
        getTopRatedProducts,
        getLatestArrivals,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
