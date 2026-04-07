import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const categories = [
  { id: 1, name: "Electronics", items: 17, icon: "💻" },
  { id: 2, name: "Clothing", items: 2, icon: "📦" },
  { id: 3, name: "Furniture", items: 3, icon: "📦" },
  { id: 4, name: "Home", items: 14, icon: "📦" },
  { id: 5, name: "Sports", items: 8, icon: "📦" },
  { id: 6, name: "Accessories", items: 6, icon: "📦" },
];

export default function ShopByCategory() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/dashboard/shop?category=${categoryName}`);
  };

  return (
    <section className="w-full py-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white tracking-wide">
          Shop by Category
        </h2>
        <button
          onClick={() => navigate("/dashboard/shop")}
          className="flex items-center gap-1 text-[#ccff00] hover:text-[#b3e600] font-medium transition-colors group"
        >
          View All
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(204,255,0,0.1)] transition-all duration-300"
          >
            <div className="text-4xl mb-4 drop-shadow-sm">{category.icon}</div>
            <h3 className="text-black font-bold text-lg mb-1">
              {category.name}
            </h3>
            <p className="text-neutral-500 text-sm font-medium">
              {category.items} items
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
