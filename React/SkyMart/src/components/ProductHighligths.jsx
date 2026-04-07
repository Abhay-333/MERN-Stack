import React, { useContext } from "react";
import {
  Star,
  Zap,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  Tag,
} from "lucide-react";
import { useNavigate } from "react-router";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const ProductRow = ({ item, onOpenProduct, onAddToCart }) => {
  return (
    <div className="group flex items-center justify-between rounded-2xl border border-neutral-100 p-3 transition-colors hover:border-neutral-200">
      <button
        type="button"
        onClick={onOpenProduct}
        className="flex flex-1 items-center gap-4 text-left"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 p-2">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <p className="line-clamp-1 text-sm font-semibold text-black">
            {item.title}
          </p>
          <span className="text-lg font-bold text-[#ccff00]">${item.price}</span>
        </div>
      </button>

      <button
        type="button"
        onClick={onAddToCart}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-100 text-[#ccff00] transition-colors group-hover:bg-[#ccff00]/10"
        aria-label={`Add ${item.title} to cart`}
      >
        <ShoppingBag size={18} />
      </button>
    </div>
  );
};

export default function ProductHighlights() {
  const navigate = useNavigate();
  const { getTopRatedProducts, getLatestArrivals } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const topRated = getTopRatedProducts();
  const newArrivals = getLatestArrivals();

  const openProduct = (productId) => {
    navigate(`/dashboard/product/${productId}`);
  };

  const openShop = () => {
    navigate("/dashboard/shop");
  };

  return (
    <section className="w-full py-8 font-sans">
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm lg:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star size={24} className="fill-[#ccff00] text-[#ccff00]" />
              <h2 className="text-2xl font-bold text-black">Top Rated</h2>
            </div>
            <button
              type="button"
              onClick={openShop}
              className="flex items-center gap-1 text-sm font-medium text-[#ccff00] transition-colors hover:text-[#b3e600]"
            >
              See all <ArrowRight size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {topRated.map((item) => (
              <ProductRow
                key={`top-${item.id}`}
                item={item}
                onOpenProduct={() => openProduct(item.id)}
                onAddToCart={() => addToCart(item)}
              />
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-sm lg:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap size={24} className="fill-[#ccff00] text-[#ccff00]" />
              <h2 className="text-2xl font-bold text-black">New Arrivals</h2>
            </div>
            <button
              type="button"
              onClick={openShop}
              className="flex items-center gap-1 text-sm font-medium text-[#ccff00] transition-colors hover:text-[#b3e600]"
            >
              See all <ArrowRight size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {newArrivals.map((item) => (
              <ProductRow
                key={`new-${item.id}`}
                item={item}
                onOpenProduct={() => openProduct(item.id)}
                onAddToCart={() => addToCart(item)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-[#121212] p-5">
          <Zap size={24} className="text-[#ccff00]" />
          <div>
            <h4 className="text-sm font-semibold text-white">Fast Delivery</h4>
            <p className="text-xs text-neutral-500">Same-day on select items</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-[#121212] p-5">
          <ShieldCheck size={24} className="text-blue-400" />
          <div>
            <h4 className="text-sm font-semibold text-white">Secure Payments</h4>
            <p className="text-xs text-neutral-500">100% encrypted checkout</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-[#121212] p-5">
          <Tag size={24} className="text-[#00ff88]" />
          <div>
            <h4 className="text-sm font-semibold text-white">Best Prices</h4>
            <p className="text-xs text-neutral-500">Price-match guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}
