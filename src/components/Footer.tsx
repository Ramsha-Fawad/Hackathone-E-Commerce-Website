import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {/* Section 1 */}
        <div>
          <h1 className="text-xl text-black text-[24px] w-[85px] h-[36px] font-bold">Funiro.</h1>
          <p className="mt-4 text-sm">
            1234 Furniture Street, Suite 5678<br />
            Cityville, State, 12345
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-lg font-semibold">Links</h2>
          <ul className="mt-4 text-black font-semibold space-y-2">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li><Link href="/shop" className="hover:text-gray-900">Shop</Link></li>
            <li><Link href="/about" className="hover:text-gray-900">About</Link></li>
            <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-lg font-semibold">Help</h2>
          <ul className="mt-4 text-black font-semibold space-y-2">
            <li><Link href="/payment-options" className="hover:text-gray-900">Payment Options</Link></li>
            <li><Link href="/returns" className="hover:text-gray-900">Returns</Link></li>
            <li><Link href="/privacy-policies" className="hover:text-gray-900">Privacy Policies</Link></li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-lg font-semibold">Newsletter</h2>
          <form className="mt-4 flex flex-col sm:flex-row items-stretch gap-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-300 flex-grow"
            />
            <button
              type="submit"
              className="bg-yellow-300 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-4 text-center md:text-left">
        <p className="text-sm">&copy; 2023 Funiro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
