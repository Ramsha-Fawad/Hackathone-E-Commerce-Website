"use client";

import { useCart } from "@/context/CartContext";
import { IoShareSocialSharp } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "@/context/WishlistContext";

type Product = {
  _id: string;
  title: string;
  price: number;
  description: string;
  dicountPercentage?: number;
  isNew: boolean;
  imageUrl: string;
  tags: string[];
};

const ProductDetailClient = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = wishlist.some((item) => item._id === product._id);

  const discountedPrice = product.dicountPercentage
    ? product.price - (product.price * product.dicountPercentage) / 100
    : product.price;

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity: 1 }; // Add quantity dynamically
    addToCart(productWithQuantity); // Pass updated product to addToCart
    alert(`${product.title} added to cart!`);
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product._id);
      alert(`${product.title} removed from wishlist!`);
    } else {
      addToWishlist(product);
      alert(`${product.title} added to wishlist!`);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      {product.isNew && (
        <span className="text-green-600 font-semibold">New Arrival</span>
      )}
      <p className="text-lg mb-4">
        {product.dicountPercentage ? (
          <>
            <span className="line-through text-red-500">
              ${product.price.toFixed(2)}
            </span>{" "}
            <span className="font-bold text-green-600">
              ${discountedPrice.toFixed(2)}
            </span>
          </>
        ) : (
          <span className="font-bold">${product.price.toFixed(2)}</span>
        )}
      </p>
      <p className="text-gray-700 mb-6">{product.description}</p>
      {product.tags.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Tags:</h2>
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
      <button
        className="bg-[#B88E2F] text-white font-bold w-48 py-2 px-4 border border-black rounded shadow mb-2 hover:shadow-lg hover:bg-yellow-600 transition-shadow"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      {/* Icons Row */}
      <div className="flex flex-row space-x-2 text-black text-lg mt-2">
        <button className="hover:text-green-600 flex items-center">
          <IoShareSocialSharp /> Share
        </button>
        <button className="hover:text-blue-600 flex items-center">
          <GoArrowSwitch /> Compare
        </button>
        <button
          className={`flex items-center ${isWishlisted ? "text-red-300" : "hover:text-red-600"}`}
          onClick={handleWishlistToggle}
        >
          <FaHeart />
          {isWishlisted ? " Liked" : " Like"}
        </button>
      </div>
    </>
  );
};

export default ProductDetailClient;
