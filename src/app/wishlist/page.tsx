"use client";

import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div
        className="bg-white py-6 shadow-md w-full h-[316px] items-center space-y-6 bg-cover bg-center"
        style={{
          backgroundImage: `url('/header-bg.jpg')`,
        }}
      >
        <div className="container mx-auto flex flex-col items-center py-20 px-4">
          <Image
            src="/logo.jpg"
            alt="Meubel House Logo"
            width={70}
            height={70}
            className="mb-4"
          />
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-semibold">Wishlist</h1>
            <p className="text-sm text-black">Home &gt; Wishlist</p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>
            Your wishlist is empty. <Link href="/">Go shop!</Link>
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div
                key={product._id}
                className="border p-4 rounded-lg shadow-md"
              >
                <Link href={`/product/${product._id}`}>
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="rounded-md"
                  />
                </Link>
                <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                <p className="text-gray-600">${product.price}</p>
                <div className="flex flex-row items-center gap-4">
                  <button
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    onClick={() => removeFromWishlist(product._id)}
                  >
                    Remove
                  </button>
                  <button
                    className="mt-2 bg-[#B88E2F] text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                    onClick={() =>
                      addToCart({
                        ...product,
                        quantity: 1,
                        description: "",
                      })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
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

export default WishlistPage;
