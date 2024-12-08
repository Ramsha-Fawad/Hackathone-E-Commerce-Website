import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Section 1 */}
        <div>
          <h1 className="text-xl font-bold">Funiro</h1>
          <p className="mt-4 text-sm">
            1234 Furniture Street, Suite 5678<br />
            Cityville, State, 12345
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-lg font-semibold">Links</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#home" className="hover:text-gray-900">Home</a></li>
            <li><a href="/shop" className="hover:text-gray-900">Shop</a></li>
            <li><a href="/about" className="hover:text-gray-900">About</a></li>
            <li><a href="/contact" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-lg font-semibold">Help</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="/payment-options" className="hover:text-gray-900">Payment Options</a></li>
            <li><a href="/returns" className="hover:text-gray-900">Returns</a></li>
            <li><a href="/privacy-policies" className="hover:text-gray-900">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-lg font-semibold">Newsletter</h2>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-r hover:bg-gray-800"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-4 pr-48 justify-center text-center md:text-left">
        <p className="text-sm">&copy; 2023 Funiro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
