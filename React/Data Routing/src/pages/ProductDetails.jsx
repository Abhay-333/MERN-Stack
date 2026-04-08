import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../api/axiosInstance";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getSingleProduct = async () => {
    try {
      const result = await axiosInstance.get(`/products/${id}`);
      setProduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getSingleProduct();
    }
  }, [id]);

  if (!product) {
    return <div className="text-center mt-10 text-gray-400">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 text-white">
      {/* Main Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-900 shadow-2xl rounded-2xl p-6">
        {/* Image Section */}
        <div>
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="w-full h-[400px] object-contain rounded-xl bg-gray-800"
          />

          <div className="flex gap-3 mt-4">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="product"
                className="w-20 h-20 object-cover rounded-lg border border-gray-700 hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-gray-400">{product.description}</p>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold text-green-400">
              ${product.price}
            </span>
            <span className="text-sm text-red-400">
              -{product.discountPercentage}%
            </span>
          </div>

          <div className="text-sm text-gray-400">
            ⭐ Rating: {product.rating}
          </div>

          <div className="text-sm">
            <span className="font-semibold text-gray-300">Brand:</span>{" "}
            {product.brand}
          </div>

          <div className="text-sm">
            <span className="font-semibold text-gray-300">Category:</span>{" "}
            {product.category}
          </div>

          <div className="text-sm">
            <span className="font-semibold text-gray-300">Stock:</span>{" "}
            {product.stock} ({product.availabilityStatus})
          </div>

          <div className="text-sm">
            <span className="font-semibold text-gray-300">Shipping:</span>{" "}
            {product.shippingInformation}
          </div>

          <div className="text-sm">
            <span className="font-semibold text-gray-300">Warranty:</span>{" "}
            {product.warrantyInformation}
          </div>

          <div className="text-sm">
            <span className="font-semibold text-gray-300">Return:</span>{" "}
            {product.returnPolicy}
          </div>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            {product.tags?.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Button */}
          <button className="mt-4 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-10 bg-gray-900 shadow-xl rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4">Reviews</h2>

        {product.reviews?.map((review, i) => (
          <div key={i} className="border-b border-gray-700 py-3">
            <p className="font-semibold">{review.reviewerName}</p>
            <p className="text-sm text-gray-400">⭐ {review.rating}</p>
            <p className="text-gray-300">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
