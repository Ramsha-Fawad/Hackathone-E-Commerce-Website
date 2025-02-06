"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  dicountPercentage: number;
  isNew: boolean;
  imageUrl: string;
  tags: string[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [noResults, setNoResults] = useState(false);

  const { cart } = useCart();
  const { wishlist } = useWishlist();

  // Calculate the total number of items in the cart
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Get total wishlist count
  const wishlistCount = wishlist.length;

  // Fetch products from Sanity
  useEffect(() => {
    async function fetchProducts() {
      const data = await client.fetch(
        `*[_type == "product"] {
          _id,
          title,
          price,
          description,
          dicountPercentage,
          isNew,
          "imageUrl": productImage.asset->url,
          tags
        }`
      );
      setProducts(data);
    }
    fetchProducts();
  }, []);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      setNoResults(false);
      return;
    }

    const results = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    setFilteredProducts(results);
    setNoResults(results.length === 0);
  }, [searchQuery, products]);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.jpg"
            alt="Meubel House Logo"
            width={45}
            height={45}
          />
          <span className="text-3xl font-bold text-black">Furniro</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-20">
          <Link
            href="/"
            className="text-black hover:text-yellow-600 transition"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-black hover:text-yellow-600 transition"
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className="text-black hover:text-yellow-600 transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-yellow-600 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Icons Section */}
        <div className="hidden md:flex justify-evenly items-center space-x-16">
          <button className="hover:text-yellow-600">
            <Image src="/user-icon.jpg" alt="User" width={20} height={20} />
          </button>

          {/* Search Icon & Input */}
          <div className="relative">
            <button
              className="hover:text-yellow-600"
              onClick={() => setSearchActive(!searchActive)}
            >
              <Image
                src="/search-icon.jpg"
                alt="Search"
                width={20}
                height={20}
              />
            </button>

            {searchActive && (
              <div className="absolute right-0 top-8 bg-white shadow-md p-2 rounded-md w-64 z-50">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full p-2 border rounded-md focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* Search Results */}
                <div className="mt-2 max-h-40 overflow-y-auto">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product._id}
                      href={`/product/${product._id}`}
                      className="block p-2 border-b hover:bg-gray-100"
                    >
                      {product.title}
                    </Link>
                  ))}

                  {noResults && (
                    <p className="text-gray-500 text-center">
                      No Product Found
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* Wishlist */}
          <Link href="/wishlist" className="relative hover:text-yellow-600">
            <Image
              src="/heart-icon.jpg"
              alt="Wishlist"
              width={20}
              height={20}
            />
            {wishlistCount > 0 && (
              <span className="absolute transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
          {/* Cart */}
          <Link href="/cart">
            <Image src="/cart-icon.jpg" alt="Cart" width={20} height={20} />
            {itemCount > 0 && (
              <span className="absolute transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AiOutlineMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              className="text-black hover:text-yellow-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-black hover:text-yellow-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className="text-black hover:text-yellow-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-black hover:text-yellow-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col items-center space-y-4">
              <button
                className="hover:text-yellow-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image src="/user-icon.jpg" alt="User" width={20} height={20} />
              </button>

              {/* Search Bar Inside Mobile Menu */}
              <div className="relative w-full px-6">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full p-2 border rounded-md focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* Search Results */}
                <div className="mt-2 max-h-40 overflow-y-auto bg-white shadow-md w-full">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product._id}
                      href={`/product/${product._id}`}
                      className="block p-2 border-b hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {product.title}
                    </Link>
                  ))}
                  {noResults && (
                    <p className="text-gray-500 text-center">
                      No Product Found
                    </p>
                  )}
                </div>
              </div>
              {/* Wishlist */}
              <Link
                href="/wishlist"
                onClick={() => setIsMenuOpen(false)}
                className="relative hover:text-yellow-600"
              >
                <Image
                  src="/heart-icon.jpg"
                  alt="Wishlist"
                  width={20}
                  height={20}
                />
                {wishlistCount > 0 && (
                  <span className="absolute transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              {/* Cart */}
              <Link
                href="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="relative hover:text-yellow-600"
              >
                <Image src="/cart-icon.jpg" alt="Cart" width={20} height={20} />
                {itemCount > 0 && (
                  <span className="absolute transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
