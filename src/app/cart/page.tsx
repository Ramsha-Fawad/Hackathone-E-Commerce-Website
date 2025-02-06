"use client";

import Image from 'next/image';
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, updateCartQuantity, removeFromCart } = useCart(); // Assuming you have these methods in the CartContext

  // Calculate subtotal and total dynamically
  const calculateSubtotal = () => {
    return cart.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity < 1) return; // Prevents quantity from being less than 1
    updateCartQuantity(productId, quantity);
  };

  const subtotal = calculateSubtotal();

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
            <h1 className="text-3xl md:text-4xl font-semibold">Cart</h1>
            <p className="text-sm text-black">Home &gt; Cart</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="col-span-2 bg-white p-4">
          {cart.length === 0 ? (
              // Show "Your Cart is Empty" message
              <div className="text-center py-20">
                <h2 className="text-2xl font-semibold text-gray-600">
                  Your Cart is Empty
                </h2>
                <p className="text-gray-500 mt-2">
                  Start shopping to add items to your cart.
                </p>
                <Link href="/shop">
                  <button className="mt-4 py-2 px-6 bg-white text-black border border-black rounded-2xl hover:bg-yellow-600">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            ) : (
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="text-center border-b bg-[#F9F1E7]">
                  <th className="py-4">Product</th>
                  <th className="py-4">Price</th>
                  <th className="py-4">Quantity</th>
                  <th className="py-4">Subtotal</th>
                  <th className="py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="p-48">
              {cart.map((product) => (
                <tr key={product._id}>
                  <td className="py-4 flex flex-col md:flex-row items-center text-center md:text-left">
                    <div className="w-24 h-24 bg-[#F9F1E7] flex items-center justify-center rounded-md mx-auto md:mx-0">
                      <Image
                        src={product.imageUrl}
                        alt={product.title}
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                    </div>
                    <span className="mt-2 text-[#9F9F9F] md:ml-4">{product.title}</span>
                  </td>
                  <td className="py-4 items-center text-center text-[#9F9F9F]">$. {product.price.toLocaleString()}</td>
                  <td className="py-4 items-center text-center">
                    <input
                      type="number"
                      min="1"
                      value={product.quantity || 1}
                      onChange={(e) => handleQuantityChange(
                        product._id,
                        parseInt(e.target.value)
                      )
                    }
                      className="w-10 h-10 border rounded-md text-center items-center"
                    />
                  </td>
                  <td className="py-4 items-center text-center">$. {(product.price * (product.quantity || 1)).toLocaleString()}</td>
                  <td className="py-4">
                    <Image
                      src="/bin-icon.jpg"
                      alt="Delete"
                      width={24}
                      height={24}
                      className="ml-4 w-6 h-6 cursor-pointer inline-block"
                      onClick={() => removeFromCart(product._id)}
                    />
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
            )}
          </div>

          {/* Cart Totals */}
          {cart.length > 0 && (
          <div className="bg-[#F9F1E7] p-6 justify-items-center shadow-md space-y-9">
            <h2 className="text-lg md:text-xl font-bold mb-4">Cart Totals</h2>
            <div className="flex font-semibold justify-between items-center space-x-14 py-2">
              <span>Subtotal</span>
              <span className="text-[#9F9F9F]">$. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-2 space-x-14 font-semibold">
              <span>Total</span>
              <span className="text-[#B88E2F]">$. {subtotal.toLocaleString()}</span>
            </div>
            <button
              className="w-[222px] h-[58.95px] mt-4 py-2 bg-white text-black border border-black rounded-2xl hover:bg-yellow-600"
            >
              <Link href="/checkout">Check Out</Link>
            </button>
          </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#F9F1E7] py-10 items-center shadow-md">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center pt-14">
          <div className="flex flex-row items-center text-left space-x-4">
            <Image
              src="/trophy.jpg"
              alt="Trophy Icon"
              width={60}
              height={60}
            />
            <div>
              <span className="text-xl font-bold">High Quality</span>
              <p className="text-sm text-gray-500">Crafted from top materials</p>
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
}
