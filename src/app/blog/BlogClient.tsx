"use client";

import React, { useState } from "react";
import Image from 'next/image';

const BlogClient: React.FC = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Going all-in with millennial design",
      author: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      image: "/blog-image1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
        id: 2,
        title: "Exploring new ways of decorating",
        author: "Admin",
        date: "14 Oct 2022",
        category: "Handmade",
        image: "/blog-image2.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      },
      {
        id: 3,
        title: "Handmade pieces that took time to make",
        author: "Admin",
        date: "14 Oct 2022",
        category: "Wood",
        image: "/blog-image3.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      },
  ]);

  // Simulated dynamic data for categories
  const [categories] = useState([
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ]);

  // Simulated dynamic data for recent posts

  const [recentPosts] = useState([
    {
      id: 1,
      title: "Going all-in with millennial design",
      image: "/posts-image1.jpg",
      date: "03 Aug 2022",
    },
    {
        id: 2,
        title: "Exploring new ways of decorating",
        image: "/posts-image2.jpg",
        date: "03 Aug 2022",
      },
      {
        id: 3,
        title: "Handmade pieces that took time to make",
        image: "/posts-image3.jpg",
        date: "03 Aug 2022",
      },
      {
        id: 4,
        title: "Modern home in Milan",
        image: "/posts-image4.jpg",
        date: "03 Aug 2022",
      },
      {
        id: 5,
        title: "Colorful office redesign",
        image: "/posts-image5.jpg",
        date: "03 Aug 2022",
      },  
  ]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div
        className="bg-white py-6 shadow-md w-full h-[316px] items-center space-y-6"
        style={{
          backgroundImage: `url('/header-bg.jpg')`,
        }}
      >
        <div className="container mx-auto flex flex-col items-center py-20">
        <Image
            src="/logo.jpg"
            alt="Meubel House Logo"
            width={70}
            height={70}
            className="mb-4"
          />
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-semibold">Blog</h1>
            <p className="text-sm text-black">Home &gt; Blog</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-10 py-11 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-9">
          {/* Blog Posts */}
          <div className="md:col-span-3 space-y-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-[817px] h-[500px] object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <img src="/admin-users-icon.jpg" alt="Admin Users" /><span>{post.author}</span>
                    <span>&middot;</span>
                    <img src="/calendar-icon.jpg" alt="Calender" /><span>{post.date}</span>
                    <span>&middot;</span>
                    <img src="/tag-icon.jpg" alt="Category Tag" /><span>{post.category}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                  <p className="text-gray-700 font-[15px] text-balance mb-6">{post.description}</p>
                  <a
                    href="#"
                    className="text-black underline hover:text-blue-600 font-semibold"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-14">
            {/* Categories */}
            <div className="bg-white rounded-lg p-8 space-y-9 w-[393px] h-[537px]">
                <div className="flex justify-end items-center border rounded-md border-gray-400 w-[311px] h-[58px] p-4"> <img src="/search-icon.jpg" alt="" /></div>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-7">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-gray-700"
                  >
                    {category.name}
                    <span className="text-gray-500">{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg p-20 space-y-7 w-[393px] h-[650px]">
              <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
              <ul className="space-y-7">
                {recentPosts.map((recent) => (
                  <li key={recent.id} className="flex items-center space-x-4">
                    <img
                      src={recent.image}
                      alt={recent.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="text-gray-700 font-semibold">
                        {recent.title}
                      </h4>
                      <p className="text-sm text-gray-500">{recent.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="container mx-auto p-6 flex justify-center space-x-4">
        <button className="bg-[#B88E2F] text-white px-4 py-2 rounded-md">1</button>
        <button className="bg-[#F9F1E7] px-4 py-2 rounded-md">2</button>
        <button className="bg-[#F9F1E7] px-4 py-2 rounded-md">3</button>
        <button className="bg-[#F9F1E7] px-4 py-2 rounded-md">Next</button>
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

export default BlogClient;
