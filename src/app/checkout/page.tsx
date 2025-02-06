"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const CheckoutPage = () => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
    paymentMethod: "",
  });
  const [error, setError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false); // State to track if order is placed

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if all required fields are filled
    for (const key in formData) {
      if (formData[key as keyof typeof formData] === "") {
        alert("Please fill in all required fields");
        return;
      }
    }

    console.log("Form submitted successfully!", formData);

    // Simulate successful order placement
    setOrderPlaced(true);

    // Optional: Clear cart after successful order placement
    // removeFromCart();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update state based on input name
    }));
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen overflow-y-auto">
      <div className="bg-white py-6 shadow-md w-full h-[316px] items-center space-y-6" style={{ backgroundImage: 'url(/header-bg.jpg)' }}>
        <div className="container mx-auto flex flex-col items-center py-20">
          <Image src="/logo.jpg" alt="Meubel House Logo" width={70} height={70} className="mb-4" />
          <h1 className="text-4xl font-semibold">Checkout</h1>
        </div>
      </div>
      
      <div className="container mx-auto py-10 px-4 lg:flex lg:gap-10">
        <div className="bg-white p-6 w-full h-full lg:pl-16 space-y-6 lg:w-2/3">
          <h2 className="text-2xl lg:text-[36px] text-black font-semibold">Billing details</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="border p-4 w-full" />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="border p-4 w-full" />
            </div>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name (Optional)" className="border p-4 w-full" />
            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country / Region" className="border p-4 w-full" />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Town / City" className="border p-4 w-full" />
            <input type="text" name="province" value={formData.province} onChange={handleChange} placeholder="Province" className="border p-4 w-full" />
            <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="ZIP Code" className="border p-4 w-full" />
            <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="border p-4 w-full" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="border p-4 w-full" />
            <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} placeholder="Additional Information" className="border p-4 w-full" rows={4}></textarea>
            {/* Place order button inside form */}
            <button type="submit" className="w-full bg-[#B88E2F] text-white py-3 rounded-md hover:bg-gray-800">
              Place Order
            </button>
          </form>
        </div>

        <div className="bg-white w-full p-6 lg:pr-20 space-y-6 lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cart.map((item) => (
            <div key={item._id} className="flex justify-between mb-4">
              <p>{item.title} <b className="text-black">× {item.quantity}</b></p>
              <p>Rs. {item.price * item.quantity}</p>
            </div>
          ))}
          <div className="flex justify-between my-4">
            <p>Subtotal</p>
            <p>Rs. {totalAmount}</p>
          </div>
          <div className="flex justify-between mb-4 font-semibold">
            <p>Total</p>
            <p className="text-[#B88E2F]">Rs. {totalAmount}</p>
          </div>
          <hr />
          <div className="mt-4">
            <label className="flex items-center mb-2">
              <input type="radio" name="paymentMethod" value="bank" onChange={handleChange} className="mr-2" /> Direct Bank Transfer
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="paymentMethod" value="cod" onChange={handleChange} className="mr-2" /> Cash On Delivery
            </label>
          </div>
        </div>
      </div>

      {/* Order Confirmation Popup */}
      {orderPlaced && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold">Order Placed Successfully!</h2>
            <p className="mt-4">Thank you for your order. You will receive an email confirmation soon.</p>
            <button
              onClick={() => setOrderPlaced(false)} 
              className="mt-4 px-6 py-2 bg-[#B88E2F] text-white rounded-md hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
