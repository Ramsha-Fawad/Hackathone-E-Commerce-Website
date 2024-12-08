import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-8 px-8">
        <div className="flex items-center  space-x-2">
            <img src="/logo.jpg" alt="Meubel House Logo" />
          <span className="text-3xl font-bold text-black">Furniro</span>
        </div>
        <nav className="hidden md:flex space-x-20">
          <a href="#home" className="text-black hover:text-yellow-600 transition">Home</a>
          <a href="#shop" className="text-black hover:text-yellow-600 transition">Shop</a>
          <a href="#about" className="text-black hover:text-yellow-600 transition">About</a>
          <a href="#contact" className="text-black hover:text-yellow-600 transition">Contact</a>
        </nav>
        <div className="flex items-center justify-evenly space-x-16">
          <button className="hover:text-yellow-600">
            <img src="/user-icon.jpg" alt="User Search" />
          </button>
          <button className= "hover:text-yellow-600">
          <img src="/search-icon.jpg" alt="Search Icon" />
          </button>
          <button className="hover:text-yellow-600">
           <img src="/heart-icon.jpg" alt="Heart Icon" />
          </button>
          <button className="hover:text-yellow-600">
           <img src="/cart-icon.jpg" alt="Cart Icon" />
          </button>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header
