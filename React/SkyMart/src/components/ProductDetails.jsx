import React, { useContext, useMemo } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    getProduct,
    getAdjacentProductId,
    getRelatedProducts,
    isLoadingProducts,
    productsError,
  } = useContext(ProductContext);
  const { addToCart, cartItems } = useContext(CartContext);

  const productId = Number(id);
  const product = getProduct(productId);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return getRelatedProducts(product.id, product.category);
  }, [getRelatedProducts, product]);

  const cartProduct = cartItems.find((item) => item.id === productId);
  const cartQuantity = cartProduct?.quantity || 0;

  if (isLoadingProducts) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-[#0a0a0a] text-neutral-400">
        Loading product...
      </div>
    );
  }

  if (productsError) {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-6 text-center text-red-300">
        {productsError}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-4 px-6 text-center text-white">
        <p>Product not found.</p>
        <button
          onClick={() => navigate("/dashboard/shop")}
          className="rounded-xl bg-[#ccff00] px-5 py-3 font-semibold text-black"
        >
          Back to shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <button
          onClick={() => navigate("/dashboard/shop")}
          className="mb-8 flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to products
        </button>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-neutral-800 bg-white p-8">
            <img
              src={product.image}
              alt={product.title}
              className="h-[420px] w-full object-contain"
            />
          </div>

          <div className="rounded-[2rem] border border-neutral-800 bg-[#121212] p-8">
            <span className="mb-4 inline-block rounded-full border border-[#ccff00]/40 bg-[#ccff00]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#ccff00]">
              {product.category}
            </span>

            <h1 className="mb-4 text-4xl font-bold">{product.title}</h1>

            <div className="mb-6 flex items-center gap-3">
              <div className="flex text-[#ccff00]">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill={index < Math.floor(product.rating.rate) ? "#ccff00" : "transparent"}
                  />
                ))}
              </div>
              <span className="text-sm text-neutral-300">{product.rating.rate}</span>
              <span className="text-sm text-neutral-500">({product.rating.count} reviews)</span>
            </div>

            <p className="mb-6 text-4xl font-bold text-[#ccff00]">${product.price}</p>

            <p className="mb-8 leading-7 text-neutral-400">{product.description}</p>

            <div className="mb-8">
              <h2 className="mb-3 text-lg font-semibold">Features</h2>
              <div className="flex flex-wrap gap-2">
                {product.features?.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-neutral-700 bg-[#1a1a1a] px-3 py-1.5 text-sm text-neutral-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => addToCart(product)}
                className="flex items-center gap-2 rounded-xl bg-[#ccff00] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#b3e600]"
              >
                <ShoppingCart size={18} />
                {cartQuantity > 0 ? `Add More (${cartQuantity} in cart)` : "Add to cart"}
              </button>

              <button
                onClick={() =>
                  navigate(`/dashboard/product/${getAdjacentProductId(product.id, "prev")}`)
                }
                className="flex items-center gap-2 rounded-xl border border-neutral-700 px-5 py-3 text-sm text-white transition-colors hover:border-neutral-500"
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              <button
                onClick={() =>
                  navigate(`/dashboard/product/${getAdjacentProductId(product.id, "next")}`)
                }
                className="flex items-center gap-2 rounded-xl border border-neutral-700 px-5 py-3 text-sm text-white transition-colors hover:border-neutral-500"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(`/dashboard/product/${item.id}`)}
                  className="overflow-hidden rounded-[2rem] border border-neutral-800 bg-[#161616] text-left transition-colors hover:border-neutral-600"
                >
                  <div className="flex h-48 items-center justify-center bg-white p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <p className="mb-2 line-clamp-2 font-medium">{item.title}</p>
                    <p className="text-sm text-neutral-500">{item.category}</p>
                    <p className="mt-3 font-semibold text-[#ccff00]">${item.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
