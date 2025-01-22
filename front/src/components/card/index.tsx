import Link from "next/link";
import { IProducts } from "../../types";
import React from "react";

export const Card: React.FC<IProducts> = ({ id, description, name, price, stock, image, categoryId }) => {
  return (
    <div className="flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow-lg bg-white max-w-xs m-4 transform transition-transform duration-300 hover:scale-105">
      <div className="w-30 h-40 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800 text-center">{name}</h2>
        <p className="text-base text-gray-600 text-center mt-2">{description}</p>
        <p className="text-lg font-bold text-green-600 mt-2">${price}</p>
        <p className="text-sm text-gray-500 mt-1">{stock} available</p>
        <p className="text-sm text-gray-500 mt-1">Category: {categoryId}</p>
        <Link href={`/products/${id}`}>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors">
            View details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
