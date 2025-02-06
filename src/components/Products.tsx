"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoShareSocialSharp } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  dicountPercentage?: number;
  isNew?: boolean;
  imageUrl: string;
  tags?: string[];
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist(); // Access Wishlist functions

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "product"] {
            _id,
            title,
            price,
            description,
            dicountPercentage,
            isNew,
            "imageUrl": productImage.asset->url,
            tags
          }
        `);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  const displayedProducts = products.slice(0, 8);

  return (
    <div className="p-0">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="px-6 sm:px-12 lg:px-24 justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => {
          const isWishlisted = wishlist.some((item) => item._id === product._id);

          return (
            <div
              key={product._id}
              className="relative bg-white border p-4 group hover:bg-gray-300 transition-colors mx-auto w-full max-w-[270px] h-auto overflow-hidden"
            >
              {/* Discount or New Tag */}
              {(product.dicountPercentage && product.dicountPercentage > 0) || product.isNew ? (
                <div
                  className={`absolute top-2 right-2 px-2 py-1 text-white text-sm font-bold rounded-full ${
                    product.dicountPercentage && product.dicountPercentage > 0 ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {product.dicountPercentage ? `-${product.dicountPercentage}%` : "NEW"}
                </div>
              ) : null}

              {/* Product Image */}
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={301}
                height={301}
                className="w-full h-[301px] object-cover mb-4"
              />

              {/* Product Info */}
              <h2 className="text-xl text-[#3A3A3A] font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 text-sm mb-2">{product.title}</p>
              <div className="text-sm font-medium mb-4">
                <span className="text-[#3A3A3A] font-semibold">
                  $.{product.price.toLocaleString()}
                </span>
              </div>

              <div className="flex mt-2 gap-2">
                {product.tags?.map((tag, index) => (
                  <span key={index} className="text-xs bg-blue-100 text-blue-600 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Options */}
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-transform duration-200 ease-in-out">
                {/* Product Details Button */}
                <button
                  onClick={() => router.push(`/product/${product._id}`)}
                  className="m-4 bg-white text-yellow-600 font-bold px-4 py-2 rounded-lg hover:bg-blue-300"
                >
                  Details
                </button>

                {/* Add to Cart Button */}
                <button
                  className="bg-white text-yellow-600 font-bold py-2 px-4 rounded shadow mb-2 hover:shadow-lg hover:bg-green-500 transition-shadow"
                  onClick={() => addToCart({ ...product, quantity: 1 })}
                >
                  Add to Cart
                </button>

                {/* Icons Row */}
                <div className="flex justify-center space-x-2 text-white text-sm mt-2">
                  <button className="hover:text-black flex items-center">
                    <IoShareSocialSharp /> Share
                  </button>
                  <button className="hover:text-black flex items-center">
                    <GoArrowSwitch /> Compare
                  </button>
                  
                  {/* Wishlist Button */}
                  <button
                    className={`hover:text-black flex items-center ${isWishlisted ? "text-red-500" : ""}`}
                    onClick={() =>
                      isWishlisted ? removeFromWishlist(product._id) : addToWishlist(product)
                    }
                  >
                    <FaHeart className={isWishlisted ? "fill-red-500" : "fill-white"} />
                    {isWishlisted ? " Liked" : " Like"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Button to show more Products */}
      <div className="text-center mt-6">
        <button
          onClick={() => router.push("/shop")}
          className="bg-white text-[#B88E2F] border border-[#B88E2F] font-bold py-3 px-16 hover:bg-lime-200 transition-colors"
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Products;
