import Link from 'next/link';
import React from 'react';

export const NavBar = () => {
  return (
    <div className="bg-white shadow-sm flex items-center p-4">
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src="/applelogoo.png" 
          alt="Logo" 
          className="w-6 sm:w-6 md:w-6 lg:w-8 xl:w-10 2xl:w-12 mr-4" 
        />
      </div>

      {/* Links de navegación */}
      <div className="flex-1 flex justify-around items-center">
        <Link href="/" className="text-black hover:text-gray-600">
          Home
        </Link>
        <Link href="/cart" className="text-black hover:text-gray-600">
          Cart
        </Link>
        <Link href="/dashboard" className="text-black hover:text-gray-600">
          Dashboard
        </Link>
        <Link href="/Login" className="text-black hover:text-gray-600">
          <button className="btn-primary">
            Login
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default NavBar;
