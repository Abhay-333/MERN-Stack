import React, { useContext, useEffect, useState } from "react";
import { Search, ShoppingCart, Star, ChevronDown, X } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export default function Shop() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { products, isLoadingProducts, productsError } = useContext(ProductContext);
  const { addToCart, cartItems } = useContext(CartContext);

  const initialCategory = searchParams.get("category") || "All Categories";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSort, setSelectedSort] = useState("Featured");

  let processedProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  if (selectedSort === "Price: Low to High") {
    processedProducts.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "Price: High to Low") {
    processedProducts.sort((a, b) => b.price - a.price);
  }

  const filteredProducts = processedProducts;
  const hasActiveFilters =
    selectedCategory !== "All Categories" ||
    selectedSort !== "Featured" ||
    searchTerm !== "";

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All Categories");
    setSelectedSort("Featured");
  };

  const getCartQuantity = (productId) => {
    const cartProduct = cartItems.find((item) => item.id === productId);
    return cartProduct?.quantity || 0;
  };

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");

    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] p-8 font-sans text-white selection:bg-[#ccff00] selection:text-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">All Products</h1>
          <p className="text-sm text-neutral-500">
            {filteredProducts.length} products found
            {selectedCategory !== "All Categories" && (
              <span className="text-[#ccff00]"> in {selectedCategory}</span>
            )}
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-neutral-800 bg-[#121212] p-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex flex-grow items-center">
              <Search size={18} className="absolute left-4 text-neutral-500" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-transparent bg-[#1a1a1a] py-3 pl-12 pr-4 text-sm text-white transition-colors focus:border-neutral-700 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`appearance-none rounded-xl border bg-[#1a1a1a] py-3 pl-4 pr-10 text-sm text-white transition-colors focus:outline-none ${selectedCategory !== "All Categories" ? "border-[#ccff00]" : "border-neutral-800"}`}
                >
                  <option>All Categories</option>
                  <option>Accessories</option>
                  <option>Electronics</option>
                  <option>Clothing</option>
                  <option>Furniture</option>
                  <option>Home</option>
                  <option>Sports</option>
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"
                />
              </div>

              <div className="relative">
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className={`appearance-none rounded-xl border bg-[#1a1a1a] py-3 pl-4 pr-10 text-sm text-white transition-colors focus:outline-none ${selectedSort !== "Featured" ? "border-[#ccff00]" : "border-neutral-800"}`}
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"
                />
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-1.5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400 transition-colors hover:bg-red-500/20"
                >
                  <X size={16} /> Clear
                </button>
              )}
            </div>
          </div>

          {hasActiveFilters && (
            <>
              <hr className="my-4 border-neutral-800" />
              <div className="flex flex-wrap gap-2">
                {selectedCategory !== "All Categories" && (
                  <button
                    onClick={() => setSelectedCategory("All Categories")}
                    className="flex items-center gap-1.5 rounded-full border border-[#ccff00]/50 px-3 py-1.5 text-xs text-[#ccff00] transition-colors hover:bg-[#ccff00]/10"
                  >
                    {selectedCategory.toLowerCase()} <X size={12} />
                  </button>
                )}

                {selectedSort !== "Featured" && (
                  <button
                    onClick={() => setSelectedSort("Featured")}
                    className="flex items-center gap-1.5 rounded-full border border-[#ccff00]/50 px-3 py-1.5 text-xs text-[#ccff00] transition-colors hover:bg-[#ccff00]/10"
                  >
                    {selectedSort} <X size={12} />
                  </button>
                )}

                {searchTerm !== "" && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="flex items-center gap-1.5 rounded-full border border-[#ccff00]/50 px-3 py-1.5 text-xs text-[#ccff00] transition-colors hover:bg-[#ccff00]/10"
                  >
                    "{searchTerm}" <X size={12} />
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        {productsError && (
          <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {productsError}
          </div>
        )}

        {isLoadingProducts ? (
          <div className="rounded-3xl border border-neutral-800 bg-[#121212] px-6 py-12 text-center text-neutral-400">
            Loading products...
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProducts.map((product) => {
              const cartQuantity = getCartQuantity(product.id);

              return (
                <div
                  key={product.id}
                  className="group flex flex-col overflow-hidden rounded-[2rem] border border-neutral-800 bg-[#161616] transition-all duration-300 hover:border-neutral-700 hover:shadow-lg"
                >
                <div className="relative flex h-48 w-full items-center justify-center bg-white p-4">
                  <div className="absolute left-3 top-3 z-10 rounded-full bg-neutral-500/80 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                    {product.category}
                  </div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-grow flex-col p-5">
                  <h3 className="mb-2 min-h-[40px] text-sm font-medium text-white line-clamp-2">
                    {product.title}
                  </h3>

                  <div className="mb-4 flex items-center gap-1">
                    <div className="flex text-[#ccff00]">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          size={12}
                          fill={
                            index < Math.floor(product.rating.rate)
                              ? "#ccff00"
                              : "transparent"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs text-neutral-500">
                      ({product.rating.count})
                    </span>
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-neutral-800/50 pt-4">
                    <span className="text-lg font-bold text-[#ccff00]">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-1.5 rounded-lg bg-[#ccff00] px-3 py-1.5 text-xs font-bold text-black transition-colors hover:bg-[#b3e600]"
                    >
                      <ShoppingCart size={14} />
                      {cartQuantity > 0 ? `Add More (${cartQuantity})` : "Add to cart"}
                    </button>
                  </div>
                </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
