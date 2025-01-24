"use client";
import { useAuth } from '@/context/Auth.Context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const NavBar = () => {
  const {userData, setUserData} = useAuth();

  const router = useRouter();

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("userSession");    
    router.push("/");
    alert("You have been logged out successfully");
}

  return (
    <div className="bg-white shadow-sm flex items-center p-4">
      <div className="flex items-center">
        <img 
          src="/applelogoo.png" 
          alt="Logo" 
          className="w-6 sm:w-6 md:w-6 lg:w-8 xl:w-10 2xl:w-12 mr-4" 
        />
      </div>

      <div className="flex-1 flex justify-around items-center">
        <Link href="/" className="text-black hover:text-gray-600">
          Home
        </Link>
        
        {
          userData?.token ? (
            <>
            <Link href="/cart" className="text-black hover:text-gray-600">
                Cart
              </Link>

              <Link href="/dashboard" className="text-black hover:text-gray-600">
                <button className="btn-primary">
                  Dashboard
                </button>
              </Link>
              <button onClick={handleLogout} className="btn-primary">
                Logout
              </button>

            </>
          ) : (
            <Link href="/Login" className="text-black hover:text-gray-600">
              <button className="btn-primary">
                Login
              </button>
            </Link>
          )
        }
        
        
      </div>
    </div>
  );
};

export default NavBar;
