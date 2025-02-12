"use client";
import { useAuth } from "@/context/Auth.Context";
import { IProducts } from "@/types";
import React from "react";

const ProductDetailView: React.FC<IProducts> = ({
  name,
  id,
  description,
  stock,
  price,
  image,
}) => {
  const { userData } = useAuth();

  const handleAddToCart = () => {
    if (!userData?.token) {
      alert("You must be logged in to add to cart");
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productExist = cart.some((item) => item.id === id);
      if(productExist){
        alert("Product already added to cart");
      }else{
        localStorage.setItem("cart", JSON.stringify(
          [...cart,
            { id, name, price, image, stock }]));
            alert("Product added to cart");
            
      }
    }
  };

  return (
    <div className="flex flex-direction-center items-center min-h-screen bg-gray-50">
      <div className="max-5-lg w-50 bg-white border border-gray-200 shadow-md rounded-2xl p-4 flex flex-col md:flex-row transform hover:scale-105 transition duration-300 ease-in-out">
        <img
          className="object-cover w-full max-w-xs h-48 rounded-xl md:w-40 md:h-40"
          src={image}
          alt={`${name} - Product Image`}
        />
        <div className="flex flex-col justify-between p-4">
          <h1 className="mb-3 text-xl font-semibold text-gray-800">{name}</h1>
          <p className="mb-3 text-sm text-gray-500">{description}</p>
          <p className="mb-1 text-sm text-gray-600">Stock: {stock}</p>
          <p className="mb-4 text-lg font-bold text-gray-900">Price: ${price}</p>
          <button
            onClick={handleAddToCart}
            className="btn-primary px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
