"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { IoShareSocialSharp } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
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

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [filterOption, setFilterOption] = useState<string | null>(null);

  const router = useRouter();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

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
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle filter selection
  const handleFilter = (option: string) => {
    setFilterOption(option);
    setShowFilter(false);
    
    if (option === "discounted") {
      setFilteredProducts(products.filter((product) => product.dicountPercentage && product.dicountPercentage > 0));
    } else if (option === "new") {
      setFilteredProducts(products.filter((product) => product.isNew));
    } else {
      setFilteredProducts(products);
    }
  };

  if (loading) return <p>Loading products...</p>;
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div
        className="bg-white py-6 shadow-md w-full h-[316px] items-center space-y-6"
        style={{
          backgroundImage: `url('/header-bg.jpg')`,
        }}
      >
        <div className="container mx-auto flex flex-col items-center py-20">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-semibold">Shop</h1>
            <p className="text-sm text-black">Home &gt; Shop</p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container bg-[#F9F1E7] w-full p-6 flex flex-wrap justify-between items-center">
        <div className="bg-[#F9F1E7] flex items-center pl-14 space-x-8 mb-4 md:mb-0">
          <Image
            src="/filter-icon.jpg"
            alt="Filter button"
            width={19.05}
            height={16.67}
          />
          <button onClick={() => setShowFilter(!showFilter)}
            className="bg-[#F9F1E7]-200 pr-2 text-black font-medium border px-4 py-2 rounded-md"
            >
            Filter
          </button>
          {showFilter && (
            <div className="absolute bg-white shadow-md mt-2 w-48 rounded-md overflow-hidden">
              <button onClick={() => handleFilter("discounted")} className="block w-full px-4 py-2 text-left hover:bg-gray-200">Discounted Items</button>
              <button onClick={() => handleFilter("new")} className="block w-full px-4 py-2 text-left hover:bg-gray-200">New Arrivals</button>
              <button onClick={() => handleFilter("all")} className="block w-full px-4 py-2 text-left hover:bg-gray-200">All Products</button>
            </div>
          )}
          <Image
            src="/grid-icon.jpg"
            alt="View in Grids"
            width={19.05}
            height={16.67}
          />
          <Image
            src="/bi-view-icon.jpg"
            alt="Bi-view List"
            width={19.05}
            height={16.67}
          />
          <span className="text-black font-medium">
            Showing 1–24 of 72 results
          </span>
          {/* Display the selected filter */}
    {filterOption && (
      <span className="ml-4 text-sm bg-gray-200 px-3 py-1 rounded-md">
        Filter: {filterOption === "discounted" ? "Discounted Items" : filterOption === "new" ? "New Arrivals" : "All Products"}
      </span>
    )}
        </div>
        <div className="flex items-center space-x-4">
          <span>Show</span>
          <select className="border border-gray-300 rounded-md p-1">
            <option>24</option>
            <option>48</option>
            <option>72</option>
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
      <div className="px-6 sm:px-12 lg:px-24 justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const isWishlisted = wishlist.some((item) => item._id === product._id);
          return  (
          <div
            key={product._id}
            className="relative bg-white border p-4 group hover:bg-gray-300 transition-colors mx-auto w-full max-w-[270px] h-auto overflow-hidden"
          >
            {/* Discount or New Tag */}
            {(product.dicountPercentage && product.dicountPercentage > 0) ||
            product.isNew ? (
              <div
                className={`absolute top-2 right-2 px-2 py-1 text-white text-sm font-bold rounded-full ${
                  product.dicountPercentage && product.dicountPercentage > 0
                    ? "bg-red-500"
                    : "bg-green-500"
                }`}
              >
                {product.dicountPercentage
                  ? `-${product.dicountPercentage}%`
                  : "NEW"}
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
            <h2 className="text-xl text-[#3A3A3A] font-semibold mb-2">
              {product.title}
            </h2>
            <p className="text-gray-700 text-sm mb-2">{product.title}</p>
            <div className="text-sm font-medium mb-4">
              <span className="text-[#3A3A3A] font-semibold">
                $.{product.price.toLocaleString()}
              </span>
            </div>

            <div className="flex mt-2 gap-2">
              {product.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-100 text-blue-600 py-1 rounded-md"
                >
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
        ;
      </div>

      {/* Pagination */}
      <div className="container mx-auto p-6 flex justify-center space-x-4">
        <button className="bg-[#B88E2F] text-white px-4 py-2 rounded-md">
          1
        </button>
        <button className="bg-[#F9F1E7] px-4 py-2 rounded-md">2</button>
        <button className="bg-[#F9F1E7] px-4 py-2 rounded-md">3</button>
        <button className="bg-[#F9F1E7] px-4 py-2 rounded-md">Next</button>
      </div>

      {/* Features Section */}
      <div className="bg-[#F9F1E7] py-10 items-center shadow-md">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center pt-14">
          <div className="flex flex-row items-center text-left space-x-4">
            <Image src="/trophy.jpg" alt="Trophy Icon" width={60} height={60} />
            <div>
              <span className="text-xl font-bold">High Quality</span>
              <p className="text-sm text-gray-500">
                Crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center text-left space-x-4">
            <Image
              src="/protection-tick-icon.jpg"
              alt="Protection Symbol"
              width={60}
              height={60}
            />
            <div>
              <span className="text-xl font-bold">Warranty Protection</span>
              <p className="text-sm text-gray-500">Over 2 years</p>
            </div>
          </div>
          <div className="flex flex-row items-center text-left space-x-4">
            <Image
              src="/shipping-icon.jpg"
              alt="Shipping Icon"
              width={60}
              height={60}
            />
            <div>
              <span className="text-xl font-bold">Free Shipping</span>
              <p className="text-sm text-gray-500">Order over $150</p>
            </div>
          </div>
          <div className="flex flex-row items-center text-left space-x-4">
            <Image
              src="/support-icon.jpg"
              alt="Customer Support Icon"
              width={60}
              height={60}
            />
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
