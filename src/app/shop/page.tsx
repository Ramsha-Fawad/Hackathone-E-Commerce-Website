import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { FaHeart } from "react-icons/fa";

type Product = {
  id: number;
  name: string;
  description: string;
  price: { new: number; old?: number };
  image: string;
  discount?: string;
  isNew?: boolean;
};
// Array of Products

const products: Product[] = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: { new: 2500000, old: 3500000 },
    image: "/image 1.jpg",
    discount: "30%",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: { new: 2500000 },
    image: "/image 2.jpg",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: { new: 7500000, old: 14000000 },
    image: "/image 3.jpg",
    discount: "50%",
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: { new: 5000000 },
    image: "/image 4.jpg",
    isNew: true,
  }];

  const Shop = () => {
    const formatPrice = (price: number) => {
      // Convert number to string and format it as X.XX.XXX
      const priceStr = price.toString();
      const formatted = priceStr.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      return formatted;
    };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-white py-6 shadow-md w-full h-[316px] items-center space-y-6"
      style={{
        backgroundImage: `url('/header-bg.jpg')`,
      }}>
        <div className="container mx-auto flex flex-col items-center py-20">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-semibold">Shop</h1>
            <p className="text-sm text-black">Home &gt; Shop</p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container bg-[#F9F1E7] mr-0 w-full p-6 flex justify-between items-center">
        <div className="bg-[#F9F1E7] flex items-center space-x-4">
           <img src="/filter-icon.jpg" alt="Filter button" />
          <button className="bg-[#F9F1E7]-200 p-2">Filter</button>
          <span>Showing 1–16 of 32 results</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Show</span>
          <select className="border border-gray-300 rounded-md p-1">
            <option>16</option>
            <option>32</option>
            <option>64</option>
          </select>
          <span>Sort by</span>
          <select className="border border-gray-300 rounded-md p-1">
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

     {/* Product Grid */}
<div className="container mx-auto p-6 grid grid-cols-4 gap-6">
  {Array.from({ length: 3 }).map((_, rowIndex) =>
    products.map((product) => (
      <div
        key={`${rowIndex}-${product.id}`}
        className="relative bg-white border p-4 group hover:bg-gray-300 transition-colors mx-auto w-[270px] h-[446px] overflow-hidden"
      >
        {/* Discount or New Tag */}
        {(product.discount || product.isNew) && (
          <div
            className={`absolute top-2 right-2 px-2 py-1 text-white text-sm font-bold rounded-full ${
              product.discount ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {product.discount || "NEW"}
          </div>
        )}

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[301px] object-cover mb-4"
        />

        {/* Product Info */}
        <h2 className="text-xl text-[#3A3A3A] font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 text-sm mb-2">{product.description}</p>
        <div className="text-sm font-medium mb-4">
          <span className="text-[#3A3A3A] font-semibold">
            Rp{formatPrice(product.price.new)}
          </span>
          {product.price.old && (
            <span className="line-through text-gray-500 ml-2">
              Rp{formatPrice(product.price.old)}
            </span>
          )}
        </div>
        {/* Hover Options - Fixed Visibility */}
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-transform duration-200 ease-in-out">
              {/* Add to Cart Button */}
              <button className="bg-white text-yellow-600 font-bold py-2 px-4 rounded shadow mb-2 hover:shadow-lg hover:bg-green-500 transition-shadow">
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
                <button className="hover:text-black flex items-center">
                  <FaHeart />
                  Like
                </button>
              </div>
            </div>
      </div>
    ))
  )}
</div>

      {/* Pagination */}
      <div className="container mx-auto p-6 flex justify-center space-x-4">
        <button className="bg-[#B88E2F] text-white px-4 py-2 rounded-md">1</button>
        <button className="bg-[#F9F1E7] px-4 py-2 rounded-md">2</button>
        <button className="bg-[#F9F1E7] px-4 py-2 rounded-md">3</button>
        <button className="bg-[#F9F1E7] px-4 py-2 rounded-md">Next</button>
      </div>

      {/* Features Section */}
      <div className="bg-[#F9F1E7]  h-[270px] py-10 items-center shadow-md">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center pt-14">
          <div className="flex flex-row items-center text-left space-x-4">
            <img src="/trophy.jpg" alt="Trophy Icon" className="w-[60px] h-[60px]" />
            <div>
              <span className="text-xl font-bold">High Quality</span>
              <p className="text-sm text-gray-500">Crafted from top materials</p>
            </div>
          </div>
          <div className="flex flex-row items-center text-left space-x-4">
            <img src="/protection-tick-icon.jpg" alt="Protection Symbol" className="w-[60px] h-[60px]" />
            <div>
              <span className="text-xl font-bold">Warranty Protection</span>
              <p className="text-sm text-gray-500">Over 2 years</p>
            </div>
          </div>
          <div className="flex flex-row items-center text-left space-x-4">
            <img src="/shipping-icon.jpg" alt="Shipping Icon" className="w-[60px] h-[60px]" />
            <div>
              <span className="text-xl font-bold">Free Shipping</span>
              <p className="text-sm text-gray-500">Order over $150</p>
            </div>
          </div>
          <div className="flex flex-row items-center text-left space-x-4">
            <img src="/support-icon.jpg" alt="Customer Support Icon" className="w-[60px] h-[60px]" />
            <div>
              <span className="text-xl font-bold">24/7 Support</span>
              <p className="text-sm text-gray-500">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
