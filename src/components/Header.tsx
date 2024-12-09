'use client'

import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="Meubel House Logo" className="w-10 h-10" />
          <span className="text-3xl font-bold text-black">Furniro</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-20">
          <Link href="/" className="text-black hover:text-yellow-600 transition">
            Home
          </Link>
          <Link href="/shop" className="text-black hover:text-yellow-600 transition">
            Shop
          </Link>
          <Link href="/blog" className="text-black hover:text-yellow-600 transition">
            Blog
          </Link>
          <Link href="/contact" className="text-black hover:text-yellow-600 transition">
            Contact
          </Link>
        </nav>

        {/* Icons Section */}
        <div className="hidden md:flex justify-evenly items-center space-x-16">
          <button className="hover:text-yellow-600">
            <img src="/user-icon.jpg" alt="User" className="w-6 h-6" />
          </button>
          <button className="hover:text-yellow-600">
            <img src="/search-icon.jpg" alt="Search" className="w-6 h-6" />
          </button>
          <button className="hover:text-yellow-600">
            <img src="/heart-icon.jpg" alt="Wishlist" className="w-6 h-6" />
          </button>
          <Link href="/cart">
            <img src="/cart-icon.jpg" alt="Cart" className="w-6 h-6" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="text-black hover:text-yellow-600 transition" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/shop" className="text-black hover:text-yellow-600 transition" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link href="/blog" className="text-black hover:text-yellow-600 transition" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="text-black hover:text-yellow-600 transition" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
