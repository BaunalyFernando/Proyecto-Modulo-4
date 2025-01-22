import React from "react";
import productsToPreLoad from "@/helpers/productsToPreLoad";
import Link from "next/link";

export const ProductDetails: React.FC<{ params: { productId: string } }> = async ({ params }) => {
  const { productId } = await params;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {productsToPreLoad.map(
        (product) =>
          product.id === Number(productId) && (
            <div
              key={product.id}
              className="flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow-lg bg-white max-w-xs transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-30 h-40 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="flex flex-col items-center mt-4">
                <h2 className="text-xl font-semibold text-gray-800 text-center">{product.name}</h2>
                <p className="text-base text-gray-600 text-center mt-2">{product.description}</p>
                <p className="text-lg font-bold text-green-600 mt-2">${product.price}</p>
                <p className="text-sm text-gray-500 mt-1">{product.stock} available</p>
                <p className="text-sm text-gray-500 mt-1">Category: {product.categoryId}</p>
                <Link href={`/cart`}>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Buy
                  </button>
                </Link>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ProductDetails;
