import React from "react";
import Image from 'next/image';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white py-6 shadow-md w-full h-[316px] items-center space-y-6"
      style={{
        backgroundImage: `url('/header-bg.jpg')`,
      }}>
        <div className="container mx-auto flex flex-col items-center py-20">
        <Image
            src="/logo.jpg"
            alt="Meubel House Logo"
            width={70}
            height={70}
            className="mb-4"
          />
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-semibold">Checkout</h1>
            <p className="text-sm text-black">Home &gt; Checkout</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto py-10 px-4 lg:flex lg:gap-10">
        {/* Billing details */}
        <div className="bg-white p-6 w-full h-full lg:pl-16 space-y-10 lg:w-2/3">
          <h2 className="text-2xl lg:text-[36px] text-black font-semibold mb-4">Billing details</h2>
          <form className="flex flex-col items-start space-y-10 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
              <label className="block text-black font-medium pb-4">First name</label>
            <input
              type="text"
              className="input-field w-full md:w-[211px] h-[75px] border border-gray-300 rounded-md px-4 py-2"
            />
              </div>
              <div>
              <label className="block text-black font-medium pb-4">Last name</label>
            <input
              type="text"
              className="input-field w-full md:w-[211px] h-[75px] border border-gray-300 rounded-md px-4 py-2"
            />
              </div>
            </div>
            <div>
            <label className="block text-black font-medium pb-4">Company Name (Optional)</label>
            <input
              type="text"
              className="input-field w-full md:w-[453px] h-[75px] border border-gray-300 rounded-md px-4 py-2 sm:col-span-2"
            />
            </div>
            <div>
            <label className="block text-black font-medium pb-4">Country / Region</label> 
            <input
              type="text"
              placeholder="Sri Lanka"
              className="input-field w-full md:w-[453px] h-[75px] border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div>
            <label className="block text-black font-medium pb-4">Town / City</label>
            <input
              type="text"
              className="input-field w-full md:w-[453px] h-[75px] border border-gray-300 rounded-md px-4 py-2"
            />
            </div>
            <div>
            <label className="block text-black font-medium pb-4">Province</label>
            <input
              type="text"
              placeholder="Western Province"
              className="input-field w-full md:w-[453px] h-[75px] border border-gray-300 rounded-md px-4 py-2"
            />
            </div>
            <div>
            <label className="block text-black font-medium pb-4">ZIP Code</label>
            <input
              type="text"
              className="input-field w-full md:w-[453px] h-[75px] border border-gray-300 rounded-md px-4 py-2"
            />
            </div>
            <div>
            <label className="block text-black font-medium pb-4">Phone</label>
            <input
              type="number"
              className="input-field w-full md:w-[453px] h-[75px] border border-gray-300 rounded-md px-4 py-2"
            />
            </div>
            <div>
            <label className="block text-black font-medium pb-4">Email Address</label>
            <input
              type="email"
              className="input-field w-full md:w-[453px] h-[75px] border border-gray-300 rounded-md px-4 py-2"
            />
            </div>
            <textarea
              placeholder="Additional Information"
              className="input-field w-full md:w-[453px] h-[75px] border border-gray-300 rounded-md px-4 py-2 sm:col-span-2"
              rows={4}
            ></textarea>
          </form>
        </div>

        {/* Order details */}
        <div className="bg-white w-full pt-14 pr-4 lg:pr-20 space-y-6 lg:w-1/3 mt-10 lg:mt-0">
          <h2 className="text-xl font-semibold mb-4">Product</h2>
          <div className="flex justify-between mb-4">
            <p className="text-gray-400">Asgard sofa <b className="text-black">× 1</b></p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between my-4">
            <p>Subtotal</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Total</p>
            <p className="font-semibold text-[#B88E2F]">Rs. 250,000.00</p>
          </div>
          <hr />
          {/* Payment methods */}
          <div className="mt-4">
            <label className="flex items-center mb-2">
              <input type="radio" name="payment" className="mr-2" />
              Direct Bank Transfer
            </label>
            <p className="text-sm text-gray-600 text-[16px] pl-6 mb-2">
              Make your payment directly into our bank account. Please use your Order
              ID as the payment reference. Your order will not be shipped until
              the funds have cleared in our account.
            </p>
            <label className="flex items-center text-gray-400 mb-2">
              <input type="radio" name="payment" className="mr-2" />
              Direct Bank Transfer
            </label>
            <label className="flex items-center text-gray-400 mb-2">
              <input type="radio" name="payment" className="mr-2" />
              Cash On Delivery
            </label>
            <p className="text-sm text-black text-[16px] pl-6 mb-2">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and
            for other purposes described in our <b>privacy policy</b>.
            </p>
          </div>
          <button className="w-full md:w-[318px] h-[64px] border border-black bg-white text-black text-[20px] py-3 rounded-2xl mt-4 hover:bg-gray-500">
            Place order
          </button>
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
};

export default CheckoutPage;
