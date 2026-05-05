import React, { useContext } from "react";
import { ArrowRight, Package, TrendingUp, Star, Tag, Home } from "lucide-react";
import ShopByCategory from "../components/ShopByCategory";
import ProductHighlights from "../components/ProductHighligths";
import { useNavigate } from "react-router";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

const HomeComponent = () => {
  const navigate = useNavigate();
  const { cartItemsCount, cartTotal } = useContext(CartContext);
  const { getTopRatedProducts, products } = useContext(ProductContext);

  const topRatedProductsCount = getTopRatedProducts().length;
  const categoryCount = new Set(products.map((product) => product.category)).size;

  return (
    <div>
      <main className="max-w-7xl mx-auto px-8 py-10">
        {/* Welcome Banner Card */}
        <div className="relative bg-[#121212] border border-neutral-800 rounded-3xl p-10 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
          {/* Subtle Grid Background Effect (Optional) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          {/* Banner Left Content */}
          <div className="relative z-10 max-w-xl">
            <p className="text-[#ccff00] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              Good Evening <span className="text-sm">👋</span>
            </p>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Welcome back,
              <br />
              <span className="text-[#ccff00]">Abhay!</span>
            </h1>
            <p className="text-neutral-400 text-base mb-8">
              Discover today's picks — hand-curated products across electronics,
              fashion, and more.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/dashboard/shop")}
                className="bg-[#ccff00] hover:bg-[#b3e600] text-black px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors cursor-pointer"
              >
                Shop Now <ArrowRight size={18} />
              </button>
              <button
                onClick={() => navigate("/dashboard/shop")}
                className="bg-transparent border cursor-pointer border-neutral-700 hover:border-neutral-500 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                View All Products
              </button>
            </div>
          </div>

          {/* Banner Right Stats */}
          <div className="relative z-10 flex flex-col gap-4 mt-10 lg:mt-0 lg:ml-10">
            <div className="bg-[#1a2e00] border border-[#2a4d00] rounded-2xl p-6 text-center w-56">
              <h3 className="text-[#ccff00] text-4xl font-bold mb-1">{products.length}+</h3>
              <p className="text-[#ccff00]/70 text-xs">Products Available</p>
            </div>
            <div className="bg-transparent border border-neutral-800 rounded-2xl p-6 text-center w-56 backdrop-blur-sm">
              <h3 className="text-white text-3xl font-bold mb-1">Free</h3>
              <p className="text-neutral-400 text-xs">Delivery on ₹999+</p>
            </div>
          </div>
        </div>

        {/* Bottom 4 Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {/* Card 1 */}
          <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-neutral-800 flex items-center justify-center text-[#ccff00]">
              <Package size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{cartItemsCount}</h3>
              <p className="text-neutral-300 text-sm">Cart Items</p>
              <p className="text-neutral-600 text-xs">In your bag</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#162136] border border-[#1e2d4a] flex items-center justify-center text-blue-400">
              <TrendingUp size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">${cartTotal}</h3>
              <p className="text-neutral-300 text-sm">Cart Value</p>
              <p className="text-neutral-600 text-xs">Ready to checkout</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#362616] border border-[#4a351e] flex items-center justify-center text-yellow-500">
              <Star size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{topRatedProductsCount}</h3>
              <p className="text-neutral-300 text-sm">Top Products</p>
              <p className="text-neutral-600 text-xs">Highly rated</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2a1636] border border-[#3e1e4a] flex items-center justify-center text-purple-400">
              <Tag size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{categoryCount}</h3>
              <p className="text-neutral-300 text-sm">Categories</p>
              <p className="text-neutral-600 text-xs">To explore</p>
            </div>
          </div>
        </div>
      </main>

      <div className="mt-12 p-10">
        <ShopByCategory />
      </div>

      <div className="mt-5 p-10">
        <ProductHighlights />
      </div>
    </div>
  );
};

export default HomeComponent;
