// contact/page.tsx
import React from "react";
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen max-w-full">
      {/* Header Section */}
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
            <h1 className="text-4xl font-semibold">Contact</h1>
            <p className="text-sm text-black">Home &gt; Contact</p>
          </div>
        </div>
      </div>

      {/* Contact Form and Information */}
      <div className="container mx-auto items-center h-[1144px] px-60 pt-24 pb-16">
        <h2 className="text-[36px] font-bold items-center text-center mb-4">Get In Touch With Us</h2>
        <p className="text-center text-gray-600 mb-8">
          For more information about our product & services, please feel free to drop us <br /> an email. Our staff is always there to help you out. Do not hesitate!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="space-y-10 w-[393px] h-[537px] pt-10 pl-7">
            <div className="flex items-start gap-5 pt-6">
              <span className="text-yellow-500 text-2xl mr-4"><img src="/location-icon.jpg" alt="Location Sign" /></span>
              <div className="p-4">
                <h4 className="font-medium text-[24px]">Address</h4>
                <p className="text-black text-[16px]">
                  236 5th SE Avenue, New <br/> York NY10000, United <br/> States
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 pt-6">
              <span className="text-yellow-500 text-2xl mr-4"><img src="/phone-icon.jpg" alt="Phone Sign" /></span>
              <div>
                <h4 className="font-medium text-[24px]">Phone</h4>
                <p className="text-black text-[16px]">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 pt-6">
              <span className="text-yellow-500 text-[24px] mr-4"><img src="/clock-icon.jpg" alt="Clock-fill" /></span>
              <div>
                <h4 className="font-medium text-2xl">Working Time</h4>
                <p className="text-black text-[16px]">
                  Monday-Friday: 9:00 - <br /> 22:00 <br />
                  Saturday-Sunday: 9:00 - <br /> 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-10 pt-10">
            <div>
              <label className="block text-black font-medium pb-4">Your name</label>
              <input
                type="text"
                placeholder="Abc"
                className="w-[528.75px] h-[75px] border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-black font-medium pb-4">Email address</label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-[528.75px] h-[75px] border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-black font-medium pb-4">Subject</label>
              <input
                type="text"
                placeholder="This is optional"
                className="w-[526.75px] h-[75px] border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-black font-medium pb-4">Message</label>
              <textarea
                placeholder="Hi! I'd like to ask about"
                rows={4}
                className="w-[527px] h-[120px] border border-gray-300 rounded-md px-4 py-5 justify-center"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#B88E2F] text-white font-bold py-2 px-6 rounded-md w-[237px] h-[55px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#F9F1E7] h-[270px] py-10 items-center shadow-md">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center pt-14">
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

export default ContactPage;
