"use client";
import { useAuth } from '@/context/Auth.Context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import { LogoutButton } from './LogoutButton';

export const NavBar = () => {
  const {userData, setUserData} = useAuth();

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

            <Link href="/productByCategory/2" className="text-black hover:text-gray-600">
                MacBook
            </Link>

            <Link href="/productByCategory/3" className="text-black hover:text-gray-600">
                iPad
            </Link>

            <Link href="/productByCategory/4" className="text-black hover:text-gray-600">
                Apple Watch
            </Link>

            <Link href="/productByCategory/5" className="text-black hover:text-gray-600">
                Airpods
            </Link>

            <Link href="/productByCategory/6" className="text-black hover:text-gray-600">
                Homepod
            </Link>

              <Link href="/dashboard" className="text-black hover:text-gray-600">
                <button className="btn-primary">
                  Dashboard
                </button>
              </Link>
              <LogoutButton/>

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
