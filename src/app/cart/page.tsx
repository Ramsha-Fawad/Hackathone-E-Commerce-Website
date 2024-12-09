"use client";

import Image from "next/image";
import { useState } from "react";

export default function CartPage() {
  const [quantity, setQuantity] = useState(1);
  const price = 250000;
  const subtotal = price * quantity;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white py-6 shadow-md w-full h-[316px] items-center space-y-6"
      style={{
        backgroundImage: `url('/header-bg.jpg')`,
      }}>
        <div className="container mx-auto flex flex-col items-center py-20">
          <img src="/logo.jpg" alt="Meubel House Logo" className="mb-4" />
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-semibold">Cart</h1>
            <p className="text-sm text-black">Home &gt; Cart</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="col-span-2 bg-white p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-center border-b bg-[#F9F1E7]">
                  <th className="py-4">Product</th>
                  <th className="py-4">Price</th>
                  <th className="py-4">Quantity</th>
                  <th className="py-4">Subtotal</th>
                </tr>
              </thead>
              <tbody className="p-48">
                <tr>
                  <td className="py-4 flex items-center text-center">
                  <div className="w-24 h-24 bg-[#F9F1E7] flex items-center justify-center rounded-md">
                      <Image
                        src="/sofa.jpg"
                        alt="Asgard Sofa"
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                    </div>
                    <span className="mt-2 text-[#9F9F9F]">Asgard Sofa</span>
                  </td>
                  <td className="py-4 items-center text-center text-[#9F9F9F]">Rs. {price.toLocaleString()}</td>
                  <td className="py-4 items-center text-center">
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="w-10 h-10 border rounded-md text-center items-center"
                    />
                  </td>
                  <td className="py-4 items-center text-center">Rs. {subtotal.toLocaleString()}
                  </td>
                  <td className="py-4">
                  <img src="/bin-icon.jpg" alt="Delete" className="ml-4 w-6 h-6 cursor-pointer inline-block" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="bg-[#F9F1E7] p-6 w-[393px] h-[390px] justify-items-center shadow-md space-y-9">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="flex font-semibold justify-between items-center space-x-14 py-2">
              <span>Subtotal</span>
              <span className="text-[#9F9F9F]">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-2 space-x-14 font-semibold">
              <span>Total</span>
              <span className="text-[#B88E2F]">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <button
              className="w-[222px] h-[58.95px] mt-4 py-2 bg-white text-black border border-black rounded-2xl hover:bg-yellow-600"
            >
              Check Out
            </button>
          </div>
        </div>
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
}